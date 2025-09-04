---
icon: material/cog
---

# Kompilering

Syftet med kompilering är att översätta källkod, som är skriven i ett högnivåspråk (t.ex. C#), till maskinkod som datorn kan förstå och köra. I .NET används en tvåstegsprocess för detta: först kompileras källkoden till en mellanliggande kod (Intermediate Language, IL), och sedan översätts denna IL-kod till maskinkod av Just-In-Time (JIT) kompilatorn vid körning.

```mermaid
graph LR
    A[Källkod] -- Kompileras --> B[Bytekod]
    B -- JIT-kompilering --> C[Maskinkod]
    C --> D[Datorn kör programmet]
```

## Källkod (source code)

Källkod är den kod som programmeraren skriver i en textfil med hjälp av en texteditor eller ett IDE (Integrated Development Environment). Källkoden är skriven i ett högnivåspråk som C#, Java, Python, etc. och är läsbar för människor. Syftet med källkoden är just att vara läsbar och förståelig för människor, inte för datorer.

Exempel:
```csharp
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
    }
}
```

## Bytekod (bytecode)

Bytekod är en mellanliggande representation av källkoden som inte är direkt körbar av datorn. I .NET kallas denna bytekod för Common Intermediate Language (CIL) eller Microsoft Intermediate Language (MSIL). Bytekoden är plattformsoberoende, vilket innebär att den kan köras på olika operativsystem och hårdvaruarkitekturer med hjälp av en lämplig runtime-miljö, som .NET Common Language Runtime (CLR).

Exempel på bytekod (CIL):
```asm
.assembly Hello {}
.assembly extern mscorlib {}
.method static void Main()
{
    .entrypoint
    .maxstack 1
    ldstr "Hello, world!"
    call void [mscorlib]System.Console::WriteLine(string)
    ret
}
```

## Maskinkod (machine code)

Maskinkod är den lågnivåkod som datorn kan förstå och köra direkt. Den består av binära instruktioner som är specifika för en viss processorarkitektur (t.ex. x86, ARM). Maskinkoden genereras från bytekoden av Just-In-Time (JIT) kompilatorn vid körning. JIT-kompilering innebär att bytekoden översätts till maskinkod precis innan den ska köras, vilket möjliggör optimeringar baserade på den aktuella miljön.

Exempel på binär maskinkod (Hello World för x86):

```binary
0000000 7f45 4c46 0201 0100 0000 0000 0000 0000
0000020 0200 3e00 0100 0000 0010 4000 0000 0000
0000040 4000 0000 0000 0000 5021 0000 0000 0000
0000060 0000 0000 4000 3800 0300 4000 0600 0500
0000100 0100 0000 0400 0000 0000 0000 0000 0000
0000120 0000 4000 0000 0000 0000 4000 0000 0000
0000140 e800 0000 0000 0000 e800 0000 0000 0000
0000160 0010 0000 0000 0000 0100 0000 0500 0000
0000200 0010 0000 0000 0000 0010 4000 0000 0000
0000220 0010 4000 0000 0000 2200 0000 0000 0000
0000240 2200 0000 0000 0000 0010 0000 0000 0000
0000260 0100 0000 0600 0000 0020 0000 0000 0000
0000300 0020 4000 0000 0000 0020 4000 0000 0000
0000320 0e00 0000 0000 0000 0e00 0000 0000 0000
0000340 0010 0000 0000 0000 0000 0000 0000 0000
0000360 0000 0000 0000 0000 0000 0000 0000 0000
```

## Deep dive

Läs mer om detta om du vill!

* [Common Intermediate Language](https://en.wikipedia.org/wiki/Common_Intermediate_Language)
* [Bytecode](https://en.wikipedia.org/wiki/Bytecode)
* [The Smallest Hello World Program](https://blog.lohr.dev/smol-hello-world)
* [Hello World, Byte for Byte](https://lambdascheme.com/elf.html)
