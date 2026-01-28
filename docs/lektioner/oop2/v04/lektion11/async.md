# Asynkron programmering

| **Begrepp**                | Vad det betyder                      |
| ---------------------- | ------------------------------------ |
| Synkront               | Vänta och blockera                   |
| Asynkront              | Vänta utan att blockera              |
| Samtidigt (concurrent) | Flera saker pågår                    |
| Parallellt             | Flera saker beräknas på olika kärnor |

Asynkron programmering i C# är oftast 'concurrent' men kan också vara 'parallell' beroende på hur det används.

## async och await

`await` används med asynkrona metoder. Om await använda i en metod MÅSTE metoden deklareras med `async`.

```cs
public async Task<string> FetchDataAsync(string url)
{
    using var httpClient = new HttpClient();
    var response = await httpClient.GetStringAsync(url);
    return response;
}
```

Asynkrona metoder returnerar oftast `Task` eller `Task<T>`, där `T` är returtypen som metoden egentligen. Task motsvarar alltså en synkron metod som returnerar `void`, och `Task<T>` motsvarar en synkron metod som returnerar `T`.

En task representerar ett pågående arbete som kommer att bli klart i framtiden. Vi kan antingen vänta på en task eller gå vidare och kolla på den senare. Exempelvis.

```cs
Task<string> dataTask = FetchDataAsync("https://example.com"); //startar en task
Console.WriteLine("Gör annat arbete här...");
var data = await dataTask; //väntar på att tasken ska bli klar
Console.WriteLine(data); //när det är det kan vi komma åt datat den returnerat
```

Vanligt är att vänta på en asynkron metod dirkt med `await`, såsom i exemplet ovan innuti medtoden FetchDataAsync.