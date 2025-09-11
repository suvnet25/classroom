# &#9733; Lab #1

## Problemlösning och debugging

Första labben! När dagen är över, skicka in er Program.cs via Google Classroom (Det finns in inlämningsuppgift för labben upplagd där). Det är helt ok att jobba i par eller i en mindre grupp i denna uppgift om ni vill, men det är också helt ok att jobba själv. Om ni jobbar fler än en person, skicka in en kopia av koden var på Google Classroom, och skriv en kommentar med namnen på alla som deltagit i arbetet.

## Uppgift

Ni hoppar in och jobbar lite extra på Skatteverket. En junior utvecklare har lämnat lite halvfärdig kod som ni kommer att få ta över.

**Ert jobb i stora drag:**

1. Fixa först buggarna i den befintliga koden.
2. Lägg till funktioner för att beräkna skatt för en person.

**I denna labb kommer du att skriva ett litet program. Du *kan* du komma att behöva:**

* Skapa och använda variabler
* Arbeta med arrayer eller listor samt loopar
* Skriva och anropa metoder
* Läsa och skriva till filer med **File.ReadAllLines / WriteAllLines**
* Använda **String**-metoder såsom `Split`, `IsNullOrWhitespace` eller `Trim`

## Kom igång

1. Skapa ett nytt konsolprojekt med `dotnet new console`
2. Kopiera in nedanstående kod in i `Program.cs`
3. Fixa buggarna så att programmet kan köras.
4. Följ instruktionerna som står under startkoden.

```csharp
class Program
{
    static void Main() //Ok nått är fel med progammet, det startar inte ens. Hinner inte fixa, har möte med chefen om 5 min. //Pelle Programmerare
    {
        while (false)
        {
            Console.WriteLine("VÄLKOMMEN TILL SKATTEVERKET 1.0\n");
            Console.WriteLine("1) Beräkna skatt för en person");
            Console.WriteLine("2) Beräkna skatt för flera personer från fil");
            Console.WriteLine("3) Avsluta\n");
            Console.Write("Val: ");

            string input = Console.ReadLine();

            if (input == 1)
            {
                // Bra kod för att beräkna skatt för en person kommer här. Efter fikapausen. //Pelle Programmerare
            }
            else if (input == 2)
            {
                Console.WriteLine("DET HÄR VALET FUNKAR INTE ÄNNU! GE MIG MER BETALT SÅ FIXAR JAG DET JAG LOVAR.");
            }
            else if (input == 3)
            {
                //Här ska progarmmet avslutas men vet inte exakt hur. Kanske inte är så viktigt heller. //Pelle Programmerare
            }
        }
    }
}
```

## Instruktioner från den tidigare utvecklaren

Ok det här programmet är tänkt att kunna beräkna inkomstskatt för en person.  
Så här ska det gå till har jag tänkt:  

**1.** Välj i menyn att du vill beräkna skatt för en person  
**2.** Du får då mata in personens *namn*, *födelseår*, *inkomst* och om den är *med i kyrkan eller inte*  
**3.** Programmet beräknar skatten och skriver ut resultatet på skärmen!

Skatterna som ska beräknas är:

* Om inkomsten är mindre än 24 900 kr så är skatten 0 kr
* Om du är över 65 är är det 65 300 kr som gäller istället för 24 900 kr
* Kommunalskatt 20% på den del av inkomsten som överstiger 24 900 kr
* Statlig skatt 30% på den del av inkomsten som överstiger 625 800 kr
* Kyrkoavgift 1% (om personen är med i kyrkan)

Exempel på resultat:

```
SKATTEKVITTERING
-----------------------------
Namn: Pelle Programmerare
Födelseår: 1965
Inkomst: 600000 kr
Kyrkotillhörighet: Ja

Kommunalskatt:     105020 kr
Statlig skatt:     30000 kr
Kyrkoavgift:       6000 kr
-----------------------------
Totalt att betala: 141020 kr
```

!!! Tip "Tips!"
    * Angrip små problem i taget. Inte allt på en gång.
    * Börja med att få programmet att kompilera.
    * Gör en del i taget. Börja med att samla in data från användaren tex.
    * Om du inte får till matten, gör en ungefärlig beräkning till att börja med. Om det ligger in en metod kan du enkelt komma tillbaka och förbättra den senare. Samma sak gäller andra metoder.
    * Använd debuggern för att förstå hur koden fungerar.

!!! Info "Hur lägger jag till nya metoder när det finns en Main-metod redan?"

    Du måste sätta dina metoder utanför Main-metodens måsvingar, men innanför klassens måsvingar. Du måste också sätta metoden till att vara `static`. Exempel:

    ```cs
    class Program
    {
        static void Main()
        {
            PrintMessage("Hej");
        }

        static void PrintManyTimes(string value)
        {
            Console.WriteLine(value);
        }
    }
    ```

## Strechgoals om det finns tid

(Eller om du vill jobba vidare hemma)  

1. Du matar också in personens hem-kommun (skattesatsen varierar ju mellan kommuner)
    - Läs in alla skattesatser från en fil ([finns att ladda ner här](skattesatser.csv)) och använd korrekt skattesats beroende på vilken kommun personen bor i.
2. Gör klart menyval 2, som läser in den fil användaren skriver in namnet på och beräknar skatt för alla personer i filen. Exempel på fil finns att [ladda ner här](personer.csv).
    - Skriv ut skattekvittona till en fil istället för på skärmen. Tex till `skattekvitton.txt`. (Tips: Metoden `File.AppendText()` kan vara bra här).
3. Hur skrivs siffror i kvittot ut på ett snyggt sätt utan allt för många decimaler? -> Undersök "format strings" i C#.
4. Använder du någon *felhantering*? Dvs, vad händer om användaren skriver in text när du förväntar dig en siffra? Eller en siffra där det ska vara text?
5. Istället för födelseår, skriv in personnummer och räkna ut åldern från det. 
    - Hur kan du validera att personnumret som skrivits in är ett korrekt skrivet personnummer?


