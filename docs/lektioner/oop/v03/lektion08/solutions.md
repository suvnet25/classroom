??? Info "En app för att skapa och dela recept"
    ```mermaid
    classDiagram
    direction LR

    class User {
    +Guid id
    +string name
    +string email
    +createRecipe()
    +comment()
    +rate()
    }

    class Recipe {
    +Guid id
    +string title
    +string instructions
    +string imageUrl
    +DateTime createdAt
    +publish()
    +edit()
    }

    class Ingredient {
    +string name
    +string amount
    +string unit
    }

    class Comment {
    +Guid id
    +string text
    +DateTime date
    }

    class Rating {
    +Guid id
    +int value 1..5
    }

    User "1" --> "*" Recipe : creates
    Recipe "1" o-- "*" Ingredient : contains
    User "1" --> "*" Comment : writes
    Comment "*" --> "1" Recipe : belongs to
    User "1" --> "*" Rating : gives
    Rating "*" --> "1" Recipe : for

    ```


??? Info "Ett kassasystem i en butik"
    ```mermaid
    classDiagram
    direction LR

    class Customer {
    +Guid id
    +string name
    }

    class Product {
    +Guid id
    +string name
    +decimal price
    +string barcode
    }

    class Order {
    +Guid id
    +DateTime date
    +decimal total
    +calculateTotal()
    }

    class OrderLine {
    +int quantity
    +decimal unitPrice
    +lineTotal()
    }

    class Payment {
    +Guid id
    +decimal amount
    +string method
    +DateTime time
    }

    class Receipt {
    +Guid id
    +string number
    +print()
    }

    Customer "1" --> "*" Order : places
    Order "1" o-- "*" OrderLine : contains
    OrderLine "*" --> "1" Product : refers to
    Order "1" --> "0..1" Payment : paid with
    Order "1" --> "0..1" Receipt : generates

    ```

??? Info "Saurons HR system"
    ```mermaid
    classDiagram
    direction LR

    class Employee {
      +Guid id
      +string name
      +string species          // Orc, Uruk-hai, Troll, Human, Nazgûl (special)
      +string rank             // Grunt, Captain, Overseer, Lieutenant
      +DateTime hiredAt
      +decimal basePay
      +requestLeave()
      +logAttendance()
      +enlistInProject()
    }

    class Manager {
      +approveLeave()
      +reviewPerformance()
      +discipline()
    }

    class Department {
      +Guid id
      +string name             // Barad-dûr Operations, Siege Engineering, Intelligence
      +decimal budget
      +addEmployee()
    }

    class Fortress {
      +Guid id
      +string name             // Barad-dûr, Minas Morgul, Cirith Ungol
      +string region           // Mordor, Ithilien, etc.
    }

    class Role {
      +Guid id
      +string title            // Gate Guard, Siege Engineer, Spy, Ringwraith
      +string description
      +requiredRank
    }

    class Project {
      +Guid id
      +string codename         // "Siege-of-Gondor", "Ring-Recovery", etc.
      +DateTime start
      +DateTime? end
      +assign()
      +close()
    }

    class Assignment {
      +Guid id
      +DateTime from
      +DateTime? to
      +string duty             // patrol, siege, scouting, reconnaissance
      +status                  // active, completed
    }

    class AttendanceRecord {
      +Guid id
      +DateTime date
      +string shift            // night, day
      +string status           // present, absent, on-mission
    }

    class LeaveRequest {
      +Guid id
      +DateTime from
      +DateTime to
      +string reason           // injury, re-forging, Nazgûl business
      +string status           // pending, approved, rejected
      +submit()
      +cancel()
    }

    class PerformanceReview {
      +Guid id
      +DateTime periodStart
      +DateTime periodEnd
      +int rating              // 1..5 (5 = “terrifyingly effective”)
      +string notes
    }

    class DisciplinaryAction {
      +Guid id
      +DateTime date
      +string offense          // dereliction, insubordination, helmet misuse
      +string action           // lashes, demotion, swamp duty
    }

    class Payroll {
      +Guid id
      +string cycle            // monthly, fortnightly
      +decimal gross
      +decimal hazardBonus
      +decimal deductions      // armor rental, troll insurance
      +decimal net
      +finalize()
    }

    %% Inheritance & roles
    Employee <|-- Manager : is a

    %% Core relations
    Department "1" --> "0..*" Employee : employs
    Fortress  "1" --> "0..*" Department : hosts
    Employee  "0..*" --> "1" Department : belongs to
    Employee  "0..1" --> "1" Manager : reports to

    %% Roles & projects
    Employee  "0..*" --> "0..*" Role : qualified for
    Project   "1" --> "0..*" Assignment : has
    Employee  "1" --> "0..*" Assignment : works on
    Assignment "1" --> "1" Project : for
    Assignment "1" --> "1" Role : as

    %% Attendance & leave
    Employee  "1" --> "0..*" AttendanceRecord : logs
    Employee  "1" --> "0..*" LeaveRequest : submits
    Manager   "1" --> "0..*" LeaveRequest : approves/rejects

    %% Performance & discipline
    Employee  "1" --> "0..*" PerformanceReview : receives
    Manager   "1" --> "0..*" PerformanceReview : conducts
    Employee  "1" --> "0..*" DisciplinaryAction : incurs
    Manager   "1" --> "0..*" DisciplinaryAction : issues

    %% Payroll
    Employee  "1" --> "0..*" Payroll : paid by

    ```
