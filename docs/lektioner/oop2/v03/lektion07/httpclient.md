# HTTPClient

HttpClient är en klass som används i .NET för att skicka HTTP-requests och ta emot HTTP-responses från en resurs som är identifierad av en URI. Den används ofta för att kommunicera med webbtjänster och API:er.

### GET

Här är ett kort exempel hur en en HTTPClient skapas, skickar en GET-request och läser svaret som en sträng:

```cs
using System.Net.Http.Json;

var url = "https://jsonplaceholder.typicode.com/todos/1";
using var httpClient = new HttpClient();
var response = await httpClient.GetStringAsync(url);

Console.WriteLine(response);
```

Om vi istället vill ha svaret konverterat (deserialiserat) till ett objekt så kan vi använda samma klasser som vi använde i JSON-övningarna, men det finns också ett inbyggt sätt att göra detta med HttpClient, eftersom det är en så vanlig sak att göra.

För att detta ska funka måste det finnas en klass som matchar strukturen på JSON-objektet som vi får tillbaka. Titta på svaret ovan och skapa en klass som matchar JSON-datat:

```cs
public class Todo
{
    public int UserId { get; set; }
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool Completed { get; set; }
}
```

Nu kan vi använda HttpClient för att hämta och deserialisera JSON-objektet direkt till en instans av Todo-klassen:

```cs
var response = await httpClient.GetFromJsonAsync<Todo>(url);

Console.WriteLine($"Todo ID: {response.Id}, Title: {response.Title}, Completed: {response.Completed}");
```

`await` och `async` som du ser i denna kod är för att göra asynkrona anrop, vilket är viktigt när man arbetar med nätverksoperationer och annat som kan ta tid. Vi kommer att komma in mer på detta i senare lektioner.

### POST 

Det går också att skicka data med HttpClient, till exempel med en POST-request. Här är ett exempel (Observera skillnaden i URL!)

```cs
var newTodo = new Todo { UserId = 1, Title = "Learn HttpClient", Completed = false };

var postResponse = await httpClient.PostAsJsonAsync("https://jsonplaceholder.typicode.com/todos", newTodo);

if (postResponse.IsSuccessStatusCode)
{
    var createdTodo = await postResponse.Content.ReadFromJsonAsync<Todo>();
    Console.WriteLine($"Created Todo ID: {createdTodo.Id}, Title: {createdTodo.Title}");
}
else
{
    Console.WriteLine("Error creating todo");
}
```

# Övningar

Gå till (Dataanalys API v1)[https://www.suvnet.se/]. Där finns dokumentation för ett API som är kopplat till ett affärssystem. Detta är ingen testdatabas, utan används också av andra studenter, så var försiktig med vad du skickar in för data.

1. Börja med att hämta alla kunder.
2. Hämta en specifik kund.
3. Prova att lägga till dig själv som en kund med en POST-request. Undersök hur datat ser ut för en kund för att kunna skapa ett korrekt JSON-objekt att skicka med.
4. Prova att lägga till en ny produkt. Ladda om sidan för att se om din produkt finns med.
5. Skriv en review till en produkt.
6. Försök att ta bort den review du just skapade. Läs dokumentationen för att få en hint om hur detta går till!