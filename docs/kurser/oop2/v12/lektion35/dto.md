# DTO

DTO:s är en viktig del av en välstrukturerad applikation. De hjälper till att skapa en tydlig gräns mellan domänmodellen och det som exponeras via API:t eller användargränssnittet.

En DTO ska inte bara vara en kopia av en modellklass med ett nytt namn. Den ska definiera API-kontraktet: vad klienten får skicka in, vad klienten får tillbaka och vilka regler som gäller för datan.

De vanligaste problemen i projekten när det gäller DTO:er är:

1. DTO:er används inte alls, utan API:t tar emot och returnerar entiteter direkt.
2. DTO:er finns, men används inte konsekvent i controllers och endpoints.
3. Samma DTO används både för input och output, trots att behoven ofta skiljer sig.
4. DTO:er speglar entiteterna nästan exakt och skapar därför ingen tydlig gräns mot databasen.
5. Request-DTO:er saknar validering, till exempel `Required`, `StringLength` eller `Range`.
6. Navigationsegenskaper och relaterade objekt exponeras i onödan.
7. Mapping mellan entitet och DTO ligger utspridd eller görs inkonsekvent, vilket gör det svårt att underhålla och ändra i framtiden.

## Checklista

Kan du svara "ja" på följande frågor?

1. Använder alla viktiga API-endpoints DTO:er i stället för entiteter?
2. Har jag separerat request-DTO:er från response-DTO:er där det behövs?
3. Innehåller mina create-DTO:er bara sådana fält som klienten faktiskt ska få skicka in?
4. Har jag undvikit att lägga in serverstyrda fält som `Id`, `CreatedAt` eller interna statusfält i request-DTO:er?
5. Har mina request-DTO:er relevant validering?
6. Returnerar mina response-DTO:er bara data som klienten faktiskt behöver?
7. Undviker jag att exponera navigationsegenskaper och hela objektgrafer utan tydligt behov?
8. Är mappingen mellan entitet och DTO tydlig och konsekvent?
9. Är namngivningen tydlig, till exempel `CreateRestaurantRequest`, `UpdateRestaurantRequest` och `RestaurantResponse`?
10. Skulle jag kunna ändra min databasmodell utan att direkt behöva ändra hela API-kontraktet?

## Några tumregler

1. Entiteter hör hemma i datalagret och domänlogiken.
2. DTO:er hör hemma vid gränsen mot klienten.
3. Controllers ska arbeta med DTO:er, inte med EF-modeller direkt.
