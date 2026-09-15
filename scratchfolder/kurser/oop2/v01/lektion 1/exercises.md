---
tags:
  - OOP2-Övning
---

# Delegatövningar

Exempelkod för Action- och Func-delegater:

```cs
    Action messagePrinter = () => Console.WriteLine("Hej ");
    Action<string> greeter = n => Console.WriteLine("Hello " + n);
    Action<string, int> greeterWithAge = (n, age) => Console.WriteLine("Hello " + n + ". You are " + age);

    messagePrinter();
    greeter("Bob");

    //Metod som returnerar en bool, ingen inparameter
    Func<bool> doSomething = () => 10 > 100;
    bool b = doSomething();

    //Metod som returnerar bool och tar en inparamter
    Func<int, bool> checkUnderage = age => age < 18;

    bool x = checkUnderage(96);
```

??? Info "Skriv om metoderna"
    Skriv om följande metoder till lambda-utryck istället. Skriv de i stil med:
    'Action printDate = xxxx' osv.
    Testa sedan att köra dem. Om de returnerar ett värde, skriv ut värdet med WriteLine();

    ```cs
    static void PrintDate()
    {
        Console.WriteLine(DateTime.Now.ToLongTimeString());
    }

    static void PrintDateAtTime(DateTime dateTime)
    {
        Console.WriteLine(DateTime.Now.ToLongTimeString());
    }

    static int GetDay()
    {
        return DateTime.Now.Day;
    }

    static bool CheckIfLeapDay(DateTime dateTime)
    {
        return dateTime.Month == 2 && dateTime.Day == 29;
    }
    ```

??? Info "Action #1"
    Skapa en Action som skriver "Hej!" till konsolen och kör den.

    ```cs
    Action sayHello = ???;
    sayHello();
    ```

??? Info "Action #2"
    Skapa en Action som tar emot ett namn och skriver "Hej, [namn]!" till konsolen. 
    Kör delegaten två gånger med två olika namn.

??? Info "Action #3"
    Skapa en Action som tar två heltal som input, adderar dem och skriver ut resultatet.
    Testa med två olika par av tal.

??? Info "Func #1"
    Skapa en Func som tar ett heltal och returnerar talet i kvadrat.
    **Hint:** tänk på att en Func alltid returnerar ett värde, och det är den första typen i generics-listan.

??? Info "Func #2"
     Skapa en Func som adderar två tal och returnerar summan. Skriv ut resultatet **efter** att du kört funcen.

??? Info "Func #3 - Villkor"
    Skapa en func som returnerar en bool och tar ett heltal som input. Funcen ska returnera true om talet är över 65 och false annars.
    Funcen kan ses som en definition av ett villkor, i detta fallet om en tenta är godkänd eller inte. Så döp gärna funcen till något som reflekterar detta, t.ex. `IsPassed`.
    Testa funcen med olika tal och skriv ut resultatet i konsolen.

### Innan följande övningar blir det en liten genomgång av hur delegater kan användas i metoder.

Exempelkod:

```cs
class Program
{
    static void Main()
    {
        bool result = DoesItContain(s => s.Length > 3);

        Console.WriteLine("Does it contain? " + result);
    }

    static bool DoesItContain(Func<string, bool> predicate)
    {
        List<string> names = ["Bob", "Kim", "Sam"];

        foreach (var n in names)
        {
            if (predicate(n)) return true;
        }

        return false;
    }
}
```

??? Info "Func #4 - Count"
    Skapa en metod som heter **CountMatching** som tar en lista av heltal och en Func<bool, int> som input. Metoden ska returnera antalet tal i listan som uppfyller villkoret i Funcen.

    Exempelvis, om listan är [10, 20, 30, 40, 50] och funcen returnerar true för tal större än 25, så ska metoden returnera 3 (eftersom 30, 40 och 50 är större än 25).

??? Info "Func #5 - Filtermetod"
    Skapa en metod som heter **FilterList** som tar en lista av heltal och en Func<bool, int> som input. Metoden ska returnera en ny lista som endast innehåller de tal som uppfyller villkoret i Funcen.
    
    Använd metoden och för att filtrera ut alla tal.
    
    ```cs
    // Exempel på användning:
    List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6 };
    List<int> evenNumbers = FilterList(numbers, ???);
    ```

??? Info "Func #6 - Transformationsmetod"
    Skapa en metod som heter **TransformList** som tar en lista av heltal och en Func<int, int> som input. Metoden ska returnera en ny lista där varje tal har transformerats enligt Funcen.
    
    Använd metoden för att skapa en ny lista där varje tal är i kvadrat (upphöjt till 2).
    
    ```cs
    // Exempel på användning:
    List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
    List<int> squaredNumbers = TransformList(numbers, ???);
    ```

??? Info "Func #7 - Extensionmethod"
    Implementera någon av ovanstående metoder som en extensionmethod på en List<string>

??? Info "Funk #8 - Generisk Extension method"
    Implementera någon av ovanstående metoder som en generisk extensionmethod på IEnumerable<T>

### Inbyggda events

??? Info "Console Ctrl-C"
    Skapa en event-handler för `Console.CancelKeyPress` som skriver ut något när användaren trycker Ctrl-C i konsolen. Gör en evig while-loop för att hålla programmet igång så att du kan testa eventet.

    Exempelkod:
    ```cs
    Console.CancelKeyPress += (o, e) =>
    {
        Console.WriteLine("Avslutar programmet...");
    };

    Console.WriteLine("Tryck Ctrl-C för att avsluta.");
    while (true)
    {
        Thread.Sleep(1000);
        Console.WriteLine("Programmet körs...");
    }
    ```

??? Info "Timer-events"
    Skapa en timer som använder en Action för att skriva ut "Tick" till konsolen varje sekund. Låt timern köra i 5 sekunder innan den stoppas.

    Se [dokumentationen](https://learn.microsoft.com/en-us/dotnet/api/system.timers.timer?view=net-10.0) för `System.Timers.Timer`.

??? Info "Filövervakning"
    Med `FileSystemWatcher` går det att lyssna på events som skickas ut om något händer i filsystemet, t.ex. när en fil skapas, ändras eller tas bort i en specifik mapp.
    Skapa en `FileSystemWatcher` som övervakar en specifik mapp (t.ex. "." för att övervaka mappen programmet körs i) och skriver ut ett meddelande till konsolen varje gång en fil skapas i den mappen.

    Se [dokumentationen](https://learn.microsoft.com/en-us/dotnet/api/system.io.filesystemwatcher?view=net-10.0) för `FileSystemWatcher`.

    Det är viktigt att använda `watcher.EnableRaisingEvents = true;` för att börja lyssna på events.


### Användning i ditt projekt

* Kan du komma på någon situation i ditt eget projekt från OOP1 där du skulle kunna använda en delegat för att göra koden mer flexibel eller återanvändbar?
* Använder du redan lambdas med LINQ möjligtvis, och kan du nu i så fall förstå bättre hur de fungerar?
* Kan du komma på något där Console.CancelKeyPress, FileSystemWatcher eller Timers skulle kunna vara användbara i ditt projekt?