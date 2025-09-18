# Kommandon

## init
Skapar de filer som behövs för att git ska kunna användas i denna mapp/projekt. 

```bash
git init
```
**Resultat:** Initialized empty Git repository in <din-mapp>/.git/

## status
Om du inte kört `git init` i din mapp kommer det att stå så här:
```bash
fatal: not a git repository (or any of the parent directories): .git
```

Annars står det något i stil med detta om du precis kört `git init`:
```bash
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        readme.md

nothing added to commit but untracked files present (use "git add" to track)
```

## add
Lägger till ändringar till staging area. Du kan lägga till alla ändringar med `git add .` eller en specifik fil med `git add filnamn.txt`.

```bash
git add .
```

Testa att köra `git status` igen efter att du kört `git add .`. Du bör nu se att det står "Changes to be committed:" och filerna du lagt till.

## commit
Skapar en commit med dina ändringar, dvs sparar en "ögonblicksbild" av ditt projekt. Du måste alltid inkludera ett meddelande som beskriver vad du har gjort med `-m "ditt meddelande"`.

```bash
git commit -m "Ditt meddelande här"
```

Kör du `git status` igen nu bör du se att det står "On branch main nothing to commit, working tree clean"

## log
Visar historiken av commits i ditt repository, med information som commit ID, författare, datum och meddelande.

```bash 
git log
```

Med `git log --oneline` får du en mer kompakt vy av commit-historiken.

## diff

Visar skillnader mellan olika commits, eller mellan din arbetskatalog och den senaste committen. Om du bara kör `git diff` utan några argument, visar det skillnader mellan din arbetskatalog och den senaste committen.

```bash
git diff
```

Om du vill se skillnader mellan två specifika commits, kan du använda deras commit ID:n:

```bash
git diff commitID1 commitID2
```

## show

Visar detaljerad information om en specifik commit, inklusive ändrade filer och skillnader. Du måste ange commit ID:n för den commit du vill visa.

```bash
git show commitID
```

Om du vill se hur en viss fil såg ut i en specifik commit, kan du använda:

```bash
git show commitID:filnamn.txt
```

---

## branch
Visar vilka branches som finns i ditt repository. Den branch du befinner dig på markeras med en asterisk (*).

```bash
git branch
```

## branch namnet-på-din-nya-branch
Skapar en ny branch med det namn du anger.

```bash
git branch namnet-på-din-nya-branch
```

## switch namnet-på-din-nya-branch
Byter till den branch du anger.

```bash
git switch namnet-på-din-nya-branch
```

Prova att köra `git branch` igen så ser du att du nu är på den nya branchen.

## switch -c namnet-på-din-nya-branch
Skapar en ny branch och byter till den direkt.

```bash 
git switch -c namnet-på-din-nya-branch
```

## merge namnet-på-din-branch
Slår ihop den branch du anger med den branch du befinner dig på.

```bash
git merge namnet-på-din-branch
```

Först byter du till den branch du vill slå ihop ändringarna till, t.ex. `git switch main`, och sedan kör du `git merge namnet-på-din-branch` för att slå ihop ändringarna från den andra branchen.

Om den branch du mergar in till inte har några nya commits sedan du skapade din nya branch, kommer git att göra en "fast-forward merge", vilket innebär att den bara flyttar huvudmarkören (HEAD) framåt till den senaste commit i den andra branchen.

Om du däremot har nya commits i den branch du mergar till, kommer git att skapa en ny commit som sammanfogar ändringarna från båda brancherna. Detta heter en "three-way merge".

---

# Kommandon för fjärrrepositories (GitHub, GitLab, osv)

## remote add origin URL-till-ditt-repo
Lägger till en fjärranslutning (remote) med namnet "origin" som pekar på URL:en du anger. Detta är vanligtvis den URL som används för att pusha och hämta ändringar från ett fjärrrepository.

```bash
git remote add origin URL-till-ditt-repo
```

## push 
Pushar dina commits till den remote som heter "origin" och den branch som heter "main". 

```bash
git push -u origin main
```

Flaggan `-u` sätter upp en tracking-branch, vilket innebär att framtida `git push` och `git pull` kommandon kommer att veta vilken remote och branch de ska interagera med utan att du behöver specificera det varje gång.


## pull
Hämtar och integrerar ändringar från den remote som heter "origin" och den branch som heter "main" till din nuvarande branch.

```bash
git pull origin main
```

## fetch
Hämtar ändringar från den remote som heter "origin" utan att integrera dem i din nuvarande branch. Detta är användbart om du vill se vilka ändringar som finns på fjärrrepositoryt utan att påverka ditt lokala arbete.

```bash
git fetch origin
```

## clone URL-till-ditt-repo
Klonar ett fjärrrepository från den angivna URL:en till din lokala dator. **Detta skapar en ny mapp** med samma namn som repositoryt och laddar ner alla filer och historik.

```bash
git clone URL-till-ditt-repo
```
