---
tags:
  - OOP1-quiz
---

# Quiz Inkapsling

Här kommer några frågor på temat inkapsling och get/set-metoder

<div class="quiz-group" id="quiz-set-inkapsling">

  <!-- Q1: enkel flervals -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad betyder det att ett fält är <code>private</code> i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio"> Att det kan användas överallt i programmet</label>
      <label class="quiz-option"><input type="radio" data-correct> Att det bara kan nås inifrån samma klass</label>
      <label class="quiz-option"><input type="radio"> Att det är oföränderligt</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (get/set ansvar) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vad gör en typisk <code>set</code>-metod?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> Tar emot ett värde som argument</label>
      <label class="quiz-option"><input type="checkbox"> Returnerar värdet till anroparen</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Uppdaterar det privata fältet med värdet</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: flera rätt (argument vs return) -->
  <div class="quiz" data-quiz-id="q3" data-points="2">
    <p><strong>3) Vad stämmer om <code>GetName()</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="checkbox"> Den tar alltid emot ett argument</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Den returnerar ett värde</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Den används för att läsa ut data</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: fyll i inline (argument) -->
  <div class="quiz" data-quiz-id="q4" data-points="1" data-pattern="^\s*\"0701234567\"\s*$">
    <p><strong>4) Fyll i argumentet så att vi anropar <code>SetPhone</code> med telefonnumret 0701234567.</strong></p>
    <pre><code class="language-csharp">person.SetPhone(<input class="quiz-inline-input" data-answer="&quot;0701234567&quot;">);</code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: enkel flervals (validering) -->
  <div class="quiz" data-quiz-id="q5" data-points="1">
    <p><strong>5) Varför är det bra att lägga validering i <code>SetPhone()</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q5">
      <label class="quiz-option"><input type="radio"> För att undvika att någon anropar metoden</label>
      <label class="quiz-option"><input type="radio" data-correct> För att kontrollera att värdet är giltigt innan det sparas</label>
      <label class="quiz-option"><input type="radio"> För att automatiskt skriva ut värdet på skärmen</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: fyll i inline (return) -->
  <div class="quiz" data-quiz-id="q6" data-points="1" data-pattern="^\s*string\s*$">
    <p><strong>6) Vilken returtyp passar bäst för <code>GetName()</code>?</strong></p>
    <pre><code class="language-csharp">public <input class="quiz-inline-input" data-answer="string"> GetName() { ... }</code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-inkapsling">Rätta alla</button>
<p class="quiz-result" id="quiz-set-inkapsling-result" hidden></p>
