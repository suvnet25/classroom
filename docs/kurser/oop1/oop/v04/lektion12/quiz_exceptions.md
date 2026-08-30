---
tags:
  - OOP1-quiz
---

# Quiz Exceptions

Här kommer några frågor på temat Exceptions i C#

<div class="quiz-group" id="quiz-set-exceptions">

  <!-- Q1: enkel flervals (syfte) -->
  <div class="quiz" data-quiz-id="q1" data-points="1">
    <p><strong>1) Vad är syftet med exceptions i C#?</strong></p>
    <div class="quiz-options" role="group" aria-label="q1">
      <label class="quiz-option"><input type="radio"> Att avbryta loopar när något gåtr fel</label>
      <label class="quiz-option"><input type="radio" data-correct> Att signalera fel/oväntade tillstånd och avbryta normalt flöde</label>
      <label class="quiz-option"><input type="radio"> Att logga fel</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q2: flera rätt (vanliga typer) -->
  <div class="quiz" data-quiz-id="q2" data-points="2">
    <p><strong>2) Vilka av följande är vanliga inbyggda exceptiontyper?</strong></p>
    <div class="quiz-options" role="group" aria-label="q2">
      <label class="quiz-option"><input type="checkbox" data-correct> ArgumentException</label>
      <label class="quiz-option"><input type="checkbox" data-correct> InvalidOperationException</label>
      <label class="quiz-option"><input type="checkbox" data-correct> FormatException</label>
      <label class="quiz-option"><input type="checkbox"> ConsoleException</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q3: enkel flervals (finally) -->
  <div class="quiz" data-quiz-id="q3" data-points="1">
    <p><strong>3) Vad används <code>finally</code>-blocket till?</strong></p>
    <div class="quiz-options" role="group" aria-label="q3">
      <label class="quiz-option"><input type="radio"> Att fånga ett specifikt exception</label>
      <label class="quiz-option"><input type="radio" data-correct> Att alltid köra en viss bit kod oavsett om fel inträffar</label>
      <label class="quiz-option"><input type="radio"> Att skapa ett nytt exception</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q4: enkel flervals (måste man alltid fånga) -->
  <div class="quiz" data-quiz-id="q4" data-points="1">
    <p><strong>4) Måste du alltid fånga (<code>catch</code>) ett exception i samma metod där det uppstår?</strong></p>
    <div class="quiz-options" role="group" aria-label="q4">
      <label class="quiz-option"><input type="radio"> Ja, alltid</label>
      <label class="quiz-option"><input type="radio" data-correct> Nej, det "bubblar upp" till en nivå där det kan hanteras</label>
      <label class="quiz-option"><input type="radio"> Endast i async-metoder</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q5: enkel flervals (ordning på catch) -->
  <div class="quiz" data-quiz-id="q5" data-points="1">
    <p><strong>5) I vilken ordning bör flera <code>catch</code>-block placeras?</strong></p>
    <div class="quiz-options" role="group" aria-label="q5">
      <label class="quiz-option"><input type="radio"> Alfabetisk ordning</label>
      <label class="quiz-option"><input type="radio" data-correct> Mest specifika typer först, mer generella (t.ex. <code>Exception</code>) sist</label>
      <label class="quiz-option"><input type="radio"> Generella först, specifika sist</label>
      <label class="quiz-option"><input type="radio"> Spelar ingen roll</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

  <!-- Q6: flera rätt (bästa praxis) -->
  <div class="quiz" data-quiz-id="q6" data-points="2">
    <p><strong>6) Vilka är bra praxis vid användning av exceptions?</strong></p>
    <div class="quiz-options" role="group" aria-label="q6">
      <label class="quiz-option"><input type="checkbox" data-correct> Fånga bara sådant du kan hantera, låt annars bubbla upp</label>
      <label class="quiz-option"><input type="checkbox" data-correct> Kasta rätt typ (t.ex. <code>ArgumentException</code> för ogiltiga parametrar)</label>
      <label class="quiz-option"><input type="checkbox"> Använd alltid <code>catch (Exception)</code> för enkelhet</label>
    </div>
    <p class="quiz-feedback" hidden></p>
  </div>

</div>

<button class="md-button md-button--primary quiz-check-all" data-target="#quiz-set-exceptions">Rätta alla</button>
<p class="quiz-result" id="quiz-set-exceptions-result" hidden></p>
