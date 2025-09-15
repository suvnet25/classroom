---
tags:
  - OOP1-Övning
---

# Övning 05 Metoder

Kika på dokumentationen om [String](../../../../material/cs/standardbibliotek/string.md) och 
[File](../../../../material/cs/standardbibliotek/file.md) om du behöver hjälp med strängar och filhantering.

## En meny i flera steg

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

1. Dagens datum och tid skrivs ut.[^1] Sätt texten till blå text.
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

#### 3. Metodifiera menyn
Nu ska vi snygga till menyn genom att dela upp koden i metoder. Målet är att koden ska bli mer läsbar och varje metod ska ha ett tydligt ansvar.

Du ska skriva följande metoder:

1. **PrintDateInBlue( )**
    * Tar inga parametrar och returnerar inget.
    * Skriver ut dagens datum och tid (DateTime.Now).
    * Texten ska visas i blå färg, och färgen ska återställas efteråt.

2. **PrintLines(`string path`)**
    * Tar en filsökväg som parameter (`path`).
    * Läser in alla rader från filen[^1] och skriver ut varje rad i filen som inte är tom.

3. **`string`GetInput( )**
    * Tar inga parametrar men returnerar användarens menyval som en sträng, så att det kan användas i Main-metodens if-satser.
    * Om användaren skriver in en tom rad, ska programmet säga till att man måste skriva något och be om nytt input.
    * Om användaren skriver "3", ska programmet avslutas med `Environment.Exit(0)`.

Använd sedan dessa metoder i ditt program för att göra samma saker som innan:

* Om valet är 1, skriv ut datum och tid i blått.
* Om valet är 2, skriv ut namnen från filen.
* Om valet är 3, avslutas programmet.

Efter varje val ska menyn visas igen tills användaren väljer att avsluta.

Se till så att metoderna blir "rena", dvs att de bara gör en sak var. Om en metod ska läsa in en fil, ska den inte också skriva ut något. Om en metod ska skriva ut en rad, ska den inte också läsa in filen.

När du är klar med denna övning har du gjotr vad som kallas för att **"refaktorera"** koden, alltså att ändra dess struktur utan att ändra dess funktionalitet. Det är en viktig del av programmering att kunna göra koden mer läsbar och återanvändbar genom att bryta ut delar i metoder.

[^1]: Du kan använda `File.Exists(path)` för att kolla om filen finns innan du försöker läsa in den, på så vis slipper du att ditt program kraschar om filen inte finns. Läs mer [här](../../../../material/cs/standardbibliotek/file.md).

## Refaktoreringsövning

Vi fortsätter med refaktorering och metoder! Hur skulle du kunna förbättra denna kod med hjälp av metoder? Den har nämligen några problem:

* Inga metoder: Allt sker sekventiellt. Detta gör det svårt att utöka programmet eller återanvända delar av koden.
* Kodrepetition: flera `Console.ForegroundColor = ConsoleColor.Red;` och `Console.WriteLine` för felmeddelanden.
* Nästlade kodblock i flera nivåer: if-satser i flera nivåer gör att det blir svårt att läsa.

```csharp
class Program
{
    static void Main()
    {
        Console.WriteLine("Ange ditt användarnamn:");
        string username = Console.ReadLine();

        if (!string.IsNullOrWhiteSpace(username))
        {
            Console.WriteLine("Ange ditt lösenord:");
            string password = Console.ReadLine();

            if (!string.IsNullOrWhiteSpace(password))
            {
                if (username == "admin" && password == "1234")
                {
                    Console.WriteLine("Inloggning lyckades!");
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Fel användarnamn eller lösenord.");
                    Console.ResetColor();
                }
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Lösenord får inte vara tomt!");
                Console.ResetColor();
            }
        }
        else
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Användarnamn får inte vara tomt!");
            Console.ResetColor();
        }
    }
}
```