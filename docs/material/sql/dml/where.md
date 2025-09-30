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
WHERE boolean_expression;
```
## Boolska uttryck (boolean expression)
Boolska uttryck byggs upp med hjälp av jämförelseoperatorer och logiska operatorer och används i `WHERE`-satsen för att avgöra vilka rader som ska tas med.

## Jämförelseoperatorer
Används för att jämföra värden i en `WHERE`-sats. Resultatet blir alltid sant eller falskt.

| Namn | SQL | C# |
|------|-----|----|
| Lika med | `=` | `==` |
| Inte lika med | `<>` | `!=` |
| Större än | `>` | `>` |
| Mindre än | `<` | `<` |
| Större än eller lika med | `>=` | `>=` |
| Mindre än eller lika med | `<=` | `<=` |
| Mellan två värden | `BETWEEN a AND b` | `(x >= a && x <= b)` |
| Matchar mönster | `LIKE` | saknas  |
| Är NULL | `IS NULL` | `x == null` |
| Är inte NULL | `IS NOT NULL` | `x != null` |

---

## Logiska operatorer
Används för att kombinera flera villkor i en `WHERE`-sats.

| Namn | SQL | C# |
|------|-----|----|
| OCH | `AND` | `&&` |
| ELLER | `OR` | `||` |
| INTE | `NOT` | `!` |


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
