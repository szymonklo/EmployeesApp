using System;

namespace EmployeesApp.API.Dtos
{
    public class EmployeeForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime HireDate { get; set; }
        public int? PerformanceManagerId { get; set; }
        public string PerformanceManagerName { get; set; }
    }
}