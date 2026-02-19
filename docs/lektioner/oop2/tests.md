---
tags:
  - OOP2-Övning
---

# Övningar

??? Lambda

    === "Övningar"

        Skriv lambda-expression som:

        1. Skriver ut "Hello, World!".
        2. Tar ett heltal och returnerar dess kvadrat 
        3. Tar en lista av heltal och returnerar true eller false beroende på om alla tal är positiva.

    === "Lösning"

        ```cs
        () => Console.WriteLine("Hello, World!");
        x => x * x
        numbers => numbers.All(n => n > 0)
        ```

??? LINQ

    === "Övningar"

        Skriv LINQ-queries som:

        1. Filtrerar en lista av heltal för att bara inkludera jämna tal.

    === "Lösning"

        ```cs
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        ```