# Skapa .NET-projekt

Det finns flera sätt att skapa nya projekt i .NET och med VS Code! Hitta det som du gillar bäst. Här kommer ett sätt:

#### Skapa en mapp

1. Starta VS Code
2. Under `File` i menyn, välj `Open Folder...` 
3. Gå till en mapp där du vill skapa ditt projekt och skapa en ny mapp där. Döp den till projektets namn.
4. Se till att mappen är markerad eller dubbelklicka på den.
5. Klicka på knappen `Välj mapp` / `Select Folder` nere till höger.
6. Öppna en terminal i VS Code genom att klicka på `Terminal` i
7. Klicka på Yes, I trust the authors i rutan som ploppar upp.
8. När du är tillbaka i VS Code, bekräfta att samma namn som du just gav den nya mappen står högst upp till vänster. Detta är mycket viktigt! Om inte så är det troligen för att mappen inte var markerad när du tryckte på Välj mapp i föregående steg.

!!! note
    Det enda vi gjort hittills är att skapa en ny mapp och öppna den i VS Code. Du kan skapa en sån mapp på andra sätt också, och öppna den i VS Code.

#### Skapa nytt projekt

1. Nu ska vi skapa ett konsolprojekt i .Net med hjälp av den inbyggda terminalen i VS Code. Klicka på `Terminal` och sedan `New Terminal`.
2. Terminalen ploppar upp längst ner. Den kan se lite olika ut i olika system, och olika terminaler kan användas. Men oavsett, se till så att samma namn som du gav projektet och som syns högst upp i vänstra hörnet också står i terminalen. Skriv sedan `dotnet new console` och tryck på ++return++.
3. Lite text dyker upp och tre filer skapas. Du ser filerna i listan högst upp till vänster. Klicka på Program.cs
4. Nu kan du köra detta program i konsolen! Skriv `dotnet run`, vänta lite, och om allt gått bra kommer det stå `Hello, World!` där!

## Så vad gjorde vi just?

* Skapade en katalog
* Öppnade denna katalog i VS Code
* Skapade ett nytt c#-projekt med ett dotnet-kommando som skapar lite start-filet så att vi slipper göra det själva.

Detta kan man göra på en massa olika sätt! 

#### Ett annat mycket snabbare men på andra sätt krångligare är detta:

1. Öppna ett terminalfönster
2. Navigera till den plats där du vill skapa ditt projekt
3. Skriv `dotnet new console -o MittProjekt` och tryck ++return++.
4. Naviger in i den nya katalogen med `cd MittProjekt`
5. Öppna VS Code i denna katalog med `code .`
6. Kör programmet med `dotnet run`
7. Klart!
