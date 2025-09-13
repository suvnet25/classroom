---
title: Klasser 
description: Klasser är mallar för att skapa objekt.

---

# Intro

Klasser är ett fundamentalt koncept inom objektorienterad programmering (OOP). En klass är som en mall eller ritning som definierar egenskaper (attribut) och beteenden (metoder) för objekt som skapas från den klassen.

> Eh, va?

Klasser används för att strukturera kod på ett sätt som gör det lättare att hantera komplexa system genom att gruppera relaterade data och funktioner tillsammans.

## Exempel

Säg att vi vill hantera data om saker som ska göras, låt oss kalla det för **en Todo**. För att gruppera all information på ett bra sätt kan vi tänka på en **todo* som en sak som har vissa egenskaper och som kan utföra vissa handlingar:

* En **Todo** kan exempelvis tänkas ha den här informationen:
    * Ett namn (ex. "Handla mat")
    * En beskrivning (ex. "Mjölk, ägg, bröd")
    * Ett datum när den ska vara klar
    * En status som visar om den är klar eller inte

Vi kan "modellera" detta i C# genom att skapa en klass som heter `Todo`:

```csharp
public class Todo
{
    public string Name;
    public string Description;
    public DateTime DueDate;
    public bool IsCompleted;
}
```

Vi har nu skapat en mall som beskriver hur en **Todo** ser ut. Vi kan nu skapa massa olika **Todos** utifrån denna mall och använda i vår kod:

```csharp
Todo myTodo = new Todo(); // Kan också skrivas kortare som: Todo myTodo = new();
myTodo.Name = "Handla mat";
myTodo.Description = "Mjölk, ägg, bröd";
myTodo.DueDate = new DateTime(2024, 5, 1);
myTodo.IsCompleted = false;
```

Detta *objekt* `myTodo` är en instans av klassen `Todo`, och vi kan skapa så många olika **Todos** vi vill med olika information.

* En **Todo** kan också tänkas kunna göra vissa saker:
    * Markeras som klar eller inte klar
    * Visa sin information på ett sammanhållet och snyggt sätt

## Länkar

[Medlemmar](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/members)
