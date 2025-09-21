# C#-quiz – demo

> Tre frågor i en grupp, med en gemensam **Rätta alla**-knapp.

<div class="quiz-group" id="quiz-set-1">

  <!-- Q1: enkel flervals (ett rätt) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vilken typ har uttrycket <code>5 + 3</code> i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio" value="a"> string</label>
      <label class="quiz-option"><input type="radio" value="b" data-correct> int</label>
      <label class="quiz-option"><input type="radio" value="c"> double</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (två av tre) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande är C#-keywords?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> return</label>
      <label class="quiz-option"><input type="checkbox" data-correct> yield</label>
      <label class="quiz-option"><input type="checkbox"> print</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: fyll i koden inline (rätt = "Hej, världen!") -->
  <div class="quiz" data-quiz-id="q3" data-points="1" data-pattern="^\s*&quot;Hej, världen!&quot;\s*$">
    <p><strong>3) Fyll i argumentet så att programmet skriver ut <code>Hej, världen!</code>.</strong></p>
    <pre><code class="language-csharp">Console.WriteLine(<input class="quiz-inline-input" data-answer="&quot;Hej, världen!&quot;">);</code></pre>
    <details class="quiz-solution"><summary>Visa lösning</summary>
      <code>"Hej, världen!"</code>
    </details>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-1">Rätta alla</button>
<p class="quiz-result" id="quiz-set-1-result" hidden></p>
