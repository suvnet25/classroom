---
    title: DELETE
    description: Lär dig hur man tar bort rader i en tabell med DELETE FROM.
    icon: material/database-remove
---

# DELETE

För att ta bort rader från en tabell används kommandot `DELETE FROM`. Vanligtvis kombineras det med `WHERE` för att styra vilka rader som ska tas bort.  

## Syntax
```sql
DELETE FROM tabellnamn
WHERE villkor;
```

## Exempel
```sql
-- Ta bort en specifik student (med Id = 4)
DELETE FROM Students
WHERE Id = 4;

-- Ta bort flera studenter utan e-postadress
DELETE FROM Students
WHERE Email IS NULL;

-- Ta bort alla studenter i tabellen (var försiktig!)
DELETE FROM Students;
```