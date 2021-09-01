import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployee, IEmployeeResponse } from '@models/employee';
import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs';
import { homeReducer, IInitialState, UpdateEmployees } from './store/home.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    #container {
      margin-left: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {
  employees$: Observable<IEmployee[]> | undefined;

  // Check if the load was successful
  thereAreEmployees: boolean = false;
  // Check if the reload was successful
  showReplyButton: boolean = false;

  constructor(private http: HttpClient, private store: Store<{home: IInitialState}>) { 
    // Wait 2 seconds if the load fails
    setTimeout(() => {
      this.showReplyButton = true;
    }, 2000);
  }

  ngOnInit(): void {
    // Get employees from store
    this.employees$ = this.store.select((store) => store.home.employees);
    // Fetch employees from API
    this.fetchEmployees();
  }

  onFetchEmployees() {
    this.fetchEmployees();
  }

  private fetchEmployees() {
    // Fetch employees from API
    this.http.get<IEmployeeResponse>('http://dummy.restapiexample.com/api/v1/employees').subscribe(res => {
      // Replace of list of employees in the store with new employees
      this.store.dispatch(UpdateEmployees({employees: (res.data as IEmployee[])}))
      // Tell component that the fetch was successful or not
      res.data as IEmployee[] ? this.thereAreEmployees = true : this.thereAreEmployees = false;
    });
  }
}
