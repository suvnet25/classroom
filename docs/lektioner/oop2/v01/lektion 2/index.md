# Lektion 02 - OOP2 LINQ

> Moment: `LINQ`

## Innehåll

* Slide LINQ
* Livekodning LINQ
* [Övning LINQ - GitHub](https://github.com/BYSuvNet/linqexcercise) (Resten av dagen)
    * Clona ner repot
    * Jobba i Program.cs

---

**LINQ (Language Integrated Query):** Ett kraftfullt verktyg i .NET för att utföra frågor mot olika datakällor som samlingar, databaser och XML-dokument på ett enhetligt sätt med hjälp av C#-syntax.  

Alla LINQ-metoder tar emot en eller flera delegater som inparametrar. Ofta används lambda-uttryck för att skapa dessa delegater på ett kortfattat sätt.  

Väl inne i LINQ-metoderna loopas varje element igenom i samlingen och delegaten anropas med elementet som inparameter. Delegaten innehåller den logik som bestämmer hur varje element ska behandlas, filtreras eller projiceras beroende på vilken LINQ-metod som används.