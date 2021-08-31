export interface IEmployee {
  id: number,
  employee_name: string,
  employee_salary: number,
  employee_age: number,
  profile_image: string
}

export interface IEmployeeResponse {
  status: string,
  data: IEmployee[] | IEmployee,
  message: string,
}