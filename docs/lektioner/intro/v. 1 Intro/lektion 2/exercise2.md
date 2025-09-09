---
tags:
  - OOP1-Övning (svår)
---

# Övning 02 Todo CLI

!!! warning ""
    Detta är en längre övning som kan ta flera timmar att lösa. Den kan vara ganska klurig då det kanske är många saker som är nya för dig hur det funkar med kommandoradsprogram, filhantering och så vidare. Ta det lugnt, jobba i din egen takt, fråga om hjälp när du kör fast och försök lösa så mycket som möjligt på egen hand.

Du ska skapa ett enkelt kommandoradsprogram[^1] som hanterar en todo-lista.
Så här ska det funka:

* `todo` visar en numrerad lista med saker att göra, om de är gjorda eller inte, och eventuellt en deadline
* `todo -h` visar en hjälptext om programmets andra kommandon
* `todo add "Gå ut med soporna"` lägger till en ny sak att göra utan deadline
* (valfri) `todo add "Betala räkningar" --due 2024-12-01` lägger till en ny sak att göra med deadline
* `todo done 2` markerar sak nummer 2 som gjord
* `todo remove 3` tar bort sak nummer 3 från listan

#### Regler

* Allt lagras i arrayer och hanteras med loopar och villkor (inga List<> eller LINQ)
* Inga nya klasser ska skapas
* Inga nya metoder ska skapas

!!! tip "Tips"
    * Använd `args` för att läsa in kommandoradsargument
    * Använd `DateTime.TryParse` för att tolka datum
    * Använd `DateTime.Now` för att få dagens datum
    * Använd `string.Split` för att dela upp strängar
    * Använd `string.Join` för att sätta ihop strängar
    * Använd `File.ReadAllLines` och `File.WriteAllLines` för att läsa och skriva filer
    * Använd `Array.Resize` för att ändra storlek på arrayer

[^1]: Ett kommandoradsprogram är ett program som körs i en terminal/kommandoprompt, utan grafiskt gränssnitt. `dotnet` är ett exempel på ett sådant program. Du skall alltså inte skapa ett program som startar och som användaren sedan använder sig av medan det är igång, utan det startas med ett argument och avslutas direkt när det är klar.