import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployee, IEmployeeResponse } from '@models/employee';

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
  employees: IEmployee[] = [];
  thereAreEmployees: boolean = false;
  showReplyButton: boolean = false;

  constructor(private http: HttpClient) { 
    setTimeout(() => {
      this.showReplyButton = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  onFetchEmployees() {
    this.fetchEmployees();
  }

  private fetchEmployees() {
    this.http.get<IEmployeeResponse>('http://dummy.restapiexample.com/api/v1/employees').subscribe(res => {
      this.employees = (res?.data as IEmployee[]);
      if (this.employees.length !== 0) {
        this.thereAreEmployees = true;
      } else {
        this.thereAreEmployees = false;
      }
    });
  }
}
