import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/Employee.Interface';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  count : number = 0;
  selected:any ="Select department";
  filtered :any;
  Employee : IEmployee[] = [
    {
      name: "Aishwarya",
      age: 25,
      email: "Aishwarya@gmail.com",
      department: ["Computer", "Physics"],
    },
    {
      name: "Shalini",
      age: 26,
      email: "Shalini@gmail.com",
      department: ["Computer"],
    },
    {
      name: "Deekshitha",
      age: 30,
      email: "Deekshitha@gmail.com",
      department: ["Physics", "Chemistry"],
    },
    {
      name: "Sarvesh",
      age: 60,
      email: "Sarvesh@gmail.com",
      department: ["Chemistry", "Physics"],
    },
    {
      name: "Suriya",
      age: 40,
      email: "Suriya@gmail.com",
      department: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Karthi",
      age: 70,
      email: "Karthi@gmail.com",
      department: ["Computer", "Physics"],
    },
  ];

  Departments = [ 'Computer', 'Physics', 'Chemistry'];
  
  constructor() { }

  ngOnInit() {
    this.count = this.Employee.length;
  }

  // Drop-down Functionality for Department
  SearchEmp(name : any){
    let obj = this.Employee.filter(m => m.department == name );
    this.Employee = obj;
    console.log(this.Employee);
  }

  //to remove duplicates in drop-down
  onOptionsSelected() {
    console.log(this.selected); 
    this.filtered = this.Employee.filter(t=>t.department ==this.selected);

  } 

}
