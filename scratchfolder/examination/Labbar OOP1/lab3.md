# &#9733; Lab #3

## Grupplabb

Detta är en grupplabb där ni får samarbeta i grupper om 3-4 personer. Det vi kommer öva i denna labb är följande:

* Grupparbete
* Flera projekt
* Konflikthantering
* Interfaces
* Git workflows (Feature Branch Workflow)

### Labben är uppdelad i fem steg:

1. Konflikter i ett konsolprojekt
2. Ett separat klassbiblioteksprojekt
3. Ett gemensamt interface 
4. En första enkelt implementation av interfacet
5. Egna implementationer av interfacet

Varje kapitel innehåller en beskrivning av vad ni ska göra, samt instruktioner för hur ni kan lösa uppgiften.

!!! Tip "Kommunicera, var metodiska och noggranna"
    Gå inte vidare till nästa kapitel förrän ni alla är klara med det föregående! Kommunicera tydligt med varandra i varje steg. Stressa inte, förstå vad ni gör och varför ni gör det. Fastnar ni? Fråga din lärare om hjälp pronto!

Programmet i sig är ganska enkelt: Ni ska skapa ett program som genererar och skriver ut en lista med namn. Genereringen av namn skall ske på lite olika sätt, men mer om det senare!

## Förberedelser

Se till att ställa in så att VS Code använder sig av `autofetch` för Git. Detta gör att VS Code automatiskt hämtar ändringar från remote-repot utan att du behöver göra det manuellt. Gör så här:

1. Öppna `settings` i VS Code (⚙️-ikonen nere till vänster -> Settings)
2. Sök på `autofetch`
3. Se till att inställningen är satt till `true`
4. Tiden kan sättas till 180 sekunder (3 minuter)

## Steg 1. Konflikter i ett konsolprojekt

Första delen går ut på att ni ska få testa att arbeta i ett gemensamt projekt och testa att lösa merge-konflikter.

1. **Varje person** i gruppen klonar ner repot från Github classroom till sen egen dator.
2. Projektet innehåller redan ett konsolprojekt med en `Program.cs`-fil, så ni ska **inte** skapa något nytt projekt i detta steg, inte heller skapa något nytt git-repo med `git init`, eftersom ni redan har ett repo.
3. **Varje person** i gruppen ska nu göra **en egen ändring** i `Program.cs`-filen, dvs lokalt på sin egen dator. Ändringen ni ska göra är att lägga till en eller flera rader som skriver ut ett välkomstmedelande till konsolen, och en fråga om hur många namn som ska genereras. Enkelt! 

*Hitta alltså på något på egen hand, prata inte med varandra om vad ni ska skriva, utan låt det bli olika för varje person.*

Exempel:

```csharp
Console.WriteLine("Hejhej hemskt mycket hej och välkommen till en helt fantastisk namn-generator!");
Console.WriteLine("Nu undrar jag, hur många namn vill du att vi ska generera åt dig idag?");
```

4. För detta steg, se till så att ni inte comittar och pushar direkt! Det kan vara hjälpsamt att ta detta lugnt och metodiskt för att förstå vad som händer. **TA DET LUGNT OCH STEG - FÖR - STEG**
    1. En person committar och pushar sin ändring till remote-repot på GitHub.
    2. De andra kan antingen vänta lite i VS Code (om `autofetch` är aktiverat) eller manuellt hämta ändringar från remote-repot med `git fetch` eller via VS Code-GUI:t.
    3. Observera, hur kan du se att det finns nya ändringar på remote-repot? T.ex. i VS Code-GUI:t eller konsolen?
    4. Utan att ha commitat något, vad händer om någon försöker köra en pull för att hämta ner ändringarna från remote-repot? **Testa!**
    5. Någon provar nu att committa och pusha sin egen ändring. Eftersom det nu finns en konflikt mellan dennes lokala ändring och den som redan finns på remote-repot, kommer Git att meddela att det finns en konflikt som måste lösas.

!!! Info "Lös merge-konflikter så här"
    Enkelt förklarat går det till så här:

    1. Git markerar de filer som har konflikter (i detta fall `Program.cs`).
    2. Öppna filen och leta upp konflikt-markeringarna (<<<<<<<, =======, >>>>>>>).
    3. Redigera filen manuellt för att lösa konflikten genom att välja vilken kod som ska behållas, eller kombinera koden på ett lämpligt sätt. Ta bort konflikt-markeringarna.
    4. Spara filen, lägg till den till staging area och gör en ny commit.
    5. Försök sedan pusha igen.

**Låt varje person i gruppen göra detta, så att alla får öva på att lösa merge-konflikter samt att alla får med en commit i början.**  


**Fråga:** Men hur ska koden se ut i slutet då?  
**Svar:** Ja det är ju upp till er att komma fram till tillsammans!  

**Fråga:** Men vem ska göra det och pusha den slutgiltiga versionen?  
**Svar:** Det är också upp till er att bestämma! Ni jobbar ju tillsammans, i grupp!  

## Steg 2. Ett separat klassbiblioteksprojekt

Sådär, nu har vi starten till vårt program! Nästa steg är att **skapa ett separat klassbiblioteksprojekt** som ska innehålla logiken för att generera namn. Vi vill skapa detta som ett separat proejkt för att hålla isär koden på ett tydligt sätt från användargränssnittet (konsolprojektet i detta fall), som kanske mest är ett sätt för oss att testa funktionaliteten i detta läge.

Detta steg är enklast om ni gör tillsammans på en persons dator. Alla ska alltså **INTE** göra detta steg på sina egna datorer.

!!! Tip "Testa att göra detta på en egen branch!"
    Om ni vill kan ni testa att göra detta på en egen branch, för att tillsammans testa hur det går till. Ni kommer i steg fem att skapa egna branches för era implementationer, så det är bra att öva på detta nu!

Gör så här:

1. Observera att det finns en `src`-mapp i rotmappen för repot. Detta är en konvention för att hålla alla källkodsfiler samlade på ett och samma ställe.
2. Lägg också märke till att det finns en mapp som heter `NameGen UI` i `src`-mappen. Detta är konsolprojektet som ni redan har jobbat med (Ni ser att det finns en `.csproj`-fil där inne, vilket betyder att det är ett c#-projekt).
3. Skapa nu ett nytt projekt i `src`-mappen som är av typen "Class Library" och döp det till `NameGenCore`.

!!! Info "Skapa ett nytt projekt"
    Det går att göra detta på olika sätt! Här är två sätt:  
    
    * **Via terminalen:** Navigera till `src`-mappen med `cd`-kommandot och kör sedan kommandot `dotnet new classlib -n NameGenCore`
    * **Via VS Codes** `solution explorer`: Klicka på `+`-ikonen bredvid `src`-mappen och välj "New Project...", välj sedan "Class Library" och döp det till `src/NameGenCore`.

4. Än så länge känner dessa projekt inte till varandra. Vår program.cs måste på något sätt veta att det finns ett till projekt här. Vi måste knyta ihop dem. Även detta går att göra på flera olika sätt:
    * Via terminalen: Navigera till `src/NameGenUI`-mappen med `cd`-kommandot och kör sedan kommandot `dotnet add reference ../NameGenCore/NameGenCore.csproj`
    * Via VS Codes `solution explorer`: Högerklicka på `NameGenUI`-projektet och välj "Add Project Reference...", markera sedan `NameGenCore`-projektet och klicka "OK".

> I båda fallen kommer `NameGenUI`-projektets .csproj-fil att uppdateras med en referens till `NameGenCore`-projektet. Titta i denna fil och se om ni ser något nytt där inne!

Se till att comitta och pusha era ändringar till remote-repot på GitHub, och se till så att alla i gruppen hämtar ner ändringarna.

## Steg 3. Ett gemensamt interface

*Låt en annan person i gruppen göra detta steg på sin dator, men gör det tillsammans så att alla förstår vad som händer.*

1. Nu ska ni definiera ett interface som ska användas för att generera namn. 
2. Detta interface ska ligga i `NameGenCore`-projektet.
3. Namnet på interfacet kan vara något passande som ni bestämmer tillsammans.
4. Interfacet skall definiera **en** metod, som ska returnera **en** sträng med ett namn.
5. När interfacet är skapat, se till att comitta och pusha ändringarna till remote-repot på GitHub, och se till så att alla i gruppen hämtar ner ändringarna.

## Steg 4. En första enkelt implementation av interfacet

*Låt ännu en annan person i gruppen leda detta steg på sin dator.*

1. Nu ska ni skapa en första implementation av interfacet som ni just skapade, så att ni kan testa att allt fungerar som det ska i Program.cs-filen i konsolprojektet (`NameGenUI`).
2. Skriv en klass som heter `OneNameGenerator` som implementerar interfacet ni skapade i föregående steg.
3. I denna klass, implementera metoden som genererar namn genom att helt enkelt returnera en hårdkodad sträng, t.ex. "Byggare Bob". Det är allt. Krångla inte till det i detta steg!
4. Nu, i `Program.cs`-filen i konsolprojektet, deklarera en variabel av typen av interfacet ni skapade, och instansiera den med hjälp av `OneNameGenerator`-klassen. Exempel:
    ```csharp
    INameGenerator nameGenerator = new OneNameGenerator();
    ```
5. Anropa metoden så många gånger som användaren angav i konsolen, och skriv ut namnet som returneras till konsolen (kommer ju alltid att bli samma namn i detta steg).
6. Testa att köra programmet och se att allt fungerar som det ska!
7. Se till att comitta och pusha era ändringar till remote-repot på GitHub, och se till så att alla i gruppen hämtar ner ändringarna.

## Steg 5. Egna implementationer av interfacet

Det är nu dags att varje projektmedlem skapar sin egen implementation av hur namn ska genereras, och vilken typ av namn det ska vara. Finns ju massor av namn att generera! Tex

* Typiska finska namn (ex: "Matti Perälä", "Liisa Virtanen", "Jukka Jokinen")
* Superhjältenamn (ex: "Järnmannen", "Lavakvinnan", "Eldpojken", "Snusprinsen")
* Robotnamn (ex: "RX-78", "T-800", "C-3PO", "R2-D2")
* Fantasy-namn (ex: "Eldorion", "Lunaria", "Thalor", "Zyphira")
* Piratnamn (ex: "Svartskägg", "Röda Roderick", "Kapten Krok", "Sjörövar-Jenny")
* Galaxer och stjärnor (ex: "Andromeda-X9", "Zeta Reticuli", "Orion Prime", "Vega-3")
* Nummernamn (ex: "Ett", "Två", "Tre", "Fyra", "Fem")
* Fångnummer från fängelser (ex: "AZ-3456", "BX-7890", "CY-1234")
* Alien namn (ex: "Xel'Naga", "Zorgath", "Kryllon", "Vortigaunt")

Osv osv osv. Ta något av ovan eller hitta på någon egen katergori!

**MEN**, gör det enkelt i början! Skicka tex tillbaka bara ett hårdkodat namn. Sen kan ni förbättra det senare genom att tex använda listor med namn och slumpa fram ett namn från listan, eller listor med delar av namn som kombineras slumpmässigt.

**Detta arbetsflöde skall följa det sk. "Git Feature Branch Workflow" där varje person skapar en egen feature branch för sin implementation.** Läs mer [här](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).

Detta betyder att ni måste följa denna arbetsgång:

1. Varje person skapar en egen branch från `main`-branchen, med ett passande namn, t.ex. `finnish-names`, `superhero-names`, `robot-names`, osv.
2. Varje person skapar sin egen implementation av interfacet i sin egen branch.
3. När implementationen är klar, gör en Pull Request (PR) från den egna branchen till `main`-branchen i GitHub-repot.
4. Låt någon annan i gruppen granska koden i PR:en och godkänn den om allt ser bra ut.
5. Slå ihop (merge) PR:en till `main`-branchen.
6. Testa att allt fungerar genom att hämta ner ändringarna från `main`-branchen till den egna datorn. Testa också att byta från `OneNameGenerator` till den nya implementationen och se att det fungerar som det ska.

## Extra

Ni har nu ett gäng implementationer för att generera namn. Låt nu användaren i konsolen välja vilken typ av namn som ska genereras genom att visa en meny med valmöjligheter. Beroende på vad användaren väljer, instansiera rätt implementation av interfacet och generera namn med den. Hur kan ni göra detta på ett snyggt sätt utan att använda en massa `if`-satser eller `switch`-satser?