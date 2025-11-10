---
title: Constraints
description: Begränsningar som hjälper till att säkerställa dataintegritet i databaser. Inkluderar primary key, unique, not null, default, foreign key och cascading.
icon: material/lock
---

# Constraints

Constraints är begränsningar som är tänkta att hjälpa oss säkerställa att datan i våra tabeller är korrekt och konsekvent.

## Primary Key

**Primary Key Constraint:** En primär nyckel är en unik identifierare för varje rad i en tabell. Den används för att säkerställa att varje rad har en unik identifierare och kan användas som en hänvisning till andra tabeller. Är oftast av datatypen `INT` (och numreras automatiskt) men kan vara av annan typ med.

### SQL-exempel

```sql
-- Lägga till primary key när man skapar tabellen
CREATE TABLE Student (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    DateOfBirth DATE
);

-- Lägga till primary key i befintlig tabell
ALTER TABLE Teacher 
ADD PRIMARY KEY (Id);
```

## Unique

**Unique Constraint:** Unika begränsningar säkerställer att alla värden i en specifik kolumn eller en kombination av kolumner är unika inom tabellen. De förhindrar duplicerade poster i kolumnen (eller kolumnerna) som de tillämpas på. Används automatiskt med primary key men används sällan med annat.

### SQL-exempel

```sql
-- Lägga till unique när man skapar tabellen
CREATE TABLE Student (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE,  -- Email måste vara unik
    DateOfBirth DATE
);

-- Lägga till unique i befintlig tabell
ALTER TABLE Student 
ADD UNIQUE (Email);
```

## Not Null

**Not Null Constraint:** Denna begränsning förhindrar att en kolumn innehåller null-värden. Med andra ord kräver den att alla värden i kolumnen måste vara ifyllda.

### SQL-exempel

```sql
-- Lägga till not null när man skapar tabellen
CREATE TABLE Student (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,  -- Name måste anges
    Email VARCHAR(100) NOT NULL,
    DateOfBirth DATE
);

-- Lägga till not null i befintlig tabell
ALTER TABLE Student 
MODIFY COLUMN Name VARCHAR(100) NOT NULL;
```

## Default

**Default värde:** En default-begränsning låter dig ange ett standardvärde för en kolumn. Om inget värde anges när en ny rad läggs till i tabellen, används det angivna standardvärdet.

### SQL-exempel

```sql
-- Lägga till default när man skapar tabellen
CREATE TABLE Course (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Credits INT DEFAULT 5,  -- Om inget anges blir det 5 poäng
    TeacherId INT
);

-- Lägga till default i befintlig tabell
ALTER TABLE Course 
MODIFY COLUMN Credits INT DEFAULT 5;
```

## Foreign Key

**Foreign Key Constraint:** Begränsar relationer mellan tabeller genom att kräva att värden i en kolumn matchar värden i en (oftast) annan tabells primär nyckel. Detta används för att upprätthålla referentiell integritet och säkerställa att kopplingar mellan tabeller är giltiga. Denna typ av constraint skapar med andra ord inte kopplingar, utan begränsar istället kopplingar!

### SQL-exempel

```sql
-- Lägga till foreign key när man skapar tabellen
CREATE TABLE Course (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Credits INT,
    TeacherId INT,
    FOREIGN KEY (TeacherId) REFERENCES Teacher(Id)
);

-- Lägga till foreign key i befintlig tabell
ALTER TABLE Course 
ADD CONSTRAINT fk_teacher 
FOREIGN KEY (TeacherId) REFERENCES Teacher(Id);

-- För Enrollment-tabellen
ALTER TABLE Enrollment 
ADD CONSTRAINT fk_student 
FOREIGN KEY (StudentId) REFERENCES Student(Id);

ALTER TABLE Enrollment 
ADD CONSTRAINT fk_course 
FOREIGN KEY (CourseId) REFERENCES Course(Id);
```

## Cascading Delete

**Cascading delete** innebär att om du tar bort en rad i den överordnade tabellen (tabellen som innehåller primärnyckeln), kommer det automatiskt att radera alla relaterade rader i underordnade tabeller (tabeller med främmande nycklar). Detta är användbart för att upprätthålla referentiell integritet, dvs undvika kvarlämnade "föräldralösa" rader i underordnade tabeller.

### SQL-exempel

```sql
-- Foreign key med cascading delete
CREATE TABLE Enrollment (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    StudentId INT,
    CourseId INT,
    EnrollmentDate DATE,
    Grade INT,
    FOREIGN KEY (StudentId) REFERENCES Student(Id) ON DELETE CASCADE,
    FOREIGN KEY (CourseId) REFERENCES Course(Id) ON DELETE CASCADE
);

-- Lägga till i befintlig tabell
ALTER TABLE Enrollment 
ADD CONSTRAINT fk_student_cascade 
FOREIGN KEY (StudentId) REFERENCES Student(Id) ON DELETE CASCADE;

-- Nu kommer alla Enrollment-rader för en student automatiskt raderas
-- om studenten tas bort från Student-tabellen
```

## Cascading Update

På liknande sätt som cascading delete kan du använda **cascading update** för att uppdatera värden i underordnade tabeller när de matchande värdena i överordnade tabeller ändras. Används om id ändras.

### SQL-exempel

```sql
-- Foreign key med både cascading delete och update
CREATE TABLE Enrollment (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    StudentId INT,
    CourseId INT,
    EnrollmentDate DATE,
    Grade INT,
    FOREIGN KEY (StudentId) REFERENCES Student(Id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (CourseId) REFERENCES Course(Id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

-- Lägga till i befintlig tabell
ALTER TABLE Course 
ADD CONSTRAINT fk_teacher_cascade 
FOREIGN KEY (TeacherId) REFERENCES Teacher(Id) 
ON DELETE SET NULL 
ON UPDATE CASCADE;
```

## Komplett exempel med alla constraints

Här är exempeltabellerna från början, nu med constraints tillagda:

```sql
-- Drop old tables
SET FOREIGN_KEY_CHECKS = 0; -- för att få ta bort utan att constrainten ska skapa gnäll
DROP TABLE IF EXISTS `Enrollment`;
DROP TABLE IF EXISTS `Course`;
DROP TABLE IF EXISTS `Teacher`;
DROP TABLE IF EXISTS `Student`;
SET FOREIGN_KEY_CHECKS = 1;

-- Skapa Student-tabellen med constraints
CREATE TABLE Student (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    DateOfBirth DATE
);

-- Skapa Teacher-tabellen med constraints
CREATE TABLE Teacher (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE
);

-- Skapa Course-tabellen med constraints
CREATE TABLE Course (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Credits INT DEFAULT 5 NOT NULL,
    TeacherId INT NOT NULL,
    FOREIGN KEY (TeacherId) REFERENCES Teacher(Id) 
        ON DELETE RESTRICT 
        ON UPDATE CASCADE
);

-- Skapa Enrollment-tabellen med constraints
CREATE TABLE Enrollment (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    StudentId INT NOT NULL,
    CourseId INT NOT NULL,
    EnrollmentDate DATE DEFAULT CURRENT_DATE,
    Grade INT DEFAULT 0,
    FOREIGN KEY (StudentId) REFERENCES Student(Id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (CourseId) REFERENCES Course(Id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
```

**Notera:** I Course-tabellen använder vi `ON DELETE RESTRICT` istället för `CASCADE` för TeacherId. Detta förhindrar att en lärare raderas om den fortfarande har kurser kopplade till sig.
