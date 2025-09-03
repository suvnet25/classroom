Första obligatoriska labben i grundläggande C#.

# Lab 1 - Grundläggande C#

## Mål
* Använda variabler
* Använda inmatning och utmatning
* Använda villkorssatser
* Använda loopar
* Använda arrayer

## Uppgift
Skapa ett konsolprogram som beter sig så här:

```
Välkommen till labben!
Mata in ditt namn: [Användaren matar in sitt namn]
Lösenord: [Användaren matar in sitt lösenord]

[Om namnet inte finns i en lista med godkända namn:]
Okänt namn! Vill du registrera dig? (j/n): [Användaren matar in j eller n]
[Om användaren matar in n:] Okej, programmet avslutas.
[Om användaren matar in j:]
Vilket lösenord vill du ha?: [Användaren matar in ett lösenord]
Registrering lyckades! Välkommen, [Namn]!
Programmet börjar om från början och användaren får logga in med namn och lösenord.

[Om lösenordet är fel:]
Fel lösenord! Programmet avslutas eller börjar om (du väljer).

[Om lösenordet är rätt:]
Hej, [Namn]! Välkommen!

```