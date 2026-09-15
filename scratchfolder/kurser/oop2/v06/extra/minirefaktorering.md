# Minirefaktorering

Följande klass är en del av en applikation som hanterar kandidater som söker jobb, intervjuer mm. Den innehåller för många egenskaper och gör inte systemet så flexibelt. Tex, vad händer om samma kandidat söker flera jobb samtidigt eller kommer på flera intervjuer för samma jobb?

Hur många klasser borde vi ha istället och vilka? Vilka egenskaper borde varje klass ha? Refaktorera koden till flera klasser, så att den blir litte mer flexibel och lättare att underhålla.

```cs
class Candidate
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Address { get; set; }
    public string Email { get; set; }
    public decimal SalaryExpectation { get; set; }
    public string RecruiterFirstName { get; set; }
    public string RecruiterLastName { get; set; }
    public string InterviewRemarks { get; set; }
    public DateTime InterviewDate { get; set; }
    public string Status { get; set; } // Ex: "Applied", "Interviewing", "Hired", "Rejected"
    public string PositionToApplyFor { get; set; }
    public DateTime LastApplicationDate { get; set; }
}
```