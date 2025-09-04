---
    title: Terminalen
    description: Vad är terminalen/konsolen och hur används den?
---

# Terminalen

Även kallad *konsolen* eller *kommandotolken*
På engelska: *console*, *terminal*

Konsolen är ett textbaserat gränssnitt som låter användaren interagera med datorn genom att skriva kommandon. Konsolen används också ofta för att administrera system över internet. Program som inte behöve något grafiskt gränssnitt körs ofta i konsolen, då de är lättare och snabbare att utveckla.

## Starta terminalen

**Olika sätt i Windows**: 

* Tryck på ++win+r++, skriv `cmd` och tryck ++return++.
* Tryck på ++win++ och skriv direkt `cmd`, tryck ++return++ eller klicka på programmet som dyker upp.
* Tryck på ++win++ och skriv `term`, tryck ++return++ eller klicka på programmet som dyker upp.
* När du har navigerat till en katalog i utforskaren, skriv `cmd` i adressfältet och tryck ++return++. Då öppnas terminalen med den katalogen som arbetskatalog.

**Olika sätt i MacOS**:

* Tryck på ++cmd+space++ för att öppna Spotlight, skriv `terminal` och tryck ++return++.
* Öppna Finder, gå till Program > Verktyg och dubbelklicka på Terminal.
* Om du har terminalen i din docka, dra en katalog från Finder och släpp den på terminalens ikon i dockan. Då öppnas terminalen med den katalogen som arbetskatalog.

**Olika sätt i Linux**:

* Tryck på ++ctrl+alt+t++.

## Grundläggande inbyggda kommandon

| VAD                            | WINDOWS (CMD)                 | LINUX (Bash) / MacOS (Terminal) |
|--------------------------------|-------------------------------|---------------------------------|
| **Gå till mapp**               | `cd path\to\folder`           | `cd path/to/folder`             |
| **Gå bakåt**                   | `cd ..`                       | `cd ..`                         |
| **Lista filer och mappar**     | `dir`                         | `ls`                            |
| **Lista även dolda filer**     | `dir /a`                      | `ls -a`                         |
| **Lista filer av viss typ**    | `dir *.png`                   | `ls *.png`                      |
| **Rensa skärmen**              | `cls`                         | `clear`                         |
| **Skapa ny mapp**              | `mkdir minkatalog`            | `mkdir minkatalog`              |
| **Ta bort mapp (tom)**         | `rmdir minkatalog`            | `rmdir minkatalog`              |
| **Ta bort mapp (med innehåll)**| `rmdir /S minkatalog`         | `rm -r minkatalog`              |
| **Visa PATH-variabler**        | `path`                        | `echo $PATH`                    |
| **Skapa fil**                  | `echo text > file.txt`        | `echo "text" > file.txt` / `touch file.txt` |
| **Lägg till i fil**            | `echo mertext >> file.txt`    | `echo "mertext" >> file.txt`    |
| **Ta bort fil**                | `del file.txt`                | `rm file.txt`                   |
| **Visa innehåll i fil**        | `type file.txt`               | `cat file.txt`                  |
| **Kopiera fil**                | `copy a.txt b.txt`            | `cp a.txt b.txt`                |
| **Flytta/Byt namn på fil**     | `move a.txt b.txt`            | `mv a.txt b.txt`                |

!!! tip
    Du kan använda ++tab++ för att autocompleta fil- och mappnamn i terminalen. Skriv början av namnet och tryck ++tab++. Om det finns flera alternativ, tryck ++tab++ igen för att se en lista på möjliga alternativ.
