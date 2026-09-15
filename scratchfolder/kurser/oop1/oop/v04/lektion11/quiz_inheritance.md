---
tags:
  - OOP1-quiz
---

# Quiz Arv

Här kommer några frågor på temat Arv i C# (utan abstrakta klasser)

<div class="quiz-group" id="quiz-set-inheritance">

  <!-- Q1: enkel flervals (syfte) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad är syftet med arv i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio"> Att tillåta flera basklasser per klass</label>
      <label class="quiz-option"><input type="radio"> Att göra alla fält tillgängliga i alla klasser</label>
      <label class="quiz-option"><input type="radio" data-correct> Återanvända kod genom att låta en klass ärva egenskaper/beteenden från en basklass</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (is-a-relation) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande beskriver en rimlig <em>is-a</em>-relation för arv?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> <code>Hund</code> är ett <code>Djur</code></label>
      <label class="quiz-option"><input type="checkbox"> <code>Motor</code> är en <code>Bil</code></label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>Rektangel</code> är en <code>Form</code></label>
      <label class="quiz-option"><input type="checkbox"> <code>Adressbok</code> är en <code>Kontakt</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: fyll i inline (syntax arv) -->
  <div class="quiz" data-quiz-id="q3" data-points="1" data-pattern="^\s*class\s+Dog\s*:\s*Animal\s*$">
    <p><strong>3) Hur skriver du första raden i en klassdeklaration där klassen Dog ärver klassen Animal.</strong></p>
    <pre><code class="language-csharp"><input class="quiz-inline-input" data-answer="class Dog : Animal"></code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: enkel flervals (virtual/override) -->
  <div class="quiz" data-quiz-id="q4" data-points="1">
    <p><strong>4) Hur gör man så att en metod i basklassen kan ersättas i en subklass?</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="radio"> Märk basmetoden med <code>public</code> och subklassens med <code>new</code></label>
      <label class="quiz-option"><input type="radio" data-correct> Märk basmetoden <code>virtual</code> och subklassens metod <code>override</code></label>
      <label class="quiz-option"><input type="radio"> Använd <code>sealed</code> på basmetoden</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: enkel flervals (konstruktorsordning) -->
  <div class="quiz" data-quiz-id="q5" data-points="1">
    <p><strong>5) I vilken ordning körs konstruktorer när ett <code>Dog</code>-objekt skapas som ärver från <code>Animal</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q5">
      <label class="quiz-option"><input type="radio"> Först <code>Dog</code>, sedan <code>Animal</code></label>
      <label class="quiz-option"><input type="radio" data-correct> Först <code>Animal</code>, sedan <code>Dog</code></label>
      <label class="quiz-option"><input type="radio"> Ordningen är slumpmässig</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q7: flera rätt (åtkomst i arv) -->
  <div class="quiz" data-quiz-id="q7" data-points="2">
    <p><strong>7) Vad gäller för <code>protected</code> medlemmar i en basklass?</strong></p>
    <div class="quiz-options" role="group" aria-label="q7">
      <label class="quiz-option"><input type="checkbox" data-correct> De är åtkomliga i basklassen själv</label>
      <label class="quiz-option"><input type="checkbox" data-correct> De är åtkomliga i subklasser</label>
      <label class="quiz-option"><input type="checkbox"> De är åtkomliga från vilken klass som helst</label>
      <label class="quiz-option"><input type="checkbox"> De är endast åtkomliga via instanser utanför hierarkin</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q8: enkel flervals (single inheritance) -->
  <div class="quiz" data-quiz-id="q8" data-points="1">
    <p><strong>8) Vad stämmer om arv för klasser i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q8">
      <label class="quiz-option"><input type="radio"> En klass kan ärva från flera basklasser</label>
      <label class="quiz-option"><input type="radio" data-correct> En klass kan ärva från exakt en basklass</label>
      <label class="quiz-option"><input type="radio"> Arv måste användas</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q10: flera rätt (hiding vs override)
  <div class="quiz" data-quiz-id="q10" data-points="2">
    <p><strong>10) Vad stämmer om att dölja en basmetod med <code>new</code> jämfört med <code>override</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q10">
      <label class="quiz-option"><input type="checkbox" data-correct> <code>override</code> kräver att basmetoden är <code>virtual</code> (eller <code>override</code>)</label>
      <label class="quiz-option"><input type="checkbox" data-correct> <code>new</code> döljer basmetoden baserat på den statiska typen vid anrop</label>
      <label class="quiz-option"><input type="checkbox"> <code>new</code> och <code>override</code> beter sig identiskt vid polymorfi</label>
      <label class="quiz-option"><input type="checkbox"> <code>override</code> kräver att basmetoden är <code>sealed</code></label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div> -->

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-inheritance">Rätta alla</button>
<p class="quiz-result" id="quiz-set-inheritance-result" hidden></p>
