---
title: Pseudokod 
description: Använd pseudokod för att planera din kod.
icon: material/text
---

# Pseudokod

Pseudokod är ett sätt att beskriva algoritmer och programlogik på ett enkelt och lättförståeligt sätt, utan att använda ett specifikt programmeringsspråk. 

Det kan hjälpa dig att planera och strukturera kod innan du börjar skriva den i ett faktiskt språk som C#.

Det finns många sätt att skriva pseudokod, och inget är rätt eller fel. Det viktiga är att det är tydligt och lätt att förstå. Vad som är lätt att förstå beror på vem som ska läsa det och hur det är skrivet.

Ibland kan pseudokod likna ett riktigt programmeringsspråk:

```fortran
IF antal < 10 THEN
    PRINT "Antalet är mindre än 10"
ELSE
    PRINT "Antalet är 10 eller mer"
END IF
```

Ibland kan det vara ett naturligt språk skrivet som kommentarer i koden, för att strukturera vad koden ska göra innan den skrivs på riktigt:

```
// Kolla om antalet är mindre än 10

// Om det är det, skriv ut att antalet är mindre än 10

// Annars, skriv ut att antalet är 10 eller mer
```

En mall att utgå från kan vara:
```
Läs in X
Initiera variabler
Om/Vilka fall ...
  Gör ...
Annars ...
  Gör ...
Loop från … till …
Skriv ut resultat
```

Exempel som använder mallen:
```
Läs in antal
Initiera summa till 0
Om antal < 10
    Skriv ut "Antalet är mindre än 10"
Annars
    Skriv ut "Antalet är 10 eller mer"
Loop från 1 till antal
    Lägg till i summa
Skriv ut summa
```