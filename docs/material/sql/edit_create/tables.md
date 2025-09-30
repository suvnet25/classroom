---
    title: Skapa och redigera tabeller
    description: Skapa tabeller och redigera dem med ALTER TABLE (lägg till, ta bort, byta namn, ändra datatyp). Inkluderar vanliga datatyper.
    icon: material/table-edit
---

# Skapa och redigera tabeller

När du har valt en databas kan du skapa tabeller för att lagra data och sedan redigera dem vid behov. Vanliga kommandon:

* `CREATE TABLE` – skapar en ny tabell  
* `SHOW TABLES` – visar alla tabeller i databasen  
* `DESCRIBE` – visar kolumnerna i en tabell  
* `ALTER TABLE` – ändrar en tabell (lägg till/ta bort kolumn, byt namn, ändra datatyp)

## Vanliga datatyper
Precis som i C\# så jobbar SQL med olika datatyper:

| Datatyp        | Beskrivning                                         | Exempelvärde        |
|----------------|-----------------------------------------------------|---------------------|
| `INT`          | Heltal                                              | `42`                |
| `VARCHAR(n)`   | Text, max *n* tecken                                | `'Hej'`             |
| `CHAR(n)`      | Text med fast längd *n*                             | `'A'` (om `CHAR(1)`)|
| `TEXT`         | Längre text                                         | `'Lång beskrivning'`|
| `DATE`         | Datum (ÅÅÅÅ-MM-DD)                                  | `2025-09-15`        |
| `DATETIME`     | Datum + tid                                         | `2025-09-15 10:30:00` |
| `TIME`         | Klockslag                                           | `10:30:00`          |
| `DECIMAL(p,s)` | Exakt decimaltal (precision *p*, skala *s*)         | `1234.56`           |
| `FLOAT`        | Flyttal (ungefärligt värde)                         | `3.14`              |
| `BOOLEAN`      | Sant/Falskt (TRUE/FALSE eller 1/0)                  | `TRUE`              |

## Skapa tabell
Såhär skriver vi för att skapa en tabell:
```sql
-- Skapa en tabell med vanliga datatyper
CREATE TABLE Student (
    Id INT,                             -- Auto-inkrementerande Id
    Name VARCHAR(100),                  -- Studentens namn
    Email VARCHAR(100),                 -- Studentens e-post
    DateOfBirth DATE                    -- Studentens födelsedatum
);
```
## Visa tabeller och innehåll
```sql
-- Visa alla tabeller i databasen
SHOW TABLES;

-- Visa kolumnerna i en viss tabell
DESCRIBE Student;
```
## Primary key
Varje tabell i en databas behöver en **primärnyckel** (`PRIMARY KEY`) som unikt identifierar varje rad. Primary key är egentligen en **constraint**, vilket alltså begränsar just innehållet i denna kolumn. Det tvingar den att vara unik, den kan inte ha null-värde. Dessutom är en primärnyckel extra snabb att indexera (söka i).

Oftast använder man en kolumn som heter `Id`. Ibland ser man att folk döper den till `TableNameId` (t.ex. `StudenId`) men det är ju redundant (`Student.StudentId` blir kaka på kaka).
### Auto increment
Ofta låter man id-fälen  automatiskt få ett nytt värde för varje rad som läggs till.  I MySQL/MariaDB gör man detta med `AUTO_INCREMENT`:  
```sql
CREATE TABLE Student (
    Id INT AUTO_INCREMENT PRIMARY KEY,  -- Auto-inkrementerande Id
    Name VARCHAR(100),
    Email VARCHAR(100),
    DateOfBirth DATE
);
```

## Redigera tabellernas struktur
Enklast är om man gör rätt ifrån början men ibland kan man ändå behöva redigera tabeller.

```sql
-- 1) Lägg till en ny kolumn i Student
ALTER TABLE Student ADD COLUMN PhoneNumber VARCHAR(20);

-- 2) Byt namn på en kolumn i Teacher
ALTER TABLE Teacher RENAME COLUMN Name TO FullName;

-- 3) Ändra datatyp/längd på en kolumn i Course
ALTER TABLE Course MODIFY COLUMN Name VARCHAR(150);

-- 4) Ta bort en kolumn i Enrollment
ALTER TABLE Enrollment DROP COLUMN Grade;

-- 5) Byt namn på tabellen Student till Pupils
ALTER TABLE Student RENAME TO Pupils;

-- 6) Göra en kolumn auto_increment
ALTER TABLE Teacher MODIFY COLUMN Id INT AUTO_INCREMENT;
```