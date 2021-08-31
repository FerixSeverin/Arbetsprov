import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '@models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [`
    #container {
      display: flex;
      flex-direction: column;
      height: 100px;
      justify-content: space-between;
      margin-left: 10px;
    }
  `]
})
export class EmployeeComponent implements OnInit {
  id: number | null = null;
  employee: IEmployee | null = null;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.id = + (this.route.snapshot.paramMap.get('id') as string);
  }

}
