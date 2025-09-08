---
    title: Operatorer
    description: Olika operatorer i C#.
    icon: material/greater-than
---

# Operatorer
Operatorer används för att utföra operationer på variabler och värden. Här är några vanliga typer av operatorer i C#:

## Aritmetiska operatorer
| Operator | Beskrivning               | Exempel       |
|----------|---------------------------|---------------|
| `+`      | Addition                  | `x + y`       |
| `-`      | Subtraktion               | `x - y`       |
| `*`      | Multiplikation            | `x * y`       |
| `/`      | Division                  | `x / y`       |
| `%`      | Modulus (rest vid division)| `x % y`       |
| `++`     | Inkrement (ökar med 1)    | `x++`         |
| `--`     | Dekrement (minskar med 1) | `x--`         |


## Tilldelningsoperatorer
Tilldelningsoperatorer används för att ge variabler värden.  

| Operator | Beskrivning               | Exempel       |
|----------|---------------------------|---------------|
| `=`      | Tilldelar ett värde       | `x = 5;`      |
| `+=`     | Lägger till och tilldelar | `x += 3;` (x = x + 3) |
| `-=`     | Subtraherar och tilldelar | `x -= 2;` (x = x - 2) |
| `*=`     | Multiplicerar och tilldelar | `x *= 4;` (x = x * 4) |
| `/=`     | Dividerar och tilldelar   | `x /= 2;` (x = x / 2) |

Det finns fler. Läs mer här: [Assignment operators - C# reference](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/expressions#1221-assignment-operators)

## Jämförelseoperatorer 
Jämförelseoperatorer används för att jämföra två värden och returnerar en bool (true eller false). Resultatet av en jämförelse är alltså ALLTID en bool:

```csharp
bool isEqual = x > y; // true om x är större än y, annars false
```

| Operator | Beskrivning               | Exempel       |
|----------|---------------------------|---------------|
| `==`     | Lika med                  | `x == y`     |
| `!=`     | Inte lika med             | `x != y`     |
| `>`      | Större än                 | `x > y`      |
| `<`      | Mindre än                 | `x < y`      |
| `>=`     | Större än eller lika med  | `x >= y`     |
| `<=`     | Mindre än eller lika med  | `x <= y`     |

## Logiska operatorer
Logiska operatorer används för att kombinera eller modifiera booleska uttryck.
Exempelvis i if-satser:
```csharp
if (age > 18 && isMember)
{
    Console.WriteLine("Du är över 18 och medlem.");
}
``` 

| Operator | Beskrivning               | Exempel       |
|----------|---------------------------|---------------|
| `&&`     | Logiskt OCH               | `x > 5 && y < 10` |
| `||`     | Logiskt ELLER             | `x < 5 || y > 10` |
| `!`      | Logiskt INTE              | `!(x == y)` |

## Bitvisa operatorer
Bitvisa operatorer används för att manipulera individuella bitar i heltal. Överkurs och inte så vanligt förekommande i vardaglig programmering,

| Operator | Beskrivning               | Exempel       |
|----------|---------------------------|---------------|
| `&`      | Bitvis OCH                | `x & y`       |
| `\|`     | Bitvis ELLER              | `x \| y`      |
| `^`      | Bitvis XOR                | `x ^ y`       |
| `~`      | Bitvis NOT                | `~x`          |
| `<<`     | Vänsterskift              | `x << 2`      |
| `>>`     | Högerskift                | `x >> 2`      |

## Övriga operatorer
Dessa är lite överkurs men står här för att du ska veta att de finns.

| Operator | Beskrivning               | Exempel       |
|----------|---------------------------|---------------|
| `?:`     | Ternary operator (villkor) | `x > y ? x : y` |
| `??`     | Null-coalescing operator   | `x ?? y`      |
| `is`     | Typkontroll               | `x is int`    |
| `as`     | Typkonvertering           | `x as string` |
| `typeof` | Typobjekt för en typ      | `typeof(int)` |
| `await`  | Väntar på en asynkron operation | `await Task.Delay(1000)` |
| `new`    | Skapar en ny instans av en typ | `new MyClass()` |
| `checked`| Kontrollerar för överflöd  | `checked { int x = int.MaxValue + 1; }` |
| `unchecked`| Ignorerar överflödskontroll | `unchecked { int x = int.MaxValue + 1; }` |
| `ref`    | Passerar en variabel som referens | `void MyMethod(ref int x)` |
| `out`    | Passerar en variabel som utparameter | `void MyMethod (out int x)` |
| `params` | Anger en parameter som en parameterlista | `void MyMethod(params int[] numbers)` |
| `sizeof` | Returnerar storleken i byte av en typ | `int size = sizeof(int);` |
| `nameof` | Returnerar namnet på en variabel, typ eller medlem som en sträng | `string name = nameof(MyClass);` |
| `delegate` | Deklarerar en delegerad typ | `public delegate void MyDelegate(string message);` |
| `lock`   | Säkerställer att en kodsektion körs av endast en tråd i taget | `lock(myLock) { /* kod */ }` |
| `yield`  | Används för att returnera element i en iterator | `yield return item;` |
