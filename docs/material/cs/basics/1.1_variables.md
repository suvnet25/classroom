---
    title: Variabler 
    description: Variabler håller data.
    icon: material/variable
---
# Variabler

Variabler i C# används för att lagra data som kan användas och ändras under programmets gång. 

En variabel har:

* Ett namn
* En typ
* Ett värde

Exempel:
```csharp
int myVariable = 42;
^typ    ^namn    ^värde
```

## Namn
Namnet på en variabel används för att referera till den i koden. Namnet måste börja med en bokstav eller ett understreck (_) och kan följas av bokstäver, siffror eller understreck. Namn är sk. 'case sensitive', vilket betyder att `myVariable` och `MyVariable` är två olika variabler. Det är lätt att göra fel här! Om du ser felmeddelandet ***"The name 'X' does not exist in the current context"*** så har du troligen stavat fel på variabeln, så dubbelkolla det.

## Typ

C# är ett sk. *strikt typat språk*, vilket betyder att varje variabel måste *deklareras* med en specifik datatyp. Några vanliga datatyper är:

* `int` - Heltal (t.ex. 1, 42, -7)
* `float` - Decimaltal (t.ex. 3.14f, -0.001f)
* `double` - decimaltal med högre precision (t.ex. 3.1415926183273)
* `string` - Text (t.ex. "Hello, World!")
* `bool` - Boolean (sant eller falskt, t.ex. true, false)
* `char` - Enskild tecken (t.ex. 'A', 'b', '3')

Läs mer om typer här: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types 

## Värde

Värdet skrivs på olika sätt beroende på typen:
* Heltal och decimaltal skrivs som vanliga siffror (t.ex. `42`, `3.14`)
* Text (strängar) skrivs inom dubbla citattecken (t.ex. `"Hello"`)
* Värden av type `char` skrivs inom enkla citattecken (t.ex. `'A'`)
* Boolean-värden skrivs som `true` eller `false`
* Värden av type `float` måste avslutas med bokstaven `f` (t.ex. `3.14f`)
* Värden av type `double` kan skrivas med eller utan bokstaven `d` (t.ex. `3.14` eller `3.14d`)
* Värden av type `decimal` måste avslutas med bokstaven `m` (t.ex. `3.14m`)

Skillanden mellan `double`och `float` är att `double` har högre precision och kan lagra större tal. 

## Deklaration och initiering

En variabel måste deklareras innan den används. Deklarationen anger variabelns namn och typ. Initiering är när du tilldelar ett värde till variabeln för första gången.

```csharp
int number; // Deklaration
number = 10; // Initiering
string message = "Hello"; // Deklaration och initiering på samma rad funkar också.
```

## Användning

När en variabel har deklarerats och initierats kan du använda den i din kod. Du kan läsa värdet, ändra det eller använda det i beräkningar.

```csharp
int a = 5;
int b = 10;
int sum = a + b; // sum kommer att vara 15
Console.WriteLine("Summan är: " + sum);
```

## Exempel på variabler

```csharp
int age = 25; // En variabel av typen int (heltal) med namnet age och värdet 25
string name = "Alice"; // En variabel av typen string (text) med namnet 'name' och värdet "Alice"
bool isStudent = true; // En variabel av typen bool (boolean) med namnet isStudent och värdet true
```

## Alla variabeltyper

| Typ     | Beskrivning                     | Exempel          |
|---------|---------------------------------|------------------|
| `int`   | Heltal (-2,147,483,648 till 2,147,483,647) | `42`, `-7`       |
| `long`  | Heltal (mycket stort)           | `9223372036854775807` |
| `float` | Decimaltal (flyttal)            | `3.14f`, `-0.001f`  |
| `double`| Decimaltal med högre precision   | `3.14159265358979` |
| `decimal`| Decimal (för finansiella beräkningar) | `19.99m` |
| `string`| Text                            | `"Hello, World!"`|
| `char`  | Enskild tecken                  | `'A'`, `'b'`       |
| `bool`  | Boolean (sant eller falskt)     | `true`, `false`   |
| `byte`  | Heltal (0 till 255)             | `255`            |
| `short` | Heltal (-32,768 till 32,767)    | `32000`          |
| `ushort`| Heltal (0 till 65,535)          | `60000`          |
| `uint`  | Heltal (0 till 4,294,967,295)   | `4000000000`     |
| `ulong` | Heltal (0 till 18,446,744,073,709,551,615) | `18000000000000000000` |
| `object`| Bas-typ för alla typer          | `new object()`   |
