(function () {
  function initProgressBar() {
    console.log("Progress Weekbar script running...");

    const weekProgressMeta = document.querySelector('meta[name="week-progress"]');
    if (!weekProgressMeta) return;

    const startStr = document.querySelector('meta[name="start-date"]')?.content;
    const totalWeeks = Number(document.querySelector('meta[name="total-weeks"]')?.content || 0);

    if (!startStr || !totalWeeks) return;

    function parseISODateOnly(s) {
      const [y, m, d] = s.split("-").map(Number);
      return new Date(y, m - 1, d, 12, 0, 0, 0);
    }
    function clamp(n, min, max) {
      return Math.max(min, Math.min(max, n));
    }

    const start = parseISODateOnly(startStr);
    const now = new Date();

    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSinceStart = Math.floor((now - start) / msPerDay);

    // Before the course starts, show 0% progress and no completed weeks.
    const hasStarted = now >= start;
    const completedWeeks = hasStarted
      ? clamp(Math.floor(daysSinceStart / 7), 0, totalWeeks)
      : 0;
    const currentWeek = hasStarted
      ? clamp(Math.floor(daysSinceStart / 7) + 1, 1, totalWeeks)
      : 0;

    const percent = hasStarted
      ? clamp((completedWeeks / totalWeeks) * 100, 0, 100)
      : 0;

    // Lägg baren överst i innehållet
    const content =
      document.querySelector(".md-content__inner") ||
      document.querySelector("main");
    if (!content) return;

    // Ta bort tidigare bar först när vi vet att sidan verkligen ska ha en veckobar.
    const existingBar = document.getElementById("week-progress-bar");
    if (existingBar) existingBar.remove();

    const host = document.createElement("div");
    host.id = "week-progress-bar";

    // Generate week markers
    let weekMarkersHTML = '';
    for (let week = 1; week <= totalWeeks; week++) {
      const position = ((week - 1) / (totalWeeks - 1)) * 100; // First at 0%, last at 100%
      let markerClass = 'week-marker';
      if (week < currentWeek) markerClass += ' completed';
      if (week === currentWeek) markerClass += ' current';
      
      weekMarkersHTML += `<div class="${markerClass}" style="left:${position}%">${week}</div>`;
    }

    host.innerHTML = `
      <div class="progress-title">${hasStarted ? `Vecka ${currentWeek} av ${totalWeeks} • ${Math.round(percent)}% klart` : `Vecka 0 av ${totalWeeks} • 0% klart`}</div>
      <div class="bar-container">
        <div class="fill" style="width:${percent}%"></div>
        <div class="week-markers">${weekMarkersHTML}</div>
      </div>
    `;

    content.prepend(host);
  }

  // Kör vid initial laddning
  document.addEventListener("DOMContentLoaded", initProgressBar);

  // Kör vid MkDocs Material instant navigation
  if (window.document$) window.document$.subscribe(initProgressBar);
})();
