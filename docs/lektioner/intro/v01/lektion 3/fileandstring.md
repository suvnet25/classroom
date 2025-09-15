---
tags:
  - OOP1-Övning
---

# Övning 03 File

Kika på dokumentationen om [File-klassen](../../../../material/cs/standardbibliotek/file.md).

Gör ett program som använder någon av funktionerna i `File`-klassen och/eller `String`-klassen för att lösa något av följande problem:

1. **Räkna rader i en textfil**
    * Läs in en textfil och räkna hur många rader den innehåller.
    * Visa resultatet i konsolen.

2. **Sök efter ett ord i en textfil**
    * Läs in en textfil och låt användaren skriva in ett ord.
    * Räkna hur många gånger ordet förekommer i filen och visa resultatet.
    * Utveckling: Visa även vilka rader ordet förekommer på.
    * Utveckling 2: Gör sökningen okänslig för versaler/gemener (case insensitive).
    * Utveckling 3: Visa raderna där ordet förekommer, med ordet markerat (t.ex. med asterisker `*ord*`).

3. **Skapa en "sammanfattning" av en textfil**
    * Läs in en textfil och skapa en ny fil som innehåller de första 5 raderna  från den ursprungliga filen.
    * Spara den nya filen med samma namn som den ursprungliga med tillägget "_summary".

??? tip "Exempellösning på **Sök efter ett ord i en textfil**"
    ```csharp
    string[] lines = File.ReadAllLines("example.txt");

    while (true)
    {
        int wordCount = 0;
        int lineCount = 0;
        string foundOnRows = "";

        Console.Write("Sök: ");
        string searchWord = Console.ReadLine();
        if (string.IsNullOrEmpty(searchWord)) break;

        for (int i = 0; i < lines.Length; i++)
        {
            string line = lines[i];
            string[] words = line.Split(" ");

            bool isFound = false;

            foreach (string word in words)
            {
                if (word.Contains(searchWord, StringComparison.InvariantCultureIgnoreCase))
                {
                    wordCount++;
                    isFound = true;
                }
            }

            if (isFound)
            {
                lineCount++;
                foundOnRows += i + ", ";
            }
        }

        Console.WriteLine("Antal ord: " + wordCount);
        Console.WriteLine("Hittade på " + lineCount + "rader.");
        Console.WriteLine("Hittades på raderna: " + foundOnRows);
    }
    ```