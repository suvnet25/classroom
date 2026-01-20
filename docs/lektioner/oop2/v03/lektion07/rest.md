# REST

Följande är grundläggande koncept och principer för REST (Representational State Transfer), en arkitekturstil för att bygga webbtjänster, ofta kallade RESTful API:er. 

HTTP används som kommunikationsprotokoll.

## 1. Resurser

Allt är en resurs som nås via URL:er.

```
/users
/users/42
/orders/123/items
```

Använd substantiv i pluralform för att namnge resurser. Inte verb, se nästa punkt.

## 2. HTTP-metoder

*Metoden* beskriver vad du gör, inte URL:en.

* GET – hämta
* POST – skapa
* PUT – ersätt
* DELETE – ta bort

## 3. Routes

En HTTP-metod kombinerat med en URL definierar en *route*:

* GET /users – hämta alla användare
* GET /users/42 – hämta användare med id 42
* POST /users – skapa en ny användare
* PUT /users/42 – ersätt användare med id 42

## 4. Statuskoder

HTTP-statuskoder används för att indikera resultatet av en request:

* 200 OK – lyckad GET, PUT, DELETE
* 201 Created – lyckad POST som skapat en resurs
* 400 Bad Request – felaktig request (t.ex. valideringsfel)
* 401 Unauthorized – saknar giltig autentisering
* 403 Forbidden – saknar behörighet
* 404 Not Found – resursen finns inte
* 500 Internal Server Error – serverfel

## 5. Stateless

Varje request innehåller all information, och mellan requests kopplas anslutningen ner.

## 6. Representation av data

Resurser skickas oftast i JSON-format, men kan också vara XML, CSV, etc.

## 7. Versionering

API:er bör versioneras, t.ex. via URL:

```
/api/v1/users
/api/v2/users
```

# Övningar

För följande övningar kan du använda REST Client i Visual Studio Code, hoppscotch.io, eller liknande verktyg för att göra HTTP-requests. Det viktiga är att du förstår vad som händer i kommunikationen mellan klient och server, och hur REST-principerna tillämpas.

### GET Requests

Skriv GET requests för följande API:er

1. Hämta ett slumpmässigt råd.
    * URL: https://api.adviceslip.com/advice
    * Kör 3 gånger.
    * Fick du något bra råd?

2. Ett ett slumpmässigt skämt
    * URL: https://official-joke-api.appspot.com
    * Vilka två fält innehåller själva skämtet?

3. Hämta info om en slumpmässig bild på en hund från 
    * URL: https://dog.ceo/dog-api/documentation/
    * Vilken content-type returneras?
    * Hur gör du för att se bilden?
    * Hämta också alla hundraser från samma API.

4. Hämta något härifrån:
    * https://polisen.se/api/events
    * Vad levererar detta api för information?

### POST Requests

6. Gör en första POST request till HttpBin (En tjänst som du kan testa requests mot)
    * Dokumentation: https://httpbin.org/#/HTTP_Methods
    * Vad får du för resultat tillbaka?

7. Skicka Todo-data till jsonplaceholder
    * Dokumentation: https://jsonplaceholder.typicode.com
    * Börja med att skicka en GET till https://jsonplaceholder.typicode.com/posts/1 för att se hur ett inlägg ser ut.
    * Skriv en POST request som lägger till en post

### Valfritt API

8. Kolla på denna site: https://github.com/public-apis/public-apis
    * Välj ett API (ta ett som säger Auth = No) som intresserar dig och gör följande:
    * Gör en GET request till API:et.
    * Hämta en specifik resurs (t.ex. en användare, ett inlägg, en produkt).
    * Har APIet någon POST-funktionalitet? Om ja, testa att skicka data.