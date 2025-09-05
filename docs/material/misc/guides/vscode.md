# VS Code-tips

## Auto-save

En av de första sakerna du bör göra när du börjar använda VS Code är att aktivera auto-save. Detta för att inte glömma att spara innan du kör ditt program. Gör så här:

1. Klicka på kugghjulet nere till vänster i VS Code
2. Välj "Settings"
3. Sök på "Auto Save" i sökrutan högst upp
4. Välj "onFocusChange" i dropdown-menyn för "Auto Save"

Klart! Nu sparas dina filer automatiskt när du byter fönster eller flik i VS Code.

## Dölja mappar

Det kan vara skönt att dölja vissa mappar i filutforskaren i VS Code, till exempel `bin` och `obj` som skapas när du bygger ditt projekt. Gör så här:

1. Tryck på kugghjulet nere till vänster i VS Code.
2. Välj `Settings`.
3. Sök på `exclude`.
4. Under Files:Exclude tryck på knappen `Add Pattern`. 
5. Skriv in namnet på mappen du vill dölja, t.ex. `**/bin` eller `**/obj`.

> `**` betyder att oavsett var i projektet mappen finns så kommer den att döljas.

## Snippets

Snippets i C# är fördefinierade kodmallar som kan användas för att snabbt infoga vanliga kodstrukturer i din kod. De kan snabba upp din kodning en aning, speciellt om du inte vill använda Co-Pilot eller liknande verktyg.

En vanlig snippet att använda är `cw`, som står för `Console.WriteLine()`. När du skriver `cw` och trycker på ++enter++ i en C#-fil i Visual Studio Code, kommer det automatiskt att expandera till:

```csharp
System.Console.WriteLine();
```

## Jag vill inte att det ska stå `System.` innan `Console.WriteLine()`!

Du kan fixa det genom att lägga till lite inställnignar i VS Code:

1. Klicka på `View`i menyn och sedan `Command Palette...`.
2. Skriv `snippets` och klicka på `Configure Snippets`
3. Skriv `csharp` och tryck på `csharp.json`
4. Lägg till följande i filen:
```json
{
	"Console.WriteLine": {
        "prefix": "cw",
        "body": [
            "Console.WriteLine();"
        ],
        "description": "Console.WriteLine"
    }
}
```
5. Spara filen och stäng den. Nu har du ändrat hur det inbyggda `cw` fungerar.
6. Prova genom att i en .cs-fil skriva `cw` och trycka på ++enter++ eller ++tab++.

Prova att lägga till en egen snippet också för `cr`! Viktigt att veta att de separata snippetsarna måste vara inom `{}` och separerade med kommatecken. Så i detta fall, efter den nästa sista `}` måste du skriva `,` (kommatecken) och sedan klistra in din nya snippet.

## Inbyggda snippets

Visual Studio Code har också inbyggda snippets för C#. Här är några exempel:

| Snippet | Beskrivning |
|---------|-------------|
| `while` | Skapar en while-loop |
| `for`   | Skapar en for-loop |
| `foreach` | Skapar en foreach-loop |
| `if`    | Skapar en if-sats |
| `try`   | Skapar en try-catch-sats |
| `prop`  | Skapar en egenskap (property) |
| `class` | Skapar en klass |
| `interface` | Skapar ett interface |
| `enum`  | Skapar en enum |
| `switch` | Skapar en switch-sats |