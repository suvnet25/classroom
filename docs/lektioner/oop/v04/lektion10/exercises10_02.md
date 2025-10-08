---
tags:
  - OOP1-Övning
---

# Övning 10 Konstruktor

> **OBS:** Se [avsnittet om konstruktorer](../../../../material/cs/oop/constructors.md) för att se hur det skrivs i kod.

## 2. En konstruktor i Contact

Vi vill kunna skapa ett `Contact`-objekt och direkt skicka med namn och telefonnummer, istället för att först skapa objektet och sedan sätta egenskaperna. Detta gör vi med en *konstruktor*. Det borde nämligen inte gå att skapa kontakt-objekt utan namn och telefonnummer!

1. Skapa en konstruktor i `Contact`-klassen som tar emot namn och telefonnummer som parametrar.
2. I konstruktorn sätter du egenskaperna `Name` och `Phone` med de värden som skickas in.
3. Uppdatera koden i `Main`-metoden så att den använder den nya konstruktorn för att skapa `Contact`-objekt, istället för att sätta properties.
4. Om du vill kan du sätta `CreatedAt` i konstruktorn istället för med en field initializer, men det spelar ingen större roll.

### 2.1. Constructor overloading

5. Prova att göra konstruktorn till en *overloaded constructor* genom att skapa en till konstruktor som bara tar emot namn.
6. Testa att skapa `Contact`-objekt med den nya konstruktorn istället. OBS! Det är fortfarande bara en konstruktor som ska användas! Välj den som passar bäst.