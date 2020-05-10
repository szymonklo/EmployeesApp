using System;

namespace EmployeesApp.API.Dtos
{
    public class ManagerForDropdownDto
    {
        public int Id { get; set; }
        private string _name;
        public string Name
        {
            get { return _name; }
            set
            {
                if (value != null)
                {
                    _name = value;
                }
                else
                {
                    _name = "none (has no manager)";
                }
            }
        }
        
    }
}