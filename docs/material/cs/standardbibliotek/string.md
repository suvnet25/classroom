# String

`String`-klassen i .NET är en maffig klass med massor av inbyggda funktioner för att hantera text. Här är några vanliga metoder och egenskaper som kan vara bra att känna till:

```csharp
string greeting = "Hej, världen!";

// Längden på strängen
int lengthOFString = greeting.Length; // 15

// Konvertera till stora eller små bokstäver
string upperCase = greeting.ToUpper(); // "HEJ, VÄRLDEN!"
string lowerCase = greeting.ToLower(); // "hej, världen!" 

// Kontrollera om strängen innehåller ett visst ord
if (greeting.Contains("världen"))
{
    Console.WriteLine("Strängen innehåller ordet världen!");
}

// Kontrollera om strängen är tom, null eller bara mellanslag
if (string.IsNullOrWhiteSpace(greeting)) // (1)
{
    Console.WriteLine("Strängen innehåller ingen hälsning!");
}

// Ersätta text
string ersatt = greeting.Replace("världen", "C#"); // "Hej, C#!"

// Dela upp strängen i bitar utifrån ett tecken, får tillbaka en array av strängar
string[] parts = greeting.Split(','); // ["Hej", " C#!"]

// Trimma bort mellanslag i början och slutet
string stringWithSpaces = "   Hej!   ";
string trimmedString = stringWithSpaces.Trim(); // "Hej!"

// Hämta en del av strängen (substring)
string substring = greeting.Substring(5, 7); // " världen"

// Hitta positionen av ett tecken eller ord
int index = greeting.IndexOf("världen"); // 5

```

1. Uppmärksamma här att vi använder en metod på `string`-klassen och inte en metod på en specifik sträng!

## Stränginterpolering

Stränginterpolering är ett smidigt sätt att skapa strängar som innehåller variabler eller uttryck. Det görs genom att använda `$` före strängen och sedan omsluta variabler eller uttryck inom `{}`.

```csharp
string name = "Anna";
int age = 30;
string message = $"Hej, jag heter {name} och jag är {age} år gammal.";
Console.WriteLine(message); // "Hej, jag heter Anna och jag är 30 år gammal."
```

## ToString()-metoden

Många datatyper i .NET har en inbyggd `ToString()`-metod som konverterar värdet till en sträng. Detta är användbart när du vill visa värden i textform.

```csharp
float number = 3.14159f; // (1)
string numberAsString = number.ToString("F2"); // "3.14", F2 betyder 2 decimaler

double bigNumber = 1234567890.12345;
string bigNumberAsString = bigNumber.ToString("N"); // "1,234,567,890.12" N betyder nummer med tusentalsavgränsare

DateTime now = DateTime.Now;
string dateAsString = now.ToString("yyyy-MM-dd"); // "2024-06-15" (beroende på dagens datum)
```

1. `f` efter talet anger att det är just en `float`.

Det där innuti `ToString()`-metoden kallas för en `formatsträng` och det finns massor av olika format att använda beroende på vilken typ av data du har. Läs mer här:

* Nummer: <https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-numeric-format-strings>
* Datum: <https://learn.microsoft.com/en-us/dotnet/standard/base-types/standard-date-and-time-format-strings>

## Läs ännu mer

Det finns så otroligt mycket en kan krångla med när det kommer till strängar i .NET! Läs mer här:

* <https://learn.microsoft.com/en-us/dotnet/fundamentals/runtime-libraries/system-string>
* <https://learn.microsoft.com/en-us/dotnet/api/system.string>
* Vad är *egentligen* text?! <https://en.wikipedia.org/wiki/Text_file>