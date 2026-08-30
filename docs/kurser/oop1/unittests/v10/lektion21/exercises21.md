---
tags:
  - OOP1-Övning
---

# Övning 21 - `ParkingSession`

Det här är ett **enkelt, konkret exempel på TDD** (Test-Driven Development) i C#.  
Vi bygger en klass som hanterar en parkeringssession för en bil:

- Den håller reda på bilens registreringsnummer
- Vi kan **starta parkeringen** (`StartParking()`)
- Vi kan **stoppa parkeringen** (`StopParking()`)
- Den kan räkna ut **parkeringstid** och en **avgift**

Vi använder xUnit i exemplen, men principerna är desamma för andra test­ramverk.

---

## Grundidé: TDD i tre steg

För varje beteende eller krav gör vi:

1. **RED** – skriv ett test som *misslyckas* (röd)
2. **GREEN** – skriv minsta möjliga produktionskod för att få testet att *gå igenom* (grön)
3. **REFACTOR** – städa upp kod när testerna skyddar oss

Vi upprepar detta många små gånger.

---

## Steg 0 – Startläge

Vi behöver två proejkt:

- `Parking.Domain` (klassbibliotek) där vår `ParkingSession` ska ligga
- `Parking.Tests` (xUnit-testprojekt)

Så:

1. Skapa en ny mapp `ParkingSessionTDD`
2. Skapa ett nytt klassbibliotek `Parking.Domain` inuti mappen:
```bash
dotnet new classlib -n Parking.Domain
```
3. Skapa ett nytt xUnit-testprojekt `Parking.Tests` inuti mappen:
```bash
dotnet new xunit -n Parking.Tests
```
4. Skapa en slnfil i mappen:
```bash
dotnet new sln
```
5. Lägg till projekten i slnfilen:
```bash
dotnet sln add Parking.Domain/Parking.Domain.csproj
dotnet sln add Parking.Tests/Parking.Tests.csproj
```
6. Lägg till en referens i testprojektet till domänprojektet:
```bash
dotnet add Parking.Tests/ reference Parking.Domain/Parking.Domain.csproj
```

Skapa en tom klass i `Parking.Domain`:

```csharp
public class ParkingSession
{
}
```

Nu börjar vi!

---

## Steg 1 – En session måste ha ett registreringsnummer (RED)

**Mål:** När vi skapar en `ParkingSession` ska den lagra bilens regnummer.

### Test (RED)

```csharp
public class ParkingSessionTests
{
    [Fact]
    public void New_Session_Has_RegNumber()
    {
        var s = new ParkingSession("ABC123");

        Assert.Equal("ABC123", s.RegNumber);
    }
}
```

### Assert-metod: `Assert.Equal(expected, actual)`

- Jämför två värden.
- Testet passerar om de är lika, annars blir testet rött.

Kör testen: `dotnet test` → den **misslyckas** (klassen saknar konstruktor och property). Bra, det är meningen! Testet är rött (RED).

### Produktionskod (GREEN)

```csharp
public class ParkingSession
{
    public ParkingSession(string regNumber)
    {
        RegNumber = regNumber;
    }

    public string RegNumber { get; }
}
```

Kör `dotnet test` igen → nu ska testen visa **grönt**.

---

## Steg 2 – Starta parkering sätter starttid (RED)

**Mål:** När vi anropar `StartParking()` ska en starttid sättas.

### Test (RED)

```csharp
    [Fact]
    public void Start_Parking_Sets_StartTime()
    {
        var s = new ParkingSession("ABC123");

        s.StartParking();

        Assert.NotNull(s.StartTime);
    }
```

### Ny assert-metod: `Assert.NotNull(value)`

- Kontrollerar att ett värde **inte är null**.

Kör test → misslyckas (det finns ingen `StartParking` eller `StartTime`).

### Produktionskod (GREEN)

```csharp
public class ParkingSession
{
    public ParkingSession(string regNumber)
    {
        RegNumber = regNumber;
    }

    public string RegNumber { get; }

    public DateTime? StartTime { get; private set; }

    public void StartParking()
    {
        StartTime = DateTime.Now;
    }
}
```

Kör `dotnet test` → båda testerna ska nu vara **gröna**.

---

## Steg 3 – Man får inte starta en parkering två gånger (RED)

**Mål:** Det ska vara ett **ogiltigt tillstånd** att starta en parkering som redan är startad.

### Test (RED)

```csharp
    [Fact]
    public void Cannot_Start_Parking_Twice()
    {
        var s = new ParkingSession("ABC123");
        s.StartParking();

        Assert.Throws<InvalidOperationException>(() => s.StartParking());
    }
```

### Ny assert-metod: `Assert.Throws<TException>(Action)`

- Kontrollerar att en given kodbit kastar **ett visst typ av undantag**.
- Här förväntar vi oss `InvalidOperationException`.

Kör test → misslyckas, eftersom vår `StartParking` inte kastar något. Vi får alltså i nuläget köra StartParking två gånger utan problem, vilket inte är ok eftersom då sätts ju starttiden om.

### Produktionskod (GREEN)

```csharp
    public void StartParking()
    {
        if (StartTime != null)
            throw new InvalidOperationException("Parkeringen är redan startad.");

        StartTime = DateTime.Now;
    }
```

Kör `dotnet test` → alla tester ska vara **gröna**.

---

## Steg 4 – Stoppa parkering sätter sluttid (RED)

**Mål:** `StopParking()` ska sätta en sluttid.

### Test (RED)

```csharp
    [Fact]
    public void Stop_Parking_Sets_EndTime()
    {
        // Arrange
        var s = new ParkingSession("ABC123");
        s.StartParking();

        // Act
        s.StopParking();

        // Assert
        Assert.NotNull(s.EndTime);
    }
```

Kör test → misslyckas (ingen `StopParking` eller `EndTime`).

### Produktionskod (GREEN)

```csharp
    public DateTime? EndTime { get; private set; }

    public void StopParking()
    {
        EndTime = DateTime.Now;
    }
```

Kör `dotnet test` → ska vara **grönt**.

---

!!! Info "Ett litet avbrott och mellansteg att lösa själv!"
    På samma sätt som att StartParking inte får anropas två gånger, så borde minst två regler gälla för StopParking() också. Vilka då tycker du? Skriv tester för dessa två regler en och en i taget, och implementera sedan produktionskoden som gör testerna gröna! Fråga läraren om du kör fast och inte kommer på båda två.

## Steg 5 – Duration (varaktighet) ska gå att räkna ut (RED)

**Mål:** Vi vill kunna få ut hur länge bilen stod parkerad.

- Duration = `EndTime - StartTime`
- Gäller bara när båda tiderna är satta.

### Test (RED)

```csharp
    [Fact]
    public void Duration_Is_Calculated_Correctly()
    {
        // Arrange
        ParkingSession s = new("ABC123");
        s.StartParking();

        // Här skulle man egentligen vilja kunna styra tiden mer exakt,
        // men för enkelhetens skull låter vi bara lite tid gå. Detta är inte optimalt i "riktiga" tester. Varför inte?
        Thread.Sleep(100);
        s.StopParking();

        // Act & Assert
        Assert.True(session.Duration > TimeSpan.Zero); //Inte helt perfekt heller, men duger för nu för att inte krångla till saker för mkt.
    }
```

### Ny assert-metod: `Assert.True(condition)`

- Kontrollerar att ett booleskt uttryck är **sant**.

Kör test → misslyckas (ingen `Duration` property).

### Produktionskod (GREEN)

```csharp
    public TimeSpan Duration
    {
        get
        {
            return EndTime.Value - StartTime.Value;
        }
    }
```

Kör `dotnet test` → testet ska nu vara **grönt**.

> **OBS:** I "riktiga" system hade vi troligen injicerat en klocka (`IDateTimeProvider`) i stället för att använda `DateTime.Now`, för att göra testerna mer deterministiska. Här håller vi det enkelt.

> **OBS 2:** Det saknas två viktiga checkar i Duration-propertyn. Vilka då och vilka tester behövs för att se till så att denna check sker?

---

## Steg 6 – Avgiftsregler (RED)

Nu lägger vi på en enkel regel för **parkeringsavgift**:

- Första timmen: **20 kr**
- Varje **påbörjad** extra timme: **10 kr**

Vi återanvänder `Duration` som vi nyss införde.

### Test (RED)

(Vi "fuskar" lite i testet genom att sätta `EndTime` direkt, för att slippa vänta i verklig tid. Detta skulle kunna lösas bättre, men vi gör inte det nu.)

```csharp
    [Fact]
    public void First_Hour_Is_20_SEK()
    {
        // Arrange
        var s = new ParkingSession("ABC123");

        // simulera: parkerad i 45 minuter
        s.StartParking();
        s.EndTime = s.StartTime!.Value.AddMinutes(45);

        // Act
        var fee = s.CalculateFee();

        // Assert
        Assert.Equal(20, fee);
    }
```

Kör test → misslyckas (ingen `CalculateFee`).

### Produktionskod (GREEN)

* Duration är ett TimeSpan (sluttid - starttid).
* Duration.TotalHours ger antal timmar som decimaltal. Ex: 1.25 timmar
* Math.Ceiling() avrundar uppåt till närmaste heltal.

```csharp
    public int CalculateFee()
    {
        var hours = Math.Ceiling(Duration.TotalHours);

        if (hours <= 1)
            return 20;

        return 20 + (int)(hours - 1) * 10;
    }
```

Kör `dotnet test` → nu ska alla tester vara **gröna**.

Du kan lägga till fler tester för olika tider, t.ex. 30 min, 60 min, 2 timmar osv.

---

## Steg 7 – Samlad klass efter första TDD-varvet

Här är hela `ParkingSession` så som den ser ut efter de här stegen:

```csharp
public class ParkingSession
{
    public ParkingSession(string regNumber)
    {
        RegNumber = regNumber;
    }

    public string RegNumber { get; }

    public DateTime? StartTime { get; private set; }
    public DateTime? EndTime { get; set; }

    public void StartParking()
    {
        if (StartTime != null)
            throw new InvalidOperationException("Parkeringen är redan startad.");

        StartTime = DateTime.Now;
    }

    public void StopParking()
    {
        if (StartTime == null)
            throw new InvalidOperationException("Parkeringen har inte startat än.");

        if (EndTime != null)
            throw new InvalidOperationException("Parkeringen är redan stoppad.");

        EndTime = DateTime.Now;
    }

    public TimeSpan Duration
    {
        get
        {
            if (StartTime == null || EndTime == null)
                throw new InvalidOperationException("Parkeringen är inte avslutad ännu.");

            return EndTime.Value - StartTime.Value;
        }
    }

    public int CalculateFee()
    {
        var hours = Math.Ceiling(Duration.TotalHours);

        if (hours <= 1)
            return 20;

        return 20 + (int)(hours - 1) * 10;
    }
}
```

---

## Vad vi faktiskt tränade på här

- **TDD-arbetssättet**:
  - Skriv först ett test för **önskat beteende**
  - Se det misslyckas (RED)
  - Implementera minsta möjliga kod (GREEN)
  - Upprepa
- Vi pratade igenom flera **assert-metoder** i xUnit:
  - `Assert.Equal` – jämför förväntat/aktuellt värde
  - `Assert.NotNull` – ser till att något inte är null
  - `Assert.Throws<T>` – ser till att rätt typ av undantag kastas
  - `Assert.True` – kontrollerar godtyckligt booleskt uttryck
- Vi tog fram några enkla **domäninvarianter**:
  - En parkering kan inte startas två gånger
  - En parkering kan inte stoppas innan den har startats
  - Duration får bara läsas när både start- och sluttid är satta

Vill du utveckla vidare kan du göra nya TDD-steg för t.ex.:

- Maxavgift per dag
- Gratis helger
- Olika taxa för olika zoner
- Flytta ut avgiftslogiken till en egen klass/strategi