---
tags:
  - OOP1-Övning
---

# Övning 15 SOLID

## Övning 1 – SRP: Dela upp en “gudklass” i två ansvar

**Mål:** Separera beräkning av orderbelopp från utskrift/rendering av kvitto.

!!! info "Startkod"

    ```cs
    class Program
    {
        static void Main()
        {
            var items = new List<OrderItem>
            {
                new("Bok", 2, 120m),
                new("Penna", 5, 10m)
            };

            var order = new Order();
            order.Add(items);
            order.PrintReceipt(); // Skriver ut totalsumma + rader
        }
    }

    class OrderItem
    {
        public string Name { get; }
        public int Quantity { get; }
        public decimal UnitPrice { get; }
        public OrderItem(string name, int qty, decimal price)
            => (Name, Quantity, UnitPrice) = (name, qty, price);
    }

    class Order
    {
        private readonly List<OrderItem> _items = new();

        public void Add(IEnumerable<OrderItem> items) => _items.AddRange(items);

        // ANSVAR 1: beräkningar
        public decimal CalculateSubtotal()
        {
            decimal sum = 0;
            foreach (var i in _items) sum += i.UnitPrice * i.Quantity;
            return sum;
        }

        public decimal CalculateVat(decimal rate = 0.25m) 
        { 
            return CalculateSubtotal() * rate; 
        }

        public decimal CalculateTotal(decimal rate = 0.25m) 
        { 
            return CalculateSubtotal() + CalculateVat(rate); 
        }

        // ANSVAR 2: presentation/utskrift
        public void PrintReceipt()
        {
            Console.WriteLine("KVITTO");
            foreach (var i in _items)
                Console.WriteLine($"{i.Name} x{i.Quantity} á {i.UnitPrice:C} = {(i.UnitPrice*i.Quantity):C}");
            Console.WriteLine($"Delsumma: {CalculateSubtotal():C}");
            Console.WriteLine($"Moms (25%): {CalculateVat():C}");
            Console.WriteLine($"Totalt: {CalculateTotal():C}");
        }
    }
    ```

### Uppgift

Dela upp Order i två klasser:

* **Order:** tar en lista OrderItem och ansvarar för CalculateSubtotal, CalculateVat, CalculateTotal.
* **ReceiptPrinter**: har ansvar för att presentera/skriva ut kvittot (tar in en order eller färdiga värden).

Ändra i Main så att den använder båda klasserna.

## Övning 2 – OCP: Lägg till ny rabatt utan att ändra befintlig kod

**Mål:** Kunna lägga till ny rabattlogik genom att lägga till ny klass, inte ändra på befintliga.

### Uppgift

1. Läs koden och testa den med olika DiscountPolicy-subklasser.
    Exempel:
    ```cs
    DiscountPolicy discount = new ThresholdDiscount(500, 0.10m);
    ```


2. Lägg till en ny rabattpolicy genom att skapa en ny klass som ärver från DiscountPolicy, t.ex.:
    
    * **ItemCountDiscount** – 10 % rabatt om antal artiklar > 10
    * **PaltkomaDiscount** – 15 % rabatt om klockan är efter lunch

3. Ändra bara raden i Main där DiscountPolicy instansieras.
4. Inga ändringar får göras i Checkout-klassen.

!!! info "Startkod"

    ```cs
    class Program
    {
        static void Main()
        {
            var items = new List<OrderItem>
            {
                new("Bok", 2, 120m),
                new("Penna", 5, 10m)
            };

            DiscountPolicy discount = new NoDiscount(); // byt här till andra rabatter
            var checkout = new Checkout(discount);

            var total = checkout.Total(items);
            Console.WriteLine($"Totalt att betala: {total:C}");
        }
    }

    class OrderItem
    {
        public string Name { get; }
        public int Quantity { get; }
        public decimal UnitPrice { get; }

        public OrderItem(string name, int qty, decimal price)
            => (Name, Quantity, UnitPrice) = (name, qty, price);
    }

    // Abstrakt basklass för rabatter
    abstract class DiscountPolicy
    {
        // Virtuell metod som kan overridas i subklasser
        public virtual decimal Apply(decimal subtotal) => subtotal;

        // Hjälpmetod som kan användas av alla subklasser
        protected decimal PercentageOff(decimal subtotal, decimal percent)
            => subtotal * (1 - percent);
    }

    // --- Konkreta rabattklasser ---
    class NoDiscount : DiscountPolicy
    {
        // Ärver standardbeteende (ingen rabatt)
    }

    class PercentageDiscount : DiscountPolicy
    {
        private readonly decimal _percent;
        public PercentageDiscount(decimal percent) => _percent = percent;

        public override decimal Apply(decimal subtotal) => PercentageOff(subtotal, _percent);
    }

    class ThresholdDiscount : DiscountPolicy
    {
        private readonly decimal _threshold;
        private readonly decimal _percent;

        public ThresholdDiscount(decimal threshold, decimal percent)
        {
            _threshold = threshold;
            _percent = percent;
        }

        public override decimal Apply(decimal subtotal)
        {
            if (subtotal >= _threshold)
                return PercentageOff(subtotal, _percent);
            return subtotal;
        }
    }

    // --- Checkoutklass som är OCP-kompatibel ---
    class Checkout
    {
        private readonly DiscountPolicy _discount;
        public Checkout(DiscountPolicy discount) => _discount = discount;

        public decimal Total(IEnumerable<OrderItem> items, decimal vatRate = 0.25m)
        {
            decimal subtotal = 0;
            foreach (var i in items)
                subtotal += i.UnitPrice * i.Quantity;

            var discounted = _discount.Apply(subtotal);
            var vat = discounted * vatRate;
            return discounted + vat;
        }
    }
    ```