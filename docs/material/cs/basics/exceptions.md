# Exceptions

Ett `exception` är ett fel som uppstår *när programmet körs*, t.ex. att dela med noll eller läsa en fil som inte finns.

## Hantera exceptions (undantag)

I C# används try/catch för att fånga och hantera felet så att programmet inte kraschar.

```cs title="Kodstruktur"
try
{
    // kod som kan orsaka ett fel som vi vill testa att köra
}
catch 
{
    // Om koden i try-blocket orsakar ett fel, så hoppar vi hit
    // och kan hantera felet på något sätt, skriva ut ett felmeddelande etc.
    // Utan detta skulle programmet krascha med felmeddelandet "Unhandled Exception"
} 
```

Du kan se detta nästan som en specialiserad form av if-sats, där du testar om något går fel. På samma sätta går det att ha flera catch-block för att hantera olika typer av fel.

```cs title="Flera catch-block"
try
{
    // kod som kan orsaka olika typer av fel
}
catch (DivideByZeroException ex)
{
    // Hantera fallet när användaren försöker dela med noll
}
catch (FormatException ex)
{
    // Hantera fallet när användaren skriver in något som inte är ett tal
}
catch (Exception ex)
{
    // Hantera alla andra typer av fel
}
```

## Sammanfattning

* **Exception** = fel vid körning.
* **Utan** try/catch kraschar programmet.
* **Med** try/catch kan du styra över felet.

* **try** = koden som kan gå fel.
* **catch** = vad som händer om felet uppstår.
* **finally** = körs alltid, oavsett om fel inträffat eller inte.

## Kasta exceptions

Vi kan också själva kasta exceptions med `throw`-satsen. Detta används ofta i metoder för att signalera att något gått fel.

```cs title="Kasta exception"
if (string.IsNullOrEmpty(name))
{
    throw new ArgumentException("Name cannot be null or empty.");
}
```

## Tänk på att

* Använd exceptions för **oväntade fel som inte kanske borde hända i vanliga fall**, inte istället för vanlig flödeskontroll.
* Använd specifika exception-typer (t.ex. `DivideByZeroException`) istället för den generella `Exception` när det är möjligt, för att kunna hantera olika fel på olika sätt.
* Det finns metoder som undviker exceptions, t.ex. `int.TryParse`. Det kan ofta vara smidigare att använda dem istället för att hantera exceptions.