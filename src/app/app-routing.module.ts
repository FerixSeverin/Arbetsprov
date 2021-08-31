import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeNoIdComponent } from './employee-no-id/employee-no-id.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'employee', component: EmployeeNoIdComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
