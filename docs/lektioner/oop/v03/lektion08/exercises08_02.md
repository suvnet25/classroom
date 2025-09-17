---
tags:
  - OOP1-Övning
---

# Övning 08 Inkapsling

## Accessmodifierare, get/set metoder

Ska vi verkligen få sätta och läsa fälten `name` och `phone` direkt? Vad händer om vi vill ändra på hur de fungerar, eller lägga till *validering*?

För att kapsla in och skydda vår data lite mer kan vi sätta dem till `private`. Men hur kommer vi då åt dem utifrån? Vi kan skapa *get*- och *set*-metoder för att läsa och skriva värdena.

1. Gör fälten `name` och `phone` privata.
2. Skapa publika metoder `GetName`, `SetName`, `GetPhone` och `SetPhone` för att läsa och skriva värdena.
3. I `SetPhone` kan vi lägga till lite enkel validering, t.ex. att telefonnumret inte får vara tomt, och inte kortare än 5 tecken. Om det är felaktigt kan vi t.ex. skriva ut ett felmeddelande till konsolen (bättre felhantering kommer vi till senare).
4. Nu måste du uppdatera din kod för att använda get- och set-metoderna istället för att läsa och skriva fälten direkt.
