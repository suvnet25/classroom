För att kunna använda en sträng som ett tal, t.ex. för att göra matematiska beräkningar, måste den först **parsas** (omvandlas) till en numerisk datatyp som `int` eller `double`. Detta kan göras med hjälp av metoder i .NET:s standardbibliotek.

```csharp title="Exempel på parsing"
string input = "123";
int number = int.Parse(input); // number blir 123

//Nu kan vi använda number i matematiska operationer:
int result = number + 10; // result blir 133
```

De andra numeriska datatyperna har liknande metoder för parsing, t.ex. `double.Parse()`, `float.Parse()`, `decimal.Parse()` osv.  

Det finns också en klass som heter `Convert` som har metoder för att konvertera mellan olika datatyper, inklusive strängar till tal:

```csharp title="Exempel på Convert"
string input = "456";
int number = Convert.ToInt32(input); // number blir 456
```

Skillnaden är att `Convert.ToInt32()` kan hantera `null` utan att kasta ett undantag, medan `int.Parse()` kommer att kasta ett undantag om strängen är `null`.

## TryParse
Det finns också en variant av Parse-metoderna som heter `TryParse()`. Denna metod försöker parsa strängen och returnerar en `bool` med värde `true` om parsningen lyckades, annars `false`, istället för att kasta ett undantag vid misslyckande. Detta är användbart för att undvika programkrascher vid felaktig inmatning.

```csharp title="Exempel på TryParse"
string input = "789";
if (int.TryParse(input, out int number))
{
    // Parsningen lyckades, number innehåller det parsade värdet
    Console.WriteLine($"Parsed number: {number}");
}
else
{
    // Parsningen misslyckades
    Console.WriteLine("Invalid input, could not parse to an integer.");
}
```

Den metoden använder en `out`-parameter för att returnera det parsade värdet om det lyckas. Läs mer om [out-parametrar här](../basics/methods.md).