# Övning 2
# TDD-workshop: Bygg ett Playlist-system

Bygg ett litet system för en playlist med sånger med **Test-Driven Development (TDD)**: skriv testet först (RED), implementera minsta möjliga kod (GREEN), förbättra koden (REFACTOR).

**Kör `dotnet test` efter varje steg.**

---

## Förberedelser

Förslag på hr du kan starta projektet:

```bash
mkdir PlaylistTDD
cd PlaylistTDD
dotnet new sln -n PlaylistTDD
dotnet new classlib -n MusicCore -o src/MusicCore
dotnet new xunit -n MusicCore.Tests -o tests/MusicCore.Tests
dotnet sln add src/MusicCore/MusicCore.csproj
dotnet sln add tests/MusicCore.Tests/MusicCore.Tests.csproj
dotnet add tests/MusicCore.Tests reference src/MusicCore
```

Ta bort `Class1.cs` och `UnitTest1.cs` (Du kommer att skapa nya testklasser själv).

## Klasserna

| Klass | Beskrivning |
|---|---|
| `Song` | En låt med titel, artist och längd. Fristående klass utan beroenden. |
| `Playlist` | En namngiven spellista som innehåller låtar med regler och beräkningar. |

---

## Del 1 - `Song` 

I del ett får du en del färdig kod som du kan använda för att se hur det går till. Senare delar bygger på att du skriver all kod själv.

### Steg 1.1: En låt har titel och artist

**RED** - Skapa testklassen `tests/MusicCore.Tests/SongTests.cs`:

```csharp
using MusicCore; // Vi måste referera till MusicCore så att vi kan testa det faktiska projektet

namespace MusicCore.Tests;

public class SongTests
{
    [Fact]
    public void HasTitleAndArtist()
    {
        var song = new Song("Bohemian Rhapsody", "Queen", TimeSpan.FromMinutes(5.55));

        Assert.Equal("Bohemian Rhapsody", song.Title);
        Assert.Equal("Queen", song.Artist);
    }
}
```

Kör `dotnet test` - det ska misslyckas eftersom `Song`-klassen inte finns än!

**GREEN** - Skapa `src/MusicCore/Song.cs`:

Kom ihåg, minsta möjliga kod för att få testet att passera! Inget annat!

```csharp
namespace MusicCore;

public class Song
{
    public string Title { get; }
    public string Artist { get; }

    public Song(string title, string artist, TimeSpan duration)
    {
        Title = title;
        Artist = artist;
    }
}
```

### Steg 1.2: En låt har en speltid

**RED** - Lägg till:

```csharp
[Fact]
public void HasDuration()
{
    var duration = TimeSpan.FromMinutes(3.5);
    var song = new Song("Hey Jude", "The Beatles", duration);

    Assert.Equal(duration, song.Duration);
}
```

Kör `dotnet test` - det ska misslyckas igen!

**GREEN** - Spara `Duration` i klassen, så att testet passerar.

### Steg 1.3: Validering

**RED** - Lägg till:

```csharp
[Fact]
public void ThrowsIfTitleIsEmpty()
{
    Assert.Throws<ArgumentException>(() =>
        new Song("", "Artist", TimeSpan.FromMinutes(3)));
}

[Fact]
public void ThrowsIfDurationIsZeroOrNegative()
{
    Assert.Throws<ArgumentException>(() =>
        new Song("Title", "Artist", TimeSpan.Zero));
}
```

Kör `dotnet test` - det ska misslyckas eftersom vi inte har någon validering i konstruktorn än.

**GREEN** - Lägg till validering i konstruktorn.

---

### Sammanfattning Del 1

Du bör ha **4 gröna tester** och en `Song`-klass med properties `Title`, `Artist`, `Duration` och validering.

---

## Del 2 - `Playlist`

Från och med nu skriver du all testkod själv.  
Skapa `tests/MusicCore.Tests/PlaylistTests.cs` och `src/MusicCore/Playlist.cs`.

**Tips:** Skapa en hjälpmetod i testklassen som skapar en `Song` med standardvärden, eller en builder-klass som kan användas i flera tester. Det gör det enklare att fokusera på det som är relevant i varje test.

### Steg 2.1: En ny spellista har ett namn och inga låtar

En `Playlist` skapas med ett namn. Verifiera att namnet sparas och att låtlistan är tom när playlisten skapas.

Glöm inte stegen RED -> GREEN -> REFACTOR! Skriv testet först, implementera minsta möjliga kod, förbättra koden. Kör testerna efter varje steg.

### Steg 2.2: Lägga till en låt

Implementera `AddSong()`. Verifiera att listan innehåller exakt en låt efter tillägg.

### Steg 2.3: Kan inte lägga till samma låt två gånger

Samma `Song`-objekt ska inte kunna läggas till igen - det ska kasta undantag.

> Tänk på vilken undantagstyp som passar för en ogiltig operation.

### Steg 2.4: Total speltid

Lägg till en property `TotalDuration` som returnerar den sammanlagda speltiden för alla låtar.

> Testa med 0 låtar, 1 låt och flera låtar.

### Steg 2.5: Ta bort en låt

Implementera `RemoveSong()`. Verifiera att låten försvinner och att `TotalDuration` uppdateras.

> Vad ska hända om man försöker ta bort en låt som inte finns?

### Steg 2.6: Maximalt antal låtar

Konstruktorn ska ha en valfri parameter `maxSongs`. Om listan är full ska `AddSong()` kasta undantag.

### Steg 2.7: Validering av namn

Ett tomt eller null-namn ska kasta undantag.

**REFACTOR** - Granska koden. Kör testerna efteråt.

---

### Sammanfattning: Del 2

Du bör ha ytterligare **minst 7 tester** (totalt **~11**) och en `Playlist` med:
- Properties: `Name`, `Songs`, `TotalDuration`
- Metoder: `AddSong()`, `RemoveSong()` med validering
- Stöd för `maxSongs`

---

## Extrauppgifter

Skriv allt själv med TDD.

**A: Filtrera på artist** - Lägg till en metod `GetSongsByArtist(string artist)` som returnerar alla låtar av en viss artist.

**B: Formaterad speltid** - Lägg till en metod eller property som returnerar total speltid som en sträng, t.ex. `"1h 23min"`.

---

## Reflektion

1. Hur påverkade TDD din design av klasserna?
2. Fanns det tillfällen då ett test fick dig att ändra din implementation?
3. Hur skiljer sig att skriva tester *först* jämfört med *efter*?
