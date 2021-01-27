import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  IEmployee
} from '../models/Employee.Interface';
import {
  MatSort
} from '@angular/material/sort';
import {
  MatTableDataSource
} from '@angular/material/table';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  count: number = 0;
  Textsearch: string = '';
  AllEmployees: IEmployee[];
  selected: any;
  search: any;
  filtered: any;
  Employee: IEmployee[] = [{
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
      age: 21,
      email: "Deekshitha@gmail.com",
      department: ["Physics", "Chemistry"],
    },
    {
      name: "Sarvesh",
      age: 23,
      email: "Sarvesh@gmail.com",
      department: ["Chemistry", "Physics"],
    },
    {
      name: "Suriya",
      age: 39,
      email: "Suriya@gmail.com",
      department: ["Computer", "Physics", "Chemistry"],
    },
    {
      name: "Karthi",
      age: 29,
      email: "Karthi@gmail.com",
      department: ["Computer", "Physics"],
    },
    {
      name: "Ram",
      age: 30,
      email: "ram@gmail.com",
      department: ["Biology"],
    },
  ];

  Departments: string[] = ['Computer', 'Physics', 'Chemistry', "Biology"];

  Sort: string[] = ['Ascending', 'Decensding'];

  dataSource = new MatTableDataSource(this.Employee);
  displayedColumns: string[] = ['name', 'age', 'email', 'department'];

  @ViewChild(MatSort) sort: MatSort;


  constructor() {
    this.AllEmployees = [...this.Employee]
  }

  ngOnInit() {
    this.count = this.Employee.length;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  //to remove duplicates in drop-down
  onOptionsSelected() {
    console.log(this.selected);
    this.filtered = this.Employee.filter(t => t.department == this.selected);
  }

  // Search functionality
  searchtext(event: Event) {
    // alert("Search function called!...")
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // refresh or reloading page
  reloadPage() {
    location.reload();
  }

  //functionality to filter table data according to drop-down
  applyFilter(filterValue: string) {
    if (this.selected) {
      this.dataSource.filter = this.selected.trim().toLowerCase() || this.selected.trim().toLowerCase();
    } else {
      this.dataSource.filter = this.search.trim().toLowerCase();
    }
  }

}
