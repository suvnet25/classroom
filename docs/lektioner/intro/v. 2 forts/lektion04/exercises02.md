---
tags:
  - OOP1-Övning
---

# Övning - Metoder 01

Relevant dokumentation: [metoder](../../../../material/cs/basics/methods.md).

#### 1. PrintHello()
Skriv en enkel metod som skriver ut "Hello, World!" i konsolen. Anropa sedan metoden tre gånger på raken från din kod. Koden kan heta vad som helst, men tex kan den heta `PrintHello`.

#### 2. WriteMessage()
Skriv en metod som heter `WriteMessageTo` som:

* Tar en sträng som parameter, den kan heta `name`.
* Skriver ut en sträng i stil med `$"Hej {name}, hur mår du idag?"` i konsolen.

#### CalculateTax()
Skriv en metod som heter `CalculateTax` som:

* Tar en decimal som parameter, den kan heta `amount`.
* Returnerar en decimal som är 30% av `amount`.
* Skriv ett litet program som ber användaren skriva in sin inkomst, anropar `CalculateTax` med inkomsten och skriver ut siffran som metoder skickar tillbaka.

#### 1. WriteWarning()
Gör en metod som heter `WriteWarning` som:

* Tar en sträng som parameter (den ska användas som meddelande).
* Skriver ut meddelandet i konsolen med vit text på röd bakgrund.
* Nollställer färgerna i konsolen efteråt.

Gör sedan ett program som först skriver ut "Detta är ett vanligt meddelande", sedan anropar `WriteWarning` med meddelandet "Detta är ett varningsmeddelande" och slutligen skriver ut "Detta är ett annat vanligt meddelande".

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

