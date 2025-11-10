---
title: Dapper – Vanliga metoder
description: Förklaring och exempel på de vanligaste Dapper-metoderna.
icon: material/function
---

# Vanliga Dapper-metoder

Här är en översikt över de mest använda metoderna i Dapper, med kort förklaring och exempel.

---

## Query<T>()

**Användning:** Hämtar data från databasen och mappar resultatet till en `List<T>` av objekt.

```csharp
var people = db.Query<Person>("SELECT * FROM Person").ToList();

foreach (var p in people)
{
    Console.WriteLine($"{p.Id}: {p.Name}");
}
```

---

## Execute()

**Användning:** Kör `INSERT`, `UPDATE` eller `DELETE` och returnerar antalet berörda rader.  

```csharp
int rowsAffected = db.Execute(
    "UPDATE Person SET Name = @Name WHERE Id = @Id",
    new { Name = "Kalle", Id = 1 }
);

Console.WriteLine($"{rowsAffected} rad(er) uppdaterade");
```

---


## QueryFirst<T>()

**Användning:** Hämtar den **första raden** i resultatet. Om inget hittas kastas ett undantag.  

```csharp
var person = db.QueryFirst<Person>(
    "SELECT * FROM Person WHERE Id = @Id",
    new { Id = 1 }
);

Console.WriteLine(person.Name);
```

---

## QuerySingle<T>()

**Användning:** Hämtar **exakt en rad**. Om fler eller färre rader hittas kastas ett undantag.  

```csharp
var person = db.QuerySingle<Person>(
    "SELECT * FROM Person WHERE Email = @Email",
    new { Email = "test@skola.se" }
);
```

---

## ExecuteScalar<T>()

**Användning:** Hämtar ett **enda värde** (t.ex. `COUNT`, `SUM` eller ett nytt ID).  

```csharp
int count = db.ExecuteScalar<int>(
    "SELECT COUNT(*) FROM Person"
);

Console.WriteLine($"Antal personer: {count}");
```
### Med SELECT LAST_INSERT_ID(); 

ExecuteScalar är t.ex. fiffig att använda med `SELECT LAST_INSERT_ID();` för att få ut id:t på den rad vi just INSERTade.

```csharp
int newId = db.ExecuteScalar<int>(
    "INSERT INTO Person (Name) VALUES (@Name); SELECT LAST_INSERT_ID();",
    new { Name = "Kalle" } );

Console.WriteLine($"Idt är: {newId}"); // skriver ut idt
```

---

# Sammanfattning

| Metod              | Användning                                   |
|--------------------|----------------------------------------------|
| **Query<T>()**     | Hämtar många rader som lista av objekt       |
| **Execute()**      | Kör `INSERT`, `UPDATE`, `DELETE`             |
| **QueryFirst<T>()**| Hämtar första raden, annars exception        |
| **QuerySingle<T>()**| Kräver exakt en rad, annars exception       |
| **ExecuteScalar<T>()** | Hämtar ett enda värde (t.ex. COUNT)      |

