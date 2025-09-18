---
title: Dapper - Nytt projekt
description: Kom igång med Dapper för att köra SQL mot MariaDB/MySQL i .NET.
icon: material/code-json
---
#Exempelprojekt
Nedan följer ett litet enkelt exempelprojekt

## Modell

En C#-klass motsvarar en tabell i databasen.

```
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
```


## SELECT

```
var students = db.Query<Student>("SELECT Id, Name, Email FROM Students").ToList();

foreach (var student in students)
{
    Console.WriteLine($"{student.Id}: {student.Name} - {student.Email}");
}
```

## INSERT
Här är ett exempel på `INSERT` med en parameteriserad fråga.
```
string name = "Pelle";
string email = "pelle@skola.com";
string dateOfBirth = "1990-01-01";

string sql = "INSERT INTO Students (Name, Email, DateOfBirth) VALUES (@Name, @Email, @DateOfBirth)";
db.Execute(sql, new { Name = "Krister", Email = "krister@example.com", DateOfBirth = new DateTime(1990, 1, 1) });
```

## Utan parametrar
Här är utan parametrar. Detta är osäkert för SQL-injections men kan vara enklare att förstå.
```
string sql = $"INSERT INTO Students (Name, Email, DateOfBirth) VALUES ('{name}', '{email}', '{dateOfBirth}')";
db.Execute(sql);
```
#


## UPDATE

```
string sql = "UPDATE Students SET Email = @Email WHERE Id = @Id";
db.Execute(sql, new { Email = "newmail@example.com", Id = 1 });
```

## DELETE

```
string sql = "DELETE FROM Students WHERE Id = @Id";
db.Execute(sql, new { Id = 1 });
```

