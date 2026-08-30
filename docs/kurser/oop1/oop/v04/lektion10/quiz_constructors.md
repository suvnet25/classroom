---
tags:
  - OOP1-quiz
---

# Quiz Konstruktorer

Här kommer några frågor på temat Konstruktorer i C#

<div class="quiz-group" id="quiz-set-constructors">

  <!-- Q1: enkel flervals (syfte) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad är syftet med en konstruktor?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio" data-correct> Att initiera ett objekt när det skapas</label>
      <label class="quiz-option"><input type="radio"> Att uppdatera olika properties</label>
      <label class="quiz-option"><input type="radio"> Att skriva ut data till konsolen</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (giltiga konstruktorer) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande är giltiga konstruktorer i en klass <code>Person</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> <code>public Person() { } </code></label>
      <label class="quiz-option"><input type="checkbox"> <code>public void Person() { }</code></label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>public Person(string name) { this.Name = name; }</code></label>
      <label class="quiz-option"><input type="checkbox"> <code>private string Person() { return "hej"; }</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: enkel flervals (default konstruktor) -->
  <div class="quiz" data-quiz-id="q3" data-points="1">
    <p><strong>3) Vad menas med en default-konstruktor?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="radio"> En konstruktor som alltid måste ha minst en parameter</label>
      <label class="quiz-option"><input type="radio" data-correct> En parameterlös konstruktor som anropas automatiskt om ingen annan finns</label>
      <label class="quiz-option"><input type="radio"> En konstruktor som skapas i en statisk klass</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

    <!-- Q4: enkel flervals (default konstruktor) -->
  <div class="quiz" data-quiz-id="q4" data-points="1">
    <p><strong>4) Måste du skriva konstruktorer till alla klasser?</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="radio"> Ja</label>
      <label class="quiz-option"><input type="radio" data-correct> Nej</label>
      <label class="quiz-option"><input type="radio"> Det beror på, ibland måste man det</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: enkel flervals (överlagrade konstruktorer) -->
  <div class="quiz" data-quiz-id="q5" data-points="1">
    <p><strong>5) Vad innebär att en klass har överlagrade konstruktorer?</strong></p>
    <div class="quiz-options" role="group" aria-label="q5">
      <label class="quiz-option"><input type="radio"> Att en konstruktor kan anropas flera gånger samtidigt</label>
      <label class="quiz-option"><input type="radio" data-correct> Att det finns flera konstruktorer med olika parametrar</label>
      <label class="quiz-option"><input type="radio"> Att en konstruktor är markerad som <code>override</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: flera rätt (this-keyword) -->
  <div class="quiz" data-quiz-id="q6" data-points="2">
    <p><strong>6) Vad används <code>this</code> till i en konstruktor?</strong></p>
    <div class="quiz-options" role="group" aria-label="q6">
      <label class="quiz-option"><input type="checkbox" data-correct> Att skilja på fält och parameter om de har samma namn</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Att anropa en annan konstruktor i samma klass</label>
      <label class="quiz-option"><input type="checkbox"> Att ta bort objektet ur minnet</label>
      <label class="quiz-option"><input type="checkbox"> Att alltid göra fält publika</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-constructors">Rätta alla</button>
<p class="quiz-result" id="quiz-set-constructors-result" hidden></p>
