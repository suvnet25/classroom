---
    title: Alias
    description: Lär dig hur man använder alias i SQL för att ge tabeller och kolumner kortare eller tydligare namn.
    icon: material/rename
---

# Alias

I SQL kan du använda **alias** för att ge tabeller eller kolumner ett alternativt namn i en fråga.  
Det gör koden mer läsbar och kan förkorta långa tabellnamn. Alias skrivs med nyckelordet `AS`, men `AS` kan också utelämnas.  

## Syntax
```sql
SELECT kolumnnamn AS nytt_namn
FROM tabellnamn AS alias;
```

## Exempel
```sql
-- Ge en kolumn ett alias
SELECT Name AS StudentName, DateOfBirth AS Birthday
FROM Student;

-- Ge en tabell ett alias och använd det i WHERE, utan AS
SELECT s.Name, s.Email
FROM Student s
WHERE s.DateOfBirth > '1990-01-01';
```
## Alias och JOINs
Alias blir extra nyttigt när vi jobbar med joins. Ofta blir join-satserna annars väldigt långa, samt att vi ibland har kolumner som heter samma sak i de två olika tabellerna.  Man kan göra alias på både tabeller och kolumner. Tydligast blir det ofta att använda AS på kolumnernas namn men inte på tabellernas - men det är ingen regel:

```sql
SELECT s.Name AS StudentName, c.Name AS CourseName, e.Grade
FROM Student s
INNER JOIN Enrollment e ON s.Id = e.StudentId
INNER JOIN Course c ON e.CourseId = c.Id;
```