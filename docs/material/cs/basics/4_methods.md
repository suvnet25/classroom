---
    title: Metoder
    description: Metoder är återanvändbara kodblock.
    icon: material/code-block-braces
---

# Metoder
Metoder (eller ibland kallat funktioner) är en bit namngiven kod som utför en specifik uppgift och som kan återanvändas flera gånger i ett program. För att inte program ska bli allt för långa och svårlästa är det ett måste att dela upp koden i mindre delar. Det är här metoder kommer in i bilden.

Metoder deklareras i turordning med:

* **Åtkomstmodifierare** (t.ex. `public`, `private`, `protected` etc.)
* **Returtyp** (t.ex. `void`, `int`, `string` etc.)
* **Metodnamn** (t.ex. `SkrivUtMeddelande`, `BeräknaSumma` etc.)
* **Parametrar** inom parentes (t.ex. `int tal1, int tal2`
* **Metodkropp** inom klamrar `{ }` som innehåller koden som ska köras när metoden anropas.

```csharp
void SkrivUtMeddelande()
{
    Console.WriteLine("Hej från metoden!");
}
```

## Länkar

* <https://learn.microsoft.com/en-us/dotnet/csharp/methods>
