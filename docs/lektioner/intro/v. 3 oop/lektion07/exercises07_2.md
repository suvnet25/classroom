---
tags:
  - OOP1-Övning
---

# Övning 07 Klasser

## Lärandemål

* Förstå varför klasser är användbara (samla data + beteende).
* Skapa en enkel klass (Contact) och använda List<Contact>.
* Använda inkapsling med properties (grundnivå räcker).
* Refaktorera kod till OOP.

## Steg 1
#### Klass, objekt och fält

1. Tänk igenom varför det är problematiskt att som i den förberedande övningen, lagra namn och telefonnummer i två separata listor. Hur blir det om vi lägger till en massa andra fält, så som adress, e-post, födelsedag osv? 

> Försök att se att alla dessa fält hör ihop, *som en sak*, **en kontakt**.

2. Skapa en klass som heter `Contact`. Till en början kan den inenhålla två publika fält:
    * `public string name;`
    * `public string phone;`

3. Skapa en lista som ska hålla objekt av typen `Contact`:
    ```csharp
    List<Contact> contacts = new List<Contact>();
    ```

!!! Info "Fundering"
    **Fundering: ** Var bör denna lista ligga i vår kod? Inne i `Main`-metoden, eller som ett fält i `Program`-klassen? (Tips: tänk på att vi vill kunna använda den i flera olika metoder.)

4. Refaktorera koden från den förberedande övningen så att den använder `Contact`-klassen och `List<Contact>`. Där användaren matar in information skall ett nytt `Contact`-objekt skapas och läggas in i listan. När alla kontakter skrivs ut, skall informationen hämtas från `Contact`-objekten i listan. Du ska med andra ord helt ta bort de två ursprungliga listorna `names` och `phones`, och bara använda den nya listan samt skapa ett nytt objekt varje gång en kontakt läggs till. 

***Det kan ta ett tag att komma in i tankesättet med klasser och att skapa nya objekt.***

## Steg 2
#### accessmodifierare, data/beteende, inkapsling

Ska vi verkligen få sätta och läsa fälten `name` och `phone` direkt? Vad händer om vi vill ändra på hur de fungerar, eller lägga till *validering*?

## Steg 3 
#### *Properties* istället för get/set metoder

Det moderna alternativet till att skapa get- och set-metoder är att använda *properties*. All kod i standardbiblioteket, och de flesta andra proffessionelt skrivna bibliotek, använder properties, så det är bra att vänja sig vid det.

## Steg 4 
#### Konstruktorer

Vi vill kunna skapa ett `Contact`-objekt och direkt skicka med namn och telefonnummer, istället för att först skapa objektet och sedan sätta egenskaperna. Detta gör vi med en *konstruktor*.