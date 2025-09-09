---
    title: Array
    description: Arrayer är en grundläggande datastruktur i C# som används för att lagra flera värden av samma typ i en enda variabel.
    icon: material/code-brackets
---


# Array

Arrayer är en grundläggande datastruktur i C# som används för att lagra flera värden av samma typ i en enda variabel. Det går att tänka på arrayer som en lista med värden. Några viktiga detaljer angående arrayer:

* En array har en fast storlek som bestäms när den skapas
* Varje element i arrayen kan nås via dess index, som börjar på 0
* Arrayer kan innehålla vilken datatyp som helst, inklusive egna klasser, men bara en typ åt gången

```csharp title="Exempel på array"
int[] numbers = new int[5]; // Skapar en array som kan hålla 5 heltal

numbers[0] = 10; // Tilldelar värdet 10 till första elementet
numbers[1] = 20; // Tilldelar värdet 20 till andra elementet

Console.WriteLine(numbers[0]); // Skriver ut första elementet (10)
Console.WriteLine(numbers.Length); // Skriver ut längden på arrayen (5)
```

Arrayer kan också initialiseras med värden direkt vid skapandet:

```csharp title="Initialisering av array med värden"
string[] fruits = ["Apple", "Banana", "Cherry"]; // Skapar och initierar en array med strängar

Console.WriteLine(fruits[1]); // Skriver ut andra elementet (Banana)
```

Det är vanligt att loopa igenom arrayer med en *for*-loop:

```csharp title="Loopa igenom en array"
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruits[i]); // Skriver ut varje frukt i arrayen
}
```

