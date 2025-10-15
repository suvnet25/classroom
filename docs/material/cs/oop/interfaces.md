# Interfaces

Ett interface är ett sätt att koppla loss kod som faktiskt gör något från koden som anropar den.  

Ett fundamentalt koncept inom OOP är "code to an abstraction not an implementation", vilket betyder att du helst inte ska referera till konkreta klasser utan den enklaste typen du kan för att fortfarande komma åt de nödvändiga funktionerna hos ett objekt.  

Ett sätt att förklara interfaces är att tänka på dem som kontrakt. Ett interface definierar en uppsättning metoder och egenskaper som en klass **måste** implementera om den vill "skriva under" på kontraktet. Detta gör det möjligt att skapa kod som är mer flexibel och lättare att underhålla, eftersom du kan byta ut implementationer utan att ändra koden som använder dem.

> Interfaces är lätt rent tekniskt, men kan vara svåra att förstå konceptuellt och hur/när de ska användas.

Det kan ibland vara svårt att se skillnaden mellan ett interface och en abstrakt klass. Här är några viktiga skillnader:
- En abstrakt klass kan innehålla både abstrakta metoder (utan implementation) och konkreta metoder (med implementation), medan ett interface endast kan innehålla metodsignaturer (utan implementation).
- Abstrakta metoder måste *overridas* i en subklass, medan metoder i ett interface bara måste skrivas som en vanlig metod i den klass som implementerar interfacet.
- Det går bara att ärva från en klass, men det går att *implementera* flera interfaces.

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

## Interfaces i .NET

Många av de grundläggande typerna i .NET använder interfaces för att definiera gemensamma beteenden. Här är några exempel:

- `IEnumerable`: Definierar en metod för att få en enumerator som kan iterera genom en samling. Detta interface används av alla samlingstyper i .NET, inklusive listor, arrayer och dictionaries. Det gör att du kan använda `foreach`-satsen för att iterera genom samlingar.
- `IDisposable`: Definierar en metod för att frigöra resurser.
    Detta interface används av klasser som hanterar resurser som behöver frigöras när de inte längre behövs, till exempel filströmmar eller databasanslutningar. Genom att implementera `IDisposable` kan du använda `using`-satsen för att säkerställa att resurser frigörs korrekt.