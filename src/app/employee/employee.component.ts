import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee, IEmployeeResponse } from '@models/employee';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IInitialState } from '../home/store/home.reducer';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [`
    #container {
      display: flex;
      flex-direction: column;
      height: 140px;
      justify-content: space-between;
      margin-left: 15px;
      width: 200px;
    }
  `]
})
export class EmployeeComponent implements OnInit {
  // Holds ID from the URL
  id: number | null = null;
  // Holds the employee
  employee: IEmployee | undefined;
  // Holds employees from the store
  employees: IEmployee[] | undefined;
  // Check if the load was successful
  thereIsAnEmployee: boolean = false;
  // Check if the reload was successful
  showReplyButton: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<{home: IInitialState}>) {
    // Wait 2 seconds if the load fails
    setTimeout(() => {
      this.showReplyButton = true;
    }, 2000);
  }

  ngOnInit(): void {
    // Get ID from the URL
    this.id = + (this.route.snapshot.paramMap.get('id') as string);
    // Subscribe to the employees list from the store
    this.store.select((store) => store.home.employees).subscribe(data => this.employees = data);
    // Check if the employee list is empty
    if ((this.employees as IEmployee[]).length) {
      // Try to get an employee that matches the ID
      this.employee = (this.employees as IEmployee[]).find(employee => employee.id === this.id);
      // Check if the employee exists
      if (this.employee as IEmployee) {
        this.thereIsAnEmployee = true;
        return;
      }
    }
    // Fetch an employee from the API based on the ID if there is no employee from the store
    this.onFetchEmployee();
  }

  onFetchEmployee() {
    this.fetchEmployee((this.id as number));
  }

  private fetchEmployee(id: number) {
    // Fetch an employee from the API based on the ID
    this.http.get<IEmployeeResponse>('http://dummy.restapiexample.com/api/v1/employee/' + this.id).subscribe(res => {
      // Check that the fetch was successful
      this.employee = (res.data as IEmployee);
      // Tell the component that the fetch was successful
      this.employee as IEmployee ? this.thereIsAnEmployee = true : this.thereIsAnEmployee = false;
    });
  }
}
