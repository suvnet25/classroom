# Konstruktorer

En konstruktor är en speciell metod som anropas när ett objekt av en klass skapas. Den används för att initiera objektets egenskaper med specifika värden vid skapandet av objektet.

## Exempel på konstruktor

```csharp
public class TodoItem
{
    public string Title { get; set; }
    public bool IsDone { get; set; }

    // Konstruktor
    // Namnet måste vara samma som klassens namn
    // OBS! Ingen returtyp, inte ens void. Det konstruktorn returnerar alltid en instans av klassen
    public TodoItem(string title)
    {
        Title = title;
        IsDone = false;
    }
}
```

I exemplet ovan har vi en klass `TodoItem` med en konstruktor som tar en parameter `title`. När vi skapar ett nytt objekt av `TodoItem` måste vi ange ett värde för `title`, och konstruktorn kommer att sätta `Title`-egenskapen till det värdet och `IsDone` till `false` som standard.

Vi kan skapa en instans av `TodoItem` så här:

```csharp
TodoItem myTodo = new TodoItem("Lär dig om konstruktorer");
Console.WriteLine(myTodo.Title); // Output: Lär dig om konstruktorer
Console.WriteLine(myTodo.IsDone); // Output: False
```

## Constructor Overloading

En klass kan ha flera konstruktorer med olika parametrar, vilket kallas för "constructor overloading". Detta gör det möjligt att skapa objekt på olika sätt beroende på vilka värden som är tillgängliga vid skapandet.

```csharp
public class TodoItem
{
    public string Title { get; set; }
    public bool IsDone { get; set; }

    // Konstruktor
    public TodoItem(string title)
    {
        Title = title;
        IsDone = false;
    }

    // Överlagrad konstruktor
    public TodoItem(string title, bool isDone)
    {
        Title = title;
        IsDone = isDone;
    }
}

Nu kan vi skapa `TodoItem`-objekt på två olika sätt:

```csharp
TodoItem myTodo1 = new TodoItem("Lär dig om konstruktorer");
TodoItem myTodo2 = new TodoItem("Lär dig om överlagrade konstruktorer", true);
```

Detta är väldigt likt "method overloading".