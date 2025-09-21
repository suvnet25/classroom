// docs/assets/quiz/quiz.js
(function () {
  const KEY = "quiz-progress-v6"; // bumpad nyckel

  function save(id, ok) {
    try {
      const db = JSON.parse(localStorage.getItem(KEY) || "{}");
      db[id] = { ok, ts: Date.now() };
      localStorage.setItem(KEY, JSON.stringify(db));
    } catch {}
  }
  function load(id) {
    try {
      const db = JSON.parse(localStorage.getItem(KEY) || "{}");
      return db[id];
    } catch { return null; }
  }

  function markResult($quiz, ok) {
    const fb = $quiz.querySelector(".quiz-feedback");
    if (fb) {
      fb.hidden = false;
      fb.textContent = ok ? "Rätt!" : "Fel, försök igen!";
    }
    $quiz.classList.toggle("quiz-correct", ok);
    $quiz.classList.toggle("quiz-wrong", !ok);
    const id = $quiz.dataset.quizId;
    if (id) save(id, ok);
    return ok ? (Number($quiz.dataset.points || 1)) : 0;
  }

  function isMulti($quiz) {
    return $quiz.querySelectorAll('input[type="checkbox"]').length > 0;
  }

  function checkChoice($quiz) {
    if (isMulti($quiz)) {
      const boxes = Array.from($quiz.querySelectorAll('input[type="checkbox"]'));
      const ok = boxes.every(b => b.hasAttribute("data-correct") === b.checked);
      return markResult($quiz, ok);
    } else {
      const sel = $quiz.querySelector('input[type="radio"]:checked');
      const ok = !!sel && sel.hasAttribute("data-correct");
      return markResult($quiz, ok);
    }
  }

  function checkInput($quiz) {
    // Stöd både vanligt input och inline input i kod
    const input = $quiz.querySelector(".quiz-input, .quiz-inline-input");
    const val = (input?.value || "").trim();

    // primärt: data-answer på själva inputen (inline-fält)
    const directAnswers = input?.dataset.answer || "";
    const answersStr = directAnswers || $quiz.dataset.answers;
    const patStr = $quiz.dataset.pattern;

    let ok = false;
    if (answersStr) {
      const answers = answersStr.split(";").map(s => s.trim());
      ok = answers.some(a => a === val);
    } else if (patStr) {
      const re = new RegExp(patStr);
      ok = re.test(val);
    }

    return markResult($quiz, ok);
  }

  function checkOne($quiz) {
    if ($quiz.querySelector(".quiz-input, .quiz-inline-input")) return checkInput($quiz);
    return checkChoice($quiz);
  }

  function uniqueRadioNames(container, pageKey) {
    container.querySelectorAll(".quiz").forEach(($quiz) => {
      const id = $quiz.dataset.quizId || Math.random().toString(36).slice(2);
      $quiz.dataset.quizId = id;
      $quiz.querySelectorAll('input[type="radio"]').forEach((inp) => {
        if (!inp.name) inp.name = `${id}-${pageKey}`;
      });
      const st = load(id);
      if (st?.ok) {
        $quiz.classList.add("quiz-correct");
        const fb = $quiz.querySelector(".quiz-feedback");
        if (fb) { fb.hidden = false; fb.textContent = "✅ Gjord"; }
      }
    });
  }

  function checkGroup($group) {
    const quizzes = Array.from($group.querySelectorAll(".quiz"));
    let score = 0;
    let max = 0;
    quizzes.forEach(($q) => {
      const pts = Number($q.dataset.points || 1);
      max += pts;
      score += checkOne($q);
    });
    const res = document.querySelector($group.dataset.resultTarget) ||
                $group.parentElement.querySelector(".quiz-result");
    if (res) {
      res.hidden = false;
      res.textContent = `Poäng: ${score} / ${max}`;
    }
  }

  function init() {
    const pageKey = location.pathname + location.hash;

    document.querySelectorAll(".quiz-group").forEach(group => {
      uniqueRadioNames(group, pageKey);
      const btn =
        document.querySelector(`.quiz-check-all[data-target="#${group.id}"]`) ||
        group.parentElement.querySelector(".quiz-check-all");
      if (btn) {
        const resEl = document.querySelector(`#${group.id}-result`);
        if (resEl) group.dataset.resultTarget = `#${group.id}-result`;
        btn.addEventListener("click", () => checkGroup(group));
      }
    });
  }

  // MkDocs Material SPA-hook
  if (typeof window.document$ !== "undefined") {
    window.document$.subscribe(init);
  } else {
    window.addEventListener("DOMContentLoaded", init);
  }
})();
