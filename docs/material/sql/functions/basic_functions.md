---
    title: Funktioner
    description: Lär dig enkla SQL-funktioner
    icon: material/function
---

# Funktioner

SQL innehåller många inbyggda funktioner för att räkna, summera och analysera data.

Det vanligaste är att funktioner i SQL används tillsammans med `SELECT` för att beräkna värden från flera rader. Dessa används ofta tillsammans med [`GROUP BY`](group_by.md). Men för att först förstå konceptet med funktioner i SQL, låt oss titta på dem *utan* [`GROUP BY`](group_by.md).

## Enkla funktioner
Testa några funktioner som inte ens behöver någon tabell för att funka:
```sql
SELECT NOW();       -- aktuell datum+tid
SELECT PI();        -- pi (används väl aldrig men funkar som exempel...)
SELECT RAND();      -- slumpa flyttal mellan 0 och 1
SELECT ROUND(3.14159, 2)   -- Avrunda till två decimaler.
```

## Funktioner för att räkna på tabeller/kolumner
Dessa funktioner används nästan alltid med [`GROUP BY`](group_by.md) men vi kan testa dem utan. Låt oss använda funktionen `AVG()` som räknar ut medelvärdet (average).

Hämta ut genomssnittsbetyget för alla kurser i hela skolan:

```sql
SELECT AVG(Enrollment.Grade)
FROM Enrollment;
```

Eller för en viss student:
```sql
SELECT AVG(Enrollment.Grade)
FROM Enrollment
WHERE StudentId=31;
```

Eller för en viss kurs med kursnamn:
```sql
select AVG(e.Grade)
FROM Enrollment e
INNER JOIN Course c ON e.CourseId = c.Id
WHERE c.Name = "Databaser";
```

Men om vi vill få ut medelvärdet för alla studenter eller för alla kurser så behöver jo jobba med [`GROUP BY`](group_by.md).
