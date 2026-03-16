# Identity

Asp.Net Core Identity är ett användarhanteringssystem som kan användas i ASP.NET Core-applikationer. Det erbjuder funktioner som registrering, inloggning, lösenordshantering, rollhantering och mycket mer.

## Huvuddelarna i Identity

* UserManager: Hanterar användare, t.ex. skapa, uppdatera, ta bort användare, hantera lösenord, etc.
* SignInManager: Hanterar inloggning och utloggning av användare.
* IdentityUser: En klass som representerar en användare i Identity. Den kan utökas med egna egenskaper.
* IdentityDbContext: En DbContext som används av Identity för att lagra användar- och rollinformation i en databas.
* IdentityRole: En klass som representerar en roll i Identity. Den kan utökas med egna egenskaper.
* RoleManager: Hanterar roller, t.ex. skapa, uppdatera, ta bort roller, tilldela roller till användare, etc.

**Andra viktiga klasser**

* Claims: Används för att lagra information om användaren, t.ex. namn, e-post, roller, etc.
* ClaimsPrincipal: En samling av claims som representerar en användare. Används för att hantera autentisering och auktorisering i applikationen.

## Cookies i Identity

För att hålla reda på inloggade användare använder Identity cookies. När en användare loggar in skapas en cookie som innehåller information om användaren, t.ex. användar-ID och claims. Denna cookie skickas sedan med varje förfrågan till servern, vilket gör att servern kan identifiera användaren och ge rätt behörigheter. Denna cookie är krypterad och signerad för att förhindra manipulation och obehörig åtkomst. Det går inte att läsa innehållet i cookien på klientsidan, men den kan användas av servern för att autentisera och auktorisera användaren.