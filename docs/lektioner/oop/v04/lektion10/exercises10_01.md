---
tags:
  - OOP1-Övning
---

# Övning 10 Properties

## Steg 3: *Properties* istället för get/set metoder

Det moderna alternativet till att skapa get- och set-metoder är att använda *properties*. All kod i standardbiblioteket, och de flesta andra proffessionelt skrivna bibliotek, använder properties, så det är bra att vänja sig vid det.

1. Ta bort get- och set-metoderna du skapade i steg 2.
2. Skapa istället publika properties `Name` och `Phone` med `get` och `set`.
3. Lägg in valideringen i `set`-delen av `Phone` propertyn.
4. Uppdatera koden så att den använder properties istället för get- och set-metoderna.

!!! Note "Tänkt på att!"
    * När du använder properties så används de precis som vanliga fält.
    * Namnen på properties brukar börja med stor bokstav, medan fältnamn brukar börja med liten bokstav.

## Exempel på en property:

```csharp   
private string name; // privat fält

public string Name   // publik property
{
    get 
    { 
        return name; 
    }    
    set 
    { 
        if (!string.IsNullOrWhiteSpace(value)) 
            name = value; 
        else 
            name = "Noname"; //Detta ser till att name aldrig blir en tom sträng
    }   
}
```