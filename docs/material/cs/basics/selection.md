---
    title: Selektion
    description: If, else if och else är grundläggande kontrollstrukturer i C#.
    icon: material/call-split
---

# Selektion

*If*, *else if* och *else* är grundläggande kontrollstrukturer i C# som används för att styra flödet av programmet baserat på villkor. De gör det möjligt att utföra olika kodblock beroende på om ett visst villkor är sant eller falskt.

Här är ett enkelt exempel som visar hur if, else if och else fungerar i C#:

```csharp
int number = 10;

if (number > 0)
{
    Console.WriteLine("Numret är positivt.");
}
else if (number < 0)
{
    Console.WriteLine("Numret är negativt.");
}
else
{
    Console.WriteLine("Numret är noll.");
}
``` 

Här är samma flöde visualiserat som ett flödesschema:


```mermaid
flowchart TD
    A@{shape: stadium, label: "Programmet startar" } -- number = 10 --> B{number > 0?}
    B -- Ja --> C[Numret är positivt]
    B -- Nej --> D{number < 0?}
    D -- Ja --> E[Numret är negativt]@{ shape: display }
    D -- Nej --> F[Numret är noll]
    C --> G@{ shape: stadium, label: "Programmet slutar" }
    E --> G
    F --> G
```

Det går att endast ha ett *if*-statement, utan *else if* eller *else*. Det går också att ha flera *else if*-satser för att kontrollera flera olika villkor. Några exempel:

??? tip "Endast if"
    ```csharp
        int number = 10;
        if (number > 0)
        {
            Console.WriteLine("Numret är positivt.");
        }
    ```

??? tip "Flera else if"
    ```csharp
    int number = 10;
    if (number > 0)
    {
        Console.WriteLine("Numret är positivt.");
    }
    else if (number < 0)
    {
        Console.WriteLine("Numret är negativt.");
    }
    else if (number == 10)
    {
        Console.WriteLine("Numret är exakt tio.");
    }
    else
    {
        Console.WriteLine("Numret är noll.");
    }
    ```
## Switch

En annan användbar selektionsstruktur är *switch*, som är särskilt användbar när du har många olika möjliga värden att kontrollera. Här är ett exempel:

```csharp
char grade = 'B'; //Det troliga är att denna kommer nånstans ifrån, en databas eller liknande.

switch (grade)
{
    case 'A':
        Console.WriteLine("Utmärkt!");
        break;
    case 'B':
        Console.WriteLine("Bra jobbat!");
        break;
    case 'C':
        Console.WriteLine("Du klarade det.");
        break;
    case 'D':
        Console.WriteLine("Du behöver förbättra dig.");
        break;
    case 'F':
        Console.WriteLine("Du misslyckades.");
        break;
    default:
        Console.WriteLine("Ogiltigt betyg.");
        break;
}
```
Observera behovet av *break* i varje case. Utan dem skulle programmet fortsätta köra koden i de efterföljande casen, vilket oftast inte är önskvärt.

Observera också att typen på det som kommer efter switch måste vara samma som typen på case-värdena. I detta exempel är både *grade* och case-värdena av typen *char*.


