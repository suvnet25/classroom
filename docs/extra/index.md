---
tags:
  - OOP1-Övning
---

# Extra övningar

Här fyller jag på med extra övningar i C# som kan vara bra att göra för att träna på olika saker.

## Grundläggande C\#

??? Info "En enkel kalkylator"
    Skriv ett program som:

    - frågar användaren om två tal
    - frågar användaren om en operation (+, -, *, /)
    - utför operationen på de två talen
    - skriver ut resultatet

??? Tip "Exempellösning"
    ```csharp
    Console.Write("Ange första talet: ");
    double num1 = Convert.ToDouble(Console.ReadLine());
    Console.Write("Ange andra talet: ");
    double num2 = Convert.ToDouble(Console.ReadLine());
    Console.Write("Ange operation (+, -, *, /): ");
    string operation = Console.ReadLine();
    double result = 0;

    switch (operation)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 != 0)
                result = num1 / num2;
            else
                Console.WriteLine("Fel: Division med noll är inte tillåtet.");
            return;
        default:
            Console.WriteLine("Fel: Ogiltig operation.");
            return;
    }

    Console.WriteLine($"Resultat: {result}");
    ```

## Metoder

??? Info "En hälsningsmetod"
    Skriv en metod som:

    - returnerar en sträng
    - heter `CreateGreeting`
    - tar emot en parameter av typen `string` som heter `name`
    - returnerar en hälsning i form av en sträng, t.ex. "Hello, [name]!"

??? Tip "Exempellösning"
    ```csharp
    string CreateGreeting(string name)
    {
        return $"Hello, {name}!";
    }
    ```

??? Info "En metod för att beräkna arean av en rektangel"
    Skriv en metod som:

    - returnerar en `double`
    - heter `CalculateArea`
    - tar emot två parametrar av typen `double` som heter `width` och `height`
    - returnerar arean av rektangeln (width * height)

??? Tip "Exempellösning"
    ```csharp
    double CalculateArea(double width, double height)
    {
        return width * height;
    }
    ```
??? Info "Anropa färdiga metoder"
    ```cs
    // Lös uppgifterna steg för steg.
    // Testa att köra programmet efter varje steg för att se resultatet.

    class Program
    {
        static void Main()
        {
            // 1. Kalla på metoden ShowMessage: (1 rad kod behövs)
            

            // 2. Kalla på metoden GetUserName och spara returvärdet i en variabel. (1 rad kod behövs)
            

            // 3. Kalla på metoden GreetUser, skicka in användarnamnet som argument. (1 rad kod behövs)
            

            // 4. Kalla på metoden GetUserAge och spara returvärdet i en variabel. (1 rad kod behövs)
            

            // 5. Kalla på metoden ConvertAgeToDays, och skriv ut "Du är X dagar gammal" i konsolen. (2 rader kod behövs)


        }

        static void ShowMessage()
        {
            Console.WriteLine("Välkommen till Metodövningar!\n---------------------");
        }

        static string GetUserName()
        {
            Console.Write("Ange ditt namn: ");
            return Console.ReadLine();
        }

        static void GreetUser(string name)
        {
            Console.WriteLine($"Hej, {name}! Hoppas det går bra med kodandet.");
        }

        static int GetUserAge()
        {
            Console.Write("Ange din ålder: ");
            return int.Parse(Console.ReadLine());
        }

        static int ConvertAgeToDays(int age)
        {
            return age * 365;
        }
    }
    ```

??? Tip "Exempellösning"
    ```csharp
    ShowMessage();

    string userName = GetUserName();

    GreetUser(userName);

    int userAge = GetUserAge();

    int ageInDays = ConvertAgeToDays(userAge);
    Console.WriteLine($"Du är {ageInDays} dagar gammal.");
    ```


??? Info "Skriv metoderna som saknas"
    ```cs
    // Skriv de metoder som behövs så att programmet fungerar att köra. 
    // Du ***ska inte*** ändra något i Main-metoden, bara läggat till metoder.

    class Program
    {
        static void Main()
        {
            ShowHeader(); // Ska visa programmets namn: "Word analyzer"

            string word1 = GetWordFromUser(); // Ska fråga användaren om ett ord och returnera det
            string word2 = GetWordFromUser();

            int length1 = GetLengthOfWord(word1); // Ska returnera längden på ordet
            int length2 = GetLengthOfWord(word2);

            Console.WriteLine($"The word {word1} has {length1} letters.");
            Console.WriteLine($"The word {word2} has {length2} letters.");

            string longerWord = GetLongerWord(word1, word2); // Ska returnera det längsta ordet
            Console.WriteLine($"The longer word is: {longerWord}");

            // Ska visa ett avslutningsmeddelande som ska visa texten "Hejdå! Du skrev in X antal bokstäver totalt."
            ShowFooter(word1, word2);
        }
    }
    ```

??? Tip "Exempellösning enkel"
    ```csharp
    static void ShowHeader()
    {
        Console.WriteLine("Word analyzer");
        Console.WriteLine("--------------");
    }

    static string GetWordFromUser()
    {
        Console.Write("Ange ett ord: ");
        return Console.ReadLine();
    }

    static int GetLengthOfWord(string word)
    {
        return word.Length;
    }

    static string GetLongerWord(string word1, string word2)
    {
        if (word1.Length >= word2.Length)
            return word1;
        else
            return word2;
    }

    static void ShowFooter(string word1, string word2)
    {
        int totalLength = word1.Length + word2.Length;
        Console.WriteLine($"Hejdå! Du skrev in {totalLength} antal bokstäver totalt.");
    }
    ```

??? Tip "Exempellösning mer avancerad"
    ```cs
    static void ShowHeader()
    {
        //Kan du förklara vad som händer här?
        Console.WriteLine("Word analyzer\n==============");
    }

    // Vad ser den här metoden till att lösa som den första enkla versionen inte gjorde?
    static string GetWordFromUser()
    {
        string input;

        while (true)
        {
            Console.Write("Skriv ett ord: ");
            input = Console.ReadLine().Trim();
            if (!input.Contains(' ')) break;
            Console.WriteLine("Bara ett ord, försök igen.");
        }

        return input;
    }

    static int GetLengthOfWord(string word)
    {
        // Kan du förklara vad som händer på den här raden?
        return word.Trim().Length;
    }

    static string GetLongerWord(string word1, string word2)
    {
        //Varför används GetLengthOfWord här istället för word1.Length tror du?
        if (GetLengthOfWord(word1) >= GetLengthOfWord(word2)) return word1;
        return word2;
        //Och, varför behövs det inte en else-sats här?
    }

    static void ShowFooter(string word1, string word2)
    {
        int totalLength = GetLengthOfWord(word1) + GetLengthOfWord(word2);
        Console.WriteLine($"Hejdå! Du skrev in {totalLength} antal bokstäver totalt.");
    }
    ```


## Klasser och objekt

??? Info "En klass för att representera en bil"
    Skapa en klass som:

    - heter `Car`
    - har följande egenskaper (properties):
        - `Make` (string)
        - `Model` (string)
        - `Year` (int)
    - har en metod `GetCarInfo` som returnerar en sträng med bilens information i formatet "Year Make Model"

??? Tip "Exempellösning"
    ```csharp
    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }

        public string GetCarInfo()
        {
            return $"{Year} {Make} {Model}";
        }
    }
    ```

??? Info "Skapa och använd ett objekt av klassen Car"
    Skriv kod som:

    - skapar tre objekt av klassen `Car`
    - sätter egenskaperna `Make`, `Model` och `Year`
    - anropar metoden `GetCarInfo` och skriver ut resultatet på alla tre bilar

??? Tip "Exempellösning"
    ```csharp
    Car car1 = new Car { Make = "Toyota", Model = "Corolla", Year = 2020 };
    Car car2 = new Car { Make = "Honda", Model = "Civic", Year = 2019 };
    Car car3 = new Car { Make = "Ford", Model = "Mustang", Year = 2021 };
    Console.WriteLine(car1.GetCarInfo());
    Console.WriteLine(car2.GetCarInfo());
    Console.WriteLine(car3.GetCarInfo());
    ```

??? Info "Använd två existerande klasser"

    I den här uppgiften behöver du skapa några objekt, och sedan använda deras metoder och egenskaper för att lösa uppgiften.
    Du behöver inte ändra något i klasserna `Book` och `Library`, utan bara använda dem i `Main`-metoden.
    Undersök klasserna och deras metoder och egenskaper för att förstå hur de fungerar.

    Det finns också några extra frågor samt en extra uppgift i kommentarerna i koden som du kan fundera på.

    ```cs
    using System.Collections.ObjectModel;

    class Program
    {
        static void Main()
        {
            // Instansiera ett nytt objekt av typen Library (1 rad)


            // Skapa två objekt av typen Book med valfria värden för titel, författare och antal sidor (2 rader)


            // Lägg till båda böckerna i biblioteket med metoden AddBook (2 rader)


            // Skriv ut det totala antalet böcker i biblioteket med hjälp av egenskapen TotalBookCount (1 rad)


            // Lista alla tillgängliga böcker i biblioteket med hjälp av metoden GetAvailableBooks (6 rader)


            // Låna ut en bok med hjälp av metoden BorrowBook. Om det lyckas (om metoden returnerar true) 
            // skriv ut ett meddelande om att lånet lyckades, annars  skriv ut ett felmeddelande. (Kan lösas på 2 rader, men lättare med flera)


            // Lista alla lånade böcker med hjälp av metoden GetBorrowedBooks (6 rader)


            // Återlämna den lånade boken med hjälp av metoden ReturnBook. Om det lyckas (om metoden returnerar true)
            // skriv ut ett meddelande om att återlämningen lyckades, annars skriv ut ett felmeddelande. (Kan lösas på 2 rader, men lättare med flera)


            // Lista alla tillgängliga böcker i biblioteket igen för att verifiera att den återlämnade boken finns  (6 rader)


        }
    }

    class Book
    {
        private string title; // Fråga: Kan du förklara varför dessa fält behövs och varför de är privata?
        private string author;
        private int pages;

        public string Title
        {
            get => title; // Att skriva så här är ett kortare sätt att skriva get { return title; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException("Title cannot be empty.");
                title = value;
            }
        }

        public string Author
        {
            get => author;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException("Author cannot be empty.");
                author = value;
            }
        }

        public int Pages
        {
            get => pages;
            set
            {
                if (value <= 0)
                    throw new ArgumentException("Pages must be greater than zero.");
                pages = value;
            }
        }

        public Book(string title, string author, int pages)
        {
            Title = title;
            Author = author;
            Pages = pages;
        }
    }

    class Library
    {
        private readonly List<Book> availableBooks = []; //Fråga: Vad gör 'readonly' för något?
        private readonly List<Book> borrowedBooks = [];

        public int TotalBookCount
        {
            get
            {
                return availableBooks.Count + borrowedBooks.Count;
            }
        }

        public void AddBook(Book book)
        {
            if (book == null)
                throw new ArgumentNullException(nameof(book));
            if (IsBookInLibrary(book))
                throw new InvalidOperationException("Book is already in the library.");

            availableBooks.Add(book);
        }

        public void RemoveBook(Book book)
        {
            ArgumentNullException.ThrowIfNull(book);
            if (!IsBookInLibrary(book))
                throw new InvalidOperationException("Book is not in the library.");

            availableBooks.Remove(book);
        }

        public bool BorrowBook(Book book)
        {
            ArgumentNullException.ThrowIfNull(book);
            if (!availableBooks.Contains(book)) return false;

            availableBooks.Remove(book);
            borrowedBooks.Add(book);
            return true;
        }

        public bool ReturnBook(Book book)
        {
            ArgumentNullException.ThrowIfNull(book);
            if (!borrowedBooks.Contains(book)) return false;

            borrowedBooks.Remove(book);
            availableBooks.Add(book);
            return true;
        }

        private bool IsBookInLibrary(Book book)
        {
            return availableBooks.Contains(book) || borrowedBooks.Contains(book);
        }

        public List<Book> GetAllBooks()
        {
            return availableBooks;
        }

        public List<Book> GetAvailableBooks()
        {
            return new List<Book>(availableBooks); //Fråga: Vad blir det för skillnad på det och att bara returnera availableBooks direkt?
        }

        public ReadOnlyCollection<Book> GetBorrowedBooks()
        {
            return borrowedBooks.AsReadOnly(); //Fråga: Vad tror du händer här egentligen? Vad är ReadOnlyCollection och varför används den? Vad är skillnaden från metoden ovan?
        }
    }
    ```

??? Tip "Exempellösning"

    ```cs
    using System.Collections.ObjectModel;

    class Program
    {
        static void Main()
        {
            // Instansiera ett nytt objekt av typen Library
            Library myLibrary = new Library();

            // Skapa två bok-objekt
            Book book1 = new Book("1984", "George Orwell", 328);
            Book book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

            // Lägg till båda böckerna i biblioteket med metoden AddBook
            myLibrary.AddBook(book1);
            myLibrary.AddBook(book2);

            // Skriv ut det totala antalet böcker i biblioteket med hjälp av egenskapen TotalBookCount
            Console.WriteLine($"Total books in library: {myLibrary.TotalBookCount}");

            // Lista alla tillgängliga böcker i biblioteket med hjälp av metoden GetAvailableBooks
            List<Book> availableBooks = myLibrary.GetAvailableBooks();
            Console.WriteLine("Available Books:");
            foreach (var book in availableBooks)
            {
                Console.WriteLine($"- {book.Title} by {book.Author}, {book.Pages} pages");
            }

            // Låna ut en bok med hjälp av metoden BorrowBook. Om det lyckas (om metoden returnerar true) 
            // skriv ut ett meddelande om att lånet lyckades, annars  skriv ut ett felmeddelande.

            bool borrowSuccess = myLibrary.BorrowBook(book1);
            Console.WriteLine(borrowSuccess ? $"Successfully borrowed '{book1.Title}'." : "Failed");

            // Lista alla lånade böcker med hjälp av metoden GetBorrowedBooks
            var borrowedBooks = myLibrary.GetBorrowedBooks();
            Console.WriteLine("Borrowed Books:");
            foreach (var book in borrowedBooks)
            {
                Console.WriteLine($"- {book.Title} by {book.Author}, {book.Pages} pages");
            }

            // Återlämna den lånade boken med hjälp av metoden ReturnBook. Om det lyckas (om metoden returnerar true)
            // skriv ut ett meddelande om att återlämningen lyckades, annars skriv ut ett felmeddelande.
            bool returnSuccess = myLibrary.ReturnBook(book1);
            Console.WriteLine(returnSuccess ? $"Successfully returned '{book1.Title}'." : "Failed");

            // Lista alla tillgängliga böcker i biblioteket igen för att verifiera att den återlämnade boken finns med
            availableBooks = myLibrary.GetAvailableBooks();
            Console.WriteLine("Available Books After Return:");
            foreach (var book in availableBooks)
            {
                Console.WriteLine($"- {book.Title} by {book.Author}, {book.Pages} pages");
            }
        }
    }

    class Book
    {
        private string title; // Fråga: Kan du förklara varför dessa fält behövs och varför de är privata?
        private string author;
        private int pages;

        public string Title
        {
            get => title; // Att skriva så här är ett kortare sätt att skriva get { return title; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException("Title cannot be empty.");
                title = value;
            }
        }

        public string Author
        {
            get => author;
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException("Author cannot be empty.");
                author = value;
            }
        }

        public int Pages
        {
            get => pages;
            set
            {
                if (value <= 0)
                    throw new ArgumentException("Pages must be greater than zero.");
                pages = value;
            }
        }

        public Book(string title, string author, int pages)
        {
            Title = title;
            Author = author;
            Pages = pages;
        }
    }

    class Library
    {
        private readonly List<Book> availableBooks = []; //Fråga: Vad gör 'readonly' för något?
        private readonly List<Book> borrowedBooks = [];

        public int TotalBookCount
        {
            get
            {
                return availableBooks.Count + borrowedBooks.Count;
            }
        }

        public void AddBook(Book book)
        {
            if (book == null)
                throw new ArgumentNullException(nameof(book));
            if (IsBookInLibrary(book))
                throw new InvalidOperationException("Book is already in the library.");

            availableBooks.Add(book);
        }

        public void RemoveBook(Book book)
        {
            ArgumentNullException.ThrowIfNull(book);
            if (!IsBookInLibrary(book))
                throw new InvalidOperationException("Book is not in the library.");

            availableBooks.Remove(book);
        }

        public bool BorrowBook(Book book)
        {
            return MoveBook(book, availableBooks, borrowedBooks);
        }

        public bool ReturnBook(Book book)
        {
            return MoveBook(book, borrowedBooks, availableBooks);
        }

        private bool MoveBook(Book book, List<Book> fromList, List<Book> toList)
        {
            ArgumentNullException.ThrowIfNull(book);
            if (!fromList.Contains(book)) return false;

            fromList.Remove(book);
            toList.Add(book);
            return true;
        }

        private bool IsBookInLibrary(Book book)
        {
            return availableBooks.Contains(book) || borrowedBooks.Contains(book);
        }

        public List<Book> GetAllBooks()
        {
            return availableBooks;
        }

        public List<Book> GetAvailableBooks()
        {
            return new List<Book>(availableBooks); //Fråga: Vad blir det för skillnad på det och att bara returnera availableBooks direkt?
        }

        public ReadOnlyCollection<Book> GetBorrowedBooks()
        {
            return borrowedBooks.AsReadOnly(); //Fråga: Vad tror du händer här egentligen? Vad är ReadOnlyCollection och varför används den? Vad är skillnaden från metoden ovan?
        }
    }
    ```

??? Info "Skapa en övning på temat Klasser och Objekt"
    Skapa en egen övning som handlar om klasser och objekt. Beskriv vad som ska göras, och skriv en exempellösning. Låt sedan din lärare och klasskamrater göra övningen och ge feedback på den.

    Obs! Ingen genererad kod, du ska ha skrivit den helt själv. 

??? Tip "Exempellösning"
    Se alla andra övningar för exempel på övningar :)

## Arv

## Logiska fel

Här är några övningar där koden har logiska fel. Identifiera och rätta till dem så att programmen fungerar som avsett. Använd debuggern eller skriv ut variabler med `Console.WriteLine` för att förstå vad som händer.

??? Info "Summera tal"
    Programmet ska summera alla tal i en array och skriva ut summan, men koden har något logiskt fel. Identifiera och rätta till dem så att programmet fungerar som avsett.

    ```csharp
    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = { 1, 2, 3, 4, 5 };
            int sum = 0;

            for (int i = 0; i <= numbers.Length; i++)
            {
                sum += numbers[i];
            }

            Console.WriteLine("Summan är: " + sum);
        }
    }
    ```

??? Tip "(SVÅR) Många logiska fel"
    ```csharp
    using System;
    using System.Collections.Generic;
    using System.Linq;

    class Program
    {
        static void Main()
        {
            var temps = GenerateTemperatures(31);

            Console.WriteLine("Första 5 mätningarna:");
            for (int i = 0; i <= 5; i++) 
            {
                Console.Write(temps[i] + (i < 5 ? ", " : "\n"));
            }

            Console.WriteLine($"Medel: {Average(temps)}");
            Console.WriteLine($"Median: {Median(temps)}");
            Console.WriteLine($"Typvärde: {Mode(temps)}");
            Console.WriteLine($"Kallaste: {temps.Min()}");
            Console.WriteLine($"Varmaste: {temps.Max()}");
        }

        static List<int> GenerateTemperatures(int days)
        {
            var list = new List<int>(days);
            for (int i = 0; i < days; i++)
            {
                var rng = new Random();
                list.Add(rng.Next(-10, 26));
            }
            return list;
        }

        static double Average(List<int> values)
        {
            int sum = 0;
            foreach (var v in values)
                sum += v;

            return sum / values.Count;
        }

        static double Median(List<int> values)
        {
            List<int> sorted = values;
            sorted.Sort();

            int n = sorted.Count;
            if (n % 2 == 1)
            {
                return sorted[n / 2];
            }
            else
            {
                return (sorted[n / 2] + sorted[n / 2 + 1]) / 2.0;
            }
        }

        static int Mode(List<int> values)
        {
            var counts = new Dictionary<int, int>();
            foreach (var v in values)
            {
                if (!counts.ContainsKey(v))
                    counts[v] = 0;

                counts[v]++;

                if (counts[v] % 5 == 0)
                {
                    var anyKey = counts.Keys.First();
                    counts[anyKey] = 0;
                }
            }

            int bestKey = counts.First().Key;
            int bestCount = counts[bestKey];

            foreach (var kv in counts)
            {
                if (kv.Value >= bestCount)
                {
                    bestKey = kv.Key;
                    bestCount = kv.Value;
                }
            }

            return bestKey;
        }
    }
    ```