# Struktur

Det finns många sätt att strukturera ett .NET-projekt. Här är några exempel:

```bash title="Enklaste projektet"
MyApp/
 ├─ Program.cs
 ├─ Contacts.cs
 ├─ ContactService.cs
 ├─ Helpers.cs
 └─ MyApp.csproj
```
I exemplet ovan ligger alla källkodsfiler i projektets rotmapp. Detta fungerar bra för små projekt. Vill du dela upp koden i olika mappar kan du göra så här:

```bash title="Enkelt projekt med uppdelning i mappar"
MyApp/
 ├─ Program.cs
 ├─ MyApp.csproj
 ├─ Models/     # dataklasser, ofta flera klasser i denna katalog
 │   └─ Contact.cs
 │   └─ TodoItem.cs
 ├─ Services/
 │   └─ ContactService.cs
 ├─ Utils/
 │   └─ Helpers.cs
 └─ bin/           # kompilerade filer (skapas automatiskt)
 └─ obj/           # byggartefakter (skapas automatiskt)
```

* **Program.cs** – startpunkten.
* **Models** – klasser som mest håller data och väldigt lokal logik.
* **Services** – klasser med logik/funktionalitet som har med flera modeller att göra.
* **Utils** – små hjälpfunktioner.
* bin/ och obj/ – genereras automatiskt (ska inte commitas till Git). I fortsättningen skriver vi inte ut dessa mappar.

---

```bash title="Lite större projekt, med ett projekt för programmet, ett för tester."
MyApp/
 ├─ App/                # Kärnlogik
 │   ├─ App.csproj      # Console-projekt
 │   ├─ Program.cs      # Här startar programmet och knyter ihop Core + UI + Database
 │   ├─ Core/           # Programmets kärnlogik
 │   │   └─ Entities/   # Även kallad Models, dataklasser såsom Contact.cs eller Book.cs
 │   │   └─ Services/   # Affärslogik, t.ex. ContactService.cs
 │   │   └─ Interfaces/ # Gränssnitt för olika tjänster, t.ex. IContactRepository.cs
 │   ├─ UI/             # Användargränssnitt, t.ex. ConsoleUI, med tillhörande menyer osv.
 │   ├─ Database/       # Databasåtkomst, t.ex. SqlContactRepository.cs
 ├─ Tests/              # Enhetstester
 │   ├─ Tests.csproj
 │   └─ ContactServiceTests.cs
 ├─ MyApp.sln           # Lösningsfil
 ├─ README.md           # Lösningsfil
 └─ .gitignore          # Glöm inte gitignore!
```

* Core - Kärnan i ditt program, klasser som håller data och affärslogik (reglerna för hur data hanteras).
* UI - Användargränssnitt, t.ex. konsolmenyer och hjälpfunktioner
* Database - All databasåtkomst, t.ex. SQL-frågor med Dapper osv.

---

```bash title="Mer uppdelat projekt med src-katalog och olika projektlager"
MyApp/
 ├─ MyApp.sln       # Solutionsfil med referenser till alla projekt
 ├─ .gitignore      # Glöm inte gitignore!
 ├─ src/            # Källkoden för applikationen
 │   ├─ AppCore/   
 │   │   ├─ AppCore.csproj # Classlib, för kärnlogik. Ska ha noll referenser till andra projekt
 │   │   ├─ Entities/ # Även kallasd Models
 │   │   │   └─ Contact.cs
 │   │   ├─ Services/
 │   │   │   └─ ContactService.cs
 │   │   └─ Interfaces/
 │   │       └─ IContactRepository.cs
 │   ├─ ConsoleUI/ # Även kallad Presentation Layer
 │   │   ├─ ConsoleUI.csproj # Console-projekt. Refererar till AppCore, kanske även Database
 │   │   └─ Program.cs
 │   └─ Database/    # Även kallad Infrastructure
 │       ├─ Database.csproj # Classlib för databasåtkomst. Refererar till AppCore enbart
 │       └─ SqlContactRepository.cs
 ├─ tests/         # Tester av olika slag
 │   ├─ UnitTests/ # Enhetstestprojekt. Kan också ligga direkt under tests/
 │   │   ├─ UnitTests.csproj
 │   │   └─ ContactServiceTests.cs
 └─ README.md
```