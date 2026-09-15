---
tags:
  - OOP1-quiz
---

# Quiz klasser

Här kommer några frågor på temat OOP-grunder och Adressbok-övningen

<div class="quiz-group" id="quiz-set-oop-intro-07">

  <!-- Q1: enkel flervals -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad definierar en <code>klass</code> i OOP?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio"> En specifik instans i minnet</label>
        <laber class="quiz-option"><input type="radio"> Var ett program startar</label>
      <label class="quiz-option"><input type="radio" data-correct> En mall som beskriver data (fält) och beteenden (metoder)</label>
      <label class="quiz-option"><input type="radio"> Enbart en samling variabler utan beteende</label>
        <label class="quiz-option"><input type="radio"> Ett objekts faktiska värden</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (grundprinciper) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande är grundprinciper i OOP?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> Abstraktion</label>
      <label class="quiz-option"><input type="checkbox"> Deklaration</label>
      <label class="quiz-option"><input type="checkbox"> Ansvarsområden</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Inkapsling</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Arv</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Polymorfism</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: enkel flervals (klass vs objekt) -->
  <div class="quiz" data-quiz-id="q3" data-points="1">
    <p><strong>3) Vad kallas det när vi skapar ett objekt från en klass?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="radio"> Abstrahera</label>
      <label class="quiz-option"><input type="radio" data-correct> Instansiera</label>
      <label class="quiz-option"><input type="radio"> Deklarera</label>
      <label class="quiz-option"><input type="radio"> Kalla på</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: flera rätt (adressbok – problem med separata listor) -->
  <div class="quiz" data-quiz-id="q4" data-points="2">
    <p><strong>4) Varför är det problematiskt med två separata listor <code>names</code> och <code>phones</code>?</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="checkbox" data-correct> Svårt att utöka med fler fält (adress, e-post) utan mer spridd kod</label>
      <label class="quiz-option"><input type="checkbox"> Det går inte att skriva ut värden från två listor</label>
      <label class="quiz-option"><input type="checkbox"> Listorna kan inte innehålla strängar, nummer osv</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Risk att indexen hamnar ur synk och kopplingen mellan namn/telefon tappas</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: fyll i inline (keyword new) -->
  <div class="quiz" data-quiz-id="q5" data-points="1" data-pattern="^\s*new\s*$">
    <p><strong>5) Vilket keyword används för att skapa (instansiera) ett nytt objekt?</strong></p>
    <pre><code>Keyword: <input class="quiz-inline-input" data-answer="new"></code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: fyll i inline (instansiera Contact) -->
  <div class="quiz" data-quiz-id="q6" data-points="1" data-pattern="^\s*new\s+Contact\(\)\s*$">
    <p><strong>6) Fyll i uttrycket för att skapa ett nytt <code>Contact</code>-objekt.</strong></p>
    <pre><code class="language-csharp">var c = <input class="quiz-inline-input" data-answer="new Contact()"/>;</code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q7: enkel flervals (var bör listan ligga?) -->
  <div class="quiz" data-quiz-id="q7" data-points="1">
    <p><strong>7) Var är det mest praktiskt att lägga <code>List&lt;Contact&gt; contacts</code> enligt övningen?</strong></p>
    <div class="quiz-options" role="group" aria-label="q7">
      <label class="quiz-option"><input type="radio"> Inuti en lokal metod som bara körs ibland</label>
      <label class="quiz-option"><input type="radio" data-correct> Som fält i klassen (t.ex. <code>Program</code>) så flera metoder kan nå den</label>
      <label class="quiz-option"><input type="radio"> I en tillfällig variabel som tas bort direkt</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q8: flera rätt (data + beteende i Contact) -->
  <div class="quiz" data-quiz-id="q8" data-points="2">
    <p><strong>8) Vad är rimligt att <code>Contact</code> innehåller i denna första version?</strong></p>
    <div class="quiz-options" role="group" aria-label="q8">
      <label class="quiz-option"><input type="checkbox" data-correct> Publika fält: <code>name</code> och <code>phone</code> (enkel start)</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Kan senare utökas med fler fält (adress, e-post, födelsedag)</label>
      <label class="quiz-option"><input type="checkbox"> Vilka färger som ska användas i consolen</label>
      <label class="quiz-option"><input type="checkbox"> Hur en int tolkas från en sträng till en siffra</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q9: fyll i inline (lägga in i listan) -->
  <div class="quiz" data-quiz-id="q9" data-points="1" data-pattern="^\s*contacts\.Add\(\s*c\s*\)\s*;\s*$">
    <p><strong>9) Skriv koden som lägger till objektet <code>c</code> i listan <code>contacts</code>.</strong></p>
    <pre><code class="language-csharp"><span class="cm">// Anta att 'c' är ett Contact-objekt och 'contacts' är List&lt;Contact&gt;</span>
<input class="quiz-inline-input" data-answer="contacts.Add(c);"></code></pre>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-oop-intro-07">Rätta alla</button>
<p class="quiz-result" id="quiz-set-oop-intro-07-result" hidden></p>
