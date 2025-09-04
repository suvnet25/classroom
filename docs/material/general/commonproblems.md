---
    title: Vanliga problem
    description: Det är lätt att det blir fel ibland. Här är några vanliga problem och hur du kan lösa dem.
---

# Vanliga problem och felmeddelanden

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
