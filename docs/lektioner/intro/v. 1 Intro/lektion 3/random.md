---
tags:
  - OOP1-Övning
---

# Övning - Random

Kika på dokumentationen om [Random](../../../../material/cs/standardbibliotek/random.md).
.
Gör ett program som använder `Random`-klassen för att lösa något av följande problem:

Skriv först pseudokod för programmet som kommentarer i koden.

1. **Slå en tärning**
    * Slumpa ett tal mellan 1–6 och säg vad tärningskastet blev.
    * Utveckling: Slumpa två tärningar, visa båda resultaten och summan.

2. **Slumpa sten, sax, påse**
    * Tre utfall i stället för två.
    * Eleven kan göra en meny där användaren väljer sitt drag, och datorn slumpas fram.
    * Jämför och avgör vinnare.

3. **Dagens lyckokaka-meddelande**
    * Ha en array med 5–10 olika "meddelanden" och slumpa fram ett.
    * Liknar slantsingling, fast med flera alternativ.

4. **Gissa talet light**
    * Datorn slumpar ett tal mellan 1–10.
    * Användaren gissar, datorn berättar om det blev rätt eller fel (ingen loop, bara enkel check).

5. **Slumpa fram väder**
    * Slumpa mellan "sol", "regn", "snö", "molnigt".
    * Kan utvidgas till att slumpa temperatur också.

## Exempellösningar

Kolla på dessa exempel efter att du försökt själv!

??? Tip "Exempel: Slå en tärning"
    ```csharp
    int dieRoll1 = Random.Shared.Next(1, 7); // 1 till 6
    Console.WriteLine($"Du slog {tarning}!");
    int dieRoll2 = Random.Shared.Next(1, 7);
    Console.WriteLine($"Du slog {dieRoll2}!");
    Console.WriteLine($"Summan av tärningarna är {dieRoll1 + dieRoll2}");
    ```

??? Tip "Exempel: Sten, sax, påse"
    ```csharp
    string[] options = { "sten", "sax", "påse" };
    Console.Write("Välj sten, sax eller påse: ");
    string userChoice = Console.ReadLine().ToLower();
    int computerIndex = Random.Shared.Next(0, options.Length);
    string computerChoice = options[computerIndex];
    Console.WriteLine($"Datorn valde {computerChoice}");
    if (userChoice == computerChoice)
    {
        Console.WriteLine("Oavgjort!");
    }
    else if ((userChoice == "sten" && computerChoice == "sax") ||
             (userChoice == "sax" && computerChoice == "påse") ||
             (userChoice == "påse" && computerChoice == "sten"))
    {
        Console.WriteLine("Du vann!");
    }
    else
    {
        Console.WriteLine("Datorn vann!");
    }
    ```

??? Tip "Exempel: Dagens lyckokaka-meddelande"
    ```csharp
    string[] messages = [
        "Du kommer att ha en bra dag!",
        "Någon kommer att göra dig glad idag.",
        "En överraskning väntar runt hörnet.",
        "Dina ansträngningar kommer att löna sig.",
        "Var öppen för nya möjligheter."
    ];
    int index = Random.Shared.Next(0, messages.Length);
    Console.WriteLine(messages[index]);
    ```

??? Tip "Exempel: Gissa talet light"
    ```csharp
    int secretNumber = Random.Shared.Next(1, 11); // 1 till 10
    Console.Write("Gissa ett tal mellan 1 och 10: ");
    int userGuess = int.Parse(Console.ReadLine());
    if (userGuess == secretNumber)
    {
        Console.WriteLine("Rätt gissat!");
    }
    else
    {
        Console.WriteLine($"Fel! Det rätta talet var {secretNumber}.");
    }
    ```

??? Tip "Exempel: Slumpa fram väder"
    ```csharp
    string[] weatherOptions = { "sol", "regn", "snö", "molnigt" };
    int weatherIndex = Random.Shared.Next(0, weatherOptions.Length);
    string weather = weatherOptions[weatherIndex];
    int temperature = Random.Shared.Next(-10, 36); // -10 till 35
    Console.WriteLine($"Dagens väder är {weather} med en temperatur på {temperature}°C.");
    ```

