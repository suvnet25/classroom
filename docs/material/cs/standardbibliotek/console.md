# Console

Console-klassen innehåller metoder och värden som är användbara när vi gör program som körs i just konsolen/terminalen.

Här är några exempel:

```csharp
//Rensa skärmen
Console.Clear();

//Sätt färgen på text
Console.ForegroundColor = ConsoleColor.Red;
//Sätt bakgrundsfärg
Console.BackgroundColor = ConsoleColor.Gray;

//Sätt markörens position. Nästa `Write` eller `WriteLine` kommer utgå därifrån
Console.SetCursorPosition(3, 4); //3 tecken in, 4 rader ned

Console.CursorVisible = false; // Döljer markören

int left = Console.CursorLeft; // Positionen på markören just nu i sidled
int top = Console.CursorTop; // Rad-positionen på markören just nu
```

??? "Ett enkelt ritprogarm / snake-spel"
    ```csharp
    int posX = 0;
    int posY = 0;

    while (true)
    {
        if (Console.KeyAvailable)
        {
            var key = Console.ReadKey(true);
            if (key.Key == ConsoleKey.Escape)
                break;
            if (key.Key == ConsoleKey.LeftArrow)
            {
                posX--;
            }
            if (key.Key == ConsoleKey.RightArrow)
            {
                posX++;
            }
            if (key.Key == ConsoleKey.UpArrow)
            {
                posY--;
            }
            if (key.Key == ConsoleKey.DownArrow)
            {
                posY++;
            }

            Console.SetCursorPosition(posX, posY);
            Console.Write("X");
        }
    }
    ```