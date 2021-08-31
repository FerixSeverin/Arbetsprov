import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee, IEmployeeResponse } from '@models/employee';
import { HttpClient } from '@angular/common/http';

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
  employee: IEmployee = {id: 0, employee_name: "", employee_age: 0, employee_salary: 0, profile_image: ""};
  thereIsAnEmployee: boolean = false;
  showReplyButton: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    setTimeout(() => {
      this.showReplyButton = true;
    }, 2000);
  }

  ngOnInit(): void {
    this.id = + (this.route.snapshot.paramMap.get('id') as string);
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
