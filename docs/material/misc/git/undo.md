# Ångra sig i Git

Ibland blir det fel och det kan vara bra att veta hur det går till att ångra sig i Git. Här går vi igenom några vanliga scenarion.

## Ångra icke-committade ändringar

Om du har gjort ändringar i din arbetskatalog som inte är commitade så kan du ångra dem med:

```bash
git restore filnamn.txt
```

Då kommer filen att återställas till den senaste committens version. Bra utifall det inte går att köra ctrl+z i din texteditor eller det blivit något annat tok.

## Amend - ändra senaste commit

Om du precis har gjort en commit och glömt att lägga till en fil eller vill ändra commit-meddelandet så kan du använda `--amend`:

```bash
git commit --amend
```

Detta öppnar upp din texteditor med det gamla commit-meddelandet, så att du kan ändra det.  

Om du bara vill lägga till en fil som du glömt, så lägger du först till den med `git add filnamn.txt` och kör sedan `git commit --amend` utan att ändra meddelandet.

!!! Warning "Varning varning!"
    Använd `--amend` med försiktighet, speciellt om du redan har pushat din commit till en remote. Det ändrar nämligen commit-historiken, vilket kan ställa till problem för andra som jobbar på samma repo! Använd bara `--amend` för småjusteringar.