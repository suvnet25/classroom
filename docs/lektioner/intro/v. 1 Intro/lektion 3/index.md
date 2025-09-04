# Lektion 3 - Problemlösning och Pseudokod

## Innehåll

* Lite repetition av föregående lektion
* Den där for-loopen
* Debuggern
* Problemlösning - Hur gör man?
* Pseudokod och flödesscheman
* Vanliga .NET Bibliotek och några av deras funktioner
    * Random
    * File.*
    * String
    * DateTime

---

#### Anteckningar

??? "Lösning på forloopsövning 2 från förra lektionen"
    Låt användaren skriva in en siffra. Låt den siffran bestämma hur många rader som skall skrivas ut enligt mönstret ovan. Till skillnad från ovan skall dock mönstret bilda en pyramid enligt följande:
    ```
       * *
      ** **
     *** ***
    **** ****
    ```

    ```csharp
    Console.Write("Ange antal rader: ");
    int rowsInTotal = int.Parse(Console.ReadLine());
    for (int currentRow = 1; currentRow <= rowsInTotal; currentRow++)
    {
        // Hur många mellanslag ska vi skriva ut?
        for (int j = rowsInTotal; j > currentRow; j--)
        {
            Console.Write(" ");
        }

        // Hur mnga stjärnor?
        for (int k = 1; k <= currentRow; k++)
        {
            Console.Write("*");
        }

        Console.Write(" "); // Det är alltid bara ett mellanslag mellan vänster och höger pyramidhalva

        // Hur många stjärnor till höger? Jo, lika många gånger som första gången!
        for (int l = 1; l <= currentRow; l++)
        {
            Console.Write("*");
        }

        // När vi är klara måste vi byta till nästa rad så allt inte kommer på samma rad!
        Console.WriteLine();
    }
    ```