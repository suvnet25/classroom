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

```bash title="Fortfarande enkelt projekt"
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
* **Models/** – klasser som bara håller data.
* **Services/** – klasser med logik/funktionalitet.
* **Utils/** – små hjälpfunktioner.
* bin/ och obj/ – genereras automatiskt (ska inte commitas till Git)

---

```bash title="Lite större projekt"
MyApp/
 ├─ MyApp.sln      # Lösningsfil
 ├─ MyApp.Core/    # Kärnlogik
 │   ├─ MyApp.Core.csproj # Projektfil för Core
 │   ├─ Models/
 │   │   └─ Contact.cs
 │   ├─ Services/
 │   │   └─ ContactService.cs
 │   └─ Utils/
 │       └─ Helpers.cs
 ├─ MyApp.Console/ # Konsolapp (Användargränssnittet)
 │   ├─ MyApp.Console.csproj # Projektfil för Console-appen
 │   └─ Program.cs
 ├─ MyApp.Tests/   # Enhetstester
 │   ├─ MyApp.Tests.csproj
 │   └─ ContactServiceTests.cs
 └─ README.md
```

* **MyApp.sln** – lösningsfil som binder ihop flera projekt.
* **MyApp.Core/** – kärnlogik som kan återanvändas i olika applikationer.
* **MyApp.Console/** – konsolapplikationen som användaren kör.
* **MyApp.Tests/** – enhetstester för att testa kärnlogiken.
* **README.md** – information om projektet. Visas på GitHub.

---

```bash title="Större projekt src-katalog"
MyApp/
 ├─ MyApp.sln
 ├─ src/           # Källkod
 │   ├─ MyApp.Core/
 │   │   ├─ MyApp.Core.csproj
 │   │   ├─ Models/
 │   │   │   └─ Contact.cs
 │   │   ├─ Services/
 │   │   │   └─ ContactService.cs
 │   │   └─ Utils/
 │   │       └─ Helpers.cs
 │   ├─ MyApp.Console/ # Konsolapp (om det finns en)
 │   │   ├─ MyApp.Console.csproj
 │   │   └─ Program.cs
 │   └─ MyApp.Web/  # Webbapplikation (om det finns en)
 │       ├─ MyApp.Web.csproj
 │       └─ Program.cs
 ├─ tests/         # Enhetstester
 │   ├─ MyApp.Tests/
 │   │   ├─ MyApp.Tests.csproj
 │   │   └─ ContactServiceTests.cs
 ├─ docs/          # Dokumentationskatalog
 │  └─ ...
 └─ README.md
```