File-klassen innehåller metoder för att arbeta med filer. Några vanliga saker att göra med den är:

## Läsa och skriva text från/till filer

```csharp
string filePath = "exempel.txt";

File.WriteAllText(filePath, "Detta är en exempeltext.");

string content = File.ReadAllText(filePath);
Console.WriteLine(content);
```

I detta exempel skapar vi en fil som heter `exempel.txt` (den skapas automatiskt om vi försöker skriva till den och den inte finns, annars skrivs den över med ny text om den redan finns), skriver text till den och läser sedan tillbaka texten och skriver ut den i konsolen.

Det går också att läsa och skriva alla rader i en fil som en array av strängar:

```csharp
string[] lines = ["Första raden", "Andra raden", "Tredje raden"];
File.WriteAllLines(filePath, lines);

string[] readLines = File.ReadAllLines(filePath);
foreach (string line in readLines)
{
    Console.WriteLine(line);
}
```

Det kan vara användbart om du vill arbeta med varje rad separat.

## Vanliga filoperationer

File-klassen har också metoder för att kopiera, flytta, ta bort och kolla om en fil finns:  

```csharp
string sourcePath = "exempel.txt";
string destinationPath = "exempel_kopia.txt";

File.Copy(sourcePath, destinationPath); // Kopiera filen

bool fileExists = File.Exists(destinationPath); // Kolla om filen finns
Console.WriteLine($"Filen finns: {fileExists}");

File.Delete(destinationPath); // Ta bort filen
```

Det är vanligt att använda `File.Exists` för att kolla om en fil finns innan den ska läsas in eller tas bort.

```csharp
string sourcePath = "exempel.txt";

if (File.Exists(sourcePath))
{
    string content = File.ReadAllText(sourcePath);
    Console.WriteLine(content);
}
else
{
    Console.WriteLine("Filen finns inte.");
}
```

File-klassen innehåller många fler användbara metoder för att arbeta med filer. För en fullständig lista och detaljerad dokumentation kan du besöka Microsofts officiella dokumentation: <https://learn.microsoft.com/en-us/dotnet/api/system.io.file>