import {Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  // Input property per ricevere i dati dell'utente dal componente genitore
  @Input('user-data') user: User = new User();

  // Output property per emettere eventi al componente genitore
  @Output()
  showFormChange = new EventEmitter<boolean>();

  constructor(
    private user$: UserService, // Inietta il UserService
  ) { }

  // Metodo per salvare o aggiornare i dati dell'utente
  saveUser() {
    if(this.user.id && this.user.id > 0 || this.user.id === null) {
      this.user$.updateUser(this.user);
    }
  }

  // Metodo per annullare l'operazione e nascondere il form
  annulla() {
    this.showFormChange.emit(false);
  }
}
