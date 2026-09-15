---
tags:
  - OOP1-Övning
---

# Övning 07 Adressboken

## Lärandemål

* Förstå varför klasser är användbara (samlar data + beteende).
* Förstå hur en enkelt klass skapas (Contact).
* Förstå hur objekt skapas från en klass med keywordet `new`.
* Testa att refaktorera kod.

## Steg 1
#### Klass, objekt och fält

Denna uppgift utgår från koden för [Övning 07 Förbered](./solutions07.md).

!!! Tip ""
    Tänk igenom varför det är problematiskt att, som i den förberedande övningen, lagra namn och telefonnummer i två separata listor. Hur blir det om vi lägger till en massa andra fält, så som adress, e-post, födelsedag osv? 

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

4. Refaktorera koden från den förberedande övningen så att den använder `Contact`-klassen och `List<Contact>` istället för de andra två listorna. 
5. Under AddContext()-metoden, där användaren matar in information skall ett nytt `Contact`-objekt skapas och läggas in i listan. Alltså istället för att ett namn och ett nummer läggs in i sina separata listor.
6. När alla kontakter skrivs ut, skall informationen hämtas från `Contact`-objekten i listan. Du ska med andra ord helt ta bort de två ursprungliga listorna `names` och `phones`, och bara använda den nya listan samt skapa ett nytt objekt varje gång en kontakt läggs till. 

***Det kan ta ett tag att komma in i tankesättet med klasser och att skapa nya objekt.***