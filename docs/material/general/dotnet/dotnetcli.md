---
title: DotNet CLI
description: Kom igång med .NET CLI (Command Line Interface) och lär dig grundläggande kommandon för att skapa, bygga och köra .NET-applikationer.
icon: material/console
---

# .NET CLI

> Bra att ha läst innan du läser detta avsnitt: [Terminalen](../datorkunskap/console.md).

.NET CLI (Command Line Interface) är .NET's kommandoradsverktyg som låter dig skapa, bygga, köra och publicera .NET-applikationer direkt från terminalen.  

Med kommandot `dotnet` kan du utföra en mängd olika uppgifter, från att skapa nya projekt till att hantera beroenden och paket. Här är några av de vanligaste kommandona du kan använda med .NET CLI:

| Kommando | Beskrivning | Exempel |
|----------|-------------|---------|
| `dotnet new` | Skapa ett nytt .NET-projekt eller fil. | `dotnet new console -n MyApp` skapar en ny konsolapplikation med namnet "MyApp". |
| `dotnet run` | Bygger och kör en .NET-applikation. | `dotnet run` kör applikationen i den aktuella katalogen. |
| `dotnet add package` | Lägger till ett NuGet-paket till ett projekt. | `dotnet add package Newtonsoft.Json` lägger till paketet Newtonsoft.Json till projektet. |
| `dotnet list` | Visar en lista över projektets beroenden, paket eller referenser. | `dotnet list package` visar alla NuGet-paket som är installerade i projektet. |
| `dotnet help` | Visar hjälp för .NET CLI och dess kommandon. | `dotnet help` visar en översikt över tillgängliga kommandon. |
| `dotnet test` | Kör enhetstester för en .NET-applikation. | `dotnet test` kör alla tester i projektet. |

## Länkar

Länk till officiell dokumentation: https://learn.microsoft.com/en-us/dotnet/core/tools/