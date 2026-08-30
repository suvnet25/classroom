---
tags:
  - OOP1-Övning
---

# Övning 16 - Interfaces

## Intro: DateTime.Now
En strukturerad övning vi gör tillsammans steg för steg i klassrummet.

Vi skapar först klassen `TimedGreetingService`. Den använder `DateTime.Now` för att ta reda på vilken tid på dygnet det är och visar olika hälsningsfraser beroende på det.

## Startkod

Kommande övningar utgår från denna startkod:

??? info "Startkod"

    ```cs
    class Program
    {
        static void Main()
        {
            var addressBook = new AddressBook();
            addressBook.Add(new Contact("Kalle", "Anka", "kalle@anka.se", new DateTime(1980, 1, 1)));
            addressBook.Add(new Contact("Kajsa", "Anka", "kajsa@anka.se", new DateTime(1985, 2, 2)));

            foreach (var c in addressBook.GetAll())
            {
                Console.WriteLine(c);
            }
        }
    }

    class Contact(string firstName, string lastName, string email)
    {
        public string FirstName { get; } = firstName;
        public string LastName { get; } = lastName;
        public string Email { get; } = email;
        public DateTime BirthDate { get; set; } = DateTime.MinValue;
    }

    class AddressBook
    {
        private readonly List<Contact> _contacts = new();

        public void Add(Contact contact)
        {
            if (string.IsNullOrWhiteSpace(contact.Email) || !contact.Email.Contains("@"))
            {
                return;
            }

            _contacts.Add(contact);
        }

        public IEnumerable<Contact> GetAll()
        { 
            return _contacts;
        }

        public Contact? FindByEmail(string email)
        {
            foreach (var c in _contacts)
            {
                if (c.Email.Equals(email, StringComparison.OrdinalIgnoreCase))
                {
                    return c;
                }
            }
            return null;
        }
    }
    ```

## IEmailService

Vi vill lägga till möjligheten att skicka ett grattis-mail till alla kontakter som fyller år idag.

1. Skapa en klass som skall ha ansvaret för att skicka epost. Klassen ska heta `TestEmailService` och ha en metod `SendEmail(string to, string subject, string body)`. Denna metod ska bara skriva ut till konsolen att ett mail skickas (vi skickar inga riktiga mail i denna övning).
2. Lägg till metoden `SendBirthdayEmails()` i `AddressBook` som skickar ett mail till alla kontakter som fyller år idag:
    * Loopa igenom alla kontakter
    * Kolla om kontaktens `BirthDate` är samma dag och månad som idag (alltså inte exakt på millisekunden, vilket det blir om du jämför `BirthDate == DateTime.Now`).
    * Om det är det, skapa en ny instans av `TestEmailService` och anropa `SendEmail` med kontaktens epostadress, ämnet "Grattis på födelsedagen!" och valfri brödtext.
3. Testa i `Main` att det fungerar genom att anropa `SendBirthdayEmails()` på din `AddressBook`-instans.
4. Men, det är ju inte bra att `AddressBook` skapar en instans av `TestEmailService` direkt! Det leder till stark koppling mellan klasserna, och gör det svårt att byta ut `TestEmailService` mot en annan implementation (t.ex. en som skickar riktiga mail). 
5. Vi löser detta genom att koppla loss AddressBook från EmailService med hjälp av ett interface! 
6. Skapa ett interface `IEmailService` med metoden `SendEmail(string to, string subject, string body)`.
7. Ändra `TestEmailService` så att den implementerar `IEmailService`.
8. Lägg till en konstruktor till `AddressBook` som tar in ett objekt av typen `IEmailService`. Skapa ett fält av typen `IEmailService`, för att lagra referensen till objektet. Använd sedan detta fält i `SendBirthdayEmails()` istället för att skapa en ny instans av `TestEmailService`.
9. Ändra i `Main` så att den skapar en instans av `TestEmailService` och skickar in den i `AddressBook`-konstruktorn.
10. Testa att det fortfarande fungerar.
11. Skapa nu en ny klass `RealEmailService` som implementerar `IEmailService`. Den ska också bara skriva ut till konsolen att
    ett mail skickas (Men kanske med en annan färg eller något, vi låtsas att den mailar på riktigt. Kanske skriver till en textfil istället om du inte vill att den skriver till konsolen).
12. Ändra i `Main` så att AddressBook får `RealEmailService` istället för `TestEmailService`. Testa att det fungerar.

**Kopplingen mellan AddressBook och klasserna som skickar mail är nu betydligt svagare!** Vi kan enkelt byta implementation av `IEmailService` utan att behöva ändra i `AddressBook`.

## ILogger

Det är vanligt att vi i olika program vill logga vad som händer, t.ex. för att kunna felsöka problem. Men hur loggning sker kan skilja sig åt mellan olika program, eller i olika skeden av utvecklinge av programmet. Ibland kanske vi vill logga till en textfil, ibland till en databas, ibland bara skriva till konsolen. Detta är en perfekt exempel på när vi kan använda ett interface för att koppla loss loggningen från resten av programmet.

Så, säg att vi vill logga ut varje gång en kontakt läggs till i `AddressBook`.

1. Börja med det absolut enklaste sättet: Lägg till Console.WriteLine i `Add`-metoden i `AddressBook` så att den skriver ut "Lade till kontakt: {förnamn} {efternamn}" varje gång en kontakt läggs till.
2. Det vi nu gjort är att vi löst *ett* sätt att logga när en kontakt läggs till. Men, kopplingen till just att det ska loggas till consolen är nu väldigt stark.
3. För att kunna göra kopplingen svagare, skapa ett interface `ILogger` med en metod `Log(string message)`.
4. Skapa en klass `ConsoleLogger` som implementerar `ILogger` och skriver ut loggmeddelanden till konsolen.
5. Ändra `AddressBook` så att den tar in ett `ILogger` i konstruktorn och använder det för att logga när en kontakt läggs till.
6. Ändra i `Main` så att den skapar en instans av `ConsoleLogger` och skickar in den i `AddressBook`-konstruktorn.
7. Testa att det fortfarande fungerar.
8. Skapa nu en ny klass `FileLogger` som implementerar `ILogger` och skriver loggmeddelanden till en textfil istället för till konsolen.
9. Ändra i `Main` så att AddressBook får `FileLogger` istället för `ConsoleLogger`. Testa att det fungerar.

## IRepository

Utgå från startkoden ovan.

Klassen `AddressBook` har idag ansvar för att 

* lagra kontakter
* validera e-postadresser
* söka efter kontakter

Lagringen går till så att kontakter sparas i en lista i minnet. Det är inte särskilt flexibelt, och det går inte att spara kontakter mellan körningar av programmet. Låt oss därför skapa ett interface så att AddressBook inte behöver veta exakt hur lagringen går till, bara att den kan lagra och hämta kontakter!

### Uppgift

1. Skapa ett interface `IContactRepository` med metoderna `Add(Contact contact)` och `IEnumerable<Contact> GetAll()`.
2. Ändra `AddressBook` så att den tar in ett `IContactRepository` i konstruktorn och använder det för lagring och hämtning av kontakter.
3. Skapa en klass `InMemoryContactRepository` som implementerar `IContactRepository` och lagrar kontakter i en lista i minnet (som idag).
5. Ändra i `Main` så att den först använder `InMemoryContactRepository` för att lagra kontakter i minnet. Testa att det fungerar.
4. Skapa nu en ny klass: `FileContactRepository` som implementerar `IContactRepository` och lagrar kontakter i en textfil istället (t.ex. CSV-format). Testa att köra programmet med denna istället för `InMemoryContactRepository`.