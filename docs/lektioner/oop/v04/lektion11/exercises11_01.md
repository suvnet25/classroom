---
tags:
  - OOP1-Övning
---

# Övning 11 Arv

> Se [avsnittet om arv](../../../../material/cs/oop/inheritance.md) för att se hur det skrivs i kod.

I många system är det vanligt att det finns en basklass som innehåller tex ett ID. Låt oss skapa en basklass `Entity` som innehåller ett ID, och låt sedan `Contact` ärva från den.

## Basklassen Entity

Klassen `Entity` ska ha:
* En publik property `Id` med bara en `get`, typen ska vara `int`
* En konstruktor som med hjälp av Random sätter ett slumpmässigt värde på `Id` mellan 1 och 1 000 000
* Låt nu `Contact` ärva från `Entity`
* Uppdatera koden i `Main`-metoden så att den skriver ut `Id` när den listar kontakter

## Propertyn CreatedAt i Entity-klassen istället

I och med att `CreatedAt` är en property som är relevant för många objekt, så kan den med fördel flyttas upp till basklassen `Entity`:

* Flytta propertyn `CreatedAt` till `Entity`-klassen istället för i `Contact`.
* Din kod i `Main`-metoden ska fortfarande fungera som tidigare.

## En ny property och metod i basklassen

Det kan också vara bra att veta när en viss entitet senast uppdaterades. Låt oss lägga till en sådan property och en metod som uppdaterar den:

* Lägg till en property `UpdatedAt` av typen `DateTime` med en `get` och en `private set`.
* Lägg till metoden `SetUpdatedAt()` i `Entity`-klassen som sätter `UpdatedAt` till `DateTime.Now`.
* Du kan nu kalla på `SetUpdatedAt()` från `Contact`-klassen när du vill uppdatera `UpdatedAt`. Exempelvis kan du kalla på den i `set`-delen av `Name` propertyn, samt när du ändrar `Phone` propertyn.
* Testa att skriva ut `UpdatedAt` i `Main`-metoden efter att du ändrat en kontakts namn eller telefonnummer (Om den funktionaliteten finns. Om den inte finns, hur kan du snabbt testa denna funktionalitet i kod?).
