import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // Oggetto passato dal componente padre UsersComponent
  @Input('user-data') user: User = new User();

  // Evento emesso dal componente figlio UserComponent
  // al componente padre UsersComponent in cui si eliminano gli utenti
  @Output('onDeleteUser') userDeleted = new EventEmitter();

  // Evento emesso dal componente figlio UserComponent
  // al componente padre UsersComponent
  @Output('onSelectedUser') userSelected = new EventEmitter();

  // Init del service UserService
  constructor(private user$: UserService) {}

  ngOnInit(): void {}

  // Metodo che emette l'evento userDeleted
  onDeleteUser(user: User) {
    this.userDeleted.emit(user);
  }

  // Metodo che emette l'evento onUpdatedUser
  onUpdateUser(user: User) {
    this.userSelected.emit(user);
  }
}
