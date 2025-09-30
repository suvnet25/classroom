---
    title: GROUP BY
    description: Lär dig hur man grupperar resultat i SQL med GROUP BY och använder funktioner som COUNT, AVG och SUM.
    icon: material/chart-bar
---

# GROUP BY

`GROUP BY` används för att gruppera rader med samma värde i en eller flera kolumner.  
Det är vanligt att kombinera `GROUP BY` med funktioner som `COUNT`, `AVG`, `SUM`, `MIN` och `MAX`.  

## Vanliga funktioner som används med GROUP BY

| Funktion | Beskrivning                          | Exempel |
|----------|--------------------------------------|---------|
| COUNT()  | Räknar antal rader                   | Antal studenter |
| AVG()    | Medelvärde                           | Medelbetyg |
| SUM()    | Summerar värden                      | Totala poäng |
| MIN()    | Minsta värde                         | Äldsta student |
| MAX()    | Största värde                        | Senaste födelsedatum |

## Syntax
```sql
SELECT kolumn, funktion(kolumn)
FROM tabell
GROUP BY kolumn;
```
## Exempel och förklaring
```sql
-- Beräkna medelbetyg per kurs
SELECT c.Name AS CourseName, AVG(e.Grade) AS AverageGrade
FROM Course c
INNER JOIN Enrollment e ON c.Id = e.CourseId
GROUP BY c.Name;
```

### Steg 1
För att förstå detta kan vi föreställa oss att vi först får ut följande resultat:

| CourseName     | Grade    |
|----------------|----------|
| Databaser      | 1        |
| Databaser      | 2        |
| Databaser      | 0        |
| Databaser      | 2        |
|||
| OOP1           | 2      |
| OOP1           | 1      |
| OOP1           | 1      |

### Steg 2
Det som händer är att alla Databaser och alla OOP1 slås ihop till en:

| CourseName     | Grade    |
|----------------|----------|
| Databaser      | 1        |
|                | 2        |
|                | 0        |
|                | 2        |
|||
| OOP1           | 2      |
|                | 1      |
|                | 1      |

### Steg 3
Sedan summeras alla betyg Grade-kolumen för respektive CourseName (`GROUP BY c.Name`) och vi räknar ut medel med `AVG()` (summan/antal):

* Databaser: (1+2+0+2)/4 = 1.25
* OOP1: (2+1+1)/3 = 1.33

Det faktiska resultatet vi får för vår query blir alltså:

| CourseName     | AverageGrade    |
|----------------|----------|
| Databaser      | 1.25        |
| OOP1           | 1.33        |

## Fler exempel

```sql
-- Räkna hur många studenter som är registrerade i varje kurs
SELECT c.Name AS CourseName, COUNT(e.StudentId) AS AntalStudenter
FROM Course c
INNER JOIN Enrollment e ON c.Id = e.CourseId
GROUP BY c.Name;

-- Summera poäng (credits) per lärare
SELECT t.Name AS TeacherName, SUM(c.Credits) AS TotalaPoäng
FROM Teacher t
INNER JOIN Course c ON t.Id = c.TeacherId
GROUP BY t.Name;
```
## GROUP BY vs ORDER BY

Det är lätt att blanda ihop `GROUP BY` och `ORDER BY` eftersom båda påverkar resultatet i en fråga men de används till olika saker:

| Funktion     | Syfte                                                                 | Exempel                                      |
|--------------|----------------------------------------------------------------------|----------------------------------------------|
| **GROUP BY** | Grupperar rader för att kunna använda funktioner som COUNT, AVG, SUM | "Hur många studenter per kurs?"              |
| **ORDER BY** | Sorterar resultatet i en viss ordning (stigande/fallande)            | "Visa alla studenter i åldersordning"        |

Vi kan inte använda `GROUP BY` **utan** att använda oss av en funktion medan vi kan anva `ORDER BY` utan en funktion. 
