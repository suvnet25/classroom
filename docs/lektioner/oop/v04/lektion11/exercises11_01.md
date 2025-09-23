---
tags:
  - OOP1-Övning
---

# Övning 11 Arv

> Se [avsnittet om arv](../../../../material/cs/oop/inheritance.md) för att se hur det skrivs i kod.

I många system är det vanligt att det finns en basklass som innehåller tex ett ID. Låt oss skapa en basklass `Entity` som innehåller ett ID, och låt sedan `Contact` ärva från den.

## 1.1 - Basklassen Entity

Klassen `Entity` ska ha:
* En publik property `Id` med bara en `get`, typen ska vara `int`
* En konstruktor som med hjälp av Random sätter ett slumpmässigt värde på `Id` mellan 1 och 1 000 000
* Låt nu `Contact` ärva från `Entity`
* Uppdatera koden i `Main`-metoden så att den skriver ut `Id` när den listar kontakter

## 1.2 - Propertyn CreatedAt i Entity-klassen istället

I och med att `CreatedAt` är en property som är relevant för många objekt, så kan den med fördel flyttas upp till basklassen `Entity`:

* Flytta propertyn `CreatedAt` till `Entity`-klassen istället för i `Contact`.
* Din kod i `Main`-metoden ska fortfarande fungera som tidigare.

## 2. - En ny property och metod i basklassen

Det kan också vara bra att veta när en viss entitet senast uppdaterades. Låt oss lägga till en sådan property och en metod som uppdaterar den:

* Lägg till en property `UpdatedAt` av typen `DateTime` med en `get` och en `private set`.
* Lägg till metoden `SetUpdatedAt()` i `Entity`-klassen som sätter `UpdatedAt` till `DateTime.Now`.
* Du kan nu kalla på `SetUpdatedAt()` från `Contact`-klassen när du vill uppdatera `UpdatedAt`. Exempelvis kan du kalla på den i `set`-delen av `Name` propertyn, samt när du ändrar `Phone` propertyn.
* Testa att skriva ut `UpdatedAt` i `Main`-metoden efter att du ändrat en kontakts namn eller telefonnummer (Om den funktionaliteten finns. Om den inte finns, hur kan du snabbt testa denna funktionalitet i kod?).

## 3. - Virtual och override

Ibland vill man kunna ändra beteendet i en metod i en basklass. Detta görs med hjälp av `virtual` och `override`. Låt oss säga att vi vill kunna skriva ut en kontakt på ett annat sätt än standarden som `ToString()` ger oss:

* Overridea `ToString()`-metoden i `Entity`-klassen så att den returnerar en sträng med `Id`, `CreatedAt` och `UpdatedAt`.
* Overridea `ToString()`-metoden i `Contact`-klassen så att den returnerar en sträng med `Id`, `Name`, `Phone`, `CreatedAt` och `UpdatedAt`.
* Testa att skriva ut en kontakt i `Main`-metoden med hjälp av `Console.WriteLine(contact)` där `contact` är en instans av `Contact`.

## 4. En ny klass baserad på Entity

Kan du komma på någon mer klass som skulle kunna ärva från `Entity`? Skapa en sådan klass och implementera den med några properties och metoder. Testa sedan att skapa en instans av den i `Main`-metoden och skriv ut dess information. Exempel på klasser som skulle kunna vara relevanta i en adressbok är:
 
 * Relation (för att representera relationer mellan kontakter)
 * Address (för att representera adresser kopplade till kontakter)
 * Group (för att representera grupper av kontakter)

