# Övningar

### 1. Koka kaffe!

Skriv klart metoden så att den väntar 2 sek innan det skriv ut "Kaffet serveras!".

```cs
Console.WriteLine("Beställer kaffe...");
await MakeCoffeeAsync();
Console.WriteLine("Kaffet serveras!");

static async Task MakeCoffeeAsync()
{
    // TODO: skriv "Brygger...", vänta 2000ms, skriv "Klart!"
}
```

### 2. Tre grejjer samtidigt

```cs
Console.WriteLine("Startar 3 jobb...");

Task a = Task.Delay(1000);
Task b = Task.Delay(2000);
Task c = Task.Delay(3000);

// TODO: vänta tills alla är klara med WhenAll

Console.WriteLine("Alla klara!");
```

### 3. Random timer och returvärde

Skriv en metod som väntar slumpmässigt mellan 1 och 5 sekunder, och sen returnerar antalet sekunder den väntade.

```cs
int seconds = await RandomWaitAndReturnSecondsAsync();
Console.WriteLine($"Väntade {seconds} sekunder.");

static async Task<int> RandomWaitAndReturnSecondsAsync()
{
    // TODO
    return -1;
}
```

### 4. Vänta med prickar

```cs
Console.Write("Jobbar");

var longTask = Task.Delay(4000);

while (!longTask.IsCompleted)
{
    // TODO: skriv "." och vänta 200ms med Task.Delay
}

Console.WriteLine("\nKlar!");
```

### 5. Skapa tasks med en knapptryckning

Skriv en konsolapp som skapar en Task varje gång användaren trycker på Enter. Tasken ska vänta slumpmässigt mellan 1 och 5 sekunder och sen skriva "Task X klar!" där X är taskens nummer (1, 2, 3 osv). 
Om använder skriver något innan hen trycker Enter så ska programmet avslutas.

!!! tip "Tips"
    Använd en loop med Console.ReadLine() för att vänta på användarens input. Använd en räknare för att hålla koll på task-numret. Du kan använda antingern Task.Run eller ContinueWith för att lösa denna uppgift.

### HttpClient Övningar

Ladda ner något stort med HTTPClient och rita punkter i konsolen medan du väntar på att nedladdningen ska bli klar. Använd följande URL för att ladda ner en stor fil: https://ash-speed.hetzner.com/100MB.bin

### Progress med HttpClient

Ladda ner samma fil som i förra övningen, men denna gång med Progress-rapportering. Skriv ut procenten nedladdat i konsolen.