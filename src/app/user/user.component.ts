import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentUser } from '../parent-user';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  template: `
    <h2>{{ message }}</h2>
    <ul>
      <li *ngFor="let user of users">
        {{ user.Firstname }} {{ user.Lastname }} ({{ user.DateOfBirth }})
      </li>
    </ul>
    <button (click)="passDataToParent()">Pass Data to Parent</button>
  `,
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();
  message = 'Array from parent component';

  passDataToParent() {
    const childUsers: ChildUser[] = [
      { Id: 1, Firstname: 'ChildJohn', Lastname: 'ChildDoe', DateOfBirth: '1995-01-01', PhoneNumber: '9876543210', Email: 'childjohn@example.com' },

    ];

    this.childUsersEvent.emit(childUsers);
    this.message = 'Array from child component';
  }

  constructor(private displayService: DisplayService) {}

  displayUsers() {
    const users = [
      { firstName: 'John', lastName: 'Doe', age: 18 },
      { firstName: 'Takeshi', lastName: 'Kovacs', age: 41 },
      { firstName: 'Luke', lastName: 'Rockhold', age: 45 },
      { firstName: 'Georges', lastName: 'Saint-pierre', age: 43 },
      { firstName: 'Donald', lastName: 'Ceronne', age: 19 }
    ];

    this.displayService.displayUsers(users);
  }
}


