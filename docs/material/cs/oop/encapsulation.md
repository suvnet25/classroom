---
title: Inkapsling 
description: Inkapsling handlar om att skydda data.
# icon: classical_building
---

# Inkapsling & åtkomstmodifierare

Inkapsling är ett grundläggande koncept inom objektorienterad programmering.
Det innebär att man **döljer** ett objekts **interna data** och implementation[^1] från **omvärlden**.   

**Dölja?**

Med "dölja" menas här att göra data och implementation otillgänglig för kod utanför klassen. Detta uppnås genom att använda åtkomstmodifierare (access modifiers) som `public`, `private`, `protected` och `internal` för att begränsa åtkomsten till klassens medlemmar.

**Intern data?**

De variabler och metoder som är deklarerade inom en klass och som inte är direkt åtkomliga från kod utanför[^2] klassen. 
Dvs, alla privata medlemmar[^3].

**Omvärlden?**

Kod som inte är en del av objektet, dvs kod som inte är deklarerad inom samma klass. Kod som vill interagera med objektet måste göra det via objektets publika gränssnitt, dvs publika metoder och egenskaper.

## Exempel

(INFOGA BILD)

## Varför är det viktigt?

* **Säkerhet**: Inkapsling minskar risken för att andra programmerare begår misstag.
* **Modularitet**: Koden blir lättare att förstå när varje klass har ett tydligt ansvar och gränssnitt utåt.
* **Underhållbarhet**: Genom att dölja interna detaljer kan klassen ändras internt utan risk att påverka annan kod som använder klassen.

Att förstå och tillämpa *inkapsling* är ett viktigt steg i att bli en skicklig programmerare, eftersom det främjar god koddesign och underlättar utveckling av komplexa system.

## Kodexempel:

```csharp
public class BankAccount
{
    // Privat fält, inte åtkomligt utanför klassen
    private decimal balance;

    // Publik metod för att sätta in pengar
    public void Deposit(decimal amount)
    {
        if (amount > 0) balance += amount;
    }

    // Publik metod för att ta ut pengar
    public void Withdraw(decimal amount)
    {
        //Ta inte ut negativa belopp (för då skulle ju saldot öka!)
        //Ta bara ut pengar om det finns tillräckligt med saldo
        if (amount > 0 && amount <= balance) balance -= amount;
    }

    // Publik egenskap för att läsa saldot
    public decimal Balance
    {
        get { return balance; }
    }
}

//Nedanstående kod kommer att skapa ett BankAccount-objekt och använda dess publika metoder 
//och egenskaper. Denna kod anses vara "utanför" BankAccount-klassen. Därför kan vi bara 
//interagera med objektet account via dess publika metoder och egenskaper.
public class Program
{
    public static void Main()
    {
        BankAccount account = new BankAccount();
        account.Deposit(100);
        account.Withdraw(30);
        Console.WriteLine($"Nuvarande saldo: {account.Balance}"); // Output: Nuvarande saldo: 70
    
        // Följande rad skulle orsaka ett kompileringsfel eftersom 'balance' är privat
        // Console.WriteLine(account.balance); // Fel!
    }
}
```

## Tips

* Börja alltid med att göra medlemmar `private` och öka åtkomsten endast om det behövs.
* Använd PascalCase för publika metoder och egenskaper. 
* Använd camelCase för privata fält (eventuellt med understreck _)
* Inkapsling hjälper till att förebygga oavsiktliga ändringar och buggar.
* Förbereder för Teamarbete: I professionella miljöer är god inkapsling avgörande för samarbete och underhåll.



[^1]: Med *implementation* menas här hur en klass är skriven och uppbyggd, dvs vilka medlemmar den har och hur dessa fungerar.

[^2]: Med *utanför* menas alltså kod som inte ligger innanför det kodblock som definierar klassen. Det kan vara i en annan klass, i en annan metod, eller i ett annat namespace. Det finns olika nivåer av åtkomstkontroll i C#, såsom `private`, `protected`, `internal` och `public`. Dessa nivåer bestämmer hur och var medlemmar av en klass kan nås från andra ställen i koden.

[^3]: Med *medlemmar* menas variabler och metoder som är deklarerade inom en klass.