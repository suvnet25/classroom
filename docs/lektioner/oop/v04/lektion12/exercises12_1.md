---
tags:
  - OOP1-Övning
---

# Övning 12 Exceptions

> Titta på avsnittet om [Exceptions](../../../../material/cs/basics/exceptions.md) om du undrar hur du skriver koden.

---

## Del 1 - Fånga undantag

### **Förberedelser**

1. Skapa ett nytt konsolprojekt med `dotnet new console --use-program-main` för att skapa ett projekt med en main-metod.
2. Ett förslag är att göra övning 1-3 i separata metoder som du anropar från Main, för att hålla koden organiserad. Du kan då enkelt kommentera ut en metoden för att inte köra den delen av koden. Exempel:
    ```cs
    static void Main()
    {
        //Exercise1(); // Hoppa över övning 1
        Exercise2();
        Exercise3();
    }

    static void Exercise1()
    {
        // kod för övning 1
    }

    static void Exercise2()
    {
        // kod för övning 2
    }

    static void Exercise3()
    {
        // kod för övning 3
    }
    ```

### **Övning 1 - Konvertera sträng till tal**

Skriv ett program som ber användaren om ett tal i form av en sträng och försöker konvertera det till ett heltal.

* Använd try/catch för att hantera FormatException om strängen inte är ett giltigt tal.
* Lägg även till en OverflowException-hantering om talet är för stort eller för litet för en int.
* Skriv ut ett trevligt felmeddelande i båda fallen.
* Testa att skapa en loop som fortsätter fråga användaren om ett tal tills en giltig inmatning ges.

??? Tip "Startkod"
    ```cs
    Console.Write("Skriv in ett heltal: ");
    string input = Console.ReadLine();

    int tal = int.Parse(input);
    Console.WriteLine($"Du skrev in talet: {tal}");
    ```


### **Övning 2 - Dela två tal**

Skriv ett program som ber användaren om två heltal och sedan dividerar det första med det andra.

1. Prova att skriva in något annat än ett heltal för att se vad som händer. Läs felmeddelandet.
2. Prova att dela något med noll för att se vad som händer. Läs felmeddelandet.
3. Först, lägg in en try/catch runt koden för att fånga alla undantag (Exception).
4. Skriv ut ett felmeddelande i catch-blocket, att något gick det. 
5. Använd nu try med två catch-block för att fånga DivideByZeroException om användaren skriver in noll.
6. Lägg även till en FormatException-hantering om användaren skriver något som inte är ett heltal.
7. Skriv ut olika felmeddelanden i de olika catch-blocken, och testa programmet med olika felaktiga inmatningar igen.

??? Tip "Startkod"
    ```cs
    Console.Write("Skriv in ett heltal: ");
    int tal1 = int.Parse(Console.ReadLine());

    Console.Write("Skriv in ett heltal till: ");
    int tal2 = int.Parse(Console.ReadLine());

    int resultat = tal1 / tal2;
    Console.WriteLine($"Resultatet blev: {resultat}");
    ```

### **Övning 3 - Läs in en fil**

Skriv ett program som försöker läsa en textfil från disk. Vad händer om du kör progammet som det är nu, och filen inte finns? Prova att skriva namnet på en fil som finns (exempelvis Program.cs!) också för att se att det fungerar.

* Använd try/catch för att hantera situationen om filen inte finns (FileNotFoundException).
* Testa också att lägga till en UnauthorizedAccessException ifall programmet inte har rättigheter att läsa filen.
* Låt programmet skriva ut ett vänligt felmeddelande i båda fallen.

??? Tip "Startkod"
    ```cs
    Console.Write("Ange filnamn: ");
    string filnamn = Console.ReadLine();

    string innehåll = File.ReadAllText(filnamn);
    Console.WriteLine("Filens innehåll:");
    Console.WriteLine(innehåll);
    ```

---

## Del 2 - Kasta och fånga undantag

### **Övning 1 - Bankkonto**

Skapa klassen `BankAccount` som innehåller metoden `Withdraw(int amount)`.

* Om saldot inte räcker till ska metoden kasta en InvalidOperationException.
* I huvudprogrammet anropar du Withdraw inuti en try/catch.
* Lägg till en finally som alltid skriver ut det aktuella saldot oavsett om uttaget gick igenom eller inte.

??? Tip "Startkod"
    ```cs
    class Program
    {
        static void Main()
        {
            BankAccount konto = new BankAccount(1000);

            Console.Write("Hur mycket vill du ta ut? ");
            int amount = int.Parse(Console.ReadLine());

            konto.Withdraw(amount);

            Console.WriteLine($"Ditt saldo är nu: {konto.Balance}");
        }
    }

    class BankAccount
    {
        public int Balance { get; private set; }

        public BankAccount(int saldo)
        {
            Balance = saldo;
        }

        public void Withdraw(int amount)
        {
            Balance -= amount; // Här ska det egentligen skyddas med exception
        }
    }
    ```

### **Övning 2 - Bankkonto med insättning**

Lägg till metoden Deposit(int amount) i din klass `BankAccount`. Metoden skall sätta in mängden `amount` till Balance. Fundera på vilka fel som kan uppstå när någon använder den metoden. Var är det rimligt att kasta undantag? Vilket undantag passar bäst? 

??? Info "Lista på vanliga exceptions"
    
    * ArgumentException: När ett metodargument inte är giltigt (fel värde).
    * ArgumentNullException: När ett metodargument som inte får vara null faktiskt är null.
    * ArgumentOutOfRangeException: När ett argument ligger utanför det tillåtna intervallet.
    * InvalidOperationException: När en metod anropas i ett läge där den inte är giltig.
    * NullReferenceException: När man försöker använda en referens som är null.
    * IndexOutOfRangeException: När man försöker nå ett element utanför arrayens/listans gränser.
    * FormatException: När en sträng inte kan konverteras till rätt format.
    * DivideByZeroException: När man försöker dividera ett heltal med noll.
    * OverflowException: När en beräkning ger ett resultat som är för stort eller för litet för datatypen.

### **Övning 3 - Hindra skapandet av Contacts med tomt namn**

I din tidigare klass `Contact`:

* Kasta ett undantag (ArgumentException) i konstruktorn eller i en propertys *set*-metod om namnet är tomt eller null.
* Kör programmet och prova att skapa en Contact med tomt namn.
* Se nu till att fånga undantaget i huvudprogrammet med try/catch och skriv ut ett felmeddelande.

Att kasts ett exception i en konstruktor eller property är ett sätt att skydda att objekt hamnar i ett ogiltigt tillstånd, men det är bättre att se till så att det inte händer genom att validera indata innan objektet skapas. Hur skulle du kunna göra det?

### **Övning 4 - Hitta användare**

Utgå från startkoden nedan.

* Skriv klart metoden `FindUser(string username)`. Den skall hitta användaren i listan.
* Om användaren inte finns, kasta ett KeyNotFoundException och hantera det på något sätt.

**Diskutera med dig själv eller andra**: Är det bäst att kasta undantag när något inte hittas, eller är det bättre att returnera null eller istället göra en metod i stil med `TryFindUser` som returnerar en bool och använder en out-variabel?

??? Tip "Startkod"
    ```cs
    class Program
    {
        static List<User> users = [
            new(){ Username = "alice" },
            new(){ Username = "bob" },
            new(){ Username = "charlie" }
        ];

        static void Main()
        {
            Console.Write("Ange användarnamn att hitta: ");
            string username = Console.ReadLine();

            User user = FindUser(username);
            Console.WriteLine($"Hittade användaren: {user.Username} med ID {user.Id}");
        }

        static User FindUser(string username)
        {
            throw new NotImplementedException(); // Implementera sökningen här
        }
    }

    class User
    {
        public int Id { get; set; } = Random.Shared.Next(1, 100);
        public string Username { get; set; }
    }
    ```