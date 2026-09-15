# &#9733; Lab #5

## Enhetstestning

Dagens labb är uppdelad i två delar:

1. En del där du ska skriva tester till PasswordResetService enligt TDD-principer.
2. En del där du antingen enskilt eller i grupp skall analysera föregående labb för att undersöka testbarheten i projektet samt prova att skriva tester för valda delar.

## Del 1 - TDD med PasswordResetService

Använd Github Classroom assignmenten här: [https://classroom.github.com/a/D7EQb2Wv](https://classroom.github.com/a/D7EQb2Wv)

Din uppgift är nu att med hjälp av TDD-principer implementera minst en av följande funktionaliteter i PasswordResetService:

1. Det ska bara gå att begära en lösenordsåterställning om e-postadressen redan är registrerad i systemet.
2. Det skall bara gå att begära en lösenordsåterställning om den senaste begäran gjordes för mer än en timme sedan.
3. AVANCERAD: Om du gjort övningen PasswordValidator, intregrera användandet av den i PasswordResetService så att nya lösenord måste uppfylla valideringsreglerna. Dvs, en metod för att sätta lösenordet för en viss användare (identifierad utifrån e-postadress) skall implementeras i PasswordResetService. Denna metod skall validera att lösenordet är korrekt enligt PasswordValidator SAMT att det finns en giltig `token` associerad med epostadressen.

> Tips för TDD-arbetet:
> * Börja med att skriva ett test som beskriver den nya funktionaliteten.
> * Samtliga funktionaliteter ovan kräver att nya interfaces skapas för att kunna ersättas med fejkade implementationer i testerna. Skapa dessa interfaces först.
> * Implementera sedan den nya funktionaliteten i PasswordResetService så att testet går igenom.

Lite tips för de olika funktionaliteterna:

1. För att kontrollera om en e-postadress är registrerad, skapa ett nytt interface `IUserRepository` med en metod `bool IsEmailRegistered(string email)`, samt en metod för att lägga till en användare: `void AddUser(string email, string password)`. Använd sedan detta interface i PasswordResetService för att kontrollera om e-postadressen är registrerad.
2. Denna går att göra på lite olika sätt, men ett sätt är att låta PasswordResetService använda ett interface till en klass som hindrar att för många tokens genereras för samma e-postadress inom en viss tid. Skapa ett interface `ITokenRequestLimiter` med en metod `bool CanRequestToken(string email)`. Implementera sedan detta interface i en fejkad klass som håller koll på när senaste token begärdes för varje e-postadress.

## Del 2 - Analysera testbarhet

Nu ska ni kika på era tidigare projekt, utifrån ett testningsperspektiv. Varför ska vi göra det?
* Öva testning såklart!
* Få mer känsla för vad SOLID innebär. Tex separation of concern, varför behövs det och vad är det?
* Öva på refaktorering, något som är en väldigt vanlig syssla.
* Få med tester i refaktoreringen, så att vi kan skriva om saker mer säkert.

### Steg 1: Identifiera Testbara Komponenter

**Gå igenom koden:**
* Granska den befintliga koden för att identifiera logiska komponenter och funktioner som kan testas.
* Finns det något som enkelt går att testa som en enskild enhet? Här märks det ofta tydligt hur väl koden uppfyller SOLID-principerna. 
* Leta efter klasser eller metoder som har tydliga ansvarsområden och är löst kopplade till andra delar av systemet.

### Steg 2: Skriv någon enkel test

Börja med att skapa ett testprojekt i ditt projekt. Välj sedan en av de identifierade komponenterna från steg 1 och skriv ett eller flera enhetstester för den.

**Vad ska testas?**
* Fokusera på de mest kritiska delarna av applikationen, som affärslogik, datahantering, valideringar och uträkningar.
* Testa inte användargränssnitt eller databaskopplingar.

### Steg 3: Code Coverage

Efter att ha skrivit tester, använd ett code coverage-verktyg för att mäta hur mycket av koden som täcks av testerna. Analysera resultaten och identifiera områden som behöver fler tester.

### Steg 4: Refaktorera och bryt isär

Där ni har hårdkodade beroenden eller svårtestade komponenter, fundera på hur ni kan refaktorera koden för att göra den mer testbar. Använd SOLID-principerna som vägledning. Titta på hur ett interface kan skapas för att separera beroenden.

Välj ut någon liten del av programmet där detta skulle kunna testas.
