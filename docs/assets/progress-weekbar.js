(function () {
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
  const currentWeek =
    clamp(Math.floor(daysSinceStart / 7) + 1, 1, totalWeeks);

  const percent = clamp((currentWeek / totalWeeks) * 100, 0, 100);

  // Lägg baren överst i innehållet
  const content =
    document.querySelector(".md-content__inner") ||
    document.querySelector("main");

  const host = document.createElement("div");
  host.id = "week-progress-bar";

  // Generate week markers
  let weekMarkersHTML = '';
  for (let week = 1; week <= totalWeeks; week++) {
    const position = ((week - 0.5) / totalWeeks) * 100; // Center each marker in its week segment
    let markerClass = 'week-marker';
    if (week < currentWeek) markerClass += ' completed';
    if (week === currentWeek) markerClass += ' current';
    
    weekMarkersHTML += `<div class="${markerClass}" style="left:${position}%">${week}</div>`;
  }

  host.innerHTML = `
    <div class="bar-container">
      <div class="fill" style="width:${percent}%"></div>
      <div class="week-markers">${weekMarkersHTML}</div>
    </div>
    <div class="label">Vecka ${currentWeek} av ${totalWeeks} • ${Math.round(percent)}% klart</div>
  `;

  content.prepend(host);
})();
