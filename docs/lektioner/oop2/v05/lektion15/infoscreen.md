# Infoscreen

Börja med att göra det så fult som möjligt. Fokus ligger på funktionalitet, inte design.

Hemsidan skall först bara visa ett sökfält där man kan skriva namnet på en byggnad eller adress. När man trycker på "OK" skall sidan gå vidare till att visa den byggnadens infosida som man sedan kan köra i fullskärm på en skärm i en lobby tex.

I databasen behövs Location, och troligen också något som håller info per våningsplan. Använd bilden nedan för att lista ut vilken struktur din data behöver.

Grundläggande krav:

* MVC
* EF Core (InMemory eller SQLite)
* Två MVC-routes:
    * /Home/Index
    * /Home/Locations/{id}
* Två API-routes:
    * POST /api/locations
    * POST /api/images

### Mockup

![Infoscreen](infoscreen.png)

## Extra

Använd inte EF Core som databas, utan använd Google Sheets! Kom ihåg att du kan publicera ett google sheets och sedan komma åt datan som en CSV-fil via en URL. Kan du få in all data du behöver i detta spreadsheets istället? I så fall har du ju ett enkelt sätt att uppdatera informationen utan att behöva skapa en admin-frontend eller skicka HTTP-requests manuellt.