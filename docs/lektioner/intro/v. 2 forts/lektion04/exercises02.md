---
tags:
  - OOP1 övning
---

# Övning - Metoder 01

Relevant dokumentation: [metoder](../../../../material/cs/basics/methods.md).

#### 1. Parsningsmetod
Skriv en metod som heter `GetIntFromUser` som:

1. Tar en sträng som parameter (den ska användas som prompt när användaren ska mata in ett tal).
2. Returnerar ett heltal som användaren matat in.
3. (Svårare) Om användaren matar in något som inte är ett heltal, ska metoden skriva ut ett felmeddelande och fråga igen tills användaren matar in ett giltigt heltal.

#### 2. GetEmailFromUser
Skriv en metod som heter `GetEmailFromUser` som:

1. Tar en sträng som parameter (den ska användas som prompt när användaren ska mata in en e-postadress).
2. Returnerar en sträng som användaren matat in.
3. (Svårare) Om användaren matar in något som inte är en giltig e-postadress (dvs. den innehåller inte ett `@`-tecken), ska metoden skriva ut ett felmeddelande och fråga igen tills användaren matar in en giltig e-postadress.

#### 1. Metodifiera övning
Utgå från övningen "1. Hoppa över tomma rader". Du ska nu skriva två metoder som gör delar av vad det programmet gör.

1. Skriv en metod som tar en filsökväg som parameter och returnerar en array med alla rader i filen. Metoden skall kolla så att filen finns, och om den inte gör det skall den returnera en tom array.
2. Skriv en metod som tar en sträng som parameter och skriver ut den om den inte är tom. Anropa sedan metoden för varje rad i filen.
3. Använd dessa två metoder i ditt program för att läsa in filen och skriva ut raderna. Det ska funka precis som innan alltså.[^1]

[^1]: Vad du gjort nu kallas för att **"refaktorera"** koden, alltså att ändra dess struktur utan att ändra dess funktionalitet. Det är en viktig del av programmering att kunna göra koden mer läsbar och återanvändbar genom att bryta ut delar i metoder.
