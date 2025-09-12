# Paket

Paket är paketerade samlingar av kod som kan återanvändas i olika projekt. I .NET hanteras paket med hjälp av [NuGet](https://www.nuget.org/), som är den officiella pakethanteraren för .NET.

För att lägga till ett paket till ditt projekt använder du kommandot `dotnet add package <paket-namn>`. Detta kommando laddar ner paketet från NuGet-siten och lägger till en referens i din projektfil (`.csproj`).

## Exempel på att lägga till ett paket

Om du vill lägga till paketet `Bogus` till ditt projekt, kör följande kommando i terminalen:

```bash
dotnet add package Bogus --version 35.6.3
```

Detta kommer att ladda ner version 35.6.3 av `Bogus`-paketet och uppdatera din `.csproj`-fil med en referens till detta paket.
Du kan nu använda `Bogus`-biblioteket i din kod för att generera påhittad data, vilket är särskilt användbart för testning och utveckling. Läs mer om Bogus här: [Bogus på GitHub](https://github.com/bchavez/Bogus).

## Hantera paket
För att se vilka paket som är installerade i ditt projekt, kan du använda kommandot:

```bash
dotnet list package
```

Detta kommando visar en lista över alla paket som är installerade i ditt projekt, tillsammans med deras versioner.

## Massor av paket!

Det finns massor av paket att upptäcka. Ett paket för grafik är 

