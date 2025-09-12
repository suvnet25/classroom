---
tags:
  - OOP1-Övning
---

# Övning - Lektion 07

## Förberedande övning

**Mål**: Skapa ett konsolprogram som låter användaren hantera en adressbok. Programmet ska fungera ungefär så här:

```
ADRESSBOK v1
------------
1) Lägg till kontakt
2) Lista kontakter
4) Avsluta

Val: 2
Kontakter:
1. Anna Svensson - 0701234567
2. Kalle Karlsson - 0739876543
```

#### Krav

1. **Meny**   
Programmet ska visa en meny med fyra val:
    * Lägg till kontakt
    * Lista kontakter
    * Sök kontakt
    * Avsluta programmet

2. **Lägg till kontakt**   
Användaren ska kunna skriva in namn och telefonnummer. Dessa ska sparas i två listor:
    * List<string\> för namn
    * List<string\> för telefonnummer

3. **Lista kontakter**  
Programmet ska skriva ut alla kontakter med nummer, namn och telefonnummer.

4. **Avsluta**  
Om användaren väljer avsluta ska programmet avslutas.

## Tekniska krav

Använd två listor: en för namn och en för telefonnummer.

Dela upp programmet i metoder:

* AddContact
* ListContacts
* SearchContact

Använd while (true)-loop för att visa menyn tills användaren väljer att avsluta.

Använd if eller else if för att hantera menyval.

## Extra utmaningar (frivilligt)

* Låt användaren kunna ta bort en kontakt.
* Låt användaren kunna uppdatera ett telefonnummer.
* Spara alla kontakter i en fil så att de finns kvar när man startar om programmet.
* Lägg till en sökfunktion som låter användaren söka efter en kontakt baserat på namn eller telefonnummer.