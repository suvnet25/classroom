Matte är ofta viktigt på olika sätt inom progammering. C# har därför en inbyggd klass som heter `Math` som innehåller många användbara matematiska funktioner och konstanter. Här är de vanligaste:

| Funktion/Konstant | Beskrivning | Exempel |
|-------------------|-------------|---------|
| `Math.Abs(x)` | Returnerar det absoluta värdet av `x` (dvs. tar bort eventuellt negativt tecken). | `Math.Abs(-5)` ger `5` |
| `Math.Pow(x, y)` | Returnerar `x` upphöjt till `y`. | `Math.Pow(2, 3)` ger `8` (2^3) |
| `Math.Sqrt(x)` | Returnerar kvadratroten av `x`. | `Math.Sqrt(16)` ger `4` |
| `Math.Round(x)` | Returnerar `x` avrundat till närmsta heltal. | `Math.Round(4.6)` ger `5` |
| `Math.Ceiling(x)` | Returnerar det minsta heltalet som är större än eller lika med `x`. | `Math.Ceiling(4.2)` ger `5` |
| `Math.Floor(x)` | Returnerar det största heltalet som är mindre än eller lika med `x`. | `Math.Floor(4.6)` ger `4` |
| `Math.Min(x, y)` | Returnerar det minsta av `x` och `y`. | `Math.Min(3, 5)` ger `3` |
| `Math.Max(x, y)` | Returnerar det största av `x` och `y`. | `Math.Max(3, 5)` ger `5` |
| `Math.PI` | Konstanten π (cirka 3.14159). | `Math.PI` ger `3.14159...` |
| `Math.Sin(x)` | Returnerar sinus av `x` (i radianer). | `Math.Sin(Math.PI / 2)` ger `1` |
| `Math.Cos(x)` | Returnerar cosinus av `x` (i radianer). | `Math.Cos(0)` ger `1` |
| `Math.Tan(x)` | Returnerar tangens av `x` (i radianer). | `Math.Tan(Math.PI / 4)` ger `1` |
| `Math.Log(x)` | Returnerar den naturliga logaritmen (bas e) av `x`. | `Math.Log(Math.E)` ger `1` |

Exempel:

```csharp
double radius = 5;
double area = Math.PI * Math.Pow(radius, 2); // Area av en cirkel
Console.WriteLine($"Area: {area}");

double hypotenusa = Math.Sqrt(Math.Pow(3, 2) + Math.Pow(4, 2)); // Pythagoras sats
Console.WriteLine($"Hypotenusa: {hypotenusa}");
```

Om du vill rita ut en våg med * på skärmen kan du använda `Math.Sin` för att beräkna y-värdena:

```csharp  
for (int y = 0; y < 20; y++)
{
    for (int x = 0; x < 120; x++)
    {
        double waveY = Math.Sin(x * 0.1) * 10 + 10; // Skala och förskjut y-värdet
        int waveYInt = (int)Math.Round(waveY); // Avrunda till närmsta heltal

        if (waveYInt == y)
        {
            Console.Write("*"); // Skriv ut stjärnan på rätt position
        }
        else
        {
            Console.Write(" "); // Skriv ut mellanslag
        }
    }
    Console.WriteLine(); // Ny rad efter varje y-nivå
}
```

## Vad mer kan du hitta på med denna matteklass?