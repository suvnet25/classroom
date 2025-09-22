---
tags:
  - OOP1-Övning
---

# Övning 10 Properties

> **OBS:** Se [avsnittet om properties](../../../../material/cs/oop/properties.md) för att se hur det skrivs i kod.

## Steg 3: *Properties* istället för get/set metoder

Det moderna alternativet till att skapa get- och set-metoder är att använda *properties*. All kod i standardbiblioteket, och de flesta andra proffessionelt skrivna bibliotek, använder properties, så det är bra att vänja sig vid det.

### 3.1 Byt ut get/set metoder mot properties

1. Ta bort get- och set-metoderna du skapade i steg 2.
2. Skapa istället publika properties `Name` och `Phone` med `get` och `set`.
3. Lägg in valideringen i `set`-delen av `Name` propertyn (Om du hade något validering vill säga. Annars kan du lägga in det! Alltså, om nån försöker sätta `Name` till en tom sträng, så ska den antingen sättas till "No Name" eller behålla det tidigare namnet).
4. `Phone` propertyn ska inte ha någon validering, utan kan vara en *auto-implemented property*.
4. Uppdatera koden så att den använder properties istället för get- och set-metoderna.

!!! Note "Tänk på att!"
    * När du använder properties så används de precis som vanliga fält.
    * Namnen på properties ska  börja med stor bokstav, medan fältnamn ska  börja med liten bokstav.
    
### 3.2 En till property

Ofta i adressböcker går det att markera vissa kontakter som favoriter. Låt oss lägga till en sådan property.

1. Lägg till en publik property `IsFavorite` av typen `bool` med både `get` och `set`.
2. Denna property ska vara en *auto-implemented property*.

### 3.3 Ännu en property - CreatedAt
I många system är det vanligt att spara när ett objekt skapades. Låt oss lägga till en sådan property.

1. Lägg till en publik property `CreatedAt` av typen `DateTime` med bara en `get`. Detta blir nu en *read-only property*.
2. Sätt värdet på `CreatedAt` med en sk. `field initializer` när du deklarerar propertyn, så att den sätts till `DateTime.Now` när objektet skapas.
3. Testa att skriva ut `CreatedAt` när du listar dina kontakter.