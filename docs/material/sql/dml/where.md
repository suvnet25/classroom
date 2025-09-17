---
    title: WHERE
    description: Lär dig hur man filtrerar resultat i en tabell med WHERE.
    icon: material/filter
---

# WHERE

För att filtrera vilka rader som ska hämtas, uppdateras eller tas bort används `WHERE`. Utan `WHERE` påverkas eller visas alla rader i tabellen.  

## Syntax
```sql
SELECT kolumn1, kolumn2, ...
FROM tabellnamn
WHERE villkor;
```
## Exempel
```sql
-- Hämta alla studenter födda efter 1990
SELECT Name, DateOfBirth
FROM Students
WHERE DateOfBirth > '1990-01-01';

-- Hämta alla studenter med e-post angiven (inte NULL)
SELECT Name, Email
FROM Students
WHERE Email IS NOT NULL;

-- Hämta alla studenter födda på 80-talet
SELECT Name, DateOfBirth
FROM Students
WHERE DateOfBirth BETWEEN '1980-01-01' AND '1989-12-31';

-- Hämta alla studenter med namn som börjar på 'A'
SELECT Name
FROM Students
WHERE Name LIKE 'A%';

-- Hämta alla studenter som heter Anna Andersson eller Björn Berg
SELECT Name
FROM Students
WHERE Name = 'Anna Andersson' OR Name = 'Björn Berg';
```