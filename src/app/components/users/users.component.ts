import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  title = 'Users';
  users: any[] = [];

  constructor(private user$: UserService) {}

  ngOnInit(): void {
    this.users = this.user$.getUsers();
  }
}
