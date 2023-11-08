import { Component, Input } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  @Input('user-data') user: User = new User();

  constructor(
    private user$: UserService,
  ) { }

  saveUser() {
    if( this.user.id > 0 ) {
      this.user$.updateUser(this.user);
    }
  }

}
