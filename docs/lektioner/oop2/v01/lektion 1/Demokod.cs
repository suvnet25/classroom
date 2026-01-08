class Program
{
    static void Main()
    {
        //Typer som håller data:
        int day = 10;
        bool trueOrFalse = true;

        //Typ som håller en referens till ett objekt:
        DateTime date = new(2023, 1, day);

        // Typ som håller en referens till en metod via metodnamn
        Action messagePrinter = PrintStaticMessage;

        // Via en anonym metod
        messagePrinter += delegate
        {
            Console.WriteLine("This is an anonymous method.");
        };

        // Via en lambda-uttryck
        messagePrinter += () => Console.WriteLine("This is a lambda expression.");

        //---- PARAMETRAR ----//

        // Typ som håller en referens till en metod med parameter
        Action<string> dynamicMessagePrinter = PrintDynamicMessage;

        // Via en lambda-uttryck
        dynamicMessagePrinter += message => Console.WriteLine($"Lambda says: {message}");

        dynamicMessagePrinter("Hello from a method with a parameter!");

        // Icke-generisk version för strängar
        List<string> names = new() { "Anna", "Bertil", "Cecilia", "David", "Eva" };
        List<string> shortNames = names.MyWhereString(name => name.Length <= 5);
        Console.WriteLine($"Korta namn: {string.Join(", ", shortNames)}");

        List<int> numbers = new() { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        List<int> evenNumbers = numbers.MyWhere(n => n % 2 == 0);
        Console.WriteLine($"Jämna nummer: {string.Join(", ", evenNumbers)}");

        Dictionary<string, int> ages = new()
        {
            { "Anna", 25 },
            { "Bertil", 30 },
            { "Cecilia", 20 },
            { "David", 35 }
        };

        var youngPeople = ages.MyWhere(kvp => kvp.Value < 30);
        Console.WriteLine("People under 30:");
        foreach (var person in youngPeople)
        {
            Console.WriteLine($"  {person.Key}: {person.Value}");
        }
    }

    static void PrintStaticMessage()
    {
        Console.WriteLine("Hello, World!");
    }

    static void PrintDynamicMessage(string message)
    {
        Console.WriteLine(message);
    }
}

// Extension method klass - måste vara static
static class ListExtensions
{
    // Generic extension method som reimplementerar Where
    // Tar en Func<T, bool> som predicate (en funktion som returnerar true/false)
    public static IEnumerable<T> MyWhere<T>(this IEnumerable<T> source, Func<T, bool> predicate)
    {
        List<T> result = new();

        foreach (T item in source)
        {
            // Anropa Func delegaten för varje element
            if (predicate(item))
            {
                result.Add(item);
            }
        }

        return result;
    }

    // Icke-generisk version - fungerar BARA på List<string>
    // Func<string, bool> betyder: en funktion som tar en string och returnerar bool
    public static List<string> MyWhereString(this List<string> source, Func<string, bool> predicate)
    {
        List<string> result = new();

        foreach (string item in source)
        {
            if (predicate(item))
            {
                result.Add(item);
            }
        }

        return result;
    }
}