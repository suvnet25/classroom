# Slide 3

# Konstruktorer

* Specialmetod som körs när ett objekt skapas
* Används för att initiera objektets fält/egenskaper
* Ser till så att ett objekt inte kan skapas i ett "ogiltigt" tillstånd

```csharp
public class TodoItem
{
    public string Title { get; set; }
    public bool IsDone { get; set; }

    // Konstruktor
    // Namnet måste vara samma som klassens namn
    // OBS! Ingen returtyp, inte ens void. Det konstruktorn returnerar alltid en instans av klassen
    public TodoItem(string title)
    {
        Title = title;
        IsDone = false;
    }
}
```