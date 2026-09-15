# Blazor

Blazor är ett ramverk för att bygga interaktiva webbapplikationer med C# och .NET. Det finns två varianter av Blazor: Blazor Server och Blazor WebAssembly. Blazor Server körs på servern och uppdaterar klienten via SignalR, medan Blazor WebAssembly körs direkt i webbläsaren. Blazor kan också skicka statiska sidor till klienten, likt MVC. Då används något som heter Static Serverside Rendering (SSR).

## Komponenter

* Blazor byggs upp med komponenter, där komponenterna är hela sidor eller delar av sidor.
* Komponenter ligger i .razor-filer och består av både C#-kod och HTML.
* Komponenter kan återanvändas och kan ha in-parametrar.
* Komponenterna håller sitt eget state per användare, vilket gör att varje användare kan ha olika data i samma komponent.
* Komponenter ska ses som klasser, eftersom de ÄR klasser, bara det att de ser lite annorlunda ut. I klassen ComponentBase finns metoder som kallas på vid olika tidpunkter under komponentens *livscykel*. Mer om det längre ner.

Allt om komponenter hittar du [i dokumentationen](https://learn.microsoft.com/en-us/aspnet/core/blazor/components).

## Dependency Injection

Eftersom koponenterna inte har någon konstruktor som vanliga klasser, måste dependency injection ske via @inject-direktivet i .razor-filen:

```cs
@inject IMyService MyService

<p>@MyService.GetData()</p>

@code {
    // Använd MyService-objektet här i kod, eller i HTML-delen ovan
}
```

## Render mode

För att aktivera det interaktiva läget där SignalR används för att kommunicera mellan webbläsaren och klienten måste det läget aktiveras med ett razor directive högst upp i komponenten:

```cs
@page "/mycomponent"
@renderMode InteractiveServer
```

För att aktivera interactive mode globalt kan du också ställa in det på router-komponenten. Alla komponenter som ligger under router-komponeneten kommer då att ärva den inställningen:

```html
<body>
    <Routes @rendermode="InteractiveServer" />
    <ReconnectModal />
    <script src="@Assets["_framework/blazor.web.js"]"></script>
</body>
```


## Misc

NavigationManager
StateHasChanged


## Life Cycle Methods

Life cycle methods är metoder som körs i olika skeden av en komponent eller en sida i Blazor. De används för att hantera olika händelser och tillstånd i applikationen. De viktigaste är:

* OnInitialized() - Körs när komponenten initialiseras.
* OnParametersSet() - Körs när komponenten får nya parametrar. Tex om en parameter i URL:en ändras.
* OnAfterRender() - Körs efter att komponenten har renderats.
* OnDispose() - Körs när komponenten tas bort från DOM:en eller när sidan stängs.

### OnInitialized()

**När**: Körs när komponenten initialiseras, innan den renderas för första gången.
**Används för**: Sätta startvärden, registrera objekt och events.
**Varför**: Garanteras att köras innan komponenten syns på skärmen.

```cs 
protected override void OnInitialized()
{
    // Sätt startvärden
    count = 0;

    // Registrera events
    MyService.OnDataChanged += HandleDataChanged;
}
```

### OnParametersSet()

**När**: Körs när komponenten får nya parametrar, tex när URL:en ändras, eller dess parent-komponent skickar nya parametrar.
**Används för**: Uppdatera komponentens tillstånd baserat på nya parametrar.
**Varför**: Garanteras att köras varje gång komponenten får nya parametrar.

```cs
protected override void OnParametersSet()
{
    // Uppdatera tillstånd baserat på nya parametrar
    if (Id != previousId)
    {
        LoadData(Id);
        previousId = Id;
    }
}
```

### OnAfterRender()

**När**: Körs efter att komponenten har renderats.
**Används för**: Interagera med DOM, starta animationer, fokusera element.
**Varför**: Garanteras att köras efter att komponenten syns på skärmen.

```cs
protected override void OnAfterRender(bool firstRender)
{
    if (firstRender)
    {
        // Fokusera på ett specifikt html-element
        myInputElement.FocusAsync();
    }
}
```

### OnDispose()

**När**: Körs när komponenten tas bort från DOM:en eller när sidan stängs.
**Används för**: Rensa upp resurser, avregistrera events.
**Varför**: Garanteras att köras när komponenten inte längre behövs.

Obs, du behöver implementera IDisposable för att OnDispose ska fungera.

```cs
@implements IDisposable

@code 
{    
    public void Dispose()
    {
        // Avregistrera events
        MyService.OnDataChanged -= HandleDataChanged;
    }
}
```

# Exempelkomponeneter

## Statisk sida

```cs
@page "/static"

<h1>Statisk sida</h1>
<p>Denna sida är helt statisk och har ingen interaktivitet.</p>
```

## Interaktiv sida

```cs
@page "/interactive"
@renderMode InteractiveServer

<h1>Interaktiv sida</h1>
<p>Denna sida är interaktiv och uppdateras i realtid.</p>

<button @onclick="IncrementCount">Klicka här</button>
<p>Du har klickat @count gånger.</p>

@code {
    private int count = 0;

    private void IncrementCount()
    {
        count++;
    }
}
```

## Komponent med parameter

```cs 
@page "/greeting/{Name}"

<h1>Hej, @Name!</h1>

@code {
    [Parameter]
    public string Name { get; set; }
}
```

## Komponent som använder en annan komponent med parametrar

```cs
@page "/parent"
<h1>Parent Component</h1>

<ChildComponent Message="Hello from Parent!" Count="3" />

@code {
    // Parent component code
}
```

```cs

<h1>Child Component</h1>

for (int i = 0; i < Count; i++)
{
    <p>@Message</p>
}

@code {
    [Parameter]
    public string Message { get; set; }

    [Parameter]
    public int Count { get; set; }
}
```

## Komponent som anropar en asynkron service

```cs
@page "/data"
@inject IDataService DataService

<h1>Data från service</h1>
<p>@data</p>

@code {
    private string data;

    protected override async Task OnInitializedAsync()
    {
        data = await DataService.GetDataAsync();
    }
}
```

## Komponent med ett input-fält och data bindning

```cs
@page "/form"

<h1>Input med data bindning</h1>
<input @bind="name" placeholder="Skriv ditt namn" />

<p>Hej, @name!</p>

@code {
    private string name;
}
```