---
    title: ORDER BY
    description: Lär dig hur man sorterar resultat i en tabell med ORDER BY.
    icon: material/sort
---

# ORDER BY

För att sortera resultatet i en fråga används `ORDER BY`. Du kan sortera på en eller flera kolumner, och ange stigande (`ASC`) eller fallande (`DESC`) ordning.  

## Syntax
```sql
SELECT kolumn1, kolumn2, ...
FROM tabellnamn
ORDER BY kolumn1 [ASC|DESC], kolumn2 [ASC|DESC], ...;
```

## Exempel
```sql
-- Sortera studenter efter födelsedatum stigande (äldst först)
SELECT Name, DateOfBirth
FROM Student
ORDER BY DateOfBirth ASC;

-- Sortera studenter efter födelsedatum fallande (yngst först)
SELECT Name, DateOfBirth
FROM Student
ORDER BY DateOfBirth DESC;

-- Sortera på flera kolumner: först efter namn, sedan efter födelsedatum
SELECT Name, Email, DateOfBirth
FROM Student
ORDER BY Name ASC, DateOfBirth DESC;
```