# Felhantering

När vi hanterar data och information i våra program är det viktigt att kontrollera så att den stämmer, för att saker och ting inte ska gå sönder. Det finns lite olika sätt att göra detta i C#, beroende på vilket typ av fel som ska hanteras. 

Olika typer av fel i kod: 

* **Kompileringsfel** - Fel som upptäcks när koden kompileras, t.ex. syntaxfel eller felaktiga datatyper. Dessa syns ofta som röda streck i koden i din kodeditor.
* **Logiska fel** - Fel i programmets logik som gör att det inte beter sig som förväntat, t.ex. felaktiga beräkningar eller if-satser. Dessa fel kan vara svåra att upptäcka direkt och kräver testning.
* **Körningsfel** - På engelska *Runtime Error*. Fel som uppstår när programmet körs, t.ex. att dela med noll eller försöka läsa en fil som inte finns. Beror ofta på felaktig indata eller oförutsedda situationer.

## Kompileringsfel

Kompileringsfel är fel som upptäcks när koden kompileras, alltså innan programmet körs. Dessa fel är ofta lätta att upptäcka eftersom de visas som röda streck i koden i din kodeditor. Dessa fel går inte att undvika att rätta till, eftersom programmet inte kan köras förrän de är åtgärdade.

## Logiska fel

Logiska fel är fel i programmets logik som gör att det inte beter sig som förväntat. Dessa fel kan vara svåra att upptäcka direkt och kräver testning. Ett exempel på ett logiskt fel är om du har en if-sats som inte täcker alla möjliga fall, vilket kan leda till att programmet inte gör det du tänkt dig i vissa situationer. Eller en if-sats med flera else if som inte är i rätt ordning, så att vissa villkor aldrig uppfylls. Vissa logiska fel kan visas i din kodeditor genom att kodblock blir lite mörkare, vilket indikerar att de aldrig kommer att köras. Exempelvis en else if som aldrig kan uppfyllas eftersom ett tidigare villkor alltid är sant.

Det bästa sättet när du börjar lära dig programmering är att använda Debuggern för att förstå steg-för-steg vad som händer i koden, och att skriva ut värden på variabler med `Console.WriteLine` för att se vad som händer. Längre fram kommer vi att skriva enhetstester för att automatiskt testa att koden fungerar som den ska.

## Körningsfel

Körningsfel är fel som uppstår på grund av oförutsedda situationer när programmet körs. Det kan vara input från användaren som inte är förväntad, eller att en fil som ska läsas in inte finns av någon anledning. Dessa fel kan göra att programmet kraschar om de inte hanteras på rätt sätt. Ofta är de lätta att upptäcka då hela programmet kraschar och ett felmeddelande visas i konsolen. Detta är bra! Det är bättre att programmet kraschar tidigt och visar på att något är fel, och att vi borde hantera detta felet i vår kod så att programmet inte kraschar utan istället hanterar felet på ett bra sätt.

Körningsfel hanteras i C# ofta med `try/catch`, vilket vi tittar närmare på [i nästa avsnitt](exceptions.md).