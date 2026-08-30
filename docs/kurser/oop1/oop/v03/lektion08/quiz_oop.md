---
tags:
  - OOP1-quiz
---

# Quiz OOP Design

Här kommer några frågor på temat OOP-design: objekt, relationer/ansvar, attribut och metoder

<div class="quiz-group" id="quiz-set-oop-08">

  <!-- Q1: enkel flervals (ett rätt) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vilket steg kommer tidigast i processen enligt uppgiften?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio"> Rita klassdiagram</label>
      <label class="quiz-option"><input type="radio" data-correct> Identifiera objekt (t.ex. med substantiv-metoden)</label>
      <label class="quiz-option"><input type="radio"> Lista metoder på varje klass</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (domänobjekt i Fia med Knuff) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande är rimliga objekt i en digital version av Fia med Knuff?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> Spelare</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Pjäs</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Tärning</label>
      <label class="quiz-option"><input type="checkbox"> Skärmupplösning</label>
      <label class="quiz-option"><input type="checkbox"> Muspekare</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: enkel flervals (relation/kardinalitet) -->
  <div class="quiz" data-quiz-id="q3" data-points="1">
    <p><strong>3) Vilken relation passar bäst mellan <code>Spelare</code> och <code>Pjäs</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="radio"> 1-till-1 (en spelare har exakt en pjäs)</label>
      <label class="quiz-option"><input type="radio" data-correct> 1-till-många (en spelare har flera pjäser)</label>
      <label class="quiz-option"><input type="radio"> många-till-många (spelare och pjäser delar fritt)</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: flera rätt (ansvar på objekt) -->
  <div class="quiz" data-quiz-id="q4" data-points="2">
    <p><strong>4) Vilka ansvar är rimliga för objektet <code>Tärning</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="checkbox" data-correct> Slumpa ett värde 1–6</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Minnas senaste kastade värde</label>
      <label class="quiz-option"><input type="checkbox"> Rita hela spelbrädet</label>
      <label class="quiz-option"><input type="checkbox"> Flytta pjäser enligt regler</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: fyll i text inline (begrepp: attribut) -->
  <div class="quiz" data-quiz-id="q5" data-points="1" data-pattern="^\s*(attribut|egenskaper)\s*$">
    <p><strong>5) I klassdiagrammet: vad kallas objektens egenskaper (t.ex. färg, position)?</strong></p>
    <pre><code>Begrepp: <input class="quiz-inline-input" data-answer="attribut"></code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: fyll i text inline (metodnamn) -->
  <div class="quiz" data-quiz-id="q6" data-points="1" data-pattern="^\s*(Flytta|Move)\s*$">
    <p><strong>6) Föreslå ett kort metodnamn på <code>Pjäs</code> för att byta position enligt reglerna.</strong></p>
    <pre><code class="language-plaintext">Pjäs.<input class="quiz-inline-input" data-answer="Flytta">(...)</code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q7: flera rätt (gränsdragning / systemgräns) -->
  <div class="quiz" data-quiz-id="q7" data-points="2">
    <p><strong>7) Vad bör ligga innanför systemgränsen för spelet (dvs. modelleras i vår domän)?</strong></p>
    <div class="quiz-options" role="group" aria-label="q7">
      <label class="quiz-option"><input type="checkbox" data-correct> Regler för hur pjäser går i mål</label>
      <label class="quiz-option"><input type="checkbox"> Operativsystemets fönsterhantering</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Turordning mellan spelare</label>
      <label class="quiz-option"><input type="checkbox"> Användarens skrivbordstema</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q8: enkel flervals (metoder vs attribut) -->
  <div class="quiz" data-quiz-id="q8" data-points="1">
    <p><strong>8) Vad passar bäst som <em>metod</em> på objektet <code>Spel</code> (snarare än attribut)?</strong></p>
    <div class="quiz-options" role="group" aria-label="q8">
      <label class="quiz-option"><input type="radio"> Antal spelare</label>
      <label class="quiz-option"><input type="radio"> Lista av pjäser</label>
      <label class="quiz-option"><input type="radio" data-correct> StartaNyOmgång()</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-oop-08">Rätta alla</button>
<p class="quiz-result" id="quiz-set-oop-08-result" hidden></p>
