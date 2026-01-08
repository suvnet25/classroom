---
tags:
  - OOP2-Övning
---

# Entity framework-övningar

## 1. Intro

### Sätt upp ett enkelt EF-projekt i konsolen

Starta projekt och installera nödvändiga paket:

```bash
> dotnet new console
> dotnet add package Microsoft.EntityFrameworkCore.Sqlite
```

Skapa en enkel databasmodell med en `Book`-klass och en `AppDbContext`-klass:

```cs
using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptionsBuilder options)
    {
        options.UseSqlite("Data Source=app.db");
    }

    public DbSet<Book> Books => Set<Book>();
}

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
}
```

### Använd databasen i `Program.cs` för att lägga till och hämta böcker:

```cs
using Microsoft.EntityFrameworkCore;

using var db = new AppDbContext();
db.Database.EnsureCreated(); // Skapar databasen om den inte finns

Book newBook = new Book { Title = "C# in Depth" };
db.Books.Add(newBook);
db.SaveChanges();

var books = db.Books.ToList();
foreach (var book in books)
{
    Console.WriteLine($"Book ID: {book.Id}, Title: {book.Title}");
}
```

!!! Info "Tips"
    Installera extentionen "SQLite" av alexcvzz i VSCode för att enkelt kunna inspektera SQLite databaser direkt i editorn.

### 2. Antikvariatet

Återskapa Antikvariatet-övningen från databasekursen med hjälp av Entity Framework Core och SQLite som databas.

### 3. Kattutställningen

Återskapa Hundutställnings-övningen från databasekursen med hjälp av Entity Framework Core och SQLite som databas! Se dock till så att det handlar om katter istället för hundar denna gång. Kika gärna på ditt databasschema du skapade för denna övning och se om det ser bra ut fortfarande och om du kan se hur du nu kan göra det som klasser i C# med EF Core.