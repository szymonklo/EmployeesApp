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
  placeHolder = 'Search employee';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  selectEvent(name: string) {
    this.employeeService.filterName(name);
  }

  onChangeSearch(term: string) {
    this.employeeService.searchEmployeeName(term).subscribe((employeesNames: string[]) =>
      this.names = employeesNames);
  }

  onInputCleared() {
    this.employeeService.filterName(null);
  }
}
