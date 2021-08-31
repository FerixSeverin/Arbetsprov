import { Component, OnInit } from '@angular/core';
import { IEmployee } from '@models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  employees: IEmployee[] = [
    {id: 12, employee_name: "erik", employee_salary: 3000, employee_age: 23, profile_image: ""},
    {id: 13, employee_name: "erik", employee_salary: 3000, employee_age: 23, profile_image: ""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
