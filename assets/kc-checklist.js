(function () {
  function slugify(s) {
    return (s || "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\p{L}\p{N}\-]/gu, ""); // behåll bokstäver/siffror (äöå ok)
  }

  function key(scope, pagePath, id) {
    return `kc:${scope}:${pagePath}:${id}`;
  }

  function pagePath() {
    return location.pathname.replace(/\/$/, "");
  }

  function setGroupState(groupLi) {
    const childCbs = Array.from(groupLi.querySelectorAll(":scope > ul input.kc-item"));
    const groupCb = groupLi.querySelector(":scope > .kc-groupline input.kc-group");

    if (!groupCb) return;

    const total = childCbs.length;
    const checked = childCbs.filter(x => x.checked).length;

    groupCb.checked = total > 0 && checked === total;
    groupCb.indeterminate = checked > 0 && checked < total;

    groupLi.classList.toggle("kc-complete", total > 0 && checked === total);
  }

  function updateProgress(root) {
    const allItems = Array.from(root.querySelectorAll("input.kc-item"));
    const total = allItems.length;
    const checked = allItems.filter(x => x.checked).length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;

    const progressBar = root.querySelector(".kc-progress-bar");
    if (progressBar) {
      const fill = progressBar.querySelector(".kc-progress-fill");
      const text = progressBar.querySelector(".kc-progress-text");
      if (fill) fill.style.width = percentage + "%";
      if (text) text.textContent = `${checked} / ${total} (${percentage}%)`;
    }
  }

  function ensureLineWrapper(li, cls) {
    // Skapa en wrapper runt "första raden" i li (text + ev länkar) så vi kan lägga checkbox före
    // MkDocs renderar ofta list item content som textnoder + <a> osv direkt i <li>.
    // Vi flyttar ut allt fram till ev. första <ul> (underlista) till en <div>.
    let ul = li.querySelector(":scope > ul");
    const wrapper = document.createElement("div");
    wrapper.className = cls;

    // Flytta alla noder före under-<ul>
    const nodesToMove = [];
    for (const node of Array.from(li.childNodes)) {
      if (ul && node === ul) break;
      nodesToMove.push(node);
    }
    nodesToMove.forEach(n => wrapper.appendChild(n));
    li.insertBefore(wrapper, ul || null);

    return wrapper;
  }

  function initAuto() {
    const root = document.querySelector(".kc-auto[data-kc-scope]");
    if (!root) return;
    
    // Prevent double initialization
    if (root.hasAttribute("data-kc-initialized")) return;
    root.setAttribute("data-kc-initialized", "true");

    const scope = root.getAttribute("data-kc-scope") || "default";
    const p = pagePath();

    // Create progress bar
    const progressBar = document.createElement("div");
    progressBar.className = "kc-progress-bar";
    progressBar.innerHTML = `
      <div class="kc-progress-track">
        <div class="kc-progress-fill"></div>
      </div>
      <div class="kc-progress-text">0 / 0 (0%)</div>
    `;
    root.insertBefore(progressBar, root.firstChild);

    // Förväntad struktur: <div> innehåller en <ul> med top-level <li>, varje <li> kan ha en under-<ul>.
    const topUl = root.querySelector(":scope > ul");
    if (!topUl) return;

    // 1) För varje grupp (top-level li): gör en group-checkbox + gör varje child-li till item-checkbox
    const groupLis = Array.from(topUl.querySelectorAll(":scope > li"));

    groupLis.forEach((groupLi, groupIndex) => {
      // Wrapper för gruppens rad
      const groupLine = ensureLineWrapper(groupLi, "kc-groupline");

      const groupText = groupLine.textContent || `group-${groupIndex}`;
      const groupId = `group:${slugify(groupText) || groupIndex}`;

      // Skapa group checkbox
      const groupCb = document.createElement("input");
      groupCb.type = "checkbox";
      groupCb.className = "kc-group";
      groupCb.dataset.kcId = groupId;

      // Lägg checkbox först i wrappern
      groupLine.insertBefore(groupCb, groupLine.firstChild);

      // Child items
      const childUl = groupLi.querySelector(":scope > ul");
      if (childUl) {
        const itemLis = Array.from(childUl.querySelectorAll(":scope > li"));
        itemLis.forEach((itemLi, itemIndex) => {
          const itemLine = ensureLineWrapper(itemLi, "kc-itemline");
          const itemText = itemLine.textContent || `item-${itemIndex}`;
          const itemId = `${groupId}:item:${slugify(itemText) || itemIndex}`;

          const itemCb = document.createElement("input");
          itemCb.type = "checkbox";
          itemCb.className = "kc-item";
          itemCb.dataset.kcId = itemId;

          itemLine.insertBefore(itemCb, itemLine.firstChild);
        });
      }

      // CSS class för grupp-li
      groupLi.classList.add("kc-group");
    });

    // 2) Ladda från localStorage
    const allCbs = Array.from(root.querySelectorAll("input[type=checkbox][data-kc-id]"));
    allCbs.forEach(cb => {
      const id = cb.dataset.kcId;
      const saved = localStorage.getItem(key(scope, p, id));
      if (saved === "1") cb.checked = true;
      if (saved === "0") cb.checked = false;
    });

    // 3) Spara vid change på item-checkboxar
    root.addEventListener("change", (e) => {
      const t = e.target;
      if (!(t instanceof HTMLInputElement)) return;
      if (t.type !== "checkbox") return;
      if (!t.classList.contains("kc-item")) return;

      const id = t.dataset.kcId;
      if (id) localStorage.setItem(key(scope, p, id), t.checked ? "1" : "0");

      // Uppdatera alla gruppers state
      Array.from(root.querySelectorAll(".kc-group")).forEach(li => setGroupState(li.closest("li")));
      
      // Uppdatera progress bar
      updateProgress(root);
    });

    // 4) Init state
    groupLis.forEach(li => setGroupState(li));
    updateProgress(root);
  }

  // Init vid första load + Material instant navigation
  document.addEventListener("DOMContentLoaded", initAuto);
  if (window.document$) window.document$.subscribe(initAuto);
})();
