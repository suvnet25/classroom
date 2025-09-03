---
title: Flowcharts 
description: Visuella diagram för att visa flöden.
icon: material/source-fork
---

# Flowcharts

Flowcharts används för att visuellt representera flödet av en process eller ett system. De består av olika symboler som representerar olika typer av händelser i flödet, och pilar som visar åt vilket håll flödet går. De vanligaste symbolerna är:

* **Start/Stop** - Oval, används för att markera början och slutet av flödet.
* **Process** - Rektangel, används för att representera en åtgärd eller operation.
* **Val** - Diamant, används för att representera ett beslut som leder till olika vägar i flödet.
* **Input/Output** - Parallellogram, används för att representera inmatning eller utmatning av data.

## Exempel

Här är ett enkelt exempel på ett flödesschema som visar en beslutsprocess (detta visar egentligen hur if/else fungerar):

```mermaid
flowchart TD
    A@{shape: stadium, label: "Börja här" } --> B[Något händer]
    B --> C{Är det sant?}
    C -- Ja --> D[Något annat händer]
    C -- Nej --> E[Något tredje händer]
    D --> F@{ shape: stadium, label: "Slut" }
    E --> F@{ shape: stadium}
```

## Loop

Här är ett exempel på en while-loop som upprepas ett antal gånger innan flödet avslutas.

```mermaid
flowchart TD
    A@{shape: stadium, label: "Start" } --> B[X = 0]
    B --> C{är **X** mindre än 5?}
    C -- Ja --> D[Gör något]
    D --> E[Öka X med 1]
    E --> C
    C -- Nej --> F[Gör något annat]
    F --> G@{ shape: stadium, label: "Slut" }
```

## Input/Output

Här är ett exempel som visar inmatning och utmatning av data.

```mermaid
flowchart TD
    A@{shape: stadium, label: "Start" } --> B@{ shape: in-out, label: "Ange ditt namn" }
    B --> C[Skapa hälsningsmeddelande]
    C --> D@{ shape: in-out, label: "Visa hälsning" }
    D --> E@{ shape: stadium, label: "Slut" }
```

## Mer avancerat exempel
Här är ett mer avancerat exempel som kombinerar flera element i ett flödesschema.

```mermaid
flowchart TD
    A@{shape: stadium, label: "Start" } --> Y@{ shape: in-out, label: "Visa välkomstmeddelande" }
    Y --> B@{ shape: in-out, label: "Ange ålder" }
    B --> C{Är åldern >= 13?}
    C -- Ja --> D@{ shape: in-out, label: "Visa innehåll" }
    C -- Nej --> E@{ shape: in-out, label: "Visa varning" } --> Y
    D --> F{Vill du registrera konto?}
    F -- Ja --> G@{ shape: in-out, label: "Hämta in data" }
    F -- Nej --> Y
    G --> H{Är data giltig?}
    H -- Ja --> I[Skapa konto] --> K@{ shape: stadium, label: "Slut" }
    H -- Nej --> J@{ shape: in-out, label: "Visa felmeddelande" } --> G
```

Det finns många fler olika fomer som används i flowcharts. Vill du läsa mer kan du titta här, och scrolla ner en bit: https://mermaid.js.org/syntax/flowchart.html