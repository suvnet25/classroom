# Datum & tid

Datum och tid en en hel vetenskap i sig. I .NET finns en rad klasser som hjälper oss att hantera datum och tid på ett bra sätt. 

Den vanligaste klassen är `DateTime`, som representerar ett specifikt datum och tid. Dock säger den inte __exakt__ vilken tid det är då den inte tar hänsyn till tidszoner. För att hantera tidzoner måster du använda `DateTimeOffset`, som tar hänsyn till avståndet från UTC (Coordinated Universal Time). Se, redan här blev det lite krångligt!

Hursomhelst, så här skapar du ett `DateTimeOffset`-objekt som representerar just nuvarande tid:

```csharp
DateTimeOffset now = DateTimeOffset.Now;
Console.WriteLine(now); // Exempelutskrift: 2024-06-15 14:30:00 +02:00
```

Det går också att skapa ett `DateTimeOffset`-objekt med ett specifikt datum och tid:

```csharp
DateTimeOffset specificDate = new DateTimeOffset(2023, 12, 25, 10, 30, 0, TimeSpan.FromHours(1)); // 25 december 2023, 10:30 AM, UTC+1
Console.WriteLine(specificDate); // Exempelutskrift: 2023-12-25 10:30:00 +01:00
```