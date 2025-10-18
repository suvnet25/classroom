---
title: Typsystemet
description: Olika typer i C# och skillnaden mellan värdetyper och referenstyper.

---

# Typsystemet i C#

I C# är allt baserat på typer. En typ definierar vilken sorts data en variabel kan hålla och vilka operationer som kan utföras på den datan. Typer kan delas in i två huvudkategorier: **värdetyper** och **referenstyper**.

> Kort förklarat: En värdetyp håller själva värdet direkt, medan en referenstyp håller en referens (adress) till var värdet finns i minnet. Flera variabler kan referera till samma objekt i minnet när det gäller referenstyper, medan varje variabel av en värdetyp har sitt eget unika värde.

## Värdetyper

Värdetyper inkluderar grundläggande datatyper som `int`, `float`, `bool`, och `char`. När du skapar en variabel av en värdetyp, lagras värdet direkt i den minnesplats som är reserverad för den variabeln.

```csharp
int a = 10;
int b = a; // b får en kopia av värdet som ligger lagrat i a
b = 20; // Ändrar b påverkar inte a
Console.WriteLine(a); // Skriver ut 10
Console.WriteLine(b); // Skriver ut 20
```

## Referenstyper

Referenstyper inkluderar klasser, arrayer, och strängar. När du skapar en variabel av en referenstyp, lagras en referens (adress) till objektet i minnet istället för själva värdet.

```csharp
class Person
{
    public string Name;
}

Person person1 = new Person();
person1.Name = "Alice";
Person person2 = person1; // person2 refererar till samma objekt som person1
person2.Name = "Bob"; // Ändrar Name via person2 och påverkar därmed person1
Console.WriteLine(person1.Name); // Skriver ut "Bob"
Console.WriteLine(person2.Name); // Skriver ut "Bob"
``` 

