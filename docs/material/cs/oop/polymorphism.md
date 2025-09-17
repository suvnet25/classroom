# Polymorfism

Ordet "polymorfism" kommer från grekiskan och betyder "många former". Inom OOP innebär polymorfism att objekt kan ta många former, vilket gör det möjligt att behandla objekt av olika klasser på ett enhetligt sätt.

Mer info kommer! Kolla på den här så länge och fundera på vad som händer:

```csharp

List<object> objects = new List<object>();

objects.Add(new Dog());
objects.Add(new Cat());
objects.Add(new Car());
objects.Add(new Person());

foreach (var obj in objects)
{
    Console.WriteLine(obj.ToString());
}
```