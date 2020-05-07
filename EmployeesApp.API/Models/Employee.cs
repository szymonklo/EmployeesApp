using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace EmployeesApp.API.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName="nvarchar(50)")]
        public string Name { get; set; }
        [Required]
        public DateTime HireDate { get; set; }
        public int? PerformanceManagerId { get; set; }
        public virtual Employee PerformanceManager { get; set; }
        
        // just for start
        [JsonIgnore]
        public virtual ICollection<Employee> ManagedEmployees { get; set; }
    }
}