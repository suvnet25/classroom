---
    title: UPDATE
    description: Lär dig hur man uppdaterar rader i en tabell med UPDATE.
    icon: material/database-edit
---

# UPDATE

För att ändra värden i en eller flera rader används kommandot `UPDATE` tillsammans med `SET`. Vanligtvis kombineras det med `WHERE` för att styra vilka rader som ska ändras.  

## Syntax
```sql
UPDATE tabellnamn
SET kolumn1 = värde1, kolumn2 = värde2, ...
WHERE villkor;
```
## Exempel

```sql
-- Ändra en kolumn för en specifik rad (student med Id = 1)
UPDATE Students
SET Email = 'anna.ny@suvnet.se'
WHERE Id = 1;

-- Ändra flera kolumner samtidigt (student(er) med namnet 'Björn Berg')
UPDATE Students
SET Email = 'bjorn.berg@suvnet.se', DateOfBirth = '1986-01-01'
WHERE Id = 4;

-- Ändra alla rader i tabellen.
-- Var försiktig! Man vill nästan alltid ha med ett WHERE-villkor
UPDATE Students
SET Email = 'unknown@x.com';
```