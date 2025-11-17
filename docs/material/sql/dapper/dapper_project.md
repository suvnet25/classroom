---
title: Dapper - Nytt projekt
description: Kom igång med Dapper för att köra SQL mot MariaDB/MySQL i .NET.
icon: material/code-json
---
#Exempelprojekt
Nedan följer ett litet enkelt exempelprojekt

## Modell

En C#-klass motsvarar en tabell i databasen.

```csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
```


## SELECT

```csharp
var students = db.Query<Student>("SELECT Id, Name, Email FROM Student").ToList();

foreach (var student in students)
{
    Console.WriteLine($"{student.Id}: {student.Name} - {student.Email}");
}
```

## INSERT
Här är ett exempel på `INSERT` med en parameteriserad fråga.
```csharp
string name = "Pelle";
string email = "pelle@skola.com";
string dateOfBirth = "1990-01-01";

string sql = "INSERT INTO Student (Name, Email, DateOfBirth) VALUES (@Name, @Email, @DateOfBirth)";

// skapa ett anonymt objekt med new. I det sätt värdena från variablerna ovan.
// Notera skillnaden mellan stora (Properties) och små (variablerna från ovan) bokstäver:
db.Execute(sql, new { Name = name, Email = email, DateOfBirth = dateOfBirth });
```

## Utan parametrar
Här är utan parametrar. Detta är osäkert för SQL-injections men kan vara enklare att förstå.

Samma variabler som ovan.
```csharp
string sql = $"INSERT INTO Student (Name, Email, DateOfBirth) VALUES ('{name}', '{email}', '{dateOfBirth}')";
db.Execute(sql);
```



## UPDATE

```csharp
string sql = "UPDATE Student SET Email = @Email WHERE Id = @Id";
db.Execute(sql, new { Email = "newmail@example.com", Id = 1 });
```

## DELETE

```csharp
string sql = "DELETE FROM Student WHERE Id = @Id";
db.Execute(sql, new { Id = 1 });
```

