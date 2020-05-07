using System.Collections.Generic;
using System.Threading.Tasks;
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
        public async Task<Employee> GetEmployee(int id)
        {
            var employee = await _context.Employees.Include(e => e.PerformanceManager).FirstOrDefaultAsync(x => x.Id == id);
            
            return employee;
        }

        public async Task<IEnumerable<Employee>> GetEmployees()
        {
            var employees = await _context.Employees.Include(e => e.PerformanceManager).ToListAsync();
            
            return employees;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}