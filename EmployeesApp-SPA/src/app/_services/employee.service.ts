import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../_models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = environment.apiUrl;

  employees = new BehaviorSubject<Employee[]>([]);
  currentEmployees = this.employees.asObservable();

  managers = new BehaviorSubject<Employee[]>([]);
  currentManagers = this.managers.asObservable();

  filterParams: any = {};

  constructor(private http: HttpClient) { }

  filterName(name: string) {
    this.filterParams.name = name;
    this.changeFilter();
  }
  filterStartDate(startDate: Date) {
    this.filterParams.startDate = startDate;
    this.changeFilter();
  }
  filterEndDate(endDate: Date) {
    this.filterParams.endDate = endDate;
    this.changeFilter();
  }
  filterManager(performanceManagerId: number) {
    this.filterParams.performanceManagerId = performanceManagerId;
    this.changeFilter();
  }

  changeFilter() {
    console.log(this.filterParams.performanceManagerId);

    this.getEmployees().subscribe((employees: Employee[]) => {
      this.employees.next(employees);
      if (employees.length > 0) {
        this.getManagers().subscribe((managers: Employee[]) => {
          this.managers.next(managers);
        });
      }
    });
  }

  getEmployees(): Observable <Employee[]> {
    const params = this.createParams();
    return this.http.get<Employee[]>(this.baseUrl + 'employees', { params });
  }

  getManagers(): Observable <Employee[]> {
    const pmID = this.filterParams.performanceManagerId;
    this.filterParams.performanceManagerId = null;
    const params = this.createParams();
    this.filterParams.performanceManagerId = pmID;
    return this.http.get<Employee[]>(this.baseUrl + 'employees/managers', { params });
  }

  searchEmployeeName(term: string): Observable <string[]> {
    this.filterParams.name = null;
    const params = this.createParams();
    return this.http.get<string[]>(this.baseUrl + 'employees' + '/search/' + term, { params });
  }

  createParams() {
    let params = new HttpParams();
    if (this.filterParams.name != null) {
      params = params.append('name', this.filterParams.name);
    }
    if (this.filterParams.startDate != null) {
      params = params.append('startDate', this.filterParams.startDate.toDateString());
    }
    if (this.filterParams.endDate != null) {
      params = params.append('endDate', this.filterParams.endDate.toDateString());
    }
    if (this.filterParams.performanceManagerId != null) {
      params = params.append('performanceManagerId', this.filterParams.performanceManagerId);
    }
    return params;
  }
}
