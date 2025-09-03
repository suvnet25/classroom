/* --- Konfiguration --- */
const START_WEEK = 36;  // v.1 motsvarar vecka 36

/* ISO-vecka för ett datum */
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  // Torsdag i aktuell vecka
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  // Årets första vecka
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}

/* Antal ISO-veckor i ett visst år (52 eller 53) */
function weeksInISOYear(year) {
  const dec28 = new Date(Date.UTC(year, 11, 28)); // 28 dec avgör ISO-veckor för året
  return getISOWeek(dec28);
}

/* Hjälp: mappa modulindex (v.X) → ISO-vecka för läsårscykeln */
function moduleToWeek(x, isoWeeks) {
  // v.1 => START_WEEK, v.2 => START_WEEK+1, wrap runt årets veckor
  return ((START_WEEK - 1 + (x - 1)) % isoWeeks) + 1;
}

/* Jämförelse i "akademisk ordning" som börjar på START_WEEK */
function academicIndex(week, isoWeeks) {
  return (week - START_WEEK + isoWeeks) % isoWeeks;
}

/* Kör när sidan är redo (Material för MkDocs byter sidor client-side) */
function colorWeeks() {
  const now = new Date();
  const curYear = now.getFullYear();
  const isoWeeksThisYear = weeksInISOYear(curYear);
  const currentWeek = getISOWeek(now);

  const currentIdx = academicIndex(currentWeek, isoWeeksThisYear);

  const items = document.querySelectorAll('.md-nav__link, .md-nav__title');
  items.forEach(el => {
    const text = (el.textContent || '').trim();
    const m = text.match(/^[vV]\.\s*(\d+)/); // fångar "v. 12", "V. 3" osv
    if (!m) return;

    const x = parseInt(m[1], 10);
    if (Number.isNaN(x)) return;

    const isoWeeks = isoWeeksThisYear; // enkel modell: knyt mot innevarande års ISO-veckor
    const wk = moduleToWeek(x, isoWeeks);
    const idx = academicIndex(wk, isoWeeks);

    el.classList.remove('week-past', 'week-current', 'week-future');
    if (idx < currentIdx) {
      el.classList.add('week-past');
    } else if (idx === currentIdx) {
      el.classList.add('week-current');
    } else {
      el.classList.add('week-future');
    }
  });
}

/* Material för MkDocs triggar händelser när sidan byts */
document.addEventListener('DOMContentLoaded', colorWeeks);
document.addEventListener('navigation', colorWeeks); // funkar i MkDocs Material
