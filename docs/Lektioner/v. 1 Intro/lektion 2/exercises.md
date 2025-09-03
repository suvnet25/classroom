# Övningar

## Variabler

1. Deklarera en strängvariabel med namnet `greeting` och tilldela den värdet `"Hello"`. Skriv ut den till konsolen.
2. Deklarera en annan strängvariabel med namnet `greeting2`, tilldela den värdet `", World!"`. Slå samman `greeting` och `greeting2` och skriv ut resultatet till konsolen.
3. Fråga användaren efter deras namn och hälsa dem välkomna. Exempelvis med ett `"Hej, John!"`.
4. Deklarera två heltalsvariabler, tilldela dem värden och skriv ut deras summa.
5. Fråga användaren efter deras ålder. Konvertera den till ett heltal[^1] och skriv ut hur många dagar gammal de är.
    1. Deklarera en int, kalla den `div` och tilldela den värdet 3
    2. Dela sedan användarens ålder med `div` och skriv ut resultatet. Prova några olika åldrar. Blir resultatet korrekt? Varför/varför inte?

## Villkorssatser

1. Om användarens ålder är mer än 18 skriv ut "Du får ta körkort!".
2. Lägg till en else-sats som skriver ut "Du får inte ta körkort än :(" om användaren är 18 eller yngre.
3. Utöka programmet så att det även kollar om användaren är exakt 18 år gammal. Om så är fallet, skriv ut "Du är exakt 18!".
4. Modifiera koden så att "Du får ta körtkort" hamnar under en else-sats i slutet.

## Loopar

1. Deklarera och initialisera en variabel till 10, minska den tills den når 1 och skriv ut dess värde vid varje steg. Använd en while-loop
2. Skriv ut siffror från 1 till 10 med hjälp av en for-loop.
3. Skriv ett program som skriver ut multiplikationstabellen för en siffra som användaren får mata in själv.
4. Skriv ut siffror från 1 till 10 med hjälp av en for-loop. Skriv ut "Burr" om siffran är jämn och "Birr" om den är udda, men bara om siffran är mellan 3 och 7!

## Arrayer

1. Deklarera en array med fem namn. Tilldela dem värden och skriv ut dem med hjälp av en loop (for eller while).
2. Skriv ut ett mönster av stjärnor med hjälp av nästlade loopar. Alltså något i stil med:
```
*
**
***
****
```

3. Låt användaren skriva in en siffra. Låt den siffran bestämma hur många rader som skall skrivas ut enligt mönstret ovan. Till skillnad från ovan skall dock mönstret bilda en pyramid enligt följande:
```
   * *
  ** **
 *** ***
**** ****
```

[^1]: Tips: Använd `int.Parse(Console.ReadLine())` eller `Convert.ToInt32(Console.ReadLine())` för att konvertera en sträng till ett heltal.