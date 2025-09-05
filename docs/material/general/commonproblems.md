# Vanliga problem och felmeddelanden

Det finns en uppsjö olika typer av fel som kan uppstå när program skapas. Olika kategorier är:
- Kompilatorfel (compile-time errors)
- Körningsfel (run-time errors)
- Logiska fel (logical errors)

## dotnet cli

>   `> dotnet run`
>
>   'donet' is not recognized as an internal or external command, operable program or batch file.

* **Problem:** Det finns inget program som heter `dotnet` installerat på din dator.
* **Lösning:** Installera .NET SDK från https://dotnet.microsoft.com/en-us/download

---

>   `> dotnet run`
>   
>   Couldn't find a project to run. Ensure a project exists in SÖKVÄG, or pass the path to the project using --project.

* **Problem:** Dotnet hittar inte din projektfil (.csproj).
* **Lösning:** Du måste vara i mappen där din `.csproj`-fil ligger. Använd `cd <mappnamn>` för att byta mapp i terminalen.
