# JSON

JSON (JavaScript Object Notation) är ett lättviktigt datautbytesformat som är enkelt för människor att läsa och skriva, och enkelt för maskiner att tolka och generera. JSON används ofta för att överföra data mellan datorer och program på internet.

JSON är uppbyggt av nyckel-värde-par (Key-Value Pairs) som separeras med ett kolon. Nyckeln är en textsträng och måste vara omgivet av citationstecken. Värdet kan vara:

* en sträng
* ett tal
* ett booleskt värde
* ett objekt
* en array
* null. 

Här är ett exempel på en JSON-struktur:

```json
{
  "string": "Hej hej!",
  "number": 42,
  "float": 3.14,
  "booleanTrue": true,
  "booleanFalse": false,
  "nullValue": null,

  "anotherObject": {
    "id": 1,
    "name": "Anna",
    "active": true
  },

  "arrayWithNumbers": [1, 2, 3, 4],

  "arrayOfObjects": [
    { "id": 1, "title": "Första" },
    { "id": 2, "title": "Andra" }
  ],

  "mixedArrayIsAlsoOK": [
    "text",
    123,
    false,
    null,
    { "key": "value" }
  ],

  "escapedString": "Radbrytning:\nCitat: \"hej\"",
  "unicodeFunkar": "Smiley: 😄"
}
```

Så:

**"sträng"** och sedan **{ }**? detta är ett json-objekt med nyckel-värde-par inuti.
**"string"** och sedan **[]**? detta är en array (lista) med värden inuti.
**"string"** och sedan ett **:** ? detta är en nyckel-värde-par där "string" är nyckeln och vad som än kommer efter kolon är värdet.

# Övningar

Använd denna online-editor när du skriver JSON: [Json Editor Online](https://jsoneditoronline.org/#left=local.weguje)

1. Skriv ett enkelt JSON-objekt som representerar en användare med följande egenskaper: `name`, `age`. Ge den valfria värden.
2. Skapa ett JSON-array som innehåller två stycken sådana objekt som du skapade i steg 1.
3. Lägg till en egenskap `isActive` (boolean) till varje användarobjekt i arrayen.
4. Till användarobjekten i arrayen, lägg till egenskapen `roles` som är en array av strängar. Lägg till minst två taggar för varje användare. Exempelvis `["admin", "editor"]`.
5. Hitta och rätta felet i följande JSON-kod:
```json
{
  "title": "Book Title",
  "author": John Doe,
  "year": 2020
}
```
6. Ändra så att pris är ett tal och inStock är en boolean enligt JSON-standard.
```json
{
  "product": "Laptop",
  "price": "999.99",
  "inStock": "true"
}
```
7. Slå ihop dessa två objekt till ett enda JSON-objekt.
```json
{ "id": 1, "name": "Lisa" }
{ "email": "lisa@example.com", "age": 29 }
```
8. Här är ett JSON-objekt som innehåller två pizzor med ingredienser:
```json
{
  "Maragarita": [ "tomat" , "ost" ],
  "Kapprischåsa": [ "tomat", "ost", "skinka"] 
}
```
Vad behöver ändras om dessa två pizzor istället ska ligga i en json-array?
```json
[
  HÄR VILL JAG HA PIZZORNA ISTÄLLET
]
```

# JSON i .NET

Det går lätt att arbeta med JSON i .NET med hjälp av `System.Text.Json`-biblioteket. Här är några exempel på hur man kan serialisera och deserialisera JSON-data.

```csharp
using System.Text.Json;

var Person = new Person { Name = "Anna", Age = 30 };

// Serialisera användarobjektet till JSON
string jsonString = JsonSerializer.Serialize(Person);
Console.WriteLine(jsonString);

// Deserialisera JSON tillbaka till ett användarobjekt
Person? deserializedPerson = JsonSerializer.Deserialize<Person>(jsonString);
Console.WriteLine($"Name: {deserializedPerson?.Name}, Age: {deserializedPerson?.Age}");

public class Person
{
    public string Name { get; set; } = string.Empty;
    public int Age { get; set; }
}
```

# Övningar Del 2

1. Återskapa `User`-klassen från tidigare exempel med egenskaperna `Id` (int) och `Name` (string). Skapa en instans av `User`, serialisera den till JSON och skriv ut resultatet.
2. Lägg till IsActive och Roles (array av strängar) till User-klassen. Skapa en instans med dessa nya egenskaper, serialisera till JSON och skriv ut resultatet.
3. Lägg in följande JSON-sträng för en bok i en textfil `book.json`:
```json
{
  "title": "C# Programming",
  "author": "John Doe",
  "year": 2021,
  "price": 49.99,
  "inStock": true
}
```
Läs in JSON-strängen från filen med hjälp av `File.ReadAllText`, deserialisera den till en `Book`-klass och skriv ut bokinformationen i konsolen. Skapa `Book`-klassen med lämpliga egenskaper.