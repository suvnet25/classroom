---
title: Boolska uttryck i SQL
description: Öva på att avgöra vad som är sant och falskt i SQL och förstå skillnaden mellan boolska och icke-boolska uttryck.
icon: material/checkbox-marked-circle-outline
---

# Boolska uttryck i SQL

I SQL används boolska uttryck (eng. *boolean expressions*) för att avgöra om något är **sant** eller **falskt**. Dessa uttryck används ofta i `WHERE`-satser, men kan också testas direkt med `SELECT`.

> **Tips:** Kör varje exempel med `SELECT` i din SQL-klient, t.ex.  
> ```sql
> SELECT 5 > 3
> ```

---

## 1. Vad är sant och vad är falskt (enkla uttryck)

Utan att använda något hjälpmedel, avgör vad som är **sant** och vad som är **falskt**.
**Kontrollera sedan** genom att köra uttrycken med `SELECT`.
I MariaDB returneras 1 eller 0 om det är **sant** eller  **falskt**. 

```sql
5 > 3
10 = 5
'Hej' = 'Hej'
'Hej' = 'Nej'
'Hej' <> 'Nej'
7 <= 8
8 <= 8
9 <> 9
4 < 4
TRUE
FALSE
2 + 2 = 4
15 > 20
100 <= 100
3.14 = 3
0 <> 0
5 >= 2
```

---

## 2. Vad är sant och vad är falskt (komplexare uttryck)

Nu introduceras **logiska operatorer**: `AND`, `OR` och `NOT`.  
Avgör först resultatet i huvudet, **verifiera sedan** genom att köra dem i SQL.

```sql
5 > 3 AND 10 = 10
7 <= 7 OR 8 > 10
NOT (5 = 5)
TRUE AND FALSE
FALSE OR TRUE
NOT FALSE OR TRUE
NOT FALSE AND TRUE
5 + 3 > 10 OR 2 * 2 = 4
3 + 2 = 5 AND 4 * 2 = 8
(10 > 2 AND 3 < 8) OR FALSE
4 = 4 AND 6 <> 6
100 > 50 AND 50 + 50 = 100
5 > 3 OR 8 < 7
'Hej' <> 'hej' AND 10 > 1 -- obs, case sensitive beror på inställningar. Testa!
```

---

## 3. Vad är boolskt och vad är inte boolskt

Ett **boolskt uttryck** returnerar alltid antingen `TRUE` eller `FALSE`.  
Avgör vilka av nedanstående som är **boolska** och vilka som **inte** är det.

```sql
TRUE
FALSE
3 + 9
10 > 5
'Hej' = 'Hej'
4 * 3
'Hej'
0
'True'
NOT TRUE
15 > 5 OR 10 < 3
8 = 8
3 > 1 AND 2 < 5
4 / 2 = 2
5 * 5
```

> Ett boolskt uttryck ger alltid `1` eller `0` eller `TRUE` eller `FALSE` beroende på databas.  
> Ett icke-boolskt uttryck ger ett tal, text, `NULL` eller något annat värde.

---

