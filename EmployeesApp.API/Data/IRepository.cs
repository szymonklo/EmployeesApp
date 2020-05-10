using System.Collections.Generic;
using System.Threading.Tasks;
using EmployeesApp.API.Dtos;
using EmployeesApp.API.Helpers;
using EmployeesApp.API.Models;

namespace EmployeesApp.API.Data
{
    public interface IRepository
    {
        Task<IEnumerable<Employee>> GetManagers(FilterParams filterParams);
        Task<IEnumerable<string>> GetEmployeesNames(string term, FilterParams filterParams);
        Task<IEnumerable<Employee>> GetEmployees(FilterParams filterParams);
    }
}