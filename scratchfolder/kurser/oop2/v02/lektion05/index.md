# Lektion 05 - OOP2 HTTP + HTML

> Moment: `HTTP`, `ASP.NET`

## Innehåll

* Grunderna i HTTP på whiteboard (1h)
    * Vad är HTTP?
    * Request: Method, Headers, Body
    * Response: Status Code, Headers, Body
* Livekodning: Väldigt enkel HTTP-server med HttpListener (1h)
    * Titta på developer tools i webbläsaren för att se request och response
    * Se hur en hemsidan laddas 
    * Titta på andra hemsidor och hur nya requests görs för bilder och andra länkade resurser
* Livekodning: ASP.Net Static File Server
    * Skapa nytt ASP.Net-projekt, konfigurera för statiska filer
    * Snabbintro till enkel HTML
    * Lägg till HTML-filer och bilder, testa i webbläsaren
    * Vi lägger till en enkelt GET-endpoint som returnerar tiden
    * Vi skapar lite javascript som anropar den endpointen och visar tiden på sidan

### Enkel HTML-mall

```html
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Min Första Webbplats</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Detta är den största headern.</h1>
    <h3>Denna rubrik är mindre.</h3>
    <p>Detta är en paragraf.</p>
    <img src="bild.jpg" alt="Exempelbild">
</body>

<script>
    console.log("Hej från JavaScript! Detta visas i webbläsarens konsol.");
</script>
</html>
``` 