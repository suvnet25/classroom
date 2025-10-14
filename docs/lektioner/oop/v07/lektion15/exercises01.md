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

## 1. Abstrakt klass för Sensorer

Vi låtsas att vi gör ett system för att hantera olika typer av sensorer i ett smart hem. 

* Skapa en abstrakt basklass `Sensor` som definierar gemensamma egenskaper och metoder för alla sensorer.
* Lägg till en abstrakt metod `ReadValue()` som ska returnera ett värde från sensorn av typ `double`.
* Lägg till en property `Unit` som beskriver enhet för sensorn (t.ex. "Celsius", "Percentage", etc.).
* Skapa två subklasser `TemperatureSensor` och `HumiditySensor` som ärver från `Sensor`.
* `ReadValue()` i `TemperatureSensor` ska returnera ett slumpmässigt temperaturvärde mellan -10 och 50 grader Celsius, 
* `ReadValue()` i `HumiditySensor` ska returnera ett slumpmässigt fuktighetsvärde mellan 0 och 100 procent.
* I `Main`-metoden, skapa en lista av `Sensor`-objekt som innehåller både `TemperatureSensor` och `HumiditySensor`.
* Loop genom listan och anropa `ReadValue()` för varje sensor, och skriv ut resultatet till konsolen.

* Lägg till ytterligare en subklass `LightSensor` som också ärver från `Sensor`.
* `ReadValue()` i `LightSensor` ska returnera ett slumpmässigt ljusvärde mellan 0 och 1000 lux.
* Lägg till `LightSensor` i listan av sensorer i `Main`-metoden och kör programmet. Se att alla sensorer fungerar korrekt.