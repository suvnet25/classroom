---
title: Static/Instance 
description: Skillnaden mellan statiska och instansmedlemmar i klasser.

---

# Statiska kontra instansmedlemmar

Den korta förklaringen är: 

> *Statiska medlemmar* tillhör själva klassen, medan *instansmedlemmar* tillhör enskilda objekt (instanser) av klassen.

**Det är inte svårare än så!** Men för att förstå vad de orden innebär måste du veta vad ett objekt är.  

En statisk variabel finns det bara en av, oavsett hur många objekt (instanser) av klassen som skapas. Alla objekt delar på samma statiska variabel, eftersom det tillhör klassen i sig.

Instansmedlemmar däremot, finns det kopior av för varje enskilt objekt som skapas, och kan därmed hålla unik data för varje objekt.

### Exempel

Om en Person-klass hade haft en statisk namn-variabel, så skulle alla personer ha haft samma namn. Det är därför namn-variabeln istället är en instansvariabel, så att varje person-objekt kan ha sitt eget namn.

```csharp
public class Person
{
    public static int Population; // Statisk variabel som håller koll på antalet personer
    public string Name; // Instansvariabel som håller koll på personens namn

    public Person(string name)
    {
        Name = name;
        Population++; // Öka populationen varje gång en ny person skapas
    }
}
```

## Åtkomst

För att komma åt en statisk medlem används klassens namn, medan instansmedlemmar nås via objektet:

```csharp
Person newPerson = new Person("Alice");
Console.WriteLine(newPerson.Name); // Åtkomst till instansvariabel
Console.WriteLine(Person.Population); // Åtkomst till statisk variabel, skriver ut 1.

Person anotherPerson = new Person("Bob");
Console.WriteLine(anotherPerson.Name); // Åtkomst till instansvariabel
Console.WriteLine(Person.Population); // Åtkomst till statisk variabel, skriver nu ut 2.
```

I exemplet ovan kan vi se att `Population` är en statisk variabel som vi når via `Person.Population`, medan `Name` är en instansvariabel som vi når via `newPerson.Name`.

Detta gäller alltså samtliga typer av medlemmar: variabler, metoder, egenskaper osv.