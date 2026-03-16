# Övning 1
## Enhetstester i eShopOnWeb

Dessa övningar utgår från enhetstesterna i eShopOWeb i katalogen `tests/UnitTests/`. Förhoppningsvis hjälper dig förstå hur enhetstester fungerar i ett riktigt .NET-projekt. Projektet använder **xUnit** som testramverk och **NSubstitute** för att skapa mock-objekt.

---

## Del 1 - Läsa och förstå befintliga tester

### Övning 1: Identifiera AAA-mönstret

Öppna filen `ApplicationCore/Entities/BasketTests/BasketAddItem.cs`.

1. Gå till metoden `AddsBasketItemIfNotPresent()` och kommentera vilka rader som tillhör:
   - **Arrange** (förbered testdata)
   - **Act** (utför handlingen som testas)
   - **Assert** (verifiera resultatet)
2. Gör samma sak för metoden `IncrementsQuantityOfItemIfPresent()`.
3. Varför är det viktigt att separera dessa tre faser tydligt?

---

### Övning 2: Förstå testmetodernas namn

Studera metodnamnen i `BasketAddItem.cs`:

- `AddsBasketItemIfNotPresent()`
- `IncrementsQuantityOfItemIfPresent()`
- `KeepsOriginalUnitPriceIfMoreItemsAdded()`
- `DefaultsToQuantityOfOne()`
- `CantAddItemWithNegativeQuantity()`

1. Vad beskriver varje namn? Formulera med egna ord vad respektive test verifierar.
2. Varför är beskrivande namn bättre än t.ex. `Test1()`, `Test2()`?
3. Föreställ dig att testet `CantAddItemWithNegativeQuantity` misslyckas - hur hjälper namnet dig att hitta felet?

---

### Övning 3: Assertion-typer

Gå igenom tester i mappen `ApplicationCore/Entities/` och `MediatorHandlers/OrdersTests/`.

1. Vilka olika typer av assertions hittar du?
2. Förklara med egna ord vad varje assertion-typ kontrollerar.
3. I `BasketAddItem.cs` - varför används `Assert.Throws<ArgumentOutOfRangeException>` istället för att bara kontrollera ett returvärde?

---

### Övning 4: Testdata och fältvärden

Studera hur testdata skapas i `BasketAddItem.cs`:

```csharp
private readonly int _testCatalogItemId = 123;
private readonly decimal _testUnitPrice = 1.23m;
private readonly int _testQuantity = 2;
private readonly string _buyerId = "Test buyerId";
```

1. Varför deklareras testdata som privata fält istället för att hårdkodas direkt i varje testmetod?
2. Vad händer om du ändrar `_testQuantity` till `5`? Vilka tester påverkas och varför?
3. Vilka för- och nackdelar finns med att dela testdata mellan tester i samma klass?

---

## Del 2 - Builder-mönstret i tester

### Övning 5: Analysera Builder-klasser

Öppna filerna `Builders/BasketBuilder.cs`, `Builders/OrderBuilder.cs` och `Builders/AddressBuilder.cs`.

1. Vad gör metoden `WithDefaultValues()` i `OrderBuilder`? Vilka standardvärden sätts?
2. Varför finns det en separat `WithNoItems()`-metod istället för att bara skicka en tom lista in i `WithItems()`?
3. Jämför `BasketBuilder` med `OrderBuilder` - vad är likt och vad skiljer sig?

---

### Övning 6: Använd Builder-klassen

Öppna `ApplicationCore/Entities/OrderTests/OrderTotal.cs`.

1. Identifiera var `OrderBuilder` används och förklara hur det förenklar testkoden.
2. Skriv ett eget test i `OrderTotal.cs` som använder `OrderBuilder` för att skapa en order med **2 olika produkter** och verifiera att `Total()` returnerar rätt summa.

---

## Del 3 - Mocking med NSubstitute

### Övning 7: Förstå mocking

Öppna `ApplicationCore/Services/BasketServiceTests/AddItemToBasket.cs`.

1. Vilka beroenden mockas med `Substitute.For<>()`? Varför mockas just dessa?
2. Vad gör raden `_mockBasketRepo.FirstOrDefaultAsync(...).Returns(basket)`?
3. Vad kontrollerar `_mockBasketRepo.Received().UpdateAsync(...)`? Hur skiljer sig det från att kontrollera ett returvärde?
4. Vad är skillnaden mellan att testa **tillstånd** (state) och att testa **beteende** (behavior)? Ge ett exempel av varje från projektet.

---

### Övning 8: Mock i DeleteBasket

Öppna `ApplicationCore/Services/BasketServiceTests/DeleteBasket.cs`.

1. Beskriv steg för steg vad som händer i testet `ShouldInvokeBasketRepositoryDeleteAsyncOnce()`.
2. Vad returnerar `_mockBasketRepo.GetByIdAsync(...)` och varför behöver vi det?
3. Vad verifierar testet egentligen - att produkten togs bort, eller att metoden `DeleteAsync` anropades? Diskutera skillnaden.

---

### Övning 9: Avancerad mocking - TransferBasket

Öppna `ApplicationCore/Services/BasketServiceTests/TransferBasket.cs`.

1. Vad gör den inre klassen `Results<T>`? Varför behövs den?
2. Studera testet `TransferAnonymousBasketItemsWhilePreservingExistingUserBasketItems()`:
   - Vad förväntas hända med en anonym varukorg som har produkt 1 (antal 1) och produkt 3 (antal 7)?
   - Vad förväntas hända med en befintlig användarvarukorg som har produkt 1 (antal 4) och produkt 2 (antal 3)?
   - Verifiera att assertions matchar det förväntade resultatet: produkt 1 (antal 5), produkt 2 (antal 3), produkt 3 (antal 7).
3. Varför testas fallet `CreatesNewUserBasketIfNotExists` separat?

---

## Del 4 - Skriv egna tester

### Övning 10: Komplettera BasketTests

Öppna `ApplicationCore/Entities/BasketTests/BasketTotalItems.cs` och studera de befintliga testerna.

Skriv sedan följande nya tester i klassen:

1. `ReturnsTotalQuantityOfZeroForEmptyBasket` - verifiera att `TotalItems` returnerar 0 för en ny tom varukorg.
2. `ReturnsTotalQuantityAfterRemovingEmptyItems` - skapa en varukorg med en artikel, lägg till en artikel med kvantitet 0, anropa `RemoveEmptyItems()`, och verifiera att `TotalItems` returnerar rätt antal.

---

### Övning 11: Testa edge cases i BasketAddItem

Lägg till följande testmetoder i `BasketAddItem.cs`:

1. `CantAddItemWithZeroPrice` - verifiera att man inte kan lägga till en artikel med pris 0 (undersök först om denna validering finns i `Basket`-klassen - om inte, diskutera om den borde finnas).
2. `CanAddMultipleDifferentItems` - lägg till två artiklar med olika `catalogItemId` och verifiera att varukorgen innehåller exakt 2 artiklar.

---

### Övning 12: Skapa en ny Builder

Skapa en `CatalogItemBuilder` i mappen `Builders/` genom att följa samma mönster som `OrderBuilder` och `AddressBuilder`.

1. Studera klassen `CatalogItem` i `src/ApplicationCore/Entities/`.
2. Skapa en builder med metoder som `WithDefaultValues()`, `WithPrice(decimal price)` och `WithName(string name)`.
3. Skriv ett enkelt test som använder din nya builder.

---

## Del 5 - Analys och reflektion

### Övning 13: Vad testas - och vad testas inte?

Gå igenom alla testfiler i `tests/UnitTests/`.

1. Gör en lista över vilka klasser/metoder som har enhetstester.
2. Identifiera minst **tre** klasser eller metoder i `src/ApplicationCore/` som saknar tester men som du anser borde ha dem. Motivera dina val.
3. Öppna `GetOrderDetails.cs` - testet verifierar bara att resultatet inte är null. Vilka ytterligare tester borde läggas till? Skriv minst två förslag.

---

### Övning 14: Försök knäcka testerna

Denna övning görs i par.

1. Person A: Gör en medveten ändring i källkoden (t.ex. i `Basket.AddItem()`) som introducerar en bugg.
2. Person B: Kör testerna med `dotnet test` och analysera felmeddelandet. Kan du identifiera buggen enbart utifrån testresultatet?
3. Byt roller och upprepa.
4. Diskutera: Fanns det någon bugg som *inte* fångades av testerna? Vad säger det om testernas täckning?

---

### Övning 15: Kodgranskning av tester

Granska varandras tester (från övning 10–12) med följande checklista:

- [ ] Följer testet AAA-mönstret?
- [ ] Har testmetoden ett beskrivande namn?
- [ ] Testar metoden exakt en sak?
- [ ] Är assertions relevanta och tydliga?
- [ ] Finns det onödig kod som kan tas bort?

Ge skriftlig feedback med minst en positiv kommentar och ett förbättringsförslag per test!

