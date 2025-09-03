# Längre övning

Du ska skapa ett enkelt kommandoradsprogram som hanterar en todo-lista.
Så här ska det funka:

* `todo` visar en numrerad lista med saker att göra, om de är gjorda eller inte, och eventuellt en deadline
* `todo -h` visar hjälp en hjälptext
* `todo add "Gå ut med soporna"` lägger till en ny sak att göra utan deadline
* (valfri) `todo add "Betala räkningar" --due 2024-12-01` lägger till en ny sak att göra med deadline
* `todo done 2` markerar sak nummer 2 som gjord
* `todo remove 3` tar bort sak nummer 3 från listan

#### Regler

* Allt lagras i arrayer och hanteras med loopar och villkor (inga List<> eller LINQ)
* Inga nya klasser ska skapas
* Inga nya metoder ska skapas