# Övning

## API-testning med WebApplicationFactory

## Del 1 - Testning av endpoints med WebApplicationFactory

### Förberedelser

1. Öppna en ny mapp i Visual Studio Code som heter `ApiTest` och skapa en ny sln-fil med `dotnet new sln`.
2. Högerklicka på den och välj `Open solution`
3. I *Solution Explorer* klicka på +-tecknet (`new project`) och skriv `webapi` i sökfältet. Klicka på det första som kommer upp, `ASP.NET Core Web API`, döp till `WebApi` och tryck på enter på alla frågor.
4. Gör samma sak igen men skriv `xunit` i sökfältet och döp till `Tests`
5.  Högerklicka på `Tests` i *Solution Explorer* och välj `Add Project Reference` och välj `WebApi`.

Du har nu skapat två projekt i samma lösning, samt lagt till en referens till WebApi-testet i testprojektet.Sln-filen och csproj-filen i testprojektet är uppdaterade.

6. Installera `Microsoft.AspNetCore.Mvc.Testing` i testprojektet. Högerklicka på `Tests` i *Solution Explorer* och välj `add nuget package`. Sök efter `Microsoft.AspNetCore.Mvc.Testing` och installera den. Du kan också köra `dotnet add package Microsoft.AspNetCore.Mvc.Testing` i terminalen (se till att du är i rätt mapp).

### Testa en enkel endpoint

Du ska nu End to End-testa den endpoint som finns i WebApi-projektet, dvs `GET /weatherforecast`.

2. I `UnitTest1.cs` i `Tests`-projektet, lägg till följande kod:

```csharp
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;

public class WeatherForecastTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public WeatherForecastTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetWeatherForecast_ReturnsOk()
    {
        var response = await _client.GetAsync("/weatherforecast");

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
```

### Förklaringar

`WebApplicationFactory<T>` är en klass från paketet `Microsoft.AspNetCore.Mvc.Testing` som startar upp hela din webbapplikation **i minnet** (in-memory) under testning. Det innebär att du kan skicka riktiga HTTP-anrop mot dina endpoints utan att behöva starta servern manuellt. 

`IClassFixture<T>` är ett xUnit-koncept för att dela en gemensam resurs mellan alla tester i en testklass. Utan den skulle alla tester i en testklass behöva skapa sin egen instans av `WebApplicationFactory`, vilket skulle vara ineffektivt. Genom att använda `IClassFixture<WebApplicationFactory<IApiMarker>>` så skapas en enda instans av `WebApplicationFactory` som delas mellan alla tester i klassen.

`factory.CreateClient()` skapar en `HttpClient` som är kopplad till in-memory-servern. Anrop via denna klient går direkt till applikationen utan nätverkstrafik.

`GetAsync("/weatherforecast")` skickar ett riktigt HTTP GET-anrop mot din endpoint.

## Övning 1

1. Lägg till en ny endpoint i `Program.cs` som tar emot ett id och returnerar antingen ett väderresultat eller 404 Not Found. URLen ska vara `/weatherforecast/{id}`.

2. Skriv **två** tester i `UnitTest1.cs`:

   - Ett test som anropar `/weatherforecast/1` och verifierar att det returnerar **200 OK**
   - Ett test som anropar `/weatherforecast/999` och verifierar att det returnerar **404 Not Found**

**Tips:**
- Använd `HttpStatusCode.NotFound` för att jämföra med 404
- Använd samma `_client` som redan finns

## Övning 2: Testa att response-bodyn innehåller rätt data

**Uppgift:** Utöka testerna för `/weatherforecast` så att du inte bara kollar statuskoden — utan även **läser och validerar JSON-svaret**.

1. Skriv ett test som:
   - Anropar `GET /weatherforecast`
   - Läser svaret som en JSON-array
   - Verifierar att arrayen innehåller **exakt 5 element**
   - Verifierar att varje element har en `temperatureC`-egenskap

**Tips:**
- Använd `response.Content.ReadAsStringAsync()` för att få JSON-strängen
- Använd `System.Text.Json.JsonDocument.Parse()` för att parsa JSON:

## Entity Framwork

> dotnet add package Microsoft.EntityFrameworkCore.Sqlite
> dotnet add package Microsoft.EntityFrameworkCore.Design
> dotnet add package Microsoft.EntityFrameworkCore.InMemory