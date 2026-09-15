---
tags:
  - OOP1-quiz
---

# Quiz GIT

Här kommer några frågor på temat Git & GitHub (från Övning 09)

<div class="quiz-group" id="quiz-set-git-09">

  <!-- Q1: enkel flervals (git init) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad gör <code>git init</code> i den aktuella mappen?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio" data-correct> Skapar ett nytt, tomt Git-repo (mappen blir ett repo)</label>
      <label class="quiz-option"><input type="radio"> Installerar Git i operativsystemet</label>
      <label class="quiz-option"><input type="radio"> Klonar ett repo från GitHub</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (add vs commit) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vad stämmer om <code>git add</code> respektive <code>git commit</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git add</code> lägger filer i staging area</label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git commit</code> sparar en version lokalt i historiken</label>
      <label class="quiz-option"><input type="checkbox"> <code>git add</code> skickar upp filer till GitHub</label>
      <label class="quiz-option"><input type="checkbox"> <code>git commit</code> pushar automatiskt till GitHub</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: enkel flervals (-a flagga) -->
  <div class="quiz" data-quiz-id="q3" data-points="1">
    <p><strong>3) Vad gör flaggan <code>-a</code> i <code>git commit -am "msg"</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="radio" data-correct> Stage:ar alla spårade filer som ändrats, och committar dem</label>
      <label class="quiz-option"><input type="radio"> Lägger även till otrackade (helt nya) filer</label>
      <label class="quiz-option"><input type="radio"> Skapar en ny branch automatiskt</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: flera rätt (log/status/diff) -->
  <div class="quiz" data-quiz-id="q4" data-points="2">
    <p><strong>4) Matcha kommando med beskrivning (välj alla som stämmer).</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git log --oneline</code>: visar commits historiskt, en per rad</label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git status</code>: visar ändringars status och staging area</label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git diff</code>: visar skillnader i filer som inte är committade</label>
      <label class="quiz-option"><input type="checkbox"> <code>git status</code>: visar enbart commit-meddelanden</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: fyll i inline (restore) -->
  <div class="quiz" data-quiz-id="q5" data-points="1" data-pattern="^\s*git\s+restore\s+hej\.txt\s*$">
    <p><strong>5) Skriv kommandot som återställer <code>hej.txt</code> till senaste commit (innan den är committad).</strong></p>
    <pre><code class="language-bash"><input class="quiz-inline-input" data-answer="git restore hej.txt"></code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: enkel flervals (skapa & byta branch) -->
  <div class="quiz" data-quiz-id="q6" data-points="1">
    <p><strong>6) Vilka kommandon skapar en branch <code>nya-grejjer</code> och byter till den?</strong></p>
    <div class="quiz-options" role="group" aria-label="q6">
      <label class="quiz-option"><input type="radio" data-correct> <code>git branch nya-grejjer</code> och sedan <code>git switch nya-grejjer</code></label>
      <label class="quiz-option"><input type="radio"> <code>git init nya-grejjer</code> och sedan <code>git open nya-grejjer</code></label>
      <label class="quiz-option"><input type="radio"> <code>git make nya-grejjer</code> och sedan <code>git checkout .</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q7: enkel flervals (merge) -->
  <div class="quiz" data-quiz-id="q7" data-points="1">
    <p><strong>7) Du står på <code>main</code> och vill ta in ändringar från <code>nya-grejjer</code>. Vad kör du?</strong></p>
    <div class="quiz-options" role="group" aria-label="q7">
      <label class="quiz-option"><input type="radio"> <code>git switch nya-grejjer</code></label>
      <label class="quiz-option"><input type="radio" data-correct> <code>git merge nya-grejjer</code></label>
      <label class="quiz-option"><input type="radio"> <code>git pull nya-grejjer</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q8: flera rätt (konflikter) -->
  <div class="quiz" data-quiz-id="q8" data-points="2">
    <p><strong>8) Vad stämmer om merge-konflikter?</strong></p>
    <div class="quiz-options" role="group" aria-label="q8">
      <label class="quiz-option"><input type="checkbox" data-correct> Uppstår när samma rader ändrats olika i två brancher</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Git markerar konflikten i filen med speciella markörer</label>
      <label class="quiz-option"><input type="checkbox"> Går alltid över att lösa med <code>git restore</code></label>
      <label class="quiz-option"><input type="checkbox"> Löses bara genom att radera filen</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q10: flera rätt (remote & push/pull/fetch) -->
  <div class="quiz" data-quiz-id="q10" data-points="2">
    <p><strong>9) Vilka påståenden stämmer om remote och synk?</strong></p>
    <div class="quiz-options" role="group" aria-label="q10">
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git remote add origin &lt;URL&gt;</code> kopplar ett fjärr-repo</label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git push</code> skickar upp lokala commits till fjärr-repot</label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>git pull</code> hämtar och mergar från fjärr till lokal branch</label>
      <label class="quiz-option"><input type="checkbox"> <code>git commit</code> laddar upp ändringar till GitHub</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q11: enkel flervals (push -u) -->
  <div class="quiz" data-quiz-id="q11" data-points="1">
    <p><strong>10) Vad gör flaggan <code>-u</code> i <code>git push -u origin main</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q11">
      <label class="quiz-option"><input type="radio" data-correct> Sätter upstream (spårning) mot <code>origin/main</code> för framtida push/pull</label>
      <label class="quiz-option"><input type="radio"> Uppdaterar Git till senaste version</label>
      <label class="quiz-option"><input type="radio"> Skapar en tagg på senaste commit</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q13: enkel flervals (fetch vs pull) -->
  <div class="quiz" data-quiz-id="q13" data-points="1">
    <p><strong>11) Vad är skillnaden mellan <code>git fetch</code> och <code>git pull</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q13">
      <label class="quiz-option"><input type="radio" data-correct> <code>fetch</code> hämtar utan att merga; <code>pull</code> hämtar och merga/uppdaterar din branch</label>
      <label class="quiz-option"><input type="radio"> <code>fetch</code> pushar, <code>pull</code> committar</label>
      <label class="quiz-option"><input type="radio"> Ingen skillnad, de gör samma sak</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q14: flera rätt (GitHub Classroom & .gitignore) -->
  <div class="quiz" data-quiz-id="q14" data-points="2">
    <p><strong>12) Vad är bra praxis när du startar ett C#-projekt i ett Classroom-repo?</strong></p>
    <div class="quiz-options" role="group" aria-label="q14">
      <label class="quiz-option"><input type="checkbox" data-correct> Skapa <code>.gitignore</code> för .NET (t.ex. <code>dotnet new gitignore</code>)</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Commita tidigt (t.ex. direkt efter <code>dotnet new console</code>)</label>
      <label class="quiz-option"><input type="checkbox"> Ladda upp <code>bin/</code> och <code>obj/</code> till GitHub</label>
      <label class="quiz-option"><input type="checkbox"> Hoppa över commit-meddelanden för snabbhet</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-git-09">Rätta alla</button>
<p class="quiz-result" id="quiz-set-git-09-result" hidden></p>
