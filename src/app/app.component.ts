import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentUser } from './parent-user';
import { ChildUser } from './child-user';
import { User } from './user';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Konstantine';

  Users = [{firstName: 'John', lastName: 'Doe', age: 18},
           {firstName: 'Takeshi', lastName: 'Kovacs', age: 41},
           {firstName: 'Luke', lastName: 'Rockhold', age: 45},
           {firstName: 'Georges', lastName: 'Saint-pierre', age: 43},
           {firstName: 'Donald', lastName: 'Ceronne', age: 19}      
]

parentUsers: ParentUser[] = [
  { Id: 1, Firstname: 'John', Lastname: 'Doe', DateOfBirth: '2005-01-01', PhoneNumber: '1234567890', Email: 'john@example.com' },
  { Id: 2, Firstname: 'Takeshi', Lastname: 'Kovacs', DateOfBirth: '1982-07-05', PhoneNumber: '1234567890', Email: 'john@example.com' },
  { Id: 3, Firstname: 'Luke', Lastname: 'Rockhold', DateOfBirth: '1978-01-07', PhoneNumber: '1234567890', Email: 'john@example.com' },
  { Id: 4, Firstname: 'Georges', Lastname: 'Saint-pierre', DateOfBirth: '1980-01-01', PhoneNumber: '1234567890', Email: 'john@example.com' },
  { Id: 5, Firstname: 'Donald', Lastname: 'Cerrone', DateOfBirth: '2004-01-01', PhoneNumber: '1234567890', Email: 'john@example.com' }
];
childUsers: ChildUser[] = [];

  receiveChildUsers(event: ChildUser[]) {
    this.childUsers = event;
  }

  constructor(private displayService: DisplayService) {}
  
}
