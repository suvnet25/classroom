# Driftsättning

## En ASP.NET Core-applikation på en VPS

## 1. Registrering av domännamn

Registrera ett domännamn hos valfri registrar (t.ex. Loopia, Cloudflare, GoDaddy).

---

## 2. Starta VPS på Digital Ocean

Skapa en Droplet med Debian 12.  
Välj t.ex. den billigaste planen (1 vCPU, 512 MB RAM).  
Notera IP-adressen till din droplet.

---

## 3. DNS: Koppla ihop IP med domännamn – Cloudflare

Lägg till din domän i Cloudflare och skapa ett **A-record**:

| Typ | Namn | Innehåll       | Proxy |
|-----|------|-----------------|-------|
| A   | @    | `DIN_VPS_IP`    | Off   |
| A   | www  | `DIN_VPS_IP`    | Off   |

> Stäng av Cloudflares proxy (orange molnet → grått) tills allt fungerar.

---

## 4. Installera .NET och git på Debian

SSH:a in på servern:

```bash
ssh root@DIN_VPS_IP
```

Uppdatera systemet:

```bash
apt update && apt upgrade -y
```

Installera git:

```bash
apt install git -y
```

Lägg till Microsofts paketrepo och installera .NET SDK (Debian 12):

```bash
apt install -y wget
wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
apt update
apt install -y dotnet-sdk-10.0
```

Verifiera:

```bash
dotnet --version
git --version
```

---

## 5. Sätt upp ett publikt repository på GitHub

Skapa ett nytt repository på GitHub och pusha din ASP.NET Core-app dit.

---

## 6. Clona ner repot på VPS:en och starta applikationen

```bash
cd /var/www
git clone https://github.com/DITT_ANVÄNDARNAMN/DITT_REPO.git myapp
cd myapp
dotnet restore
dotnet publish -c Release -o /var/www/myapp/publish
```

Testa att applikationen startar:

```bash
dotnet /var/www/myapp/publish/DITT_PROJEKT.dll --urls "http://localhost:5000"
```

---

## 7. Sätt upp en systemd-tjänst

Skapa en tjänstfil:

```bash
nano /etc/systemd/system/myapp.service
```

Innehåll i `/etc/systemd/system/myapp.service`:

```ini
[Unit]
Description=ASP.NET Core App
After=network.target

[Service]
WorkingDirectory=/var/www/myapp/publish
ExecStart=/usr/bin/dotnet /var/www/myapp/publish/DITT_PROJEKT.dll --urls "http://localhost:5000"
Restart=always
RestartSec=10
SyslogIdentifier=myapp
User=www-data
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

[Install]
WantedBy=multi-user.target
```

Aktivera och starta tjänsten:

```bash
systemctl enable myapp
systemctl start myapp
systemctl status myapp
```

---

## 8. NGINX: Reverse proxy på port 80/443

Installera NGINX:

```bash
apt install nginx -y
```

Skapa en konfigurationsfil:

```bash
nano /etc/nginx/sites-available/myapp
```

Innehåll i `/etc/nginx/sites-available/myapp`:

```nginx
server {
    listen 80;
    server_name dindomän.se www.dindomän.se;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection keep-alive;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktivera siten och starta om NGINX:

```bash
ln -s /etc/nginx/sites-available/myapp /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx
```

Verifiera att din sida nu är tillgänglig via `http://dindomän.se`.

---

## 9. HTTPS: Let's Encrypt-certifikat

Installera Certbot:

```bash
apt install certbot python3-certbot-nginx -y
```

Skaffa certifikat (Certbot konfigurerar NGINX automatiskt):

```bash
certbot --nginx -d dindomän.se -d www.dindomän.se
```

Följ instruktionerna, ange e-postadress och acceptera villkoren.

Verifiera automatisk förnyelse:

```bash
certbot renew --dry-run
```

> Certbot lägger automatiskt till HTTPS-konfiguration i din NGINX-fil och sätter upp en cron/timer för förnyelse.

---

## 10. UFW: Konfigurera brandvägg

```bash
apt install ufw -y
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
ufw status
```

---

## 11. SSH: Stäng av lösenordsinloggning

### På din lokala dator (Windows PowerShell):

Skapa SSH-nyckel om du inte redan har en:

```powershell
ssh-keygen -t ed25519
```

Kopiera den publika nyckeln till servern:

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub | ssh root@DIN_VPS_IP "mkdir -p ~/.ssh; cat >> ~/.ssh/authorized_keys"
```

### På servern:

Testa att inloggning med nyckel fungerar först! Öppna sedan sshd-konfigurationen:

```bash
nano /etc/ssh/sshd_config
```

Ändra/lägg till dessa rader:

```
PasswordAuthentication no
PermitRootLogin prohibit-password
PubkeyAuthentication yes
```

Starta om SSH:

```bash
systemctl restart sshd
```

> **Varning:** Se till att nyckelinloggning fungerar innan du stänger av lösenord, annars låser du ut dig själv.
