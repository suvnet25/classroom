---
tags:
  - OOP1-Övning
---

# Övning - Lektion 05

Kika på dokumentationen om [String](../../../../material/cs/standardbibliotek/string.md) och 
[File](../../../../material/cs/standardbibliotek/file.md) om du behöver hjälp med strängar och filhantering.

#### 1. Hoppa över tomma rader
Skriv kod som läser in [denna textfil](./input04.txt). Filen innehåller en lista med namn, men alla rader är inte ifyllda. Skriv ut alla namn från filen, men hoppa över tomma rader.

#### 2. Meny
Skriv ett program som visar denna meny:
```
1. Visa dagens datum och tid
2. Lista alla namn
3. Avsluta

Val: 
```
Användaren ska kunna skriva in 1, 2 eller 3. Detta ska hända i de olika fallen: 

1. Dagens datum och tid skrivs ut.[^1]
[^1]: Använd `DateTime.Now` för att få dagens datum och tid. Läs mer [här](../../../../material/cs/standardbibliotek/datetime.md).
2. Programmet utför samma sak som i övning 1.
3. Programmet avslutas.

Om användaren skriver in något annat ska programmet skriva ut "Felaktigt val" och visa menyn igen. Efter varje val skall menyn visas igen, tills användaren väljer att avsluta.  

??? question "Behöver du lite hjälp? Här är pseudokod för menyn!"
    ```
    LOOPA oändligt
        VISA menyn
        LÄS in användarens val
        OM valet är 1
            VISA dagens datum och tid
        ANNARS OM valet är 2
            LISTA alla namn (samma som i övning 1)
        ANNARS OM valet är 3
            AVBRYT loopen
        ANNARS
            VISA "Felaktigt val"
    ```

??? tip "Om du snabbt blir klar, kolla här!"
    Om du blir klar snabbt, fundera på hur du kan göra menyn så användarvänlig och snygg som möjligt. Några exempel:

    * Hur kan du göra så att användaren inte behöver trycka enter efter att ha skrivit in sitt val?
    * Hur kan du göra så att menyn alltid visas på samma ställe i konsolfönstret?
    * Hur kan du göra så att menyn ser snyggare ut? Kanske med färger eller ramar?
    * Hur kan du göra så att menyn fungerar även om användaren skriver in små fel, t.ex. "  1 " eller "2 "?

#### 3. Metodifiera övning
Utgå från övningen "1. Hoppa över tomma rader". Du ska nu skriva två metoder som gör delar av vad det programmet gör.

1. Skriv en metod som tar en filsökväg som parameter och returnerar en array med alla rader i filen. Metoden skall kolla så att filen finns, och om den inte gör det skall den returnera en tom array.
2. Skriv en metod som tar en sträng som parameter och skriver ut den om den inte är tom. Anropa sedan metoden för varje rad i filen.
3. Använd dessa två metoder i ditt program för att läsa in filen och skriva ut raderna. Det ska funka precis som innan alltså.[^1]

[^1]: Vad du gjort nu kallas för att **"refaktorera"** koden, alltså att ändra dess struktur utan att ändra dess funktionalitet. Det är en viktig del av programmering att kunna göra koden mer läsbar och återanvändbar genom att bryta ut delar i metoder.