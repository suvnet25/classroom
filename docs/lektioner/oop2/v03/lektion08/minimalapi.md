---
tags:
  - OOP2-Övning
---

# Minimal API

Bra ord att kunna: **Endpoint**. Om en *route* är en väg till en resurs, så är en *endpoint* det som händer när man når till den vägens slut. I vårt fall betyder det den metod som körs när vår server tar emot och hanterar en viss förfrågan för en route som vår server kan hantera.

### Den minsta möjliga webservern

En server startar. Den lyssnar på inkommande HTTP-requests. Kommer det in en GET-request till `/ping`, så svarar servern med texten `pong`.

```cs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/ping", () => "pong");

app.Run();
``` 

### Returnera ett objekt som JSON

Servern konverterar automatiskt det som returneras från en endpoint till JSON.

```cs
app.MapGet("/user", () =>
{
    return new User { Id = 1, Name = "Anna" };
});

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

## Parametrar i URL:en

Parametrar i URL:en kan mappas till metoden i endpointen. Om parametern är av en enkel typ (int, string, bool, etc) så kan den anges som en parameter i metoden. Namnet på parametern i metoden måste matcha namnet i URL:en. Så i detta fall måste en GET-request komma till `/users/5` för att parametern `id` ska få värdet `5`.

```cs
app.MapGet("/users/{id}", (int id) =>
{
    return new User { Id = id, Name = "User " + id };
});
```

## Ta emot JSON data på servern

Den här endpointen tar emot en POST-request med en User i request-body:n och returnerar den skapade användaren med en 201 Created-statuskod. Request bodyn måste vara i JSON-format och matcha User-klassen.

```cs
app.MapPost("/users", (User user) =>
{
    // Här skulle du normalt spara användaren i en databas först
    return Results.Created($"/users/{user.Id}", user);
});
```

# Övning

Skriv ett API som har dessa routes. Skriv en i taget! Använd model bindsing med url routes och request body. Använd DI-containtern om du vill och hinner, annars är det ok med bara listor i program.cs.

* GET  /api  -> Ska returnera strängen "running"
* GET  /api/books -> ska returnera en lista med böcker med minst en bok
* GET  /api/books/{id} -> ska returnera endast en bok
* POST /api/books -> ska ta emot en bok i json-format och svara med en 201 Created
* GET /api/books/search?a=authorname -> Ska via en queryparameter ta emot ett namn och returnera en lista med alla böcker som matchar

**Bok-json**
```json
{
    "id": 1,
    "title": "Harry Potter and the Philosopher's Stone",
    "author": "J.K. Rowling",
    "year": 1997
}
```

**DTO-json:**
```json
{
    "author": "J.K. Rowling"
}
```
