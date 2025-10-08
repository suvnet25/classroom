# Lektion 11 - Projektstruktur och paket

> Moment: `Namespaces`, `Arv`, `Object som alla klassers basklass`

## Dagens innehåll

* Några kvarvarande saker om konstruktorer
    * Primary Constructors
    * this, base
* Namespaces och allmän ordning och reda (1h)
* Arv, object och overrides (3h)
* Om tid finns: **static**

---

## Länkar

* [Microsoft: Namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/types/namespaces)
* [**Material:** Primary Constructors](../../../../material/cs/oop/constructors.md#primary-constructors)

---

## Arv - Vad är det?

* Fundamental del i Objektorienterad programmering
* En klass kan **ärva** från en annan klass vilket gör att den kan använda dess egenskaper och metoder
* Arv är ett bra sätt att återanvända kod, eller för att skapa en gemensam bas för liknande klasser
* Exempel på inbyggda arv i C#:
    * Alla klasser ärver från `object`-klassen
    * `Exception`-klassen är basklass för alla undantagsklasser
    * `Stream`-klassen är basklass för olika typer av strömmar (t.ex. `FileStream`, `MemoryStream`)
* Exempel på andra möjliga arv:
    * En `Discount`-klass kan ha flera subklasser som `PercentageDiscount` och `FixedAmountDiscount`
    * En `Report`-klass kan ha flera subklasser som `PdfReport`, `ExcelReport`, `HtmlReport`

## Namespaces

* Namespaces är ett sätt att organisera klasser och undvika namnkonflikter
* Ett namespace är lite som en mappstruktur för klasser, lådor vi kan lägga klasser i som hör ihop
* Vi kan skapa egna namespaces med `namespace`-nyckelordet