# &#9733; Lab #2

## Klasser, objekt och Git

Första labben där vi jobbar med klasser och objekt i en struktur som påminner mer om hur verkliga projekt är uppbyggda, även om det är i en väldigt liten skala än så länge. Du kommer också få testa att använda Git i denna övning. När du är klar för dagen, pusha din kod till GitHub.

Det kan kanske verka som att det är mycket att göra i denna lab, men tänk på att ni inte måste hinna klart med allt! Det viktiga är att ni kommer igång med att tänka i klasser och objekt, och att ni får testa Git medan ni jobbar.

!!! Tip "Tips!"
    Jobba gärna i grupp! Åtminstonde för första delen, då det kan vara bra att diskutera och bolla idéer med någon annan.

## Beskrivning

Den finska pastaresturangen "Penne" vill ha ett nytt system för sina beställningsautomater. Den nya VDn är född på 70-talet och av rent nostalgiska skäl vill hen ha ett terminal-baserat system som påminner om de gamla DOS-programmen. Det ska gå att:

* Välja om du vill äta här eller ta med.
* Se vilka rätter som finns på menyn (4 - 6 stycken). De ska ha namn, beskrivning och pris.
* Göra en beställning genom att lägga till en eller flera rätter till beställningen.
* När klar, välja att betala med kort eller kontant.
* Få se ett kvitto på beställningen med ett ordernummer.
* För att använda "äta här eller ta med" till något kan vi låta orderpriset påverkas av detta. Det är inte ovanligt att det kostar lite extra att äta på plats.

Här är ett flödesschema över hur systemet ska fungera:

<p>
  <img src="../lab2.png" width=400>
</p>

Startkoden hittar du på Github Classroom. Länken dit får du av läraren under lektionen. Acceptera uppgiften och använd sedan `git clone` för att ladda ner koden till din dator. Du ska alltså inte använda *fork* i detta fall.

Startkoden innehåller:

* Ett projekt som heter `PenneCustomer`. ***Det är där all er kod ska ligga! Ingen annan stans.***
* Ett projekt som heter `Utils`, som innehåller klassen `Input` med diverse metoder för att läsa in och validera användarinput. Använd den eller skriv egen kod. Läs mer under [Appendix A](#appendix-a-utils).
* En kompilerad DLL-fil som heter `Strajp.dll`. Detta är ett färdigkompilerat bibliotek som simulerar ett betalsystem. Se [Appendix B](#appendix-b-strajp-dll) för mer information om hur det fungerar och hur ni använder det.

## Del 1 - Systemdesign och analys

Innan ni börjar koda är det ett antal saker som är viktiga att komma fram till.  

* Vilka klasser behövs? 
* Vilka egenskaper och metoder ska de ha? 
* Hur ska de interagera med varandra? 
* Gå igenom beskrivningen ovan och leta efter substantiv (som kan bli klasser eller egenskaper) och verb (som kan bli metoder).

*Rita gärna upp en enkel klassdiagram för att visualisera strukturen.*  

**När ni är klara med detta träffas vi alla i helgrupp och diskuterar det innan vi går vidare till implementering.**

## Del 2 - Implementering

Det går ju sedan att gå till väga på olika sätt för att utveckla programmet:

1. Det går att bygga allt utan UI: enbart klasser och metoder som testas genom att instansiera objekt och kalla på dess metoder. Använd enkkla `Console.WriteLine` för att se resultatet.
2. Det går också att börja med användargänssnittet (UI) enbart för att se hur flödet i programmet ska se ut, och sedan fylla på med klasser och metoder efterhand.
3. Eller så går det att jobba per funktionalitet och bygga lite av UI, lite av klasserna, lite av metoderna, och sedan fylla på med mer av varje efterhand. Alltså en funktion åt gången.

**I den här labben ska vi prova att bygga funktion för funktion. På så sätt går det också att göra tydliga commits med git.**

### Funktion 1 - Välja att äta här eller ta med
Titta på uppgiftsbeksrivningen ovan och börja med att implementera den första funktionen ENBART. *Tänk inte på de andra.* Utifrån de klasser vi har kommit fram till i del 1 att vi vill ha, vad händer i programmet när användaren väljer att äta här eller ta med? Vilka metoder och egenskaper behövs för det? Implementera bara det som behövs för den funktionen. 

!!! Tip "Dags för en commit!"
    När ni är klara med den första funktionen, testa att det fungerar, gör en commit i Git med ett bra meddelande (t.ex. "Add function to choose where to eat") och pusha upp koden till GitHub.

### Funktion 2 - Visa menyn
Nästa funktion är att visa menyn. Hur ska det gå till? Vad behövs för att du ska kunna göra det? Implementera bara det som behövs för den funktionen. När du är klar, testa att det fungerar, gör en commit i Git med ett bra meddelande (t.ex. "Add function to show menu") och pusha upp koden till GitHub.

## Betalning

När det gäller betalning, lägg till valet för att betala kontant först, och implementera det. När det fungerar, gör en commit i Git med ett bra meddelande (t.ex. "Add function to pay with cash") och pusha upp koden till GitHub. Sedan kan du lägga till valet för att betala med kort, och implementera det. Använd `Strajp.dll` för att simulera kortbetalningen. När det fungerar, gör en commit i Git med ett bra meddelande (t.ex. "Add function to pay with card") och pusha upp koden till GitHub.

## Appendix A - Utils

Projektet kommer med en statisk Input-klass som innehåller lite hjälpmetoder du kan använda istället för att behöva skriva dem själv. För att använda den behöver du skriva `using Utils;` högst upp i din fil (Varför då?). Dessa funktioner finns att använda:

* `string ReadString(string prompt)` - Skriver ut `prompt` och läser in en sträng från användaren.
* `int ReadInt(string prompt, int min, int max)` - Skriver ut `prompt` och läser in ett heltal från användaren. Om talet inte är inom intervallet `min` till `max` (inklusive) så skrivs ett felmeddelande ut och användaren får försöka igen.
* `int GetStringDirect(string prompt)` - Skriver ut `prompt` och läser in en bokstav eller siffra från användaren och returnerar den.

??? Tip "Exempel"
    ```cs
    using Utils;

    while (true)
    {
        int i = Input.GetIntDirect("Skriv en siffra mellan 0 och 9: ");

        Console.WriteLine("Du skrev: " + i);

        int x = Input.GetInt("Skriv ett tal mellan 1 och 100: ", 1, 100);
        Console.WriteLine("Du skrev: " + x);

        string s = Input.GetStringDirect("Skriv en siffra eller bokstav (Enter för att avsluta): ");
        Console.WriteLine("Du skrev: " + s);
    }
    ```

## Appendix B - Strajp DLL

**Strajp** är en simulering av ett faktiskt betalsystem, fast i en mycket förenklad form. Här är ett exempel på hur du använder det:

```cs
using Strajp;

PaymentProcessor processor = new PaymentProcessor(); // skapa en instans av betalningsprocessorn
processor.InitiatePayment(1000); // Sätt summa i öre
processor.EnterCardNumber("0000"); // Mata in kortnummer. 0000 har inga pengar, 1234 har 1000kr
bool succees = processor.TryCompletePayment(); //Genomför betalningen

if (succees)
    Console.WriteLine("Payment completed successfully.");
else
    Console.WriteLine("Payment failed.");

//Ett lite mer avancerat sätt använder sig av ett resultatobjekt. Välj själv vilket du föredrar:
PaymentResult result = processor.CompletePayment();
Console.WriteLine("Payment result: " + result.Success);
Console.WriteLine(result.Message);
```

## Appendix C - Finska Pastarätter

Om du inte kommer på vilka rätter som kan tänkas finnas så kommer här några förslag:

* **Makaronilaatikko 2.0** - Finsk klassiker (ugnsmakaronilåda med köttfärs) i modern version.
* **Kantarellikastike Penne** – penne i krämig kantarellsås
* **Porkkana Fusilli** – morotspasta i lätt smörsås med persilja
* **Puikulaperuna Gnocchi** – gnocchi på den berömda Lapplands-potatisen Puikula
* **Korvapuustipasta** – ”kanelbullepasta”, en dessert med kanel, kardemumma och glasyr

Vad de ska kosta är upp till dig!

## Appendix D - Snabbt klar?

Om du blir klar snabbt eller vill fortsätta utveckla den hemma, kommer här några förslag på saker att lägga till:

* Möjlighet att ta bort rätter från beställningen.
* Möjlighet att ändra antal av en rätt i beställningen.
* Rabattkoder: om du anger koden "PASTA20" så får du 20% rabatt på hela beställningen. 
* Extra för rabatt: Rabattkoden gäller bara innan kl 11:00 eller efter kl 20:00!
* (Svår) Tänk dig att när en beställning har lagts i automaten, så kommer ditt ordernummer upp på en annan skärm där du ser att den har tagits emot, om den är under tillagning eller om det är klar för avhämtning. Hur skulle du kunna skapa ett till program för att lösa detta?
* (Svår) Till detta kanske det behövs ett tredje program för kockarna i köket, där de kan se vilka inkommande beställningar som finns, och markera dem som "under tillagning" eller "klara". Hur skulle du kunna skapa ett sådant program?