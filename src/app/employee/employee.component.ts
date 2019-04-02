import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string;
  surname: string;
  age: number;
  email: string;
  address: Address;
  tasks: string[];
  hello: any;
  editMode = false;




  constructor() { }

  ngOnInit() {
    console.log('ogOnInit ran...');
    this.name = 'Sherlock';
    this.surname = 'Holmes';
    this.age = 30;
    this.email = 'sholmes@kul.pl';
    this.address = {
      street: 'Konstantynow',
      houseNo: '1H',
      flatNo: '',
      postalCode: '20-708',
      city: 'Lublin'
    };
    this.tasks = ['code', 'code again'];

  }
  addTask(task) {
    this.tasks.unshift(task);
    return false;
  }
  deleteTaks(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }

changeEditMode() {
  this.editMode = !this.editMode;
}


}
interface Address {
  street: string;
  houseNo: string;
  flatNo: string;
  postalCode: string;
  city: string;
}

