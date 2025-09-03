---
title: Filsystemet
description: Grundläggande begrepp om filer och mappar i ett filsystem.
---

# Filsystemet

Det är ett måste att ha koll på filer och mappar(kataloger) som utvecklare och avancerad datoranvändare. Här är en snabb genomgång av de viktigaste begreppen.

#### Filer
Filer är enheter som används för att lagra data på en dator. De kan innehålla olika typer av information, såsom text, bilder, ljud eller programkod. Filer organiseras i ett hierarkiskt system av mappar (kataloger) för att underlätta åtkomst och hantering.

Filer innehåller faktiskt bara ettor och nollor (binär data). Det är filändelsen som avgör hur datorn ska tolka innehållet. Exempelvis så är `.txt` en textfil, `.jpg` är en bildfil och `.exe` är en körbar fil (program). Att filer har olika ikoner och att olika program startas när vi dubbelklickar på dem, har enbart med filändelsen att göra.

#### Mappar/Kataloger
Mappar, eller kataloger som de också kallas, är behållare som används för att organisera och lagra filer på en dator. De kan innehålla både filer och andra mappar, vilket skapar en hierarkisk struktur som gör det lättare att hitta och hantera data.

#### Sökväg
En sökväg är en sträng som anger platsen för en fil eller mapp i ett filsystem. Det finns två typer av sökvägar: absoluta och relativa.

* Absoluta sökvägar börjar från rotkatalogen och anger hela vägen till filen eller mappen, t.ex. `C:\Användare\DittNamn\Dokument\fil.txt`.
* Relativa sökvägar anger platsen i förhållande till den aktuella katalogen, t.ex. `Dokument\fil.txt` om du befinner dig i `C:\Användare\DittNamn`.

#### Rotkatalog
Rotkatalogen är den översta nivån i ett filsystem. På Windows-system är rotkatalogen vanligtvis representerad av en enhetsbokstav följt av ett kolon och ett snedstreck, t.ex. `C:\`. På Unix-baserade system, som Linux och macOS, är rotkatalogen representerad av ett snedstreck `/`.
Enhetsbokstaven representerar en specifik lagringsenhet, som en hårddisk eller en USB-enhet. Varje enhet har sin egen enhetsbokstav och rotkatalog.

#### Projektkalatalog
En projektkatalog är en specifik mapp som innehåller alla filer och underkataloger relaterade till ett specifikt projekt. Denna katalog fungerar som en central plats för att organisera och hantera projektets resurser, såsom källkod, dokumentation, konfigurationsfiler och andra nödvändiga komponenter.