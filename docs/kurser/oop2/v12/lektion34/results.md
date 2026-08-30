# Result patterns

Exempel på dessa returmönster:
    * Rena värden
    * Null
    * Bool
    * Bool + out-parameter
    * Generiskt resultatobjekt
    * Specifikt domänresultat

```cs
public class ReturnValues
{
    List<User> _users = [];

    // Returnera rena värden
    int Add(int v1, int v2)
    {
        return v1 + v2;
    }

    string GetFullName(User user)
    {
        return $"{user.FirstName} {user.LastName}";
    }

    // Returnera null
    User? GetUserById(int id)
    {
        return _users.FirstOrDefault(u => u.Id == id);
    }

    int? GetAgeById(int id)
    {
        //Leta efter användare med id
        //om finns returnera user.Age
        //Annars
        return null;
    }

    // Returnera en bool
    bool DeleteUser(int id)
    {
        //Hitta user
        //Om hittad, deleta och returnera true
        return true;
        //Annars false
    }

    // Returnera bool + out-parameter
    bool TryParseAge(string input, out int age)
    {
        return int.TryParse(input, out age);
    }

    // Returnera generiskt resultatobjekt

    Result<User> GetUser(int id)
    {
        if (id <= 0) return Result<User>.Error("Id must be over 0.");

        User? user = _users.FirstOrDefault(u => u.Id == id);

        return user is not null ? user : Result<User>.Error("User not found.");
    }

    // Returnera listor, tomma istället för null, kommunicerar att inga resultat att lägga i listan hittades
    List<User> GetAllAdminUsers()
    {
        List<User> allAdmin = []; //Skapa en tom lista
        allAdmin.ForEach(u => { if (u.IsAdmin) allAdmin.Add(u); });
        return allAdmin;
    }
}

class Result<T>
{
    public bool Success { get; private set; } = true;
    public T? Value { get; set; }
    public string? ErrorMessage { get; set; }

    // Denna rad gör att vi kan returnera T direkt i metoder som returnerar Result<T>, och det kommer automatiskt att konverteras till ett Result<T> med Success = true och Value = det returnerade värdet.
    public static implicit operator Result<T>(T value) => new(value);

    public Result() { }

    //Den här konstruktorn behövs för att möjliggöra implicit konvertering från T till Result<T>. När du returnerar ett värde av typen T i en metod som returnerar Result<T>, kommer den här konstruktorn att användas för att skapa ett Result<T> med Success = true och Value = det returnerade värdet.
    public Result(T value) => Value = value;

    public static Result<T> Error(string errorMessage) => new() { Success = false, ErrorMessage = errorMessage };
}

// Returnera ett specifikt domänresultat
class LoginResult
{
    public bool Success { get; set; }
    public User? User { get; set; }
    public string? Token { get; set; }
    public string? ErrorMessage { get; set; }
    public bool TwoFactorAuthRequired { get; set; }
}

record User(int Id, int Age, string FirstName, string LastName, bool IsAdmin);
```