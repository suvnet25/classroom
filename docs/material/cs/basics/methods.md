---
    title: Metoder
    description: Metoder är återanvändbara kodblock.
    icon: material/code-block-braces
---

# Metoder
Metoder (eller ibland kallat funktioner) är ett namngivet kodblock som kan kallas på från vår kod genom att vi skriver namnet på metoden och skickar med eventuell data till den. För att inte program ska bli allt för långa och svårlästa är det ett måste att dela upp koden i mindre delar. Det är här metoder kommer in i bilden.

```csharp title="Exempel på metoddeklaration och anrop"
void SayHello() // Metoddeklaration
{
    Console.WriteLine("Hello, World!");
}

SayHello(); // Metodanrop
```

Metoder deklareras i turordning med:

* **Åtkomstmodifierare**. T.ex. `public`, `private`, `protected` etc. Default är `private` om inget anges.
* **Returtyp**. T.ex. `void`, `int`, `string` etc. Måste alltid anges.
* **Metodnamn**. T.ex. `WriteMessage`, `CalculateSum` etc. Bör beskriva vad metoden gör, ofta med verb i början.
* **Parametrar** inom parentes. T.ex. `int tal1, int tal2`. Om metoden inte tar några parametrar, skrivs tomma parenteser `()`.
* **Metodkropp** inom klamrar `{ }` som innehåller koden som ska köras när metoden anropas.

En metods kombination av namn och parametrar kallas för **metodsignatur**.

```csharp title="Enklaste metoden, utan parametrar och utan returvärde"
void WriteMessage()
{
    Console.WriteLine("Hej från metoden!");
}
```

## Parametrar

Parametrar används för att skicka in data till metoden. En metod kan ha noll eller flera parametrar, och varje parameter måste ha en typ och ett namn. Parametrarna fungerar som lokala variabler inom metodens kodblock.

```csharp title="Metod med parametrar och utan returvärde"
void WriteMessage(string message, int number)
{
    Console.WriteLine($"Meddelande: {message}, Nummer: {number}");
}
```

## Returvärde

På samma sätt som att en metod kan ta emot data via parametrar, kan den också skicka tillbaka data till den som anropar metoden. Detta görs genom att ange en returtyp istället för `void` och använda `return`-satsen för att skicka tillbaka ett värde.

```csharp title="Metod med parametrar och med returvärde av typen int"
int Add(int a, int b)
{
    return a + b;
}

//Fånga upp returvärdet så här
int sum = Add(5, 10);
```

## Överlagring / Overloading

En metod kan ha flera olika signaturer, vilket innebär att du kan skapa flera metoder med samma namn. Detta kallas för **överlagring** eller *overloading*. Metoderna måste skilja sig åt genom olika antal eller typer av parametrar.

```csharp title="Exempel på metodöverlagring"
int Multiply(int a, int b)
{
    return a * b;
}

double Multiply(double a, double b)
{
    return a * b;
}

string Multiply(string a, int times)
{
    string tmp = "";
    for (int i = 0; i < times; i++)
    {
        tmp += a;
    }
    return tmp;
}
```

## Out

Ibland vill man att en metod ska kunna returnera flera värden. Detta kan göras med hjälp av `out`-parametrar. En `out`-parameter fungerar som en vanlig parameter med skillnaden att den måste tilldelas ett värde inom metoden innan den avslutas.

```csharp title="Exempel på out-parameter med bool"
bool TryReadFile(string filePath, out string content)
{
    try
    {
        content = System.IO.File.ReadAllText(filePath);
        return true;
    }
    catch (Exception)
    {
        content = null;
        return false;
    }
}

// Användning av metoden
if (TryReadFile("example.txt", out string fileContent))
{
    Console.WriteLine("File content:");
    Console.WriteLine(fileContent);
}
else
{
    Console.WriteLine("Failed to read the file.");
}
```


## Länkar

* <https://learn.microsoft.com/en-us/dotnet/csharp/methods>
