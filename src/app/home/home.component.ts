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
  thereAreEmployees: boolean = false;
  showReplyButton: boolean = false;

  constructor(private http: HttpClient, private store: Store<{home: IInitialState}>) { 
    setTimeout(() => {
      this.showReplyButton = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.employees$ = this.store.select((store) => store.home.employees);
    this.fetchEmployees();
  }

  onFetchEmployees() {
    this.fetchEmployees();
  }

  private fetchEmployees() {
    this.http.get<IEmployeeResponse>('http://dummy.restapiexample.com/api/v1/employees').subscribe(res => {
      this.store.dispatch(UpdateEmployees({employees: (res.data as IEmployee[])}))
      if ((res.data as IEmployee[])) {
        this.thereAreEmployees = true;
      } else {
        this.thereAreEmployees = false;
      }
    });
  }
}
