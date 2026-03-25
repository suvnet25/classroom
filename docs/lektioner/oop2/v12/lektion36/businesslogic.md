# Business Logic

Business logic, eller domänlogik, är den del av applikationen som innehåller reglerna och processerna som styr hur data hanteras och manipuleras. Det är den logik som är specifik för det problemområde som applikationen adresserar. I en välstrukturerad applikation är business logic tydligt separerad från andra delar av applikationen, såsom datalagring och presentation.

**Tre tydliga mönster återkommer:**

- några projekt har en relativt tydlig lagerindelning där controllers är tunna och logiken ligger i services, repositories och ibland även i domänentiteter
- flera projekt har en blandmodell där services finns, men där controllers fortfarande gör en stor del av arbetet
- många projekt lägger huvuddelen av logiken direkt i controllers tillsammans med `DbContext`

Den starkaste lösningen är när controllers främst tar emot requesten och lämnar vidare arbetet till ett service- eller domänlager. Men ibland är det så lite som händer i en endpoint att det inte känns motiverat att skapa en service, och då kan det vara acceptabelt att ha lite mer logik i controller. 

## Var kan business logic ligga?

### I domänentiteter eller domänmodeller

När reglerna följer med själva objekten och säkerställer att de alltid är i ett giltigt tillstånd, oavsett var de används. Tex:

- Vilka statusbyten är tillåtna för en `Order`?
- Hur totalpriset för en `Order` beräknas baserat på dess `OrderItems`?
- Att en `Courier` bara kan accepetera en `Order` om den är i status "ReadyForPickup". (Detta kan också ligga i en service)

### I services

När reglerna involverar flera objekt eller affärsprocesser som inte naturligt hör hemma i en enskild entitet. Tex:

- Att en `Order` inte kan läggas om restaurangen är stängd.
- Att en `User` inte kan registrera sig med en e-postadress som redan finns på en annan användare.
- Att en `Courier` inte kan acceptera en `Order` som redan är accepterad av någon annan.
- Att en `Restaurant` inte kan ta emot en `Order` som ligger utanför dess öppettider.

**En serviceklass är bara meningsfull om den verkligen äger reglerna för flödet och inte bara kapslar in några få databasoperationer.**

### Vanliga problem

- controllers gör både databasaccess och affärslogik
- services finns men används bara delvis
- regler för orderstatus, totalsumma eller baskethantering är utspridda
- mapping, validering och business logic blandas i samma metoder
- domänmodeller används mest som data containers utan egna regler