# Infoscreen

Börja med att göra det så fult som möjligt. Fokus ligger på funktionalitet, inte design.

Hemsidan skall först bara visa ett sökfält där man kan skriva namnet på en byggnad eller adress. När man trycker på "OK" skall sidan gå vidare till att visa den byggnadens infosida som man sedan kan köra i fullskärm på en skärm i en lobby tex.

I databasen behövs bara en typ av objekt: Location. Använd bilden nedan för att lista ut vilken struktur din data behöver.

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