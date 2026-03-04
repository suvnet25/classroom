# Lektion 26

> Moment: `säkerhet`

## Innehåll

* Genomgång av Juice Shop-tutorials:
    * Injection
    * XSS
        * DOM XSS (Bara på klienten)
        * Reflected XSS (Från klient till server och tillbaka)
        * Stored XSS (Från klient till server och lagras där)
    * Broken Authentication
    * Broken Access Control
* Cookies:  JWT vs Session Cookies
* Fler sårbarheter:
    * Password policies
    * CSRF - Cross Site Request Forgery
    * IDOR - [Insecure Direct Object Reference](https://en.wikipedia.org/wiki/Insecure_direct_object_reference)
* Probing: Hur kan en angripare ta reda på vilka sårbarheter som finns i en applikation?
* Säkerhetsworkshop - Suverän Bank

## Cookies: JWT vs Session Cookies

JWT (JSON Web Tokens) och Session Cookies är två olika metoder för att hantera autentisering och sessionshantering i webbaserade applikationer. Båda använder sig av headers i HTTP-protokollet och cookie-funktionaliteten i webbläsare, men de funkar lite olika.

* **JWT (JSON Web Tokens)**:
    * JWT är en kompakt, URL-säker token som används för att överföra information mellan parter. Den består av tre delar: header, payload och signature. JWT används ofta i moderna webbapplikationer och API:er för att hantera autentisering och auktorisering.
    * Fördelar:
        * Självständiga: JWT innehåller all nödvändig information för att verifiera tokenet utan att behöva lagra sessiondata på servern.
        * Skalbarhet: Eftersom JWT inte kräver serverlagring kan det vara mer skalbart i distribuerade system.
    * Nackdelar:
        * Säkerhetsrisker: Om en JWT inte hanteras korrekt kan den vara sårbar för attacker som stöld eller manipulation.
        * Ingen inbyggd mekanism för utloggning: Eftersom JWT är självständiga kan det vara svårt att implementera en effektiv utloggningsmekanism.

* **Session Cookies**:
    * Session Cookies är små bitar av data som lagras på klientens webbläsare och används för att identifiera en användares session på servern. När en användare loggar in, skapas en session på servern och en cookie med ett unikt session-ID skickas till klienten.
    * Fördelar:
        * Enklare att implementera: Session Cookies är en välkänd metod och har inbyggt stöd i de flesta webbapplikationsramverk.
        * Bättre kontroll över sessionshantering: Servern kan enkelt hantera sessioner, inklusive utloggning och tidsgränser.
    * Nackdelar:
        * Skalbarhetsproblem: Eftersom sessiondata lagras på servern kan det bli problematiskt i distribuerade system eller när det finns många samtidiga användare.
        * Säkerhetsrisker: Om session-ID:t inte hanteras korrekt kan det vara sårbart för attacker som session hijacking.

Kortfattat: JWT innehåller information och hanteras av klienten. Session Cookies är bara ett ID som klienten kommer ihåg, men hanteras av servern, också övrig information lagras på servern.

## Security Review / Probing / Pentesting

När man undersöker en webbplats för vanliga säkerhetsbrister görs det strukturerat. Antingen som en säkerhetsgranskning (security review) eller en mer formell penetrationstestning (pentest).

Förenklat kan processen delas in i tre steg:

1. **Informationsinsamling och kartläggning**: Vi behöver ta reda på så mycket som möjligt om webbplatsen, dess funktioner, teknologier och potentiella ingångspunkter. Det kan inkludera att undersöka källkoden om den finns, analysera HTTP-trafik, identifiera API:er och leta efter dolda sidor eller funktioner.
2. **Test av vanliga sårbarheter**: När vi har en bra förståelse för webbplatsen kan vi börja testa för vanliga sårbarheter som SQL-injektion, XSS, CSRF, och så vidare. Det kan göras manuellt eller med hjälp av automatiserade verktyg.
3. **Raportering**: När vi har identifierat potentiella sårbarheter är det viktigt att dokumentera dem noggrant, inklusive hur de kan utnyttjas och rekommendationer för åtgärder.

# Säkerhetsworkshop - Suverän Bank

## Black-Box Penetrationstest av Suverän Bank

Den här guiden ger dig en strukturerad metod för att utföra ett **black-box penetrationstest** av Suverän Bank-applikationen via frontenden. Metoden utgår ifrån [OWASP Web Security Testing Guide (WSTG)](https://owasp.org/www-project-web-security-testing-guide/).

> **Black box** innebär att du inte har tillgång till källkoden. Du testar bara det du kan se och interagera med genom webbläsaren eller andra verktyg.

### Förutsättningar

- Du accessar applikationen via dess publika url.
- Du har tillgång till en webbläsare med utvecklarverktyg (F12)
- Verktyg för att skicka HTTP-förfrågningar (t.ex. `curl`, Hoppscotch.io eller VS Code pluginet REST Client)

Denna guide följer OWASP WSTG:s struktur, men hoppar över vissa delar. Det är därför fas 1 följs av fas 4 tex. Se alla delarna här: https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/

---

### Fas 1 – Rekognosering (WSTG-INFO)

> **Mål:** Utforska applikationen, kartlägg sidor, formulär och funktioner.

| # | Uppgift | Tips |
|---|---------|------|
| 1.1 | Öppna startsidan och notera alla synliga länkar och knappar. | Vilka sidor kan du nå utan att logga in? |
| 1.2 | Klicka dig igenom hela siten och skriv upp varje URL du hittar. | T.ex. `/bank`, `/bank/Auth/Login`, etc. |
| 1.3 | Öppna **Developer Tools → Network** i webbläsaren. Ladda om sidan och studera alla anrop. | Vilken teknik verkar siten använda? Syns det några intressanta headers? |
| 1.4 | Undersök cookies som sätts. | Öppna **Application → Cookies** i DevTools. |
| 1.5 | Testa att navigera till sökvägar som inte finns (t.ex. `/bank/admin`, `/bank/test`). | Vad händer? Får du ett felmeddelande? Avslöjar det något? |

**Dokumentera:** Gör en enkel site-karta med alla sidor och formulär du hittade.

---

### Fas 4 – Autentisering (WSTG-ATHN)

> **Mål:** Testa inloggning och registrering efter svagheter.

| # | Uppgift | Tips |
|---|---------|------|
| 4.1 | Registrera ett konto. | Är registreringsprocessen bra? Saknas något |
| 4.2 | Testa att registrera ett konto med ett användarnamn som redan finns. | Hur kan detta utnyttjas? |
| 4.3 | Försök logga in med **fel lösenord**. Upprepa flera gånger. | Finns det något att förbättra med detta? |
| 4.4 | Studera inloggningsformulärets HTML-källa (`Visa sidkälla`). | Skickas lösenordet i klartext? Vilket HTTP-verb används? |
| 4.5 | Logga in och studera cookien som sätts. | Vad av värde sparas i cookien/sessionen? |

**Dokumentera:** Lista alla brister du hittade i autentiseringen.

---

### Fas 5 – Auktorisering / Åtkomstkontroll (WSTG-ATHZ)

> **Mål:** Undersök *hur* applikationen vet vem du är, och om du kan lura den.

| # | Uppgift | Tips |
|---|---------|------|
| 5.1 | Utan att vara inloggad, försök surfa direkt till `/bank/Account/Dashboard`. | *Hur* vet appen att du är inloggad eller inte? Öppna **DevTools → Application → Cookies** och undersök vilka cookies som finns (eller saknas). |
| 5.2 | Logga nu in med ett konto. Gå tillbaka till **Cookies** i DevTools. | Vilken cookie dök upp? Vad heter den? Vad har den för värde?|

**Dokumentera:** Lista alla brister du hittade i auktoriseringen.

---

### Fas 6 – Session Management Testing - CSRF – Cross-Site Request Forgery (WSTG-SESS)

> **Mål:** Kan du lura en inloggad användare att utföra en handling utan deras vetskap?

**Den här är lite extra klurig, och kan tas i mån av tid.**  
Börja med att läsa på om CSRF här: https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/06-Session_Management_Testing/05-Testing_for_Cross_Site_Request_Forgery 

Vad kan du tänkas göra om du kunde få en på banken inloggad användare att klicka på en länk eller besöka en sida som du kontrollerar?

**Extra:** Vad betyder cookie-flaggorna: `HttpOnly`? `Secure`? `SameSite`?

---

### Fas 7 – Indatavalidering (WSTG-INPV)

> **Mål:** Testa vad som händer när du skickar oväntade eller skadliga värden.

#### 7a – Cross-Site Scripting (XSS)

| # | Uppgift | Tips |
|---|---------|------|
| 7a.1 | Testa olika inputfält för XSS | Påverkas text av html-taggar? |
| 7a.2 | Vilka fält skulle kunna få Javascript att köras hos en annan användare? | Hur skulle du kunna utnyttja detta? |
| 7a.4 | Ta dig en funderare på: Om du kan köra JavaScript i en annan användares webbläsare, vad kan du göra? | Tänk `document.cookie`, omdirigering, keylogging... |

**Dokumentera:* Vilka fält är sårbara för XSS? Vad kan en angripare göra med det?

#### 7b – SQL Injection

| # | Uppgift | Tips |
|---|---------|------|
| 7b.1 | I inloggningsformuläret, testa användarnamn: `' OR 1=1 --` | Loggas du in? |
| 7b.2 | Testa i andra formulärfält. | Var finns det sårbara fält? Vad kan du utnyttja det till? |
| 7b.3 | Observera felmeddelanden noga. | Avslöjar något felmeddelande databas-teknik eller tabell-namn? |

#### 7c – Andra indataproblem

| # | Uppgift | Tips |
|---|---------|------|
| 7c.1 | Gör en överföring med **negativt belopp** (t.ex. `-5000`). | Vad händer med bägge kontons saldo? |
| 7c.2 | Gör en överföring med ett **extremt stort belopp**. | Händer det något oväntat? |
| 7c.3 | Gör en överföring med belopp `0`. | Tillåts det? |
| 7c.4 | Skicka bokstäver istället för siffror i beloppsfältet. | Hur hanteras det? |

**Dokumentera:** Vilka fält saknar ordentlig validering? Vilka attacker lyckades?

---

### Fas 8 – Felhantering och informationsläckage (WSTG-ERRH)

> **Mål:** Avslöjar applikationen känslig information genom felmeddelanden?

| # | Uppgift | Tips |
|---|---------|------|
| 8.1 | Provocera fram fel: navigera till ogiltiga sidor, skicka trasig data, etc. | Visas stacktraces eller tekniknamn (ASP.NET, SQLite, etc.)? |
| 8.2 | Studera felmeddelanden vid inloggning. | Skiljer sig meddelandet åt mellan "fel användarnamn" och "fel lösenord"? |
| 8.3 | Studera kontonummer i transaktionshistoriken. | Är de förutsägbara (t.ex. sekventiella)? Kan du gissa andra kunders kontonummer? |
| 8.4 | Kolla HTTP-headers i svaret (**Network → Response Headers** i DevTools). | Finns det headers som avslöjar serverversion, ramverk, etc.? |

**Dokumentera:** All information du lyckades utvinna utan att vara behörig.

---

### Fas 10 – Affärslogik (WSTG-BUSL)

> **Mål:** Kan du missbruka applikationens funktioner på sätt som utvecklaren inte tänkt?

| # | Uppgift | Tips |
|---|---------|------|
| 10.1 | Kan du överföra mer pengar än vad du har? | Vad händer om du har 10 000 kr och försöker föra över 15 000 kr? |
| 10.2 | Kan du göra en överföring till ett **obefintligt konto**? | Försvinner pengarna? |
| 10.3 | *(Avancerat)* Skicka flera överföringar **samtidigt** (t.ex. via `curl` i en loop). | Kan du utnyttja en *race condition* och skicka mer pengar än du har? |
| 10.4 | Exportera din data. Testa med andra användares uppgifter i formuläret. | Kan du exportera **någon annans** data? |

---

### Sammanfattning – Rapportmall

Välj ut två eller tre av de mest allvarliga sårbarheterna du hittade och skriv en kort rapport enligt mallen nedan. Använd gärna OWASP-kategorierna för att klassificera varje sårbarhet.

```
## [Namn på sårbarheten]

**OWASP-kategori:** T.ex. WSTG-INPV-02 (XSS)
**Allvarlighetsgrad:** Kritisk / Hög / Medel / Låg
**Sida/Funktion:** T.ex. Överföringsformuläret, meddelandefältet

### Beskrivning
Vad är problemet? Förklara kort.

### Steg för att återskapa
1. Gå till ...
2. Skriv in ...
3. Klicka på ...
4. Observera att ...

### Påverkan
Vad kan en angripare göra med denna sårbarhet?

### Rekommenderad åtgärd
Om du har en aning om hur detta skulle kunna fixas, beskriv det här. Annars kan du lämna det tomt (Vi kommer in på fixar senare).
```

---

### OWASP WSTG-referens

| Kodnummer | Område | Relevanta faser ovan |
|-----------|--------|---------------------|
| WSTG-INFO | Informationsinsamling | Fas 1 |
| WSTG-ATHN | Autentisering | Fas 4 |
| WSTG-ATHZ | Auktorisering | Fas 5|
| WSTG-INPV | Indatavalidering | Fas 7 |
| WSTG-ERRH | Felhantering | Fas 8 |
| WSTG-BUSL | Affärslogik | Fas 10 |

Du hittar mer specifik information på OWASPs hemsida, exemplvis:
https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/07-Input_Validation_Testing/02-Testing_for_Stored_Cross_Site_Scripting


Mer info: [https://owasp.org/www-project-web-security-testing-guide/](https://owasp.org/www-project-web-security-testing-guide/)