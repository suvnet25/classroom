---
tags:
  - OOP2-Övning
---

# HTTP/HTML-övningar

Exempelkod:

```cs
    
```

### Utveckla HTTP Servern

* Undersök Request- och Response-headers med hjälp av utvecklarverktygen. Titta på headers, statuskoder och body-innehållet i både request och response.
* Prova att lägga till en egen Header till response, vad som helst. 
    * Vad är en header?
    * Var skrivs headers in? 
* Kan du få din webbserver att skicka tillbaka innehållet i en textfil eller html-fil istället för en hårdkodad sträng? Tex om användaren begär `10.8.7.152:8000/index.html`, läs in filen `index.html` från disk och skicka tillbaka innehållet i den filen som response body.
* Kan du få din webbserver att svara med statuskod 404 om filen inte finns?

### ASP.Net Static File Server

* Skapa ett nytt ASP.Net-projekt med `dotnet new web`.
* Konfigurera projektet att servera statiska filer från en mapp i projektet.
* Lägg till några HTML-filer i den mappen och testa att komma åt dem via webbläsaren.
* Lägg till bilder i samma mapp och länka till dem från HTML-filerna. Testa att allt fungerar som förväntat.

### Förklara vad som händer och kom på vad ni inte förstår

Sitt två och två och förklara för varandra vad som händer när ni använder er webbserver och webbläsare.
Beskriv i detalj vad som händer när du skriver in URLen till din webbserver i webbläsarens adressfält och trycker Enter och sedan får se ett resultat i webbläsaren. Försök att tänka på OSI-modellen och alla lager som är inblandade. 

Ta fram tre stycken frågor ni har kring HTTP, HTML, webbservrar eller webbläsare som ni inte förstår. Skriv ner dem och hitta en annan grupp med två personer. Diskutera frågorna med dem, och lyssna på deras frågor. Kan ni tillsammans hitta svaren? 

