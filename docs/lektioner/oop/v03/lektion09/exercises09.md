---
tags:
  - OOP1-Övning
---

# Övning 09 Git

I den här övningen får du träna på att använda Git för att spara och hantera filer. Vi börjar med enkla textfiler (ingen C#-kod behövs).
Målet är att lära sig de vanligaste kommandona och situationerna.

Använd [dokumentationen](../../../../material/misc/git/index.md) och internet för att hitta svar på frågor och lösningar på problem.  

Speciellt [listan på kommandon](../../../../material/misc/git/commands.md) kan vara användbar.

## **Del 1: Grunder**

I den här övningen får du träna på de viktigaste grunderna i Git:  

- Skapa ett repo  
- Lägga till filer och göra commits  
- Se historiken  

Vi jobbar bara med enkla textfiler till att börja med.

---

## Steg 1: Skapa ett nytt repo
Öppna terminalen, skapa en ny mapp på ett lämpligt ställe och gå in i den:
```bash
mkdir git-ovning
cd git-ovning
```

Starta ett nytt git-repo i den mappen med:
```bash
git init
```

Kolla status:
```bash
git status
```

***Fråga***: Vad händer när du kör `git init`?

---

## Steg 2: Skapa en första fil och gör en commit
Skapa en ny fil i mappen som heter `hej.txt` och skriv något i den. (Gör detta på valfritt sätt, t.ex. med notepad, vscode, echo-kommandot i terminalen, etc.)
```bash title="Skapa filen med echo-kommandot såhär:"
echo 'Hej Git!' > hej.txt
```

Kolla status i ditt repo:
```bash
git status
```

Lägg till filen i staging area:
```bash
git add hej.txt
```

Kolla nu status igen. Vad har ändrats?

Gör din första commit:
```bash
git commit -m "Första commit!"
```

Kolla status igen, vad har ändrats nu?

---

## Steg 3: Ändra en fil
Ändra innehållet i `hej.txt` (lägg till en ny rad i filen, t.ex. med en texteditor).

Kolla status:
```bash
git status
```

 *Fråga*: Vad händer om du gör en commit nu utan att lägga till filen först?

Lägg till och committa ändringen:
```bash
git commit -am "Ändrade hej.txt" # -a lägger till alla ändrade filer samtidigt som den committas
```

---

## Steg 4: Se historiken
Visa historiken för att se dina commits:
```bash
git log --oneline # --oneline visar varje commit på en rad
```

Om det är många commits kan du bläddra med piltangenterna. Avsluta med `q`.  

***Fråga: Hur många commits har du just nu?***

Visa skillnader:
```bash
git diff
```
***Fråga: Vad visar `git diff` just nu?***

---

## Steg 5: Ångra ändringar
Gör en ändring i `hej.txt`. Antag nu att du ångrar dig och vill komma tillbaka till hur det såg ut förut, när du gjorde din senaste commit.

Ångra ändringen så här:
```bash
git restore hej.txt
```

Detta funkar alltså om du *inte har committat* ändringen än.

## Reflektion för Del 1

* Vad är skillnaden mellan `git add` och `git commit`?  
* Vad är skillnaden mellan `git log` och `git status`?  
* Vad är staging area?  
* Vad är en commit?  
* Vad är HEAD?  

---

## **Del 2: Branches**

I den här delen får du träna på att jobba med brancher i Git.

- Skapa en ny branch
- Byta mellan brancher
- Slå ihop brancher

---

## Steg 6: Skapa en ny branch
Skapa en ny branch i ditt repo som heter `nya-grejjer`:
```bash
git branch nya-grejjer
```

Kolla vilka brancher du har:
```bash
git branch
```

Vad ser du för något? Vilken branch är du på just nu?

Byt till den nya branchen:
```bash
git switch nya-grejjer
```

Kolla vilka brancher du har igen:
```bash
git branch
```
Vad ser du nu? Vilken branch är du på nu?

## Steg 7: Gör ändringar i den nya branchen

Lägg till text **i slutet av** `hej.txt` och committa:
```bash
git commit -am "Ändring på nya-grejjer-branchen"
```

Gör ytterligare två, tre tillägg **i slutet av filen** och committa varje gång.

---

## Steg 8: Slå ihop brancher
Gå tillbaka till din main-branch:
```bash
git switch main
```

Titta på innehållet i `hej.txt`. Vad ser du? Varför ser du inte ändringarna du just gjorde?

Nu vill vi slå ihop ändringarna från `nya-grejjer` in i `main`.

Slå ihop `nya-grejjer` in i `main`:
```bash
git merge nya-grejjer
```

!!! Warning ""
    Se till att du är på `main` när du kör `git merge nya-grejjer`. Använd `git branch` för att kolla vilken branch du är på.

Titta i `hej.txt` igen. Vad ser du nu?

## Steg 9: Konflikter!

Testa att skapa en konflikt genom att göra ändringar i `hej.txt` på samma rader i både `main` och på `nya-grejjer` och sedan försöka slå ihop dem igen.

1. Byt till `nya-grejjer` och gör en ändring i `hej.txt` på en rad som redan finns där. Committa ändringen.
2. Byt tillbaka till `main` och gör en annan ändring på samma rad i `hej.txt`. Committa ändringen.
3. Försök slå ihop `nya-grejjer` in i `main` igen med `git merge nya-grejjer`.

Du kommer nu att få ett felmeddelande om en konflikt! Varför händer detta? Jo, Git vet inte vilken av ändringarna den ska behålla, eftersom de båda ändrar samma rad i filen.

Nu måste du själv gå in och lösa konflikten i `hej.txt`. Öppna filen i en texteditor och leta upp konfliktmarkeringarna som lagts till av Git:
```bash
<<<<<<< HEAD
=======
>>>>>>> nya-grejjer
```

Ta bort konfliktmarkeringarna och bestäm vilken av ändringarna du vill behålla (eller skriv en helt ny rad som kombinerar båda ändringarna). Spara filen.

När du har löst konflikten, lägg till filen igen och gör en commit:
```bash
git commit -am "Löst konflikt mellan main och nya-grejjer"
```

## Reflektion för Del 2

* Vad är syftet med att använda branches?
* Vad är skillnaden mellan `git switch` och `git merge`?
* Hur vet Git att det har uppstått en konflikt?
* Hur löser du en konflikt i Git?
* Hur markeras en konflikt i en fil?

Lär dig mer om hur branches funkar i denna interaktiva tutorial: [Learn Git Branching](https://learngitbranching.js.org/)

-----

## Del 3 GitHub

I den här delen får du träna på att koppla ihop ditt lokala repo med ett repo på GitHub, ett så kallat fjärr-repo (remote repo).

- Skapa ett repo på GitHub
- Koppla ihop ditt lokala repo med GitHub
- Skicka upp dina commits

---

## Steg 10. Skapa ett nytt repo på GitHub
1. Gå till [https://github.com](https://github.com).  
2. Klicka på **New Repository**.  
3. Ge det namnet `git-ovning`.  
4. Skapa repot (utan att lägga till README, .gitignore eller licens).

---

## Steg 11. Koppla ihop ditt lokala repo med repot på GitHub
Se till att du står i din lokala mapp `git-ovning`, på branch `main`.

Lägg till fjärr-repot (ersätt `DITT-NAMN` med ditt GitHub-användarnamn):
```bash
git remote add origin https://github.com/DITT-NAMN/git-ovning.git
```

Kolla att det blev rätt:
```bash
git remote -v # -v visar mer info
```

Om det stämmer skall du se två rader med `origin` och URL:en till ditt GitHub-repo.  

---

## Steg 12. Verifiera

Kolla status:
```bash
git status
```

Vad ser du för något? Vad betyder det? Ser du något om din fjärr-branch `origin/main`?

---

## Steg 13. Skicka upp dina commits till repot på GitHub

Skicka upp dina commits till GitHub med:
```bash
git push -u origin main # -u sätter origin/main som standard för framtida push och pull
```

* Om du får ett felmeddelande som säger att du måste sätta en upstream-branch, prova att köra kommandot ovan igen.
* Om du får ett felmeddelande som säger att du måste logga in, följ instruktionerna för att logga in med ditt GitHub-konto.

**Gå nu till ditt repo på GitHub i webbläsaren och ladda om sidan. Ser du din fil där nu?**

Kör `git status` igen. Vad ser du nu?

Grattis! Du har nu kopplat ihop ditt lokala repo med ett repo på GitHub och skickat upp dina commits! 

!!! Tip "Kom ihåh!"
    `git commit` skickar inte upp dina ändringar till GitHub, det sparar dem bara lokalt! För att skicka upp dem till GitHub måste du använda `git push`. Detta blir viktigt att komma ihåg om du ska lämna in en uppgift via GitHub Classroom senare. Utan en **push** kommer din lärare inte att kunna se dina ändringar.

## Steg 14. Gör en ändring på GitHub
Gå till ditt repo på GitHub i webbläsaren och öppna filen `hej.txt`. Klicka på penn-ikonen för att redigera filen direkt i webbläsaren. Lägg till en ny rad med text och scrolla ner till botten av sidan. Skriv en commit-meddelande och klicka på **Commit changes**.

Du kan nu få ner denna ändring till din lokala dator med:
```bash 
git pull
```

Vad händer när du kör `git pull`? Kolla i `hej.txt` igen, ser du ändringen du gjorde på GitHub?

***Fråga***: Vad är skillnaden mellan `git pull` och `git push`?

Undersök vad `git fetch` är för något. Hur skiljer det sig från `git pull`?

---

## Reflektion för Del 3

* Vad är ett fjärr-repo (remote repo)?
* Vad är skillnaden mellan `git push` och `git commit`?
* Vad är det för skillnad på git och GitHub?

## Del 4 GitHub Classroom

Kommer, eller så tar vi den direkt under lektionen.