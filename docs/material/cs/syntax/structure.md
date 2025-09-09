# Struktur

Det finns några väldigt grundläggande regler i C# som måste följas:

* All kod som skrivs i C# måste ligga inuti en klass.  
* All kod som ska köras måste ligga inuti en metod.

Så här ser den strukturen ut i ett minimalt C#-program:

```csharp
class Program
{
    static void Main()
    {
        
    }
}
```

`Main`-metoden är lite speciellt på så sätt att det är den metod som körs först när programmet startar. Det är alltså härifrån som programmet *alltid* börjar köra.
Klassen däremot kan heta vad som helst.

När du sen skriver egna klasser så kommer de att följa denna struktur. Här är ett exempel på en klass som innehåller en metod som skriver ut "Hello World!" till konsolen:

```csharp
class World
{
    public static void SayHello()
    {
        Console.WriteLine("Hello World!");
    }
}
```

Om du vill anropa denna metod från `Main`-metoden så gör du det så här:

```csharp
class Program
{
    static void Main()
    {
        World.SayHello();
    }
}
```

## Top Level Statements
Från och med C# 9.0 finns det något som kallas för *Top Level Statements*. Det innebär att du kan skriva kod direkt i filen utan att behöva skapa en klass eller en `Main`-metod. Detta är tänkt att göra det enklare att skriva små program och exempel. Så när du skapar ett nytt console-projekt så får du i stort sett en tom `Program.cs` fil där du kan börja skriva kod direkt:

```csharp
Console.WriteLine("Hello, World!");
```

!!! Info "MEN!"
    Det är fortfarande så att den koden ligger innuti en klass och en `Main`-metod! Det är bara det att det inte syns.

Innan C# 9 såg det ut så här (och det är alltså så det fortfarande ser ut, bakom kulisserna)

```csharp
class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

!!! Info "Viktigt!"
    Top Level Statements är tänkt för små program och exempel. När du börjar skriva större program så är det bäst att gå tillbaka till den vanliga strukturen med klasser och metoder. Det är också så att Top Level Statements bara går att använda i en enda fil, och det är den som kommer att bli startpunkten för programmet.

