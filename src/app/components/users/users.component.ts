import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserInterface } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: User[] = [];
  @Output('onSelectedUser') userSelected = new EventEmitter();

  constructor(private user$: UserService) {}

  ngOnInit(): void {
    this.users = this.user$.getUsers();
  }

  onDeleteUser(user: User) {
    this.user$.deleteUser(user);
  }

  onSelectedUser(user: User) {
    const userCopy = { ...user };
    // vecchio metodo
    // const userCopy = Object.assign({}, user);
    this.userSelected.emit(userCopy);
  }
}
