---
    title: INSERT
    description: Lär dig hur man lägger till rader i en tabell med INSERT INTO.
    icon: material/database-plus
---

# INSERT

För att lägga till nya rader i en tabell används kommandot `INSERT INTO`. Du kan antingen ange värden för alla kolumner, eller bara för vissa kolumner.  

## Syntax
```sql
INSERT INTO tabellnamn (kolumn1, kolumn2, kolumn3, ...)
VALUES (värde1, värde2, värde3, ...);
```

## Exempel
```sql
-- Lägg till en student (Id sätts automatiskt med AUTO_INCREMENT)
INSERT INTO Student (Name, Email, DateOfBirth)
VALUES ('Anna Andersson', 'anna@suvnet.se', '1990-05-12');

-- Lägg till en student utan att ange alla kolumner (Email blir NULL)
INSERT INTO Student (Name, DateOfBirth)
VALUES ('Björn Berg', '1985-11-23');

-- Lägg till flera studenter samtidigt
INSERT INTO Student (Name, Email, DateOfBirth)
VALUES
    ('Carla Carlsson', 'carla@suvnet.se', '1992-03-15'),
    ('David Dahl', 'david@suvnet.se', '1979-07-08');
```