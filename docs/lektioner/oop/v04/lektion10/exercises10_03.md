---
tags:
  - OOP1-Övning
---

# Övning 10 Arv

> Se [avsnittet om arv](../../../../material/cs/oop/inheritance.md) för att se hur det skrivs i kod.

I många system är det vanligt att det finns en basklass som innehåller tex ett ID. Låt oss skapa en basklass `Entity` som innehåller ett ID, och låt sedan `Contact` ärva från den.

Klassen `Entity` ska ha:
* En publik property `Id` med bara en `get`, typen ska vara `int`
* En konstruktor som med hjälp av Random sätter ett slumpmässigt värde på `Id` mellan 1 och 1 000 000
* Ett privat fält `createdAt` av typen `DateTime`
* En publik property `CreatedAt` med bara en `get`-del som returnerar värdet på `createdAt`
* I konstruktorn, sätt `createdAt` till `DateTime.Now`