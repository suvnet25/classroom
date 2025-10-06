---
tags:
  - OOP1-Övning
---

# Övning 14 Refaktorering

Dags att refaktorera lite kod så att den blir mer objektorienterad och håller sig bättre till SRP (Single Responsibility Principle).

Följande klasser är så kallade domänklasser, som skall innehålla data och beteenden som hör ihop med datan, specifikt för en restaurangmeny och beställning.

Problemet just nu är att de också innehåller kod för att läsa in data från användaren och skriva ut data till konsolen, vilket bryter mot SRP (eftersom de då också håller på med användargränssnitt).

Ditt uppdrag här är att **få bort all in- och utmatning från dessa klasser**. Dvs, MenuItem och Order skall inte längre ha några Console.ReadLine eller Console.WriteLine i sig. All in- och utmatning skall istället ske i Program.cs.

```cs title="Startkod"
class MenuItem
{
    public string Name { get; private set; }
    public decimal Price { get; private set; }

    public MenuItem(string name, decimal price)
    {
        Name = name;
        Price = price;
    }

    public void Show()
    {
        Console.WriteLine($"{Name} - {Price} kr");
    }
}

class Order
{
    public List<MenuItem> _items = [];

    public void AddItem(List<MenuItem> menu)
    {
        for (int i = 0; i < menu.Count; i++)
        {
            Console.Write($"{i + 1}.");
            menu[i].Show();
        }

        Console.Write("Ange rättens nummer: ");
        string? nr = Console.ReadLine();

        if (!int.TryParse(nr, out int index) || index < 1 || index > menu.Count)
        {
            Console.WriteLine("Ogiltigt val!");
            return;
        }

        _items.Add(menu[index]);

        Console.Write($"Lade till: ");
        menu[index].Show();
    }

    public void ShowTotal()
    {
        decimal total = 0;
        foreach (var item in _items)
        {
            total += item.Price;
        }
        Console.WriteLine($"Totalt pris: {total} kr");
    }
}

class Program
{
    static void Main()
    {
        List<MenuItem> menu = [
            new MenuItem("Pizza", 80),
            new MenuItem("Pasta", 70),
            new MenuItem("Salad", 50)
        ];

        var order = new Order();

        do
        {
            order.AddItem(menu);
            Console.WriteLine("Vill du lägga till en rätt till? (j/n) ");
        } while (Console.ReadLine()?.ToLower() == "j");

        order.ShowTotal();
    }
}
```
## Extra: En enum för matkategori

1. Skapa en enum som heter `FoodCategory` med värdena `Appetizer`, `MainCourse`, `Dessert`, och `Beverage`.
2. Lägg till en egenskap `Category` av typen `FoodCategory` i `MenuItem`.
3. Uppdatera konstruktorn i `MenuItem` för att ta emot en `FoodCategory` parameter och sätt egenskapen.
4. Uppdatera skapandet av `MenuItem` objekt i `Program.Main` för att inkludera kategorin.
5. Visa maträtternas kategori när du listar menyn.
6. **Extra:** Kan du sortera menyn efter kategori när du visar den?