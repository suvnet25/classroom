# Arv

Arv är en grundläggande funktionalitet i objektorienterad programmering. Det innebär att en klass kan ärva medlemmar från en annan klass. Den klass som ärver kallas för *subklass* eller *child class*, medan den klass som blir ärvd kallas för *superklass* eller *basklass*.

Så här skriver vi en basklass `Entity`:

```csharp
public class Entity
{
    public int Id;
    public DateTime CreatedAt;
}
```

Vill vi nu ärva dessa egenskaper i en annan klass, t.ex. `Person`, så gör vi det genom att använda ett kolon (`:`):

```csharp
public class Person : Entity
{
    public string Name;
    public string Email;
}
```

Person-klassen har nu automatiskt fälten `Id` och `CreatedAt` från Entity-klassen, utöver sina egna fält `Name` och `Email`.

Vi kan skapa en instans av `Person` och använda alla dess fält:

```csharp
Person person = new Person();
person.Id = 1;
person.CreatedAt = DateTime.Now;
person.Name = "Alice";
person.Email = "epost@exempel.se";
```

## Konstruktorer och arv

När en subklass skapas, anropas först basklassens konstruktor innan subklassens konstruktor körs. Om basklassen har en parameterlös konstruktor, anropas den automatiskt. Om basklassen har en konstruktor med parametrar, måste subklassen explicit anropa den med `base`-nyckelordet.

```csharp
public class Entity
{
    public int Id;
    public DateTime CreatedAt;

    public Entity(int id)
    {
        Id = id;
        CreatedAt = DateTime.Now;
    }
}

public class Person : Entity
{
    public string Name;
    public string Email;

    public Person(int id, string name, string email) : base(id) //Här anropar vi basklassens konstruktor med : base(id)
    {
        Name = name;
        Email = email;
    }
}
```

## Metoder och arv

Subklasser kan också ärva metoder från sina basklasser. Om en metod i basklassen är markerad som `virtual`, kan subklassen *override* (överskriva) den med sin egen implementation.

```csharp
public class Entity
{
    public int Id;
    public DateTime CreatedAt;

    public virtual string GetInfo()
    {
        return $"Entity ID: {Id}, Created At: {CreatedAt}";
    }
}

public class Person : Entity
{
    public string Name;
    public string Email;

    public override string GetInfo()
    {
        return base.GetInfo() + $", Name: {Name}, Email: {Email}";
    }
}
```

## base och this

I arvssammanhang används `base` för att referera till basklassens medlemmar, medan `this` refererar till den aktuella instansen av subklassen.

```csharp
public class Person : Entity
{
    public string Name;
    public string Email;

    public Person(int id, string name, string email) : base(id)
    {
        this.Name = name; // 'this' refererar till den aktuella instansen av Person
        this.Email = email;
    }

    public override string GetInfo()
    {
        return base.GetInfo() + $", Name: {this.Name}, Email: {this.Email}"; // 'base' refererar till Entity's GetInfo
    }
}
```

## Arv och polymorfism

Polymorfism innebär att en subklass kan behandlas som en instans av sin basklass. Detta är användbart när vi vill skapa generiska metoder eller datatyper som kan arbeta med olika typer av objekt. Till exempel:

```csharp
public void PrintEntityInfo(Entity entity)
{
    Console.WriteLine(entity.GetInfo());
}
```

Här kan vi skicka in både `Entity`-objekt och `Person`-objekt till `PrintEntityInfo`-metoden, och den kommer att anropa rätt `GetInfo`-metod beroende på vilken typ av objekt som skickas in.

```csharp
Entity entity = new Entity(1);
Person person = new Person(2, "Alice", "epost@exempel.se");

PrintEntityInfo(entity); // Anropar Entity's GetInfo
PrintEntityInfo(person); // Anropar Person's GetInfo
```

