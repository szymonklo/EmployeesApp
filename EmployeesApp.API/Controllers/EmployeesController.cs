using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmployeesApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IRepository _repo;
        public EmployeesController(IRepository repo)
        {
            _repo = repo;
        }

        // GET api/employees
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
            var employees = await _repo.GetEmployees();
            
            return Ok(employees);
        }

        // GET api/employees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(int id)
        {
            var employee = await _repo.GetEmployee(id);
            
            return Ok(employee);
        }

        // POST api/employees
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/employees/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/employees/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
