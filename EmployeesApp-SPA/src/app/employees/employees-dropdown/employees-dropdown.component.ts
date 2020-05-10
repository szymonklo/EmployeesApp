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
    this.employeeService.currentManagers.subscribe((managers: Employee[]) =>
      this.managers = managers);
    console.log('init');
  }

  onManagerSelected(managerId: number) {
    this.employeeService.filterManager(managerId);
    console.log('selected');

  }

  resetManager() {
    this.selectedManager = null;
    this.employeeService.filterManager(null);
    console.log('reset');

  }
}
