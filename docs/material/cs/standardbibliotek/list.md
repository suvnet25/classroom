# List<T\>

Arrayer är ju bra och grunden till att kunna hantera flera värden i en och samma variabel. Men, de är ganska otympliga att använda i många olika situationer. Därför finns det en mer flexibel datastruktur som heter **List** i .NET:s standardbibliotek.

```csharp title="Exempel på List"
List<int> numbers = new List<int>(); //Skapar en tom lista av heltal

numbers.Add(10); //Lägger till 10 i listan
numbers.Add(20); //Lägger till 20 i listan
Console.WriteLine(numbers.Count); //Skriver ut antal element i listan (2)
Console.WriteLine(numbers[0]); //Skriver ut första elementet i listan (10)
```

List är en *generisk* datastruktur, vilket betyder att du måste specificera vilken typ av värden listan ska innehålla inom vinkelparenteser `< >` när du skapar den. Du kan skapa listor av vilken datatyp som helst, inklusive egna klasser.

Vanliga operationer med List:

| Operation | Exempel |
|-----------|---------|
| Skapa en tom lista av en viss typ | `List<string> names = new List<string>();` |
| Lägg till ett element i slutet av listan | `names.Add("Alice");` |
| Ta bort det första förekomsten av ett element från listan | `names.Remove("Alice");` |
| Hämta elementet på en viss indexposition | `string first = names[0];` |
| Returnera antalet element i listan | `int count = names.Count;` |
| Ta bort alla element från listan | `names.Clear();` |
| Kolla om ett element finns i listan | `bool exists = names.Contains("Alice");` |
