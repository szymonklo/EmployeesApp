using System.Collections.Generic;
using System.Linq;
using EmployeesApp.API.Models;
using Newtonsoft.Json;

namespace EmployeesApp.API.Data
{
    public class Seed
    {
        public static void SeedEmployees(DataContext context)
        {
            if (!context.Employees.Any())
            {
                // separating into 2 groups so that managers will get id from 1 to 5
                var managersData = System.IO.File.ReadAllText("Data/ManagersSeedData.json");
                var employeesData = System.IO.File.ReadAllText("Data/EmployeesSeedData.json");
                
                var managers = JsonConvert.DeserializeObject<List<Employee>>(managersData);
                var employees = JsonConvert.DeserializeObject<List<Employee>>(employeesData);
                
                foreach (var manager in managers)
                {
                    context.Employees.Add(manager);
                }
                context.SaveChanges();

                foreach (var employee in employees)
                {
                    context.Employees.Add(employee);
                }
                context.SaveChanges();
            }
        }
    }
}