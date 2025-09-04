---
    title: .NET Standardbibliotek
    description: Vad är .NET Standardbibliotek och hur används det.
    # icon: material/code-braces
---

Standardbiblioteket i .NET är en samling av fördefinierade klasser, metoder och funktioner som ingår i .NET-plattformen. Det erbjuder en mängd verktyg och funktioner som förenklar utvecklingen av applikationer genom att tillhandahålla återanvändbara komponenter.

Några vanliga metoder och klasser i .NET Standardbiblioteket inkluderar:

#### System.Console
Denna klass används för att hantera in- och utmatning i konsolapplikationer. Den innehåller metoder som `WriteLine` för att skriva text till konsolen och `ReadLine` för att läsa in användarens inmatning.

```csharp
Console.WriteLine("Hej, världen!"); // Skriver ut text till konsolen
string input = Console.ReadLine(); // Läser in användarens inmatning
```

Andra vanliga metoder i `System.Console` inkluderar:

```csharp
Console.Clear(); // Rensar konsolfönstret
Console.SetCursorPosition(int left, int top); // Sätter markörens position i konsolen
Console.ForegroundColor = ConsoleColor.Red; // Ändrar textfärgen till röd
Console.BackgroundColor = ConsoleColor.White; // Ändrar bakgrundsfärgen till vit
```

#### System.String

Denna klass representerar textsträngar och innehåller många användbara metoder för att manipulera och hantera text. Några vanliga metoder inkluderar:
```csharp
string text = "  Hej, världen!  ";
string trimmedText = text.Trim(); // Tar bort mellanslag i början och slutet
string upperText = text.ToUpper(); // Konverterar texten till versaler
bool containsHej = text.Contains("Hej"); // Kollar om texten innehåller "Hej" och returnerar true eller false
string replacedText = text.Replace("världen", "C#"); // Ersätter "världen" med "C#"
string[] words = text.Split(','); // Delar upp texten i en array baserat på kommatecken
string substring = text.Substring(2, 3); // Hämtar en del av texten från index 2 med längd 3
int length = text.Length; // Hämtar längden på texten
bool isEmpty = string.IsNullOrEmpty(text); // Kollar om texten är null eller tom
```




