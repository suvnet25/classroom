# Exempellösningar

??? tip "Lösning 1. Hoppa över tomma rader"
    ```csharp
    string[] rader = File.ReadAllLines("input04.txt");

    foreach (string rad in rader)
    {
        // Kolla om raden inte är tom eller bara whitespace
        if (!string.IsNullOrWhiteSpace(rad))
        {
            Console.WriteLine(rad);
        }
    }
    ```

??? tip "Lösning 2. Menyn"
    ```csharp
    while (true) // oändlig loop
    {
        Console.WriteLine("1. Visa dagens datum och tid");
        Console.WriteLine("2. Lista alla namn");
        Console.WriteLine("3. Avsluta\n");// \n är radbrytning, istället för en extra Console.WriteLine()
        Console.Write("Val: "); 

        string input = Console.ReadLine();

        if (input == "1")
        {
            Console.WriteLine(DateTime.Now);
        }
        else if (input == "2")
        {
            var people = File.ReadAllLines("input04.txt");

            foreach (var name in people)
            {
                if (string.IsNullOrWhiteSpace(name)) continue;
                Console.WriteLine(name);
            }
        }
        else if (input == "3")
        {
            break; // avsluta loopen så slutar progammet (varför blir det så?)
        }
        else
        {
            Console.WriteLine("Felaktigt val");
        }

        Console.WriteLine(); // extra rad så det blir lite luftigare
    }
    ```

??? tip "Lösning 3. Metoder i menyn"
    ```csharp
    while (true) 
    {
        Console.WriteLine("1. Visa dagens datum och tid");
        Console.WriteLine("2. Lista alla namn");
        Console.WriteLine("3. Avsluta\n");// \n är radbrytning, istället för en extra Console.WriteLine()
        Console.Write("Val: ");

        string input = GetInput();

        if (input == "1")
        {
            PrintDateInBlue();
        }
        else if (input == "2")
        {
            PrintNames("input04.txt");
        }

        Console.WriteLine();
    }

    void PrintDateInBlue()
    {
        Console.ForegroundColor = ConsoleColor.Blue;
        Console.WriteLine(DateTime.Now);
        Console.ResetColor();
    }

    void PrintNames(string path)
    {
        var people = File.ReadAllLines(path);

        foreach (var name in people)
        {
            if (string.IsNullOrWhiteSpace(name)) continue;
            Console.WriteLine(name);
        }
    }

    string GetInput()
    {
        while (true)
        {
            string input = Console.ReadLine();

            if (!string.IsNullOrWhiteSpace(input))
            {
                if (input == "3")
                {
                    Environment.Exit(0);
                }
                return input;
            }

            Console.WriteLine("Du måste skriva något!");
        }
    }
    ```

??? tip "Lösning 4. Inloggning"
    ```csharp
    class Program
    {
        static void Main()
        {
            string username = GetString("Ange ditt användarnamn:");
            string password = GetString("Ange ditt lösenord:");

            if (IsLoginValid(username, password))
            {
                Console.WriteLine("Inloggning lyckades!");
            }
            else
            {
                ShowError("Fel användarnamn eller lösenord.");
            }
        }

        static string GetString(string prompt)
        {
            while (true)
            {
                Console.WriteLine(prompt);
                string input = Console.ReadLine();

                if (!string.IsNullOrWhiteSpace(input))
                {
                    return input;
                }

                ShowError("Du måste skriva något!");
            }
        }

        static void ShowError(string message)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"[FEL] {message}");
            Console.ResetColor();
        }

        static bool IsLoginValid(string username, string password)
        {
            return username == "admin" && password == "1234";
        }
    }
    ```