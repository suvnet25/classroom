# Queryparametrar

Queryparametrar är ett sätt att skicka med extra information i en URL. De används ofta för att filtrera, sortera eller paginera data som hämtas från en webbtjänst.

Här är ett exempel på en URL med queryparametrar:

```
https://api.example.com/products?category=electronics&sort=price_asc&page=2
```

!!! tip "Kort övning"
    Gå in på [Inet](https://www.inet.se/) och sök på "laptop". 
    - 1. Observera hur URLen ser ut.
    - 2. Ändra URLen så att det står `monitor` istället för `laptop` och tryck Enter. Vad hände då? 
    - 3. Lägg sedan till `&sortColumn=price&sortDirection=asc` i slutet av URLen och tryck Enter igen. Vad hände nu?

I exemplet ovan är `category`, `sort` och `page` queryparametrar. Varje parameter består av ett namn och ett värde, separerade av ett likhetstecken (`=`). Flera parametrar separeras med ett ampersand-tecken (`&`).

Dessa parametrar kan vi snappa upp i våra API-endpoints och använda till vad vi vill. Här är ett exempel i en Minimal API:

```cs
app.MapGet("/products", (string? category, string? sort, int? page) =>
{
    // Använd queryparametrarna för att filtrera, sortera och paginera produkter
    // Här returnerar vi bara dem som en sträng för att visa att vi kan fånga upp dem
    // ur URLen och använda dem:
    return $"Category: {category}, Sort: {sort}, Page: {page}";
});
```

Det är model bindingen i ASP.Net som ser till att queryparametrarna mappas till metoden/endpointens parametrar baserat på namn. Om en parameter inte finns i URLen kommer den att få värdet `null` (om den är nullable) eller standardvärdet för dess typ (t.ex. `0` för `int`).