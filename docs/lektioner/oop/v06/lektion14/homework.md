---
tags:
  - OOP1-Läxa
---

# Läxa 14 Objektorienterad design

Systemet vi ska designa är detta:

Tänk dig att vi är en kommun som vill hålla kolla på jobbresor. Vi vill kunna registrera förare, fordon och resor. En förare kan göra flera resor. En resa kan bara genomföras med ett fordon, men samma fordon kan såklart användas till flera resor. En resa har en starttidpunkt, en sluttid, en förare, ett fordon som använts samt en sträcka i kilometer. Ett fordon har ett registeringsnummer, en modell och en förbrukning i liter per mil samt bränsletyp. En förare har ett namn och ett personnummer.

Optimalt vore också om det gick att få ut rapporter! Tex en rapport för en förare (Hur långt den kört totalt, total bränsleföbrukning, total kostnad), en rapport för ett specifikt fordon (Hur långt fordonet kört, hur mycket bränsle som gått åt, total kostnad) samt en total rapport för alla resor (Totalt antal resor, totalt antal kilometer, total bränsleförbrukning, total kostnad).

## Förberedelser under lektionen

Vi kan jobba med detta genom att använda så kallade CRC-kort (Class, Responsibility, Collaboration). Gör detta i grupp genom att:

* Identifiera klasser
* Identifiera ansvarsområden för varje klass (Grovt, inga detaljer!)
* Identifiera samarbeten mellan klasser (Vilka andra klasser måste denna klass prata med för att få sitt jobb gjort?)
* Rita upp detta på ett CRC-kort för varje klass
    * Class: Namnet på klassen
    * Responsibility: Ansvarsområden
    * Collaboration: Vilka andra klasser samarbetar denna klass med?

Ett sätt att komma fram till detta är att låta en person per grupp "spela" rollen av en viss klass. Vem håller kolla på vilken information? Vem gör vad? Vilka andra klasser behöver de prata med för att få sitt jobb gjort?

## Läxan 

Uppgiften går ut på att skapa dessa klasser och få en redan existerande kod att fungera med dessa klasser!

??? "Startkod"
    ```cs
    ```