# EF Core

Några paket måste installeras för att använda Entity Framework Core i ett ASP.NET Core-projekt. De vanligaste paketen är:

* `Microsoft.EntityFrameworkCore`
* En databasprovider, till exempel:
    * `Microsoft.EntityFrameworkCore.InMemory` (för testning och tidig utveckling)
    * `Microsoft.EntityFrameworkCore.Sqlite` 
    * `Microsoft.EntityFrameworkCore.SqlServer`

Lägg till dem med kommandot `dotnet add package <paketnamn>` i terminalen.

## Registrera DbContext

För att använda Entity Framework i ASP.NET Core registreras oftas DbContexten i Dependency Injection-containern i `Program.cs`. 
Glöm inte `using Microsoft.EntityFrameworkCore;` högst upp i filen! 

```cs
// För InMemory-databas
builder.Services.AddDbContext<YourDbContext>(options =>
    options.UseInMemoryDatabase("InMemoryDb"));

builder.Services.AddDbContext<YourDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("Data Source=servers.db")));

// Eller för SQL Server
builder.Services.AddDbContext<YourDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
```

`AddDbContext` är en extensionmethod som konfigurerar DbContexten för Dependency Injection. För att detta ska fungera krävs också att DbContext-klassen är definierad och har en konstruktor som tar `DbContextOptions<T>` som parameter:

```cs
public class AppDbContext : DbContext
{
    //Ta emot options via konstruktor och skicka vidare till basklassen
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options){}

    public DbSet<YourEntity> YourEntities { get; set; }
}
```

## Använda DbContext i Minimal APIs:

När DbContext är registrerad i DI-containern kan den injiceras i Minimal API-endpoints:

```cs
app.MapGet("/entities", async (AppDbContext db) =>
{
    return await db.YourEntities.ToListAsync();
});
```

OBS! För att se till så att databasen skapats (om du använder SQLite tex) kan du använda denna kod i `Program.cs` (efter `var app = builder.Build();`):

```cs
using var scope = app.Services.CreateScope();

var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
db.Database.EnsureCreated();
```

Detta funger bra för enklare applikationer och utvecklingsändamål. För mer avancerade scenarion, överväg att använda Entity Framework Migrations via CLI istället (Mer om det senare).

# Övning

I Bok-APIt från gårdagens lektion, lägg till en DbContext som hanterar böckerna i en SQLite-databas.