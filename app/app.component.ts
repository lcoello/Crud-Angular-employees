import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';
  msg: string = '';

  employees = [
    {'name': 'Luis', position: 'manager', email:'email@email.com'},
    {'name': 'Juan', position: 'designer', email:'email@email.com'},
    {'name': 'Pedro', position: 'Programmer', email:'email@email.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;
  myValue;

  addEmployee():void {
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Record is successfully Added';
 
  }

  deleteEmployee(i):void {
var answer = confirm('Are you Sure you want to Delete this hard working employee?');
if(answer) {
this.employees.splice(i, 1);
this.msg = 'Record is successfully Deleted';
  }
}

editEmployee(i):void {
this.hideUpdate = false;
this.model2.name = this.employees[i].name;
this.model2.position = this.employees[i].position;
this.model2.email = this.employees[i].email;
this.myValue = i;
}

updateEmployee():void {
let i = this.myValue;
for(let j=0; j <this.employees.length; j++){
  if(i == j){
    this.employees[i] = this.model2;
    this.model2 = {};
    this.msg = 'Record is successfully Updated';
    }
  }
}


closeAlert():void {
  this.msg = '';
  }

;}
