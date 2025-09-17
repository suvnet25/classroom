# Abstraktion

Abstraktion är en grundläggande princip inom objektorienterad programmering (OOP) som handlar om att fokusera på det väsentliga och ignorera det oväsentliga. Genom att använda abstraktion kan vi skapa modeller av verkliga objekt eller system genom att identifiera de viktigaste egenskaperna och beteendena, samtidigt som vi döljer detaljer som inte är relevanta för den aktuella kontexten.

En `person` i verkligheten är ytterst komplex. Om vi i ett datasystem skall hantera information om en person behöver vi inte all denna komplexitet. Vi kan istället skapa en abstraktion av en person som innehåller de egenskaper och beteenden som är relevanta för vårt system.

Exempel på en abstraktion av en person i C#:

```csharp
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}
```

I detta fall bryr vi oss tydligen bara om att personen heter något och hur gammal den är. Vi har ignorerat andra detaljer som hårfärg, längd, vikt, yrke, intressen, familjeförhållanden och så vidare.

I ett annat system kanske vi behöver hålla andra detaljer om en person. Vi har då en annan abstraktion av en person:

```csharp
public class Person
{
    public string Name { get; set; }
    public string SocialSecurityNumber { get; set; }
    public string Position { get; set; }
    public decimal Salary { get; set; }
    public DateTime HireDate { get; set; }
}
```

Att kunna analysera ett system och hitta de väsentliga delarna är en viktig färdighet inom mjukvaruutveckling. Genom att använda abstraktion kan vi skapa enklare och mer hanterbara modeller av komplexa system, vilket underlättar både design och implementering av programvara.