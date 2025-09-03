---
    title: Det binära talsystemet
    description: Det binära talsystemet är grunden för all modern datorteknik.
---

# Det binära talsystemet

Det binära talsystemet, ettor och nollor, är inte så svårt som det verkar! Det är också bra att förstå sig på det, då många programmeringskoncept bygger på detta.

Vi är väldigt vana vid det decimala talsystemet, som är baserat på tio siffror: 0, 1, 2, 3, 4, 5, 6, 7, 8 och 9. När vi räknar vidare efter 9 så har vi inte längre några siffror kvar (inget enskilt tecket som representerar siffran tio), så vi börjar om på 0 igen och lägger till en etta framför: 10, 11, 12, och så vidare.

!!! note "Det funkar på samma sätt i det binära talsystemet!"
    Fast där har vi ju bara två siffror! 0 och 1. När vi räknar vidare efter 1 så har vi inte längre några siffror kvar (inget enskilt tecket som representerar sifrran två), så vi börjar om på 0 igen och lägger till en etta framför: 10, 11, 100, 101, och så vidare.

Så här ser det ut om vi räknar till 11 i både det decimala och det binära talsystemet:

| Decimal | Binärt |
|---------|--------|
| 0       | 0      |
| 1       | 1      |
| 2       | 10     |
| 3       | 11     |
| 4       | 100    |
| 5       | 101    |
| 6       | 110    |
| 7       | 111    |
| 8       | 1000   |
| 9       | 1001   |
| 10      | 1010   |
| 11      | 1011   |

I det decimala talsystemet har varje position i ett tal representerar en potens av tio. Till exempel, i talet 345: 
- 3 är i hundratalspositionen (10^2)
- 4 är i tiotalspositionen (10^1)
- 5 är i entalspositionen (10^0)
Så, 345 kan brytas ner som:
3 * 100 + 4 * 10 + 5 = 300 + 40 + 5 = 345

I det binära talsystemet används bara två siffror: 0 och 1. Varje position i ett binärt tal representerar en potens av två. Till exempel, i det binära talet 1011:
- Den första 1 är i åttondelspositionen (2^3)
- 0 är i fyrtalspositionen (2^2)
- Den andra 1 är i tvåtalspositionen (2^1)
- Den sista 1 är i entalspositionen (2^0)

Så, 1011 kan brytas ner som:
1 * 8 + 0 * 4 + 1 * 2 + 1 * 1 = 8 + 0 + 2 + 1 = 11