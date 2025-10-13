---
tags:
  - OOP1-Övning
---

# Övning 15 Abstrakta klasser

## Intro: abstrakt basklass + override

* Skapa den abstrakta basklassen `Animal` med en abstrakt metod `MakeSound()`.
* Skapa två subklasser `Dog` och `Cat` som ärver från `Animal`.
* Implementera `MakeSound()` i båda subklasserna så att `Dog` returnerar "Woof!" och `Cat` returnerar "Meow!".
* I `Main`-metoden, skapa en lista av `Animal`-objekt som innehåller både `Dog` och `Cat`.
* Loop genom listan och anropa `MakeSound()` för varje djur, och skriv ut resultatet till konsolen.
* Bonus: Lägg till propertyn `Name` i `Animal`-klassen och sätt namn för varje djur. Skriv ut namnet tillsammans med ljudet.

## 1. Abstrakt klass för 