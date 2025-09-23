# Extar övningar

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

## Arv