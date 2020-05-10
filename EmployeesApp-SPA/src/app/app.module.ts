import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './_services/employee.service';
import { EmployeesAutocompleteComponent } from './employees/employees-autocomplete/employees-autocomplete.component';
import { EmployeesDatepickerComponent } from './employees/employees-datepicker/employees-datepicker.component';
import { EmployeesDropdownComponent } from './employees/employees-dropdown/employees-dropdown.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeesComponent,
      EmployeesAutocompleteComponent,
      EmployeesDatepickerComponent,
      EmployeesDropdownComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      AutocompleteLibModule,
      BsDatepickerModule.forRoot(),
   ],
   providers: [
      EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
