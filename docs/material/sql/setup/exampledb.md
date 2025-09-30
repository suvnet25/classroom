---
    title: SQL
    description: Exempeldatabasen
    icon: material/database-import
---


# Exempeldatabas

För att göra exemplen tydliga använder vi genomgående en **skoldatabas**.  
Den innehåller fyra tabeller:  

- **Student** – information om studenter  
- **Teacher** – information om lärare  
- **Course** – information om kurser och vilken lärare som håller kursen  
- **Enrollment** – kopplingstabell mellan studenter och kurser, inklusive datum och betyg  

På så sätt kan vi visa vanliga scenarier i en databas:  
- *En-till-många-relationer* (t.ex. en lärare kan ha flera kurser)  
- *Många-till-många-relationer* (t.ex. en student kan gå flera kurser, och en kurs kan ha flera studenter)  
## Som ER-diagram
Som ER-diagram illustreras databasen såhär:
![ER-diagram](../img/studentdb_ER.png)

## Som relationsschema
Som relationsschema illustreras databasen såhär:
![Relationsschema](../img/studentdb_rel.png)

## Databasdefinition
Såhär ser databasen ut i SQL-kod. Se nedan för hur du kan lägga in den och querya mot den.

```sql
-- Skapa Student-tabellen med auto-inkrement på Id
CREATE TABLE Student (
    Id INT AUTO_INCREMENT PRIMARY KEY,   -- Auto-inkrementerande Id
    Name VARCHAR(100),                   -- Studentens namn
    Email VARCHAR(100),                  -- Studentens e-post
    DateOfBirth DATE                     -- Studentens födelsedatum
);

-- Skapa Teacher-tabellen med auto-inkrement på Id
CREATE TABLE Teacher (
    Id INT AUTO_INCREMENT PRIMARY KEY,   -- Auto-inkrementerande Id
    Name VARCHAR(100),                   -- Lärarens namn
    Email VARCHAR(100)                   -- Lärarens e-post
);

-- Skapa Course-tabellen med auto-inkrement på Id
CREATE TABLE Course (
    Id INT AUTO_INCREMENT PRIMARY KEY,   -- Auto-inkrementerande Id
    Name VARCHAR(100),                   -- Namnet på kursen
    Credits INT,                         -- Antal poäng för kursen
    TeacherId INT                        -- Lärarens Id som håller kursen
);

-- Skapa Enrollment-tabellen (mellanliggande tabell för många-till-många)
CREATE TABLE Enrollment (
    Id INT AUTO_INCREMENT PRIMARY KEY,   -- Auto-inkrementerande Id
    StudentId INT,                       -- Studentens Id
    CourseId INT,                        -- Kursens Id
    EnrollmentDate DATE,                 -- Datum för registreringen
    Grade INT                            -- Betyg för kursen (0 - IG, 1 - G, 2 - VG)
);
```

Skapa först en databas (`CREATE DATABSE yh_dittnamn_schooldb`). Sedan kan du öppna denna fil och köra run i just den databasen eller öppna en ny query och klistra in innehållet i filen.

[📥 Ladda ner exempeldatabasen (schooldb.sql)](schooldb.sql)
