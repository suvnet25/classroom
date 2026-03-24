# Lektion 36

> Moment: ``

## Innehåll

* Driftsätta en ASP.NET Core-applikation på en VPS
    * Registrering av domännamn
    * Starta VPS på Digital Ocean
    * DNS: Koppla ihop ip med domännamn - Cloudflare
    * Installera .Dotnet och git på Debian
    * Sätt upp ett publikt repository på GitHub
    * Clona ner repot på VPS:en och starta applikationen
    * Sätt upp en systemd-tjänst för att hålla applikationen igång
    * NGINX: Sätt upp en reverse proxy så att applikationen är tillgänglig på port 80/443
    * HTTPS: Skaffa certifikat med Let's Encrypt
    * UFW: Konfigurera brandvägg för att bara tillåta port 22, 80 och 443.
    * SSH: Stäng av lösenordsinloggning på VPS:en och använd istället SSH-nycklar för bättre säkerhet.
* Projektfokus