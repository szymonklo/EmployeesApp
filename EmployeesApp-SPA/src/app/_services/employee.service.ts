import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Employee } from '../_models/employee';
import { map } from 'rxjs/operators';

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

  changeFilter() {
    this.getEmployees().subscribe((employees: Employee[]) =>
      this.employees.next(employees));
    this.getManagers().subscribe((managers: Employee[]) =>
      this.managers.next(managers));
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

  getEmployees(): Observable<Employee[]> {
    const params = this.createParams();
    return this.http.get<Employee[]>(this.baseUrl + 'employees', { params });
  }

  getManagers(): Observable<Employee[]> {
    this.filterParams.performanceManagerId = null;
    const params = this.createParams();
    return this.http.get<Employee[]>(this.baseUrl + 'employees/managers', { params });
  }

  searchEmployeeName(term: string): Observable<string[]> {
    this.filterParams.name = null;
    const params = this.createParams();
    return this.http.get<string[]>(this.baseUrl + 'employees' + '/search/' + term, { params });
  }
}
