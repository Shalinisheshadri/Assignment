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
export class EmployeeComponent implements OnInit,AfterViewInit {

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
      department: ["Computer", "Physics","Biology"],
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

  department: any[] = [];
  // isAscendic = true;

   Sort: string[] = ['Ascending', 'Decensding'];

  dataSource = new MatTableDataSource(this.Employee);
  displayedColumns: string[] = ['name', 'age', 'email', 'department'];

  @ViewChild(MatSort) sort: MatSort;


  constructor() {
    this.AllEmployees = [...this.Employee]
  }

  ngOnInit() {
    this.count = this.Employee.length;

    //unique department code
    let dep=this.Employee.map((x)=>x.department);
    console.log("dep", dep);

    for(const da of dep){
      for(const d of da){
        if(this.department.indexOf(d) === -1){
          console.log("unique departments:",d);
          this.department.push(d);
          console.log(this.department);
        }
      }
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // Search functionality
  searchtext(event: Event) {
    // alert("Search function called!...")
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // code to reset data
  reset() {
    //location.reload();
    this.selected='';
    this.Textsearch='';
    this.dataSource.filter = '';
  }

  //functionality to filter table data according to drop-down
  applyFilter(filterValue: string) {
    if (this.selected) {
      this.dataSource.filter = this.selected.trim().toLowerCase() || this.selected.trim().toLowerCase();
    } else {
      this.dataSource.filter = this.search.trim().toLowerCase();
    }
  }

  sorting() {
    this.dataSource.sort = this.sort;
    // this.isAscendic ? this.ascendic() : this.descendic();
  }

  // ascendic() {
  //   this.isAscendic = false;
  //   this.dataSource = this.dataSource.sort((n1, n2) => {
  //     if (n1 < n2) {
  //       return 1;
  //     }
  //     if (n1 > n2) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }

  // descendic() {
  //   this.isAscendic = true;
  //   this.dataSource = this.dataSource.sort((n1, n2) => {
  //     if (n1 > n2) {
  //       return 1;
  //     }
  //     if (n1 < n2) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  // }

}
