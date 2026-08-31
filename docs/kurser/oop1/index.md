---
weekProgress: true
startDate: 2026-08-31
totalWeeks: 14
---

# OOP1 - Lektionsöversikt

**Startdatum:** 2026-08-31

### Vecka 1 (v36)
- **01** Intro  
- **02** Variabler, if-sats, array, loop  
- **03** pseudokod problemlösning random file string debugger  

### Vecka 2 (v37)
- **04** Metoder, titta på helt program, meny-övning  
- **05** List, Tryparse  
- **06** Lab #1 (grundläggande C#)  

### Vecka 3 (v38)
- **07** OOP klasser och objekt  
- **08** OOP klassmetoder och access modifiers  
- **09** Git och GitHub  

### Vecka 4 (v39)
- **10** OOP properties, konstruktorer  
- **11** OOP arv och polymorfism, namespaces  
- **12** Felhantering och Exceptions   

```cs
/* -------------------
    OOP tar paus en vecka!
   ------------------- */  
```

### Vecka 5 (v41)
- **13** Lab #2 - OOP och Git   

### Vecka 6 (v42)
- **14** Tenta- och Lab #2-genomgång, Enums och CRC-övning   
- **15** Genomgång läxa. Abstrakta klasser, SOLID, Projektstruktur   

### Vecka 7 (v43)
- **16** Interfaces   

### Vecka 8 (v44)
- **17** Lab #3 - Github Workflows och Interfaces
- **18** Lab #4 - Videoteket
- **19** Lab #4 fortsätter

```cs
/* -------------------
    C# paus en vecka.
    Bara databas!  
   ------------------- */  
```

### Vecka 9 (v46)
- **20** Grupparbeteenkät. Enhetstestning start.

### Vecka 10 (v47)
- **21** Enhetstestning fortsättning.
- **22** Lab #5 - Enhetstestning

### Vecka 11 (v48)
- **23** Projektarbete - Uppstart

### Vecka 12 (v49)
- **24** Projektarbete - Records och structs
- **25** Projektarbete
 
### Vecka 13 (v50)
- **26** Projektarbete

### Vecka 14 (v51)
- **27** Projektarbete

# Moment OOP1

Det vi har gått igenom hittils i kursen är grönmarkerat nedan. Ställ dig själv frågan ibland: Bland de ikryssadeade punkterna nedan, vilka vet jag vad de betyder och hur de fungerar? Skulle jag kunna förklara för någon annan något om det?

## **Allmänna begrepp**
- [ ] [Filsystem](../../material/general/datorkunskap/filesystem.md)
- [ ] IDE / Editor / VSCode
- [ ] [Terminal/Console](../../material/general/datorkunskap/console.md)
- [ ] Miljö (Environment)
- [ ] Ramverk / Framework
- [ ] [C# och .NET](../../material/general/dotnet/index.md)
- [ ] [Kompilering: Källkod / Bytekod / Maskinkod](../../material/general/dotnet/compilation.md)
- [ ] Algoritmer

## **Metodik**
- [ ] [Pseudokod](../../material/general/methodology/pseudocode.md)
- [ ] [Flödesscheman](../../material/general/methodology/flowcharts.md)
- [ ] [Debugging](../../material/general/methodology/debugging.md)
- [ ] [Kodstandard](../../material/general/methodology/codeconventions.md)
- [ ] [Parprogrammering](../../material/general/methodology/pairprogramming.md)

## **C\#**

- [ ] Keywords
- [ ] Operatorer/Uttryck/Satser
- [ ] Enum
- [ ] Felhantering
- [ ] Exceptions: Try/Catch/Finally
- [ ] Skapa egna exceptions (Att det går att skapa är det viktiga att veta)

#### Variabler
- [ ] typ, namn, värde
- [ ] Deklaration och initialisering
- [ ] byte, int, long
- [ ] float, double
- [ ] string
- [ ] bool
- [ ] array
- [ ] List<>
- [ ] null
- [ ] Variablers livslängd ***<- Viktigt!***
- [ ] Reference type / Value type ***<- Viktigt!***
- [ ] Garbage Collection

#### Kontrollstrukturer
- [ ] Kodblock
- [ ] If-if else-else
- [ ] While
- [ ] For
- [ ] Foreach

#### Metoder
- [ ] Metoddeklaration
- [ ] "Rena" metoder och single responsibility principle
- [ ] Metodsignatur
- [ ] Method overloading
- [ ] Method overriding (ex ToString())

### **.NET-bibliotek**
- [ ] Console
- [ ] ReadLine / WriteLine
- [ ] Convert / Parse
- [ ] Random
- [ ] File (ReadAllText, ReadAllLines, WriteAllText)
- [ ] DateTime

### GIT och GitHub
- [ ] Init
- [ ] Add
- [ ] Status
- [ ] Log
- [ ] Commit
- [ ] Branch / Merge
- [ ] Switch (Checkout)
- [ ] Remote
- [ ] Clone
- [ ] Fetch/Push/Pull
- [ ] GitHUB: Fork

### Objektorienterad Programmering
- [ ] OOP som begrepp
- [ ] Klasser och objekt
- [ ] Keywordet new
- [ ] Inkapsling (Begreppet)
- [ ] Properties (Get/Set)
- [ ] Konstruktorer	
- [ ] Namespaces
- [ ] Abstrakta klasser
- [ ] Polymorphism (Begreppet)
- [ ] Object som alla klassers basklass
- [ ] Arv (Begreppet)
- [ ] Abstraktion (Begreppet)
- [ ] Interface
- [ ] SOLID
- [ ] Struct
- [ ] Record

## Lista på keywords som vi kommer gå igenom i kursen

| A–C      | C–E      | F–I     | I–O       | O–S       | T–W     |
| -------- | -------- | ------- | --------- | --------- | ------- |
| abstract | class    | false   | interface | override  | this    |
| as       | const    | finally | internal  | private   | throw   |
| base     | continue | float   | is        | protected | true    |
| bool     | decimal  | for     | long      | public    | try     |
| break    | default  | foreach | namespace | ref       | typeof  |
| byte     | do       | goto\*  | new       | return    | virtual |
| case     | double   | if      | null      | static    | void    |
| catch    | else     | in      | object    | string    | while   |
| char     | enum     | int     | out       | switch    |         |

* Förbjudet, använd aldrig keywordet `goto`. Låtsas som att det inte finns. 