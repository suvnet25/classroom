# Begrepp

#### Main branch
Main branch (huvudgren) är den primära linjen av utveckling i ett Git-repository. Det är där den stabila och färdiga koden vanligtvis finns, och det är ofta den version som distribueras eller används i produktion. Tidigare kallades denna branch ofta "master". 

#### Head
Head syftar till den senaste commit som är aktiv i din nuvarande branch. Det är som en markör som visar var du befinner dig i projektets historik.

#### Staging area
Staging area är som en förberedelsezon där du samlar alla ändringar du vill inkludera i din nästa commit. Tänk på det som en "att göra"-lista för dina ändringar innan du sparar dem permanent i projektets historik.

#### Repository
Ett repository (eller repo) är som en digital mapp där alla filer och historiken för ditt projekt lagras. Det är här Git håller reda på alla versioner av dina filer och ändringar över tid.

#### Branch
En branch (gren) är en separat linje av utveckling i ditt projekt. Det låter dig arbeta på nya funktioner eller ändringar utan att påverka huvudversionen av ditt projekt. När du är nöjd med dina ändringar kan du slå ihop (merge) din branch med huvudbranchen (ofta kallad "main" eller "master").

#### Tag
En tag är en etikett som du kan fästa vid en specifik commit för att markera viktiga punkter i projektets historik, som till exempel versioner eller releaser. Det är som ett bokmärke som gör det lättare att hitta tillbaka till den punkten senare, eftersom commits annars identifieras med långa, komplexa hash-koder.

#### Conflict
En konflikt uppstår när Git inte automatiskt kan slå ihop ändringar från olika branches eftersom de påverkar samma del av en fil på olika sätt. När detta händer måste du manuellt granska och lösa konflikten genom att bestämma vilka ändringar som ska behållas. Om detta händer i många filer samtidigt kan det bli ganska tidskrävande att lösa, så försök undvika det!

-----

#### Remote (fjärrrepository)
Remote är en version av ditt repository som lagras på en annan plats, ofta på en server eller en plattform som GitHub. Det gör det möjligt att samarbeta med andra genom att dela ändringar och uppdateringar. Det blir som en central version av ett projekt som många kan interagera med.
