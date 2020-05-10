import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Employee } from 'src/app/_models/employee';

@Component({
  selector: 'app-employees-autocomplete',
  templateUrl: './employees-autocomplete.component.html',
  styleUrls: ['./employees-autocomplete.component.css']
})
export class EmployeesAutocompleteComponent implements OnInit {

  keyword = 'name';
  names: string[] = [];
  placeHolder = 'search employee';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  selectEvent(item) {
    this.employeeService.filterParams.name = item;
    this.employeeService.changeFilter();
  }

  onChangeSearch(term: string) {
    this.employeeService.searchEmployeeName(term).subscribe((employeesNames: string[]) =>
      this.names = employeesNames);
  }

  onInputCleared() {
    this.employeeService.filterParams.name = null;
    this.employeeService.changeFilter();
  }
}
