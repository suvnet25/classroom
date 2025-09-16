---
    title: Skapa och hantera databas
    description: Grunderna i att skapa och hantera databaser i SQL med CREATE DATABASE, SHOW DATABASES, USE, SHOW TABLES och DESCRIBE.
    icon: material/database-cog
---

# Skapa och hantera databas

För att arbeta med SQL behöver du först skapa och hantera databaser. Här är några av de vanligaste kommandona:

* `CREATE DATABASE` – skapar en ny databas  
* `SHOW DATABASES` – listar alla databaser på servern  
* `USE` – väljer vilken databas du vill arbeta med  
* `SHOW TABLES` – visar alla tabeller i den valda databasen  
* `DESCRIBE` – visar information om kolumnerna i en tabell  

```sql title="skapa och hantera databas"
-- Skapa en ny databas
CREATE DATABASE school;

-- Visa alla databaser
SHOW DATABASES;

-- Välj en databas att arbeta med
USE school;

-- Visa alla tabeller i databasen
SHOW TABLES;

-- Visa kolumnerna i en tabell
DESCRIBE Students;
```