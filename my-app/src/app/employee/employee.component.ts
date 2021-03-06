import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  hideTable = true;
  info = "";
  editIndex = -1;

  //collection of employees
  employees : EmployeeModel[] = [];

  //single employee
  emp : EmployeeModel = new EmployeeModel();

  //DI
  constructor(private empService : EmployeeService){
    this.employees = this.empService.getData();
  }

  onEdit(index : number){
    if(this.editIndex == -1)
        this.editIndex = index;
    else
        this.editIndex = -1;
  }

  ngOnInit(): void {
   
  }

  onSubmit(){

    console.log(this.emp);
    //add to array
    this.employees.push(this.emp);
    //reset model
    this.emp = new EmployeeModel();
    console.log(this.employees);
  }

}
