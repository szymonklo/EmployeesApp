using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeesApp.API.Dtos;
using EmployeesApp.API.Helpers;
using EmployeesApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeesApp.API.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Employee>> GetManagers(FilterParams filterParams)
        {
            // var managers = GetEmployeesQueryable(filterParams).Select(e =>
            //     new Employee {Id = (int)e.PerformanceManagerId, Name = e.PerformanceManager.Name}).Distinct();
            var managers = GetEmployeesQueryable(filterParams).Select(e =>
                new Employee {Id = (int)e.PerformanceManagerId, Name = e.PerformanceManager.Name}).Distinct();
            
            return await managers.ToListAsync();
        }

        public async Task<IEnumerable<string>> GetEmployeesNames(string term, FilterParams filterParams)
        {
            var employeesNames = GetEmployeesQueryable(filterParams).Where(e => e.Name.StartsWith(term)).Select(e => e.Name).Distinct();
            
            return await employeesNames.ToListAsync();
        }

        public async Task<IEnumerable<Employee>> GetEmployees(FilterParams filterParams)
        {
            var employees = GetEmployeesQueryable(filterParams).Include(e => e.PerformanceManager);
            
            return await employees.ToListAsync();
        }

        public IQueryable<Employee> GetEmployeesQueryable(FilterParams filterParams)
        {
            var employees = _context.Employees.Include(e => e.PerformanceManager).AsQueryable();

            if (filterParams.Name != null)
            {
                employees = employees.Where(e => e.Name == filterParams.Name);
            }

            if (filterParams.startDate != null)
            {
                employees = employees.Where(e => e.HireDate >= filterParams.startDate);
            }

            if (filterParams.endDate != null)
            {
                employees = employees.Where(e => e.HireDate <= filterParams.endDate);
            }

            if (filterParams.PerformanceManagerId > 0)
            {
                employees = employees.Where(e => e.PerformanceManagerId == filterParams.PerformanceManagerId);
            }
            else if (filterParams.PerformanceManagerId == 0)
            {
                employees = employees.Where(e => e.PerformanceManagerId == null);
            }

            return employees;
        }
    }
}