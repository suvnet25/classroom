---
tags:
  - OOP1-Övning
---

# Övning - Pseudokod

#### Övning 1
Tänk dig ett program som ber användaren mata in två tal, adderar dem och skriver ut resultatet:

1. Skriv pseudokod för programmet som kommentarer
2. Skriv koden för programmet i C#

#### Övning 2  
Tänk dig ett program där användaren matar in ett ord. Ordet visas på skärmen och användaren får mata in ytterligare ett ord. Båda orden visas på skärmen osv. Detta fortsätter tills användaren matar in "sluta".

1. Skriv pseudokod för programmet som kommentarer
2. Skriv koden för programmet i C#

#### Övning 3  
Tänk dig ett progam som ser ut så här när det körs:
```
Ange en X-koordinat (1-5): 4
Ange en Y-koordinat (1-5): 3

y
5 *
4 *
3 *       X
2 *
1 *
0 * * * * * *
    0 1 2 3 4 5 x
```

* Skriv pseudokod för programmet som kommentarer
* Skriv koden för programmet i C#

#### Övning 4 
Skriv programmet för denna pseudokod:

```
SKAPA en tom sträng som heter input
SKAPA en variabel som heter SUMMA och sätt den till 0
LOOPA oändligt
    LÄS in en rad från användaren och spara i tmpInput
    OM tmpInput är lika med "sluta" (case insensitive)
        AVBRYT loopen
    ANNARS OM tmpInput är tom
        SKRIV UT "Du måste mata in något!"
    ANNARS OM tmpInput går att tolka som ett heltal
        ADDERA heltalet till SUMMA
    ANNARS
        SKRIV UT "Det där var inte ett giltigt tal!"
SKRIV UT "Summan av talen är: " + SUMMA
```

??? "Exempellösning på uppgift 1"
    ```csharp
    string input = "";

    while (true)
    {
        string tmpInput = Console.ReadLine();

        if (tmpInput.ToLower() == "sluta")
        {
            break;
        }
        input += tmpInput + "\n";

        Console.WriteLine(input);
    }
    ```

    På vilka andra sätt kan du lösa uppgiften?