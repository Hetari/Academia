namespace IMS___Team.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Age { get; set; }
        public DateOnly DOB { get; set; }
        public string Sex { get; set; } = null!;
        public string? Email { get; set; }
        public string Phone { get; set; } = null!;
        public string Course { get; set; } = null!;
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
    }
}
