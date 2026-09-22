# Raylib

Kom igång med lite grafikprogrammering med hjälp av [raylib-cs](https://github.com/raylib-cs/raylib-cs). Raylib är ett enkelt och lättanvänt bibliotek för att skapa fönster, rita former, hantera input med mera.

För att komma igång snabbt, gör så här:

1. Skapa ett nytt konsolprojekt.
2. I terminalen, skriv följande kommando för att installera raylib-cs via NuGet.  
   **Obs:** Du måste stå i projektmappen i terminalen när du kör kommandot.

```bash
dotnet add package Raylib-cs --version 8.1.0
```

Sedan, i din `Program.cs`, ersätt all kod med följande exempel:

**Enkelt exempel med en cirkel som går att styra med piltangenterna**

```csharp
using Raylib_cs;

const int screenWidth = 1280;
const int screenHeight = 720;
const int radius = 25;

Raylib.InitWindow(screenWidth, screenHeight, "Basic Window");
Raylib.SetTargetFPS(60);

// Startposition för cirkeln:
int x = 600;
int y = 400;

while (!Raylib.WindowShouldClose())
{
    if (Raylib.IsKeyDown(KeyboardKey.Up)) y -= 1;
    if (Raylib.IsKeyDown(KeyboardKey.Left)) x -= 1;
    if (Raylib.IsKeyDown(KeyboardKey.Down)) y += 1;
    if (Raylib.IsKeyDown(KeyboardKey.Right)) x += 1;

    // För att cirkeln inte ska försvinna utanför skärmen:
    if (x < radius) x = radius;
    if (x > screenWidth - radius) x = screenWidth - radius;
    if (y < radius) y = radius;
    if (y > screenHeight - radius) y = screenHeight - radius;

    Raylib.BeginDrawing();

    Raylib.ClearBackground(Color.Black);

    Raylib.DrawText("Basic Window!", 10, 10, 20, Color.White);
    Raylib.DrawCircle(x, y, radius, Color.Maroon);

    Raylib.EndDrawing();
}

Raylib.CloseWindow();
```

Kör programmet med `dotnet run` i terminalen. Du bör nu se ett fönster med en cirkel som du kan styra med piltangenterna.

Detta är bara början! Läs mer om raylib-cs [här](https://github.com/raylib-cs/raylib-cs/wiki).

# Enklare saker att testa på egen hand

- Skapa en rektangel som kan styras med tangenterna W, A, S och D.
- Skapa en `for`-loop som ritar 10 cirklar på rad med olika färger.
- Skapa ett program där användaren kan klicka med musen för att placera ut cirklar på skärmen.
- Skapa ett enkelt spel där en cirkel ska undvika att bli träffad av fallande rektanglar.
