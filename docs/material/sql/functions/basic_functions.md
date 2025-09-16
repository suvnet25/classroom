---
    title: Funktioner
    description: Lär dig vanliga SQL-funktioner som COUNT, AVG, SUM, MIN och MAX.
    icon: material/function
---

# Funktioner

SQL innehåller många inbyggda funktioner för att räkna, summera och analysera data.  
De vanligaste används tillsammans med `SELECT` för att beräkna värden från flera rader.  

## Vanliga funktioner

| Funktion | Beskrivning                          | Exempel |
|----------|--------------------------------------|---------|
| COUNT()  | Räknar antal rader                   | Antal studenter |
| AVG()    | Medelvärde                           | Medelbetyg |
| SUM()    | Summerar värden                      | Totala poäng |
| MIN()    | Minsta värde                         | Äldsta student |
| MAX()    | Största värde                        | Senaste födelsedatum |

## Syntax
```sql
SELECT funktion(kolumn)
FROM tabell
WHERE villkor;
```
## Exempel
```sql
-- Ge en kolumn ett alias
SELECT Name AS StudentName, DateOfBirth AS Birthday
FROM Students;

-- Ge en tabell ett alias och använd det i WHERE
SELECT s.Name, s.Email
FROM Students AS s
WHERE s.DateOfBirth > '1990-01-01';

-- Alias på både tabeller och kolumner
SELECT s.Name AS StudentName, c.Name AS CourseName, e.Grade
FROM Students s
INNER JOIN Enrollments e ON s.Id = e.StudentId
INNER JOIN Courses c ON e.CourseId = c.Id;
```