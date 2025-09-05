Klassen `Random` i .NET-biblioteket används för att generera slumptal. Den kan vara användbar i olika scenarier, såsom spelutveckling, simuleringar, generera lösenord eller när du behöver slumpmässiga data för testning. 

## Slumpa fram ett tal
Enklaste sättet att bara få fram en slumpvis siffra är detta:

```csharp
int randomNumber = Random.Shared.Next();
Console.WriteLine(randomNumber);
``` 

Detta ger dig ett heltal mellan `0` och `Int32.MaxValue` (2,147,483,647).

Next() är en metod som returnerar ett icke-negativt slumpmässigt heltal. Om vi vill begränsa intervallet kan vi skicka in två argument, ett minimum och ett maximum:

```csharp
int randomNumberUnderHundred = Random.Shared.Next(100); // Slumpa fram ett tal mellan 0 och 99
Console.WriteLine(randomNumberUnderHundred);
```

Här ser vi en liten egenhet med Next(): Det högsta värdet (101 i detta fall) är exkluderat, så det största talet vi kan få är 100.

Det går också att ange både ett minimum och ett maximum:

```csharp
int randomNumberInCustomRange = Random.Shared.Next(50, 101); // Slumpa fram ett tal mellan 50 och 100
Console.WriteLine(randomNumberInCustomRange);
```

Så lätt är det att slumpa fram heltal! Nu är frågan, vad ska du ha det till?

??? tip "Några random idéer vad du kan prova att göra med Random"
    - Skapa en aliennamsgenerator som skapar namn med hjälp av listor med strängar.
    - Skapa en slumpmässig mening med hjälp av olika strängmetoder och listor med ord
    - Skapa en lösenordsgenerator som skapar lösenord utifrån olika krav:
        - Slumpad sträng med ett visst antal tecken
        - Random x antal ord med mellanslag
    - Gör en roulettsimulator som slumpmässigt väljer ett nummer mellan 0 och 36 samt färg
