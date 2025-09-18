---
title: DataGrip – Felhantering
description: Vanliga fel i DataGrip och hur du löser dem.
icon: material/alert
---

# DataGrip – Felhantering

När du arbetar i DataGrip mot MariaDB kan du stöta på olika typer av fel. Här är de vanligaste och hur du löser dem.

---

## "Access denied for user"

**Orsak:** Användarnamn eller lösenord är fel, eller så har du inte behörighet att logga in från din dator.

**Lösning:**
- Kontrollera att du använder rätt användarnamn (`yh_förnamn`) och lösenord.
- Se till att du ansluter till rätt host och port.
- Prata med en klasskamrat
- Prata med en annan klasskamrat
- Funkar det fortfarande inte? Prata med Krister
---

## "Communications link failure" / Timeout

**Orsak:** DataGrip når inte servern.

**Lösning:**
- Kontrollera att **Host** och **Port** är rätt.
- Se till att du har internetanslutning.
- Om du är bakom brandvägg eller skola–wifi kan porten vara blockerad – testa annan uppkoppling.

---

## "No schemas selected"

**Orsak:** Du är inloggad, men inga databaser visas i explorern.

**Lösning:**
- Öppna inställningarna för anslutningen.
- Gå till fliken **Schemas** och bocka i de scheman du vill arbeta med.
- Uppdatera explorern.

---

## "Unknown database …"

**Orsak:** Du försöker ansluta direkt till en databas som inte finns eller som du inte har rättigheter till.

**Lösning:**
- Lämna fältet **Database** tomt i anslutningen.
- Välj schema senare i fliken **Schemas**.

---

## "Driver files are missing"

**Orsak:** DataGrip hittar inte MariaDB-drivrutinen.

**Lösning:**
- Klicka på **Download missing driver files** i anslutningsdialogen.
- Starta om DataGrip (OBS! kan bugga annars)

---

## SQL-fel (t.ex. syntax error)

**Orsak:** Din SQL-fråga innehåller ett stavfel eller saknar korrekt syntax.

**Lösning:**
- Läs felmeddelandet i resultatrutan – där står ofta vilken rad felet finns på.
- Dubbelkolla kommandot mot SQL-syntaxen för MariaDB.

---

## "Query execution was interrupted"

**Orsak:** Frågan tog för lång tid eller stoppades manuellt.

**Lösning:**
- Kontrollera att du inte glömt en `WHERE` i t.ex. `DELETE` eller `UPDATE`.
- Om frågan är korrekt men tar lång tid – försök optimera tabellen (index) eller begränsa urvalet.

---

## Tips för att undvika problem

- Testa alltid anslutningen med **Test Connection** när du skapar en ny data source.  
- Använd kortkommandot **⌘. (macOS)** / **Ctrl+. (Windows)** för att avbryta långa queries.  
- Slå på **bekräftelse för farliga queries** i inställningarna (så att du inte råkar köra `DROP` eller `DELETE` utan `WHERE`).  
- Om något krånglar – starta om DataGrip

---

