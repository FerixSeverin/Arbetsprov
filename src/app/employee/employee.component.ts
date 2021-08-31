import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee, IEmployeeResponse } from '@models/employee';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IInitialState } from '../home/store/home.reducer';
import { Observable } from 'rxjs';

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
  id: number | null = null;
  employee: IEmployee | undefined;
  employees$: Observable<IEmployee[]> | undefined;
  employees: IEmployee[] | undefined;
  thereIsAnEmployee: boolean = false;
  showReplyButton: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<{home: IInitialState}>) {
    setTimeout(() => {
      this.showReplyButton = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.id = + (this.route.snapshot.paramMap.get('id') as string);
    this.store.select((store) => store.home.employees).subscribe(data => this.employees = data);
    if ((this.employees as IEmployee[]).length) {
      this.employee = (this.employees as IEmployee[]).find(employee => employee.id === this.id);
      if (this.employee != undefined) {
        this.thereIsAnEmployee = true;
        return;
      }
    }
    this.onFetchEmployee();
  }

  onFetchEmployee() {
    this.fetchEmployee((this.id as number));
  }

  private fetchEmployee(id: number) {
    this.http.get<IEmployeeResponse>('http://dummy.restapiexample.com/api/v1/employee/' + this.id).subscribe(res => {
      this.employee = (res.data as IEmployee);
      if (this.employee.id !== 0) {
        this.thereIsAnEmployee = true;
      } else {
        this.thereIsAnEmployee = false;
      }
    });
  }
}
