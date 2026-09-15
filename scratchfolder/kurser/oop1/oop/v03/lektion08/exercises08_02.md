---
tags:
  - OOP1-Övning
---

# Övning 08 Inkapsling

## Accessmodifierare, get/set metoder

Ska vi verkligen få sätta och läsa fälten `name` och `phone` direkt? Vad händer om vi vill ändra på hur de fungerar, eller lägga till *validering*?

För att kapsla in och skydda vår data lite mer kan vi sätta dem till `private`. Men hur kommer vi då åt dem utifrån? Vi kan skapa *get*- och *set*-metoder för att läsa och skriva värdena.

1. Gör fälten `name` och `phone` privata.
2. Skapa publika metoder: `GetName`, `SetName`, `GetPhone` och `SetPhone` för att läsa och skriva värdena.
    * `GetName`skall vara en metod som returnerar `name`, men inte tar någon input.
    * `SetName` skall vara en metod som tar en sträng som input och sätter `name` till det värdet.
    * Gör likadant för `GetPhone` och `SetPhone`.
3. I `SetName` kan vi sedan lägga till lite enkel validering, t.ex. att namnet inte får vara tomt. Om det är det kan vi tex se till så att namnet sätts till "No name" eller något sådant.
4. Nu måste du uppdatera din kod för att använda get- och set-metoderna istället för att läsa och skriva fälten direkt.
