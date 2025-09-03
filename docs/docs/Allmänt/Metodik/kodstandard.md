---
title: Kodstandard 
description: Hur vi skriver kod på ett standardiserat sätt.
icon: fontawesome/solid/handshake
---

# Kodstandard

Det är bra att inom samma projekt eller team följa en gemensam kodstandard för att göra koden så lättläst som möjligt för alla.

Jämför detta med vårt vanliga skrivna språk; omallahittadepåegna REGLERFÖR
HURtextSKA.S.K.r.i;v..a(s)så;blir-det-svårt_foer_andra att_leesa_okk-forstavadsommenasellerhur?

## Vanliga regler inom C#-världen är:

* Använd sk. *PascalCase* för klassnamn och metodnamn (t.ex. `MinKlass`, `MinMetod`).
* Använd sk. *camelCase* för variabler och fält (t.ex. `minVariabel`, `mittFalt`).
* Använd tydliga och beskrivande namn för variabler, metoder och klasser:'
    - Undvik förkortningar och kryptiska namn: `int x` är sämre än `int age`.
    - Använd engelska: `int age` är bättre än `int ålder`.
* Använd indrag (ofta 4 mellanslag) för att visa block av kod:'
```csharp
if (true)
{
    Console.WriteLine("Indrag med 4 mellanslag");
}
```
* Placera öppnande klammerparentes `{` på *raden under* deklarationen (t.ex. `if`, `for`, `while`, `class`, `method`):
```csharp
if (true)
{
    Console.WriteLine("Första måsvingen kommer på raden under if");
}
```
* Använd tomma rader för "styckesindelning" av koden för att göra den mer lättläst:
```csharp
double priceExVat = 25;
double vat = priceExVat * 0.25;
double priceIncVat = priceExVat + vat;

Console.WriteLine($"Pris inkl. moms: {priceIncVat}");
Console.WriteLine($"Moms: {vat}");
```
* Kommentera bara kod där det verkligen behövs. Tydligt skriven kod med bra namngivning behöver inte många kommentarer:
```csharp
// Sätt d till 25:
double d = 25; //d står för diameter
// Beräkna arean av en cirkel:
double x = Math.PI * (d / 2) * (d / 2); // Använd formeln πr²
//Skriv ut arean
Console.WriteLine($"Arean är {x}");
```
vs:
```cs
double diameter = 25;
double radius = diameter / 2;
double area = Math.PI * radius * radius;
Console.WriteLine($"Arean är {area}");
```
* Håll raderna korta. Traditionellt har 80 tecken per rad ansetts vara en bra längd, men 100-120 tecken är också vanligt idag. Om en rad blir för lång, överväg att bryta upp den i flera rader:
```csharp
Console.WriteLine("Detta är en väldigt lång rad som kanske borde brytas upp i flera rader för att bli mer läsbar.");
```
Tex så här:
```csharp
Console.WriteLine("Detta är en väldigt lång rad som kanske borde " +
                  "brytas upp i flera rader för att bli mer läsbar.");
```