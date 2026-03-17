# Övning

## Integrationstester i eShopOnWeb

Dessa övningar utgår från integrationstesterna i `tests/IntegrationTests/` och hjälper dig förstå hur integrationstester skiljer sig från enhetstester, hur man testar mot en databas och hur Repository-mönstret fungerar i praktiken. Projektet använder **xUnit v3**, **Entity Framework Core InMemory** och **NSubstitute**.

---

## Integrationstest?

Ett **enhetstest** testar en enskild klass eller metod isolerad från sina beroenden (t.ex. med mocks å stubs).

Ett **integrationstest** testar att flera delar av systemet fungerar ihop - till exempel att en repository-klass kan spara och hämta data via Entity Framework och en databas. Mocks och stubs används inte i integrationstester, utan man testar mot riktiga implementationer av klasser och komponenter.

Det finns i huvudsak två typer av integrationstester:

* Testa webapi-anrop mot den riktiga applikationen
* Testa interaktionen mellan olika delsystem, t.ex. att en `EfRepository` kan spara och hämta data från en databas.

I eShopOnWeb används `Microsoft.EntityFrameworkCore.InMemory` som databas i integrationstesterna. Det innebär att testerna körs mot en riktig `DbContext` (`CatalogContext`) men med en tillfällig databas i minnet istället för en riktig SQL-server.

---

## Läsa och förstå befintliga integrationstester

### 1: Jämför integrationstest med enhetstest

Öppna integrationstestet `Repositories/BasketRepositoryTests/SetQuantities.cs` och enhetstestet `ApplicationCore/Services/BasketServiceTests/AddItemToBasket.cs` (i `tests/UnitTests/`).

1. Vilka klasser instansieras i integrationstestet? Vilka klasser mockas i enhetstestet (med `Substitute.For`)?
2. Var skapas databasen i integrationstestet? Varför används `UseInMemoryDatabase`?
3. Vilken fördel får vi av att testa mot en riktig `CatalogContext` istället för en mockad repository?
4. Vilken nackdel kan det finnas med InMemory-databasen jämfört med en riktig SQL-databas?

---

### 2: Förstå SetQuantities-testet steg för steg

Studera koden i `Repositories/BasketRepositoryTests/SetQuantities.cs`:

1. Identifiera **Arrange**, **Act** och **Assert** i testet `RemoveEmptyQuantities`.
2. Varför anropas både `_basketRepository.AddAsync(...)` och `_catalogContext.SaveChanges()` tror du?
3. Vad gör `BasketService.UpdateBasket(...)` när man skickar in kvantitet `0`?
4. Varför skickas `null` som andra parameter till `BasketService`-konstruktorn? (Titta på konstruktorns signatur i `BasketService.cs`).

---

### 3: Analysera Order-testerna

Öppna `Repositories/OrderRepositoryTests/GetById.cs`.

1. Testet skapar en order med `OrderBuilder.WithDefaultValues()`. Vilka standardvärden används? Öppna `tests/UnitTests/Builders/OrderBuilder.cs` och lista alla standardvärden.
2. Varför läggs ordern till via `_catalogContext.Orders.Add(...)` istället för `_orderRepository.AddAsync(...)`? Hade det fungerat med repository-metoden istället?
3. Vad testar assertionen `Assert.Equal(OrderBuilder.TestBuyerId, orderFromRepo.BuyerId)`?
4. Läs kommentaren i koden om `InMemoryDatabase` kontra `SQL DB`. Varför ger InMemory-databasen tillgång till `OrderItems` direkt, men det gör inte en riktig SQL-databas?

---

### 4: Specification-mönstret

Öppna `Repositories/OrderRepositoryTests/GetByIdWithItemsAsync.cs` och studera hur testet använder `OrderWithItemsByIdSpec`.

1. Öppna `src/ApplicationCore/Specifications/OrderWithItemsByIdSpec.cs`. Vad gör denna specification? Vilka `Include`-anrop finns?
2. Varför behövs en Specification för att hämta en order med sina `OrderItems`? Räcker det inte att bara hämta ordern med `GetByIdAsync`?
3. I testet skapas **två ordrar**. Varför? Vad hade hänt om testet bara skapade en enda order?
4. Kan du beskriva vad `FirstOrDefaultAsync(spec, ...)` gör?

---

## Skriva egna integrationstester

### 5: Testa att lägga till och hämta en Basket

Skapa en ny testfil `Repositories/BasketRepositoryTests/GetById.cs` i `tests/IntegrationTests/`.

Skriv ett integrationstest som:

1. Skapar en `CatalogContext` med InMemory-databas.
2. Skapar en `EfRepository<Basket>`.
3. Lägger till en ny `Basket` med `AddAsync`.
4. Hämtar tillbaka varukorgen med `GetByIdAsync` och verifierar att `BuyerId` stämmer.

Du kan använda `BasketBuilder` eller skapa en `Basket` direkt med `new Basket("sam@kim.se")`.

> OBS: Om ditt test misslyckas när du kör alla tester samtidigt, men fungerar enskilt, fundera på varför. Svaret hittar du kanske längre ner, under "Extra funderingar".

---

### 6: Testa att lägga till flera varor

Bygg vidare på övning 5. Skriv ett test som:

1. Skapar en `Basket` och lägger till **tre olika artiklar** med `AddItem(catalogItemId, unitPrice, quantity)`.
2. Sparar varukorgen i databasen.
3. Hämtar tillbaka varukorgen och verifierar att `TotalItems` är korrekt.
4. Verifierar att `Items.Count` stämmer (tre unika artiklar).

Fundering: Kan du verifiera `Items` efter att ha hämtat med `GetByIdAsync`? Eller behöver du en Specification med `.Include(b => b.Items)`? Testa båda alternativen och ta dig en funderare över resultatet.

---

### 7: Testa Order.Total()

Skapa en ny testfil `Repositories/OrderRepositoryTests/OrderTotal.cs` i `tests/IntegrationTests/`.

Skriv ett integrationstest som:

1. Skapar en order med **tre olika `OrderItem`** med kända priser och antal.
2. Sparar ordern i databasen.
3. Hämtar ordern med `OrderWithItemsByIdSpec`.
4. Anropar `Total()` på den hämtade ordern och verifierar att summan stämmer.

Exempel: Om du har artiklar med (pris: 10kr, antal: 2), (pris: 25kr, antal: 1) och (pris: 5kr, antal: 4) bör totalen bli 65kr.


## Extra funderingar

### 9: Databasnamn och hur isolerade är testerna egentligen?

Studera konstruktorerna i de befintliga integrationstesterna. Alla använder:

```csharp
.UseInMemoryDatabase(databaseName: "TestCatalog")
```

1. Vad händer om **flera testklasser** använder **samma** databasnamn? Kan tester påverka varandra? Ledtråd: Hur kör xUnit testerna? Parallellt eller sekventiellt? Vilken effekt har det på databasens?
2. Om alla testerna refererar till databasen med namn, hur skulle du kunna fixxa detta så att varje test får en helt isolerad databas? 
3. Vilka begränsningar har en InMemory-databas när det gäller att simulera en riktig SQL-databas? Hur kan du ta reda på det? Om du frågar AI, hur kan du bekräfta att ditt svar är korrekt?

---

### Extra frågor: Utforska EfRepository

Öppna `src/Infrastructure/Data/EfRepository.cs`.

1. `EfRepository<T>` ärver från `RepositoryBase<T>` (från Ardalis.Specification-paketet). Vilka metoder får den på köpet? Tänk på `AddAsync` osv.
2. Varför har `EfRepository` ingen egen kod förutom konstruktorn?
3. Vad är fördelen med att använda ett generiskt repository-mönster istället för att skriva `OrderRepository`, `BasketRepository` osv. som separata klasser?
4. Titta på interfacen `IRepository<T>` och `IReadRepository<T>`. Varför finns det två separata interface? Vilket designmönster representerar denna separation?
