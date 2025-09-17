---
tags:
  - OOP1-Övning
---

# Övning 08 Konstruktor

## Steg 4 : Konstruktorer

Vi vill kunna skapa ett `Contact`-objekt och direkt skicka med namn och telefonnummer, istället för att först skapa objektet och sedan sätta egenskaperna. Detta gör vi med en *konstruktor*.

1. Skapa en konstruktor i `Contact`-klassen som tar emot namn och telefonnummer som parametrar.
2. I konstruktorn sätter du egenskaperna `Name` och `Phone` med de värden som skickas in.
3. Uppdatera koden i `Main`-metoden så att den använder den nya konstruktorn för att skapa `Contact`-objekt.

Exempel på en konstruktor:

```csharp
public class TodoItem
{
    public string Title { get; set; }
    public bool IsDone { get; set; }

    // Konstruktor
    public TodoItem(string title)
    {
        Title = title;
        IsDone = false;
    }
}
```