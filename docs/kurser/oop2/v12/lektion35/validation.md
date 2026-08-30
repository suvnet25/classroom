# Validering

Validering är en kritisk del av varje applikation. Det handlar om att säkerställa att den data som kommer in i systemet är korrekt, komplett och följer de regler som gäller för det specifika sammanhanget. Validering kan ske på flera nivåer i en applikation, och det är viktigt att förstå var och hur man ska implementera den för att skapa en robust och användarvänlig applikation.

I projekten brukar det se lite olika ut när det gäller validering:

- några projekt har genomtänkt validering på flera nivåer
- flera projekt har bara delvis validering
- en del projekt saknar tydlig inputvalidering nästan helt

Den bästa lösningen är när validering finns både i formulär, i indataobjekt och på serversidan innan data sparas.

## Vanliga problemen i projekten är:

- validering finns bara i formuläret men inte på serversidan
- `DataAnnotationsValidator` används men modellen saknar valideringsattribut
- bara vissa fält är validerade medan andra lämnas utan regler
- enstaka attribut finns, men utan helhetstänk
- databaskrav verkar vara den enda spärren mot ogiltig data
- manuell validering används, men är splittrad och duplicerad på flera ställen

## Var sker valideringen?

- I domänobjekt: Här kan man ha grundläggande validering som säkerställer att objektet alltid är i ett giltigt tillstånd. Det kan vara saker som att en `Restaurant` alltid måste ha ett namn, eller att en `Order` alltid måste ha minst en `OrderLine`.
- I services: Här kan man ha mer komplex validering som involverar flera objekt eller affärsregler. Till exempel kan man validera att en `Order` inte kan läggas om restaurangen är stängd, eller att en `User` inte kan registrera sig med en e-postadress som redan finns.
- I controllers: Här kan man ha validering som är specifik för API:et eller användargränssnittet. Det kan vara saker som att en `CreateRestaurantRequest` måste ha ett namn och en adress, eller att en sträng inte får vara längre än 100 tecken.
- I Asp.Net: Här kan man använda inbyggda valideringsattribut som `[Required]`, `[StringLength]`, `[Range]` och så vidare för att enkelt definiera valideringsregler på sina DTO:er eller modeller.
- Bibliotek såsom FluentValidation: Det finns också externa bibliotek som FluentValidation som erbjuder ett mer kraftfullt och flexibelt sätt att definiera valideringsregler, särskilt när reglerna är komplexa eller behöver återanvändas på flera ställen.