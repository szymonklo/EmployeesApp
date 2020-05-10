import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employees-dropdown',
  templateUrl: './employees-dropdown.component.html',
  styleUrls: ['./employees-dropdown.component.css']
})
export class EmployeesDropdownComponent implements OnInit {

  selectedManager = null;

  managers: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.loadManagers();
    this.employeeService.currentManagers.subscribe((managers: Employee[]) =>
      this.managers = managers);
  }

  loadManagers() {
    this.employeeService.getManagers().subscribe((managers: Employee[]) =>
      this.managers = managers);
  }

  onManagerSelected(managerId) {
    this.employeeService.filterParams.performanceManagerId = managerId;
    this.employeeService.changeFilter();
  }

}
