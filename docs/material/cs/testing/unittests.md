# Enhetstester

> Bra att ha läst innan du läser detta avsnitt: [Lägga till paket](../../general/dotnet/packages.md).
> Läs också avsnittet om [Flera delprojekt i en lösning](../../general/dotnet/projects.md).

Enhetstester är små, isolerade tester som fokuserar på att verifiera att enskilda komponenter eller funktioner i din kod fungerar som förväntat. Dessa tester är vanligtvis snabba att köra och hjälper till att identifiera problem tidigt i utvecklingsprocessen. Efter att du skrivit ett gäng tester kan du köra igenom dem med kommandot `dotnet test`. Då får du se vilka tester som passerat eller inte. Några exempel på tester kan vara:

* Kontrollera att en metod returnerar rätt värde för given indata.
* Verifiera att en klass instansieras med korrekta startvärden.
* Säkerställa att en funktion uppdaterar ett objekt på rätt sätt.

## Skapa enhetstester med xUnit

xUnit är ett populärt testningsramverk för .NET som gör det enkelt att skriva och köra enhetstester. För att komma igång med xUnit, följ dessa steg:

1. Dina tester måste ligga i ett eget separat projekt. Så det är viktigt att du har en projektstuktur som exempelvis denna:

   ```
   /MySolution
     MySolution.sln
     /src
       /MyProject
         MyProject.csproj
     /tests
       /MyProject.Tests
         MyProject.Tests.csproj
   ```

   FORTSÄTTNING FÖLJER...