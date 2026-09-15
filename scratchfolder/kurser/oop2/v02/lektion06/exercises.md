---
tags:
  - OOP2-Övning
---

# Övning - Gästboken

Du behöver använda:
* HTML-formulär
* En ASP.Net-webbserver som kan ta emot POST-requests
* En databas för att spara gästboksinlägg (EF Core + SQLite)

## 1. Skapa HTML-formuläret
Skapa en HTML-sida med ett formulär där användare kan skriva in sitt namn och ett meddelande. Formuläret ska använda metoden POST för att skicka data till servern.

## 2. Skapa ASP.Net-webbservern
I ett ASP.Net-projekt som konfigurerats för att hantera statiska filer, mappa en POST-metod till att kunna ta emot gästboksinlägg (Skapa en gästboksinläggsklass). Spara detta i en SQLite-databas med hjälp av Entity Framework Core. Du behöver lägga till en DbContext och konfigurera den för SQLite. För att kunna använda dbContext i din endpoint, kan du använda dependency injection:

```csharp
builder.Services.AddDbContext<AppDbContext>();

//och sedan i din endpoint:
app.MapPost("/guestbook", ([Microsoft.AspNetCore.Mvc.FromForm]GuestbookEntry entry, AppDbContext db) =>
{
    db.GuestbookEntries.Add(entry);
    db.SaveChangesAsync();
    return Results.Ok();
});
```

## 3. Visa gästboksinlägg
Utöka din ASP.Net-webbserver för att kunna visa alla gästboksinlägg på en HTML-sida. När en användare skickar in ett nytt inlägg via formuläret, ska de omdirigeras till sidan som visar alla inlägg inklusive det nya.

Du kan ladda om sidan efter att ett inlägg genom att låta servern svara med en redirect:

```csharp
return Results.Redirect("/index.html");
```

En redirect instruerar webbläsaren att göra en ny GET-request till den angivna URL:en, vilket i detta fall är din HTML-sida som visar gästboksinläggen.

## 4. Bonusfunktioner

* Lägg till validering för att säkerställa att både namn och meddelande är ifyllda innan de sparas i databasen.
* Lägg till en tidsstämpel för varje inlägg och visa den tillsammans med inlägget.
* Styla HTML-sidan med CSS för att göra den mer attraktiv.
* Lägg till JavaScript för att förbättra användarupplevelsen, t.ex. genom att visa en bekräftelse när ett inlägg har skickats. Gör också så att hemsidan inte behöver laddas om för att visa nya inlägg, utan bara uppdaterar listan med inlägg dynamiskt.


