---
tags:
  - OOP1-quiz
---

# Quiz Properties

Här kommer några frågor på temat Properties i C#

<div class="quiz-group" id="quiz-set-properties">

  <!-- Q1: enkel flervals (vad är property) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad är en property i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio"> En metod som alltid måste ta parametrar</label>
      <label class="quiz-option"><input type="radio"> Ett privat fält som aldrig kan nås</label>
      <label class="quiz-option"><input type="radio" data-correct> En medlem som kapslar in fält och exponerar dem via <code>get</code>/<code>set</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (auto-implementerade properties) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande är giltiga auto-implementerade properties?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> public string Name { get; set; }</label>
      <label class="quiz-option"><input type="checkbox"> public string Name;</label>
      <label class="quiz-option"><input type="checkbox" data-correct> public int Age { get; private set; }</label>
      <label class="quiz-option"><input type="checkbox"> private bool IsOk { }</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: enkel flervals (bara get) -->
  <div class="quiz" data-quiz-id="q3" data-points="1">
    <p><strong>3) Vad kallas en property med endast <code>get</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="radio" data-correct> Read-only property</label>
      <label class="quiz-option"><input type="radio"> Write-only property</label>
      <label class="quiz-option"><input type="radio"> Auto-property</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: enkel flervals (bara set) -->
  <div class="quiz" data-quiz-id="q4" data-points="1">
    <p><strong>4) Vad kallas en property med endast <code>set</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="radio"> Read-only property</label>
      <label class="quiz-option"><input type="radio" data-correct> Write-only property</label>
      <label class="quiz-option"><input type="radio"> Static property</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: fyll i inline (syntax för auto-property) -->
  <div class="quiz" data-quiz-id="q5" data-points="1" data-pattern="^\s*public\s+int\s+Score\s*\{\s*get;\s*set;\s*\}\s*$">
    <p><strong>5) Skriv en property för <code>Score</code> (int) med både get och set (auto-implementerad).</strong></p>
    <pre><code class="language-csharp"><input class="quiz-inline-input" data-answer="public int Score { get; set; }"></code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: flera rätt (syftet med properties) -->
  <div class="quiz" data-quiz-id="q6" data-points="2">
    <p><strong>6) Vilka är syften med att använda properties i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q6">
      <label class="quiz-option"><input type="checkbox" data-correct> Kapsla in fält och kontrollera åtkomst</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Möjlighet att lägga till validering/logik vid läsning/skrivning</label>
      <label class="quiz-option"><input type="checkbox"> Göra koden långsammare och mer komplicerad</label>
      <!-- <label class="quiz-option"><input type="checkbox" data-correct> Göra koden mer flexibel och underhållbar</label> -->
      <label class="quiz-option"><input type="checkbox" > Att göra livet surt för nybörjare</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-properties">Rätta alla</button>
<p class="quiz-result" id="quiz-set-properties-result" hidden></p>
