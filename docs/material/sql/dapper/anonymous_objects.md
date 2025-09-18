---
title: C# – Anonyma objekt och Dapper
description: Exempel på att skapa och använda anonyma objekt i C#, samt hur Dapper kan mappa resultat mot dem.
icon: material/progress-question
---

# Anonyma objekt i C#

I C# kan man skapa **anonyma objekt** “on-the-fly” utan att först definiera en klass.  
Detta är praktiskt för tillfälliga strukturer när man inte vill skriva en egen klass för små saker.

```csharp
var person = new { Id = 1, Name = "Kalle", Age = 30 };

Console.WriteLine($"Id: {person.Id}, Name: {person.Name}, Age: {person.Age}");
```

### Resultat vid utskrift
```
Id: 1, Name: Kalle, Age: 30
```

---

# Använda anonyma objekt med Dapper

När vi kör `SELECT` och särskilt `JOIN`-frågor kan resultatet innehålla kolumner som inte direkt matchar våra befintliga klasser. I stället för att skapa en massa små hjälparklasser för varje specialfall kan vi mappa mot anonyma objekt.

```csharp
var result = db.Query(
    @"SELECT s.Name AS StudentName,
             c.Title AS CourseTitle,
             e.Grade
      FROM Student s
      JOIN Enrollment e ON s.Id = e.StudentId
      JOIN Course c ON e.CourseId = c.Id");

foreach (var row in result)
{
    Console.WriteLine($"Namn: {row.StudentName}, Kurs: {row.CourseTitle}, Betyg: {row.Grade}");
}
```

### Möjlig utskrift
```
Namn: Anna Andersson, Kurs: Databaser, Betyg: 1
Namn: Kalle Karlsson, Kurs: OOP1, Betyg: 2
```

---

# Varför använda detta?

- Bra när resultatet **inte direkt matchar en klass** du har i koden.  
- Du slipper skapa en miljon klasser för alla möjliga JOIN-querys.
- Perfekt för JOIN-querys där du bara vill läsa ut resultatet.

