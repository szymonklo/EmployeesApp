using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using EmployeesApp.API.Data;
using EmployeesApp.API.Dtos;
using EmployeesApp.API.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IRepository _repo;
        private readonly IMapper _mapper;

        public EmployeesController(IRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("managers")]
        public async Task<IActionResult> GetManagers([FromQuery] FilterParams filterParams)
        {
            var managers = await _repo.GetManagers(filterParams);

            var managersToReturn = _mapper.Map<IEnumerable<ManagerForDropdownDto>>(managers);

            return Ok(managersToReturn);
        }

        [HttpGet("search/{term}")]
        public async Task<IActionResult> GetEmployeesNames(string term, [FromQuery] FilterParams filterParams)
        {
            var employeesNames = await _repo.GetEmployeesNames(term, filterParams);

            return Ok(employeesNames);
        }

        [HttpGet]
        public async Task<IActionResult> GetEmloyees([FromQuery] FilterParams filterParams)
        {
            var employees = await _repo.GetEmployees(filterParams);
            
            var employeesToReturn = _mapper.Map<IEnumerable<EmployeeForListDto>>(employees);

            return Ok(employeesToReturn);
        }
    }
}
