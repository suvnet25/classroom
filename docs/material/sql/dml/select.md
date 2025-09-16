---
    title: SELECT
    description: Lär dig hur man hämtar data från en tabell med SELECT.
    icon: material/database-search
---

# SELECT

För att hämta data från en tabell används kommandot `SELECT`. Du kan välja alla kolumner eller bara vissa. Ofta kombineras `SELECT` med `WHERE` för att filtrera resultatet, och med `ORDER BY` för att sortera.  

## Syntax
```sql
SELECT kolumn1, kolumn2, ...
FROM tabellnamn
WHERE villkor
ORDER BY kolumn ASC|DESC;
```

## Exempel
```sql
-- Hämta alla kolumner från tabellen
SELECT * 
FROM Students;

-- Hämta specifika kolumner
SELECT Name, DateOfBirth 
FROM Students;
```