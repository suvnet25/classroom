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