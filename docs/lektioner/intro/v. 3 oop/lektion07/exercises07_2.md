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

## Uppgift steg för steg

1. Tänk igenom varför det är problematiskt att som i den förberedande övningen, lagra namn och telefonnummer i två separata listor. Hur blir det om vi lägger till en massa andra fält, så som adress, e-post, födelsedag osv? 

> Försök att se att alla dessa fält hör ihop, *som en sak*, **en kontakt**.

2. Skapa en klass som heter `Contact`. Till en början kan den inenhålla två publika egenskaper:
    * `public string Name { get; set; }`
    * `public string Phone { get; set; }`

