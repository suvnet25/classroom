# Interfaces

Ett interface är ett sätt att koppla loss din implementerade kod från koden som anropar den. Det fundamentala konceptet inom OOP är "code to an abstraction not an implementation", vilket betyder att du helst inte ska referera till konkreta klasser utan den enklaste typen du kan för att fortfarande komma åt de nödvändiga funktionerna hos ett objekt.

Ett sätt att förklara interfaces är att tänka på dem som kontrakt. Ett interface definierar en uppsättning metoder och egenskaper som en klass **måste** implementera om den vill "skriva under" på kontraktet. Detta gör det möjligt att skapa kod som är mer flexibel och lättare att underhålla, eftersom du kan byta ut implementationer utan att ändra koden som använder dem.

Interfaces är lätt rent tekniskt, men kan vara svåra att förstå konceptuellt och hur/när de ska användas.

Till skillnad från arv så kan en klass implementera flera interfaces. Detta ger en stor flexibilitet i designen av dina klasser.

## Ett enkelt exempel

```csharp

public interface IDrawable
{
    void Draw();
}

public class Circle : IDrawable
{
    public void Draw()
    {
        Console.WriteLine("Drawing a circle");
    }
}

public class Square : IDrawable
{
    public void Draw()
    {
        Console.WriteLine("Drawing a square");
    }
}

```

Klasserna `Circle` och `Square` sägs här **implementera**  interfacet `IDrawable`. Detta innebär att de båda **måste** ha metoden `Draw()`. Nu kan vi skapa en metod som tar emot en lista av `IDrawable`-objekt och anropar `Draw()` på varje objekt, utan att behöva veta vilken typ av objekt det är.

```csharp

foreach (IDrawable drawable in drawables)
{
    drawable.Draw();
}

```