using System;

namespace EmployeesApp.API.Helpers
{
    public class FilterParams
    {
        public string Name { get; set; }
        public DateTime? startDate { get; set; }
        public DateTime? endDate { get; set; }
        public int? PerformanceManagerId { get; set; }
    }
}