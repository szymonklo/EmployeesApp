using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeesApp.API.Models;

namespace EmployeesApp.API.Data
{
    public interface IRepository
    {
        Task<Employee> GetEmployee(int id);
        Task<IEnumerable<Employee>> GetEmployees();
        Task<bool> SaveAll();
    }
}