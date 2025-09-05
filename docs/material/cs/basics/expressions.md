---
title: Uttryck
description: Uttryck är kombinationer av variabler, operatorer och värden som beräknas till ett värde.
icon: material/calculator
---

# Uttryck

Även kallat Expressions på engelska.

Uttryck är grundläggande byggstenar i programmering och används för att manipulera data och styra programmets logik.

Ett uttryck är en kombination av variabler, operatorer och värden som beräknas till ett värde. Uttryck kan vara så enkla som en enda variabel eller ett konstant värde, eller så komplexa som en kombination av flera variabler och operatorer.

```csharp
int x = 5; // Ett enkelt uttryck som bara är en konstant
int y = x + 10; // Ett mer komplext uttryck som involverar en variabel och en operator
```

Uttryck används ofta i tilldelningssatser, villkorssatser och loopar för att bestämma värden och kontrollera flödet i programmet.

```csharp
if (x > 10) // Uttrycket 'x > 10' utvärderas till true eller false
{
    Console.WriteLine("x är större än 10");
}
```

Uttryck kan också innehålla funktionsanrop, vilket gör dem ännu mer kraftfulla och flexibla.

```csharp
int result = Math.Max(x, y); // Anropar funktionen Math.Max och använder dess returvärde i ett uttryck
```

Fler exempel:

```csharp
int a = 10;
int b = 20;
int sum = a + b; // Uttrycket 'a + b' beräknas till 30  

bool isAdult = age >= 18; // Uttrycket 'age >= 18' utvärderas till true eller false  

string message = "Hello, " + name; // Uttrycket '"Hello, " + name' skapar en ny sträng  

double area = Math.PI * radius * radius; // Uttrycket beräknar arean av en cirkel
```