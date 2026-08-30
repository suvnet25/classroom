---
tags:
  - OOP1-Övning
---

# Övning 14 Enums

## 1. En enum för säsonger

1. Skapa en enum som heter `Season` med värdena `Spring`, `Summer`, `Autumn`, och `Winter`.
2. Prova att skapa en variabel av typen `Season` och tilldela den ett värde.
3. Skriv ut detta värde till konsolen.

## 2. En klass med säsongsegenskap
1. Skapa en klass som du kallar `SeasonalActivity` med en egenskap `Season` av typen `Season` (alltså den du skapade i föregående övning) och en egenskap `Activity` av typen `string`.
2. Skapa en konstruktor som tar emot båda egenskaperna och sätter dem.
3. Skapa en instans av `SeasonalActivity` för varje säsong med en passande aktivitet (t.ex. "Skiing" för Winter).
4. Skriv ut alla aktiviteter med deras säsonger till konsolen.

## 2. En enum för menyval

1. Skapa en enum som heter `MenuOption` med värdena `StartGame`, `LoadGame`, `Settings`, och `Exit`.
2. Skapa metoden `HandleMenuOption` som tar emot en `MenuOption` som parameter och skriver ut en passande meddelande för varje menyval.
3. Anropa denna metod med olika `MenuOption` värden för att testa den.
4. Se om du kan läsa in en int från användaren och konvertera den till en `MenuOption` för att anropa `HandleMenuOption`.

## 3. En blog-artikel

1. Skapa en klass som heter `BlogPost` med string-egenskaperna `Title` och `Content`.
2. Skapa en enum som heter `PostState` med värdena `Draft`, `Published`, och `Archived`.
3. Lägg till en egenskap `State` av typen `PostState` i `BlogPost`.
4. Skapa en konstruktor som tar emot `Title`, `Content`. State skall sättas till `Draft` som standard.
5. Skapa metoder `Publish` och `Archive` som ändrar `State` till `Published` respektive `Archived`.
6. Skapa en instans av `BlogPost`, publicera den, och arkivera den, och skriv ut dess tillstånd efter varje ändring.
7. Extra: Hur skulle du göra om du vill styra sättet en post kan gå från ett tillstånd till ett annat (t.ex. en post kan bara gå från `Draft` till `Published`, och från `Published` till `Archived`)?


