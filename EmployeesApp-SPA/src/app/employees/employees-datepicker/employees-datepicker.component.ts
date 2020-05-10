import { Component, OnInit } from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employees-datepicker',
  templateUrl: './employees-datepicker.component.html',
  styleUrls: ['./employees-datepicker.component.css']
})
export class EmployeesDatepickerComponent implements OnInit {

  bsConfig: Partial<BsDatepickerConfig>;
  startDate: Date;
  endDate: Date;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.bsConfig = {
      containerClass: 'theme-default',
      isAnimated: true
    };
  }

  onValueChange(value: Date): void {
    this.employeeService.filterParams.startDate = this.startDate;
    this.employeeService.filterParams.endDate = this.endDate;
    this.employeeService.changeFilter();
  }
}
