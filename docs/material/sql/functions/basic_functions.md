---
    title: Funktioner
    description: Lär dig enkla SQL-funktioner
    icon: material/function
---

# Funktioner

SQL innehåller många inbyggda funktioner för att räkna, summera och analysera data.

De vanligaste används tillsammans med `SELECT` för att beräkna värden från flera rader. Dessa används ofta tillsammans med [`GROUP BY`](group_by.md).

## Enkla funktioner
Låt oss börja med att titta på några funktioner som inte behöver `GROUP BY` eller ens någon kolumn.
```sql
SELECT NOW();       -- aktuell datum+tid
SELECT PI();        -- pi (används väl aldrig men funkar som exempel...)
SELECT RAND();      -- slumpa flyttal mellan 0 och 1
SELECT ROUND(3.14159, 2)   -- Avrunda till två decimaler.
```




