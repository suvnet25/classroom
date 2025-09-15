<!-- ---
tags:
  - OOP1-Övning
--- -->

# Övning 08 Adressboken

## Steg 2

#### Inkapsling: accessmodifierare, data/beteende, 

Ska vi verkligen få sätta och läsa fälten `name` och `phone` direkt? Vad händer om vi vill ändra på hur de fungerar, eller lägga till *validering*?

## Steg 3 
#### *Properties* istället för get/set metoder

Det moderna alternativet till att skapa get- och set-metoder är att använda *properties*. All kod i standardbiblioteket, och de flesta andra proffessionelt skrivna bibliotek, använder properties, så det är bra att vänja sig vid det.

## Steg 4 
#### Konstruktorer

Vi vill kunna skapa ett `Contact`-objekt och direkt skicka med namn och telefonnummer, istället för att först skapa objektet och sedan sätta egenskaperna. Detta gör vi med en *konstruktor*.