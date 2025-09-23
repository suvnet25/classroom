# Lektion 11 - Projektstruktur och paket

## Dagens innehåll

* Arv, object och overrides (3h)
* Namespaces och allmän ordning och reda


---

## Arv - Vad är det?

* Fundamental del i Objektorienterad programmering
* En klass kan **ärva** från en annan klass vilket gör att den kan använda dess egenskaper och metoder
* Arv är ett bra sätt att återanvända kod, eller för att skapa en gemensam bas för liknande klasser
* Exempel på inbyggda arv i C#:
    * Alla klasser ärver från `object`-klassen
    * `Exception`-klassen är basklass för alla undantagsklasser
    * `Stream`-klassen är basklass för olika typer av strömmar (t.ex. `FileStream`, `MemoryStream`)

## Namespaces

* Namespaces är ett sätt att organisera klasser och undvika namnkonflikter
* Ett namespace är lite som en mappstruktur för klasser, lådor vi kan lägga klasser i som hör ihop
* Vi kan skapa egna namespaces med `namespace`-nyckelordet