---
title: Syntax
description: Grundläggande syntax i C#.
# icon: material/code-json
---

# Syntax

Lite grundläggande saker om C# som kan vara bra att veta.

## Språkets uppbyggnad

C#-kod består till stor del av följande byggstenar:

* Operatorer (Operators)
* Uttryck (Expressions)
* Satser (Statements)
* Deklarationer (Variabler, metoder, klasser, klassmedlemmar, gränssnitt, namespaces etc)

Läs mer om dem i deras respektive kapitel.

## Stor och liten bokstav
C# är "case-sensitive", vilket betyder att det skiljer på stora och små bokstäver. Till exempel är `myVariable` och `MyVariable` två olika saker. Du måste också t.ex. skriva exakt `Console.WriteLine()`, med stort C, stort W och stort L, annars fungerar det inte.

## Kodblock
Kod grupperas ihop med hjälp av klammerparenteser: `{ }`. Ett kodblock är en samling av en eller flera rader kod som behandlas som en enhet. Kodblock används för att gruppera relaterade instruktioner tillsammans, till exempel inom metoder, loopar och if-satser. Läs mer om kodblock här.

## Semikolon
I C# avslutas de flesta rader (instruktioner) med ett semikolon (`;`). Detta markerar slutet på en instruktion och gör det möjligt för datorn att förstå var en instruktion slutar och nästa börjar.

## Kommentarer
Kommentarer är text i koden som inte körs. De används för att förklara vad koden gör eller för att lämna anteckningar till andra utvecklare (eller till dig själv). I C# finns det två typer av kommentarer:
- Enradskommentarer: Börjar med `//` och fortsätter till slutet av raden.
- Fleradskommentarer: Börjar med `/*` och slutar med `*/`. De kan sträcka sig över flera rader.

```csharp
// Detta är en enradskommentar

/*
 Detta är en fleradskommentar
 som sträcker sig över flera rader.
*/
```

## Nyckelord
Nyckelord är reserverade ord i C# som har en speciell betydelse och funktion. Exempel på nyckelord inkluderar `if`, `else`, `for`, `while`, `class`, `public`, `private`, `void`, `int`, `string`, och många fler. Dessa ord kan inte användas som namn på variabler och metoder osv.

Här är ett gäng nyckelord (inte alla):

| A–C      | C–E      | F–I     | I–O       | O–S       | T–W     |
| -------- | -------- | ------- | --------- | --------- | ------- |
| abstract | class    | false   | interface | override  | this    |
| as       | const    | finally | internal  | private   | throw   |
| base     | continue | float   | is        | protected | true    |
| bool     | decimal  | for     | long      | public    | try     |
| break    | default  | foreach | namespace | ref       | typeof  |
| byte     | do       | goto    | new       | return    | virtual |
| case     | double   | if      | null      | static    | void    |
| catch    | else     | in      | object    | string\*  | while   |
| char     | enum     | int     | out       | switch    |         |