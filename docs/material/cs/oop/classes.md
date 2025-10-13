---
title: Klasser 
description: Klasser är mallar för att skapa objekt.

---

# Intro

Klasser är ett fundamentalt koncept inom objektorienterad programmering (OOP). En klass är som en mall eller ritning som definierar egenskaper (attribut) och beteenden (metoder) för objekt som skapas från den klassen.

> Eh, va?

Klasser och objekt används för att strukturera kod på ett sätt som gör det lättare att hantera komplexa system genom att gruppera relaterade data och funktioner tillsammans. 

## Exempel

Säg att vi vill hantera data om saker som ska göras, låt oss kalla det för **en Todo**. För att gruppera all information på ett bra sätt kan vi tänka på en **todo* som en sak som har vissa egenskaper och som kan utföra vissa handlingar:

* En **Todo** kan exempelvis tänkas ha den här informationen:
    * Ett **namn** (ex. "Handla mat")
    * En **beskrivning** (ex. "Mjölk, ägg, bröd")
    * Ett **datum** när den ska vara klar
    * En **status** som visar om den är klar eller inte

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

Vi har nu skapat en mall som beskriver hur en **Todo** ser ut. Vi kan nu skapa massa olika **Todo**-objekt utifrån denna mall och använda i vår kod:

```csharp
Todo myTodo = new Todo(); // Kan också skrivas kortare som: Todo myTodo = new();
myTodo.Name = "Handla mat";
myTodo.Description = "Mjölk, ägg, bröd";
myTodo.DueDate = new DateTime(2024, 5, 1);
myTodo.IsCompleted = false;
```

Detta *objekt* `myTodo` är en *instans* av klassen `Todo`, och vi kan skapa så många olika **Todo**-objekt vi vill med olika information i. Om detta inte hade varit ett difitalt system kan du tänka på varje `Todo`-objekt som en fysisk lapp med information om en sak som ska göras, samt en ruta att bocka av när den är klar.

* En **Todo** kan också tänkas kunna göra vissa saker:
    * Markeras som klar eller inte klar
    * Visa sin information på ett sammanhållet och snyggt sätt

Vi kan lägga till dessa beteenden som metoder i vår `Todo`-klass:

```csharp
public class Todo
{
    public string Name;
    public string Description;
    public DateTime DueDate;
    public bool IsCompleted;

    public void MarkAsCompleted()
    {
        IsCompleted = true;
    }

    public void DisplayInfo()
    {
        Console.WriteLine($"Todo: {Name}");
        Console.WriteLine($"Description: {Description}");
        Console.WriteLine($"Due Date: {DueDate.ToShortDateString()}");
        Console.WriteLine($"Completed: {IsCompleted}");
    }
}
```

Nu kan vi använda dessa metoder på våra **Todo**-objekt:

```csharp
myTodo.MarkAsCompleted();
myTodo.DisplayInfo();
```
En viktig sak att notera med metoder på objekt är att de tillhör just det objektet. `MarkAsCompleted`-metoden ändrar `IsCompleted`-egenskapen för just det objektet den anropas på, inte på något annat objekt. 

Detta är grunderna i hur klasser och objekt fungerar i C#. Genom att använda klasser kan vi organisera vår kod på ett sätt som gör det lättare att förstå, underhålla och återanvända. Läs nu på mer om de olika principerna för objektorienterad programmering (OOP) som [inkapsling](./encapsulation.md), arv och polymorfism för att få en djupare förståelse av hur klasser kan användas effektivt.

## Klasser och objekt

Skillnaden mellan klasser och objekt är att:

* En **klass** kan ses som en beskrivning för hur ett objekt är och fungerar. Så säg att vi skriver en beskrivning av hur bilar är och fungerar. Den beskrivningen kanske säger att:
    * En bil har en färg, ett märke, en modell och en max-hastighet
    * En bil kan starta, stanna och köra
Detta betyder ju dock inte att det ännu finns någon speciell bil, utan bara en beskrivning av hur bilar är och fungerar.
* Ett **objekt** kan ses som något som faktiskt finns. Så vi kan använda föregående bil-klass för att skapa faktiska bilar. Vi kan med klassens hjälp skapa ett bil-objekt med egenskaperna röd färg, Volvo som märke, XC90 som modell och 300 som max-hastighet. Detta bil-objekt går nu att använda till något konkret, genom att starta, stanna och köra.

## Abstrakta klasser

Abstrakta klasser är klasser som inte kan instansieras direkt, utan måste ärvas av andra klasser. De används för att definiera gemensam funktionalitet och struktur som kan delas av flera relaterade klasser, men där det inte är relevant att instansiera själva den abstrakta klassen.

> Exempel: En abstrakt klass 'Shape' kan definiera gemensamma egenskaper och metoder för olika former som 'Circle' och 'Rectangle',
> men du kan inte skapa en instans av 'Shape' direkt. 

En abstrakt klass kan också definiera abstrakta metoder, som är metoder utan implementation som måste implementeras av subklasserna.

> Exempel: En `Shape`-klass kan ha en abstrakt metod `CalculateArea()` som måste implementeras av alla subklasser.

```csharp
public abstract class Shape
{
    public abstract double CalculateArea();
}


## Länkar

[Medlemmar](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/members)
