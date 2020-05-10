using AutoMapper;
using EmployeesApp.API.Dtos;
using EmployeesApp.API.Models;

namespace EmployeesApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Employee, EmployeeForListDto>();
            CreateMap<Employee, ManagerForDropdownDto>();
        }
    }
}