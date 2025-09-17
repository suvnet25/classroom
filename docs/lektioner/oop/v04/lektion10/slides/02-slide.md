# Slide 2

# Properties

* Ett modernt sätt att skapa get- och set-metoder
* Ser ut som fält men **är egentligen metoder**
* Används i all professionell kod
* Kan ha olika accesslevel för get och set

```csharp
class TodoItem
{
    private string description;
    public string Description
    {
        get { return description; }
        set { description = value; }
    }

    private bool isDone;

    public bool IsDone
    {
        get { return isDone; }
        private set { isDone = value; } // Privat set-metod
    }
}
```
