# Properties

> Microsofts dokumentation om properties är bra: [Using properties](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/using-properties)

Properties är ett sätt att kapsla in fält i en klass, och ge kontrollerad åtkomst till dem. De fungerar som "smarta" fält som kan ha logik för att validera eller transformera data när de läses eller skrivs.

Properties används också av många olika ramverk och bibliotek i .NET-ekosystemet, så det är en bra vana att använda dem istället för publika fält.

Om du undersöker .NETs standardbibliotek så kommer du att se att nästan alla publika fält är properties.

## Vad är en property?

En property är en medlem i en klass. Den ser utåt ut som ett fält på så sätt att den kan läsas och skrivas till med punktnotation. Men, en property är *egentligen* en kombination av två metoder: en `get`-metod och en `set`-metod.

Så här skrivs en fullständig property:

```csharp
private string name; // privat fält, kallas för *backing field*

public string Name   // publik property
{
    get 
    { 
        return name; // Här returnerar vi värdet på det privata fältet `name`
    }    
    set 
    { 
        if (!string.IsNullOrWhiteSpace(value)) 
            name = value; 
        else 
            name = "Noname"; //Detta ser till att name aldrig blir en tom sträng
    }   
}
```

## Auto-implemented properties

Det finns också en kortare syntax för properties som inte behöver någon validering. De kallas för *auto-implemented properties*, och är väldigt vanliga:

```csharp
public string Name { get; set; }
```

Auto-implemented properties heter så på grund av att kompilatorn automatiskt skapar ett privat `backing field` bakom kulisserna för att lagra värdet.

## Properties med bara get eller set

Det är också möjligt att skapa properties som bara har en `get`- eller en `set`-del. En property med bara en `get`-del är *read-only*, medan en property med bara en `set`-del är *write-only*.

```csharp
public string ReadOnlyProperty { get; } // Kan bara läsas
public string WriteOnlyProperty { set; } // Kan bara skrivas till
```

#### Hur sätts en read-only property? 

Det kan göras på två sätt:

* I konstruktorn 
* Genom en *field initializer*

```csharp title="Konstruktor-exempel"
public class Person
{
    public string Name { get; } // Read-only property

    // Sätts i konstruktorn
    public Person(string name)
    {
        Name = name; //Namnet kan nu aldrig ändras efter att objektet är skapat
    }
}
```

```csharp title="Field initializer-exempel"
public class Person
{
    public string Name { get; } = "Noname"; // Sätts med en field initializer
}
```

Gemensamt för dessa två metoder är att `Name`-propertyn inte kan ändras utifrån klassen efter att objektet har skapats. Den är alltså *read-only*. Alla dessa tre metoder kan kombineras i samma klass.