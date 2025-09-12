## Förberedande övning

??? Tip "Förberedande övning"
    ```csharp
        class Program
        {
            private static void Main()
            {
                List<string> names = [];
                List<string> phones = [];

                while (true)
                {
                    Console.WriteLine("ADRESSBOK v1");
                    Console.WriteLine("------------");
                    Console.WriteLine("1) Lägg till kontakt");
                    Console.WriteLine("2) Lista kontakter");
                    Console.WriteLine("3) Sök kontakt");
                    Console.WriteLine("4) Avsluta\n");
                    Console.Write("Val: ");
                    var input = Console.ReadLine();

                    if (input == "1")
                    {
                        AddContact(names, phones);
                    }
                    else if (input == "2")
                    {
                        ListContacts(names, phones);
                    }
                    else if (input == "3")
                    {
                        SearchContact(names, phones);
                    }
                    else if (input == "4")
                    {
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Fel input, försök igen.");
                    }

                    Console.WriteLine(); // tom rad mellan looparna
                }
            }

            private static void AddContact(List<string> names, List<string> phones)
            {
                Console.Write("Namn: ");
                var name = Console.ReadLine();
                Console.Write("Telefonnummer: ");
                var phone = Console.ReadLine();

                names.Add(name);
                phones.Add(phone);

                Console.WriteLine("Kontakten lades till.");
            }

            private static void ListContacts(List<string> names, List<string> phones)
            {
                Console.WriteLine("Kontakter:");
                for (int i = 0; i < names.Count; i++)
                {
                    Console.WriteLine($"{i + 1}. {names[i]} - {phones[i]}");
                }

                if (names.Count == 0)
                {
                    Console.WriteLine("(Inga kontakter än)");
                }
            }

            private static void SearchContact(List<string> names, List<string> phones)
            {
                Console.Write("Sök namn: ");
                var search = Console.ReadLine();

                bool found = false;
                for (int i = 0; i < names.Count; i++)
                {
                    if (!string.IsNullOrEmpty(search) &&
                        names[i].ToLower().Contains(search.ToLower()))
                    {
                        Console.WriteLine($"{i + 1}. {names[i]} - {phones[i]}");
                        found = true;
                    }
                }

                if (!found)
                {
                    Console.WriteLine("Ingen kontakt hittades.");
                }
            }
        }
    ```