# Lektion 25

> Moment: `säkerhet`

## Innehåll

* IT-Säkerhet - En introduktion
* OWASP och CWS
    * [OWASP Top 10](https://owasp.org/Top10/2025/)
    * [CWE Top 25](https://cwe.mitre.org/top25/archive/2025/2025_cwe_top25.html)
* Exempel på sårbarheter
    * SQL Injection
    * XSS - Cross Site Scripting
    * Broken Authentication
* Tools att känna till:
    * Webbläsarens utvecklarverktyg
        * Network tab
            * XHR/Fetch requests
        * Console tab (Ha den alltid öppen!)
        * Application -> Cookies / Local Storage / Session Storage
        * Elements tab - Källkod och DOM (Går att manipulera temporärt!)
    * Egna REST-klienter
* OWASP Juice Shop
    1. [Installera node.js](https://nodejs.org/en/download)
    2. [Ladda ner OWASP Juice Shop](https://github.com/juice-shop/juice-shop/releases/tag/v19.1.1)
    3. Packa upp Juice Shop och gå in i mappen i terminalen
    4. Starta servern med `npm start`
    5. Gå till `http://localhost:3000` i webbläsaren

## Uppgift 1 - Hitta Scoreboard i Juice Shop!

Någonstans på siten finns en scoreboard som visar vilka utmaningar du har klarat av. Det finns dock ingen länk till den, utan du måste hitta den på egen hand genom att undersöka källkoden till hemsidan. Använd webbläsarens utvecklarverktyg, specifikt "Källor" (Sources) och och sökfunktionen.

## Uppgift 2 - Gör tutorials

På scoreboard-sidan kan du se och filtrera alla utmaningar som finns.

## Extra uppgifter

Utöver att bara göra tutorials kan du också försöka lösa några av utmaningarna på egen hand. Det finns 52 utmaningar i OWASP Juice Shop, så det finns gott om möjligheter att testa dina färdigheter. Här kommer några förslag tillsammans med lite förklaringar:

## Injections

Injection-sårbarheter innebär att en angripare kan smyga in skadlig kod till ett program och få den att köras. Det kan handla om anrop till operativsystemet (system calls), körning av externa program via shell-kommandon eller databasfrågor via SQL (SQL-injektion). Alla applikationer som använder någon form av tolk (interpreter) riskerar att drabbas om indata inte hanteras korrekt.

Många webbapplikationer använder operativsystemsfunktioner eller externa program för att fungera. Om data från en HTTP-förfrågan skickas vidare utan noggrann validering kan en angripare injicera specialtecken eller skadliga kommandon som applikationen omedvetet vidarebefordrar för exekvering.

SQL-injektion är en särskilt vanlig och farlig variant. Om en parameter från användaren skickas direkt in i en databasfråga kan angriparen bädda in skadliga SQL-kommandon och därigenom läsa, ändra eller radera databasinnehåll. Det finns verktyg som automatiskt söker efter sådana brister, vilket gör dem relativt enkla att utnyttja.

Injection-sårbarheter kan vara både enkla och svårupptäckta, och konsekvenserna varierar från mindre problem till total systemkompromettering. Eftersom externa anrop är vanliga i moderna applikationer är risken för sådana brister generellt hög om säker indatahantering saknas.

!!! tip "Tips"
    **Reconnaissance advice**
        Instead of trying random attacks or go through an attack pattern list, it is a good idea to find out if and where a vulnerability exists, first. By injecting a payload that should typically break an underlying SQL query (e.g. `'` or `';`) you can analyze how the behaviour differs from regular use. Maybe you can even provoke an error where the application leaks details about the query structure and schema details like table or column names. Do not miss this opportunity.

## Sensitive data exposure

### Access a confidential document (1)

Somewhere on the site you can find a file that contains sensitive information about some - potentially hostile - takeovers the Juice Shop top management has planned.

* Analyze and tamper with links in the application that deliver a file directly.
* The file you are looking for is not protected in any way. Once you found it you can also access it.

!!! info
    Rota runt på siten! Testa alla länkar. Kollar URLerna noga. Testa att ändra url:er, text genom att accessa sökvägar "uppåt" i katalogstrukturen, eller att manipulera query-parametrar.

## Exposed Credentials (2)

A developer was careless with hardcoding unused, but still valid credentials for a testing account on the client-side.

* Have a look at the client-side code in the dev console.

## Improper Input Validation

### Give a devastating zero-star feedback to the store (1)

You might have realized that it is not possible to submit customer feedback on the Contact Us screen until you entered a comment and selected a star rating from 1 to 5. This challenge is about tricking the application into accepting feedback with 0 stars.

* Before you invest time bypassing the API, you might want to play around with the UI a bit.
* If you want to bypass the UI, you can use the browser's dev tools to analyze the API call that is made when you submit feedback. Then you can try to send a similar request with a star rating of 0.

### Place an order that makes you rich (3)

It is probably every web shop’s nightmare that customers might figure out away to receive money instead of paying for their purchase.

* You literally need to make the shop owe you any amount of money.
* Investigate the shopping basket closely to understand how it prevents you from creating orders that would fulfil the challenge.

## Broken Access Control

### Find an accidentally deployed code sandbox (1)

It is just as easy as finding the Score Board.

### View another user’s shopping basket (2)

This horizontal privilege escalation challenge demands you to access the shopping basket of another user. Being able to do so would give an attacker the opportunity to spy on the victims shopping behaviour. He could also play a prank on the victim by manipulating the items or their quantity, hoping this will go unnoticed during checkout. This could lead to some arguments between the victim and the vendor.

* Try out all existing functionality involving the shopping basket while having an eye on the HTTP traffic.
* There might be a client-side association of user to basket that you can try to manipulate.

### Access the administration section of the store (2)

Just like the score board, the admin section was not part of your "happy path" tour because there seems to be no link to that section either. In case you were already logged in with the administrator account you might have noticed that not even for him there is a corresponding option available in the main menu.

* It is just slightly harder to find than the score board link.
* Knowing it exists, you can simply guess what URL the admin section might have.
* Alternatively, you can try to find a reference or clue within the parts of the application that are not usually visible in the browser.
* It is probably just slightly harder to find and gain access to than the score board link.
* There is some access control in place, but there are at least three ways to bypass it.

## Security Misconfiguration

### Provoke an error that is neither very gracefully nor consistently handled

The OWASP Juice Shop is quite forgiving when it comes to bad input, broken requests or other failure situations. It is just not very sophisticated at handling errors properly. You can harvest a lot of interesting information from error messages that contain too much information. Sometimes you will even see error messages that should not be visible at all.

!!! info
    Applications can unintentionally leak information about their configuration, internal workings, or violate privacy through a variety of application problems. Applications can also leak internal state via how long they take to process certain operations or via different responses to differing inputs, such as displaying the same error text with different error numbers. Web applications will often leak information about their internal state through detailed or debug error messages. Often, this information can be leveraged to launch or even automate more powerful attacks.[1]

* Try to submit bad input to forms. Alternatively tamper with URL paths or parameters.
* This challenge actually triggers from various possible error conditions.
* You can try to submit bad input to forms to provoke an improper error handling.
    * Example: Try to submit a comment with more than 500 characters or with special characters that might break the underlying database query.
* Tampering with URL paths or parameters might also trigger an unforeseen error.
* If you see the success notification for this challenge but no error message on screen, the error was probably logged on the JavaScript console of the browser. You were supposed to have it open all the time anyway, remember?