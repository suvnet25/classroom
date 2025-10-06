# Enums

Enums (kort för "enumerations") är en speciell datatyp i C# som används för att definiera en uppsättning **namngivna konstanter**. De är användbara när du har en variabel som bara kan anta ett begränsat antal värden, vilket gör koden mer läsbar och lättanvänd.

Du har troligen redan använt enums utan att veta det om du har ändrat färgen i console-fönstret med `Console.ForegroundColor` eller `Console.BackgroundColor`. Dessa egenskaper använder enums för att representera olika färger, istället för siffror som är svåra att komma ihåg.

## Ett exempel

Säg att vi vill representera olika storlekar på kläder: Small, Medium, Large och ExtraLarge. Vilka olika sätt kan vi göra detta på? Tex kan vi använda heltal:

```cs title="Heltal"
int size = 1; // 1 = Small, 2 = Medium, 3 = Large, 4 = Extra
```

Eller så kan vi använda strängar:

```cs title="Strängar"
string size = "Medium"; // "Small", "Medium", "Large", "Extra"
```

Båda dessa sätt fungerar, men de har nackdelar. Med heltal är det svårt att komma ihåg vad varje nummer betyder, och med strängar finns det risk att vi råkar skriva fel (t.ex. "meduim" istället för "medium").

Enums löser dessa problem genom att ge namn åt varje värde, vilket gör koden mer självdokumenterande och minskar risken för fel.

```cs title="Enum"
enum Size
{
    Small,      // 0
    Medium,     // 1
    Large,      // 2
    ExtraLarge  // 3
}

Size size = Size.Medium;
```

Vi kan tex nu använda denna enum i en klass som representerar kläder    :

```cs title="Använda enum i klass"
class Clothing
{
    public string Name { get; set; }
    public Size Size { get; set; }

    public Clothing(string name, Size size)
    {
        Name = name;
        Size = size;
    }
}

Clothing shirt = new Clothing("T-Shirt", Size.Medium);
```

## Mer avancerat

Det går att göra mycket mer mer enums! Tex kan vi:

* Loopa igenom alla värden i en enum.
* Konvertera mellan enum och dess underliggande värde.
* Ändra den underliggande typen av enum.

### Loopa igenom värden

Vi kan använda `Enum.GetValues` för att få alla värden i en enum och loopa igenom dem.

```cs title="Loop genom enum"
foreach (Size size in Enum.GetValues(typeof(Size)))
{
    Console.WriteLine(size);
}
```

### Konvertera mellan enum och underliggande värde
Vi kan konvertera en enum till dess underliggande värde (som är ett heltal) och vice versa.

```cs title="Konvertera enum"
Size size = Size.Large;
int intValue = (int)size; // Konvertera enum till int
Console.WriteLine(intValue); // Output: 2
Size newSize = (Size)2; // Konvertera int till enum
Console.WriteLine(newSize); // Output: Large
```

### Underliggande typ
Som standard är den underliggande typen för en enum `int`, och den börjar räkna från noll. Det går dock att ändra detta till en annan heltalstyp (t.ex. `byte`, `short`, `long` etc.) genom att specificera det vid deklarationen.

```cs title="Underliggande typ"
enum Size : byte
{
    Small = 1,
    Medium = 2,
    Large = 3,
    ExtraLarge = 4
}
```