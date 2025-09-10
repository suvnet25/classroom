# Raylib

Kom igång med lite grafikprogrammering med hjälp av [RayLib](https://github.com/MrScautHD/Raylib-CSharp/). Raylib är ett enkelt och lättanvänt bibliotek för att skapa fönster, rita former, hantera input med mera.

För att komma igång snabbt, gör så här:

1. Skapa ett nytt konsolprojekt.
2. I terminalen, skriv följande kommando för att installera Raylib via NuGet:

```bash
dotnet add package Raylib-CSharp --version 5.0.0
```

Sedan, i din `Program.cs`, ersätt all kod med följande exempel:

```cs title="Enkelt exedmpel med en cirkel som går att styra med piltangenterna"
using Raylib_CSharp.Colors;
using Raylib_CSharp.Rendering;
using Raylib_CSharp.Windowing;
using Raylib_CSharp.Interact;

Window.Init(1280, 720, "Basic Window");
Raylib_CSharp.Time.SetTargetFPS(60);

//Startposition för cirkeln:
int x = 600;
int y = 400;

while (!Window.ShouldClose())
{
    Graphics.BeginDrawing();
    Graphics.ClearBackground(Color.Black);

    Graphics.DrawText("Basic Window!", 10, 10, 20, Color.White);

    if (Input.IsKeyDown(KeyboardKey.Left)) x -= 1;
    if (Input.IsKeyDown(KeyboardKey.Right)) x += 1;
    if (Input.IsKeyDown(KeyboardKey.Up)) y -= 1;
    if (Input.IsKeyDown(KeyboardKey.Down)) y += 1;

    //För att cirkeln inte ska försvinna utanför skärmen:
    if (x < 0) x = 0;
    if (x > 1280) x = 1280;
    if (y < 0) y = 0;
    if (y > 720) y = 720;


    Graphics.DrawCircle(x, y, 25, Color.Maroon);

    Graphics.EndDrawing();
}
```

Kör programmet med `dotnet run` i terminalen. Du bör nu se ett fönster med en cirkel som du kan styra med piltangenterna.

Detta är bara början! Läs mer om alla funktioner [här](https://github.com/MrScautHD/Raylib-CSharp/wiki)