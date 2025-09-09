---
    title: Kodblock
    description: Hur kod struktureras i block.
    icon: material/code-braces
---

# Kodblock
Ett kodblock är en samling av en eller flera rader kod som behandlas som en enhet. 

I C# avgränsas kodblock med klammerparenteser: `{ }`. Kodblock används för att gruppera relaterade instruktioner tillsammans, till exempel inom funktioner, loopar och villkorssatser.

```csharp
if (true)
{ // Här börjar kodblocket
    
    Console.WriteLine("Detta är inom kodblocket.");
} // Här slutar kodblocket
```

Det går att skriva kodblock helt fristående om man vill:
```csharp
{ // Här börjar kodblocket
    
    Console.WriteLine("Detta är inom kodblocket.");
} // Här slutar kodblocket
```
Det vanliga är dock att de hör till en metod, loop, if-sats, klass eller liknande.

## Nästlade kodblock

Det går att "nästla" kodblock, alltså ha kodblock inuti andra kodblock:
```csharp
if (price > 100)
{ // Här börjar det sk. yttre kodblocket
    
    Console.WriteLine("Detta är inom det yttre kodblocket.");

    if (isMember)
    { // Här börjar det inre kodblocket
        
        Console.WriteLine("Detta är inom det inre kodblocket.");
    } // Här slutar det inre kodblocket

} // Här slutar det yttre kodblocket
```

## Scope

Ett kodblocks "scope" (omfång) definierar var variabler och andra element som deklareras inom blocket är tillgängliga. Variabler som deklareras inom ett kodblock är endast tillgängliga inom det blocket och eventuella inre block.

```csharp
{
    { // Här börjar ett inre kodblock
        
        int x = 10; // 'x' är tillgänglig inom detta inre kodblock

        Console.WriteLine(x); // Detta fungerar

        {
            Console.WriteLine(x); // Detta fungerar också, 'x' är tillgänglig här
        }

    } // Här slutar kodblocket

Console.WriteLine(x); // Detta fungerar inte, 'x' är inte tillgänglig här
}
```

I detta exempel visas endast rena kodblock, men det fungerar på samma sätt inom metoder, loopar, if-satser och andra strukturer som använder sig av kodblock.