# EventHomepage

## MVC

Bygg frontenden för vår eventsida med MVC-mönstret. Ladda ner startkoden från [BYSuvNet GitHub: SuvEnt](https://github.com/BYSuvNet/SuvEnt). Detaljerade tips på hur du kan komma igång och strukturera arbetet finns i README-filen.

Lägg till ett MVC-projket under src/EventHomepage, och se till att referera till Core och Infrastructure-projekten. Där hittar du entities och dbcontext som du ska använda dig av.

Sidan skall visa:

  * *Kommande* event som en lista på förstasidan (Bara namn, datum och plats)  
  * Varje event skall ha en detaljerad sida med mer information (Hela beskrivninge, om eventet är full, hur många som kommer (men inte vilka som kommer))  
  * På detaljsidan ska det gå att anmäla sig till eventet via ett formulär  

Följande routes skall hanteras av MVC:

| Route                         | Beskrivning                            |
|-------------------------------|----------------------------------------|
|**/home/index**                | Visar en lista på kommande event       | 
|**/home/events/{id}**          | Visar detaljer för ett specifikt event |
|**(POST) /home/register/{id}** | Tar emot anmälan för ett event         |

## API-Endpoints

För att lägga till, uppdatera eller ta bort events behöver du inte skapa någon frontend med MVC. Det räcker med att skapa API-endpoints för detta ändamål, som sedan kan kallas på med HttpClient i VS Code.

### API Routes

| Metod         | Route                   | Beskrivning          |
|---------------|-------------------------|----------------------|
| **POST**      | */api/events/{id}*      | Skapa ett event      |
| **DELETE**    | */api/events/{id}*      | Ta bort event        (valfri)|
| **PUT**       | */api/events/{id}*      | Uppdatera ett event  (valfri)|

## Extra

Se till så att man måste skicka med en header med ett lösenord för att kunna skapa, uppdatera eller ta bort events. Kolla headern i dina endpoint-metoder för att verifiera lösenordet innan du utför operationen. Om lösenordet saknas, returnera en 401 Unauthorized statuskod.

För att lösa detta måste du lista ut hur du kommer åt en HTTP-requests headers i en MVC Controller-metod.

## Tips

Vad är [Tag Helpers](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-10.0)
Undersök [Eager Loading](https://learn.microsoft.com/en-us/ef/core/querying/related-data/eager), du kan komma att behöva det när du hämtar ut Events med sina Registreringar ur databasen.
Läs mer om [Query Execution](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/ef/language-reference/query-execution)
Läs mer om [Efficient Querying](https://learn.microsoft.com/en-us/ef/core/performance/efficient-querying)