import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  // Titolo della lista degli utenti
  title = 'Users';

  // Array per memorizzare la lista degli utenti
  users: User[] = [];

  // EventEmitter per notificare il componente genitore quando un utente viene selezionato
  @Output('onSelectedUser') userSelected = new EventEmitter<User>();

  // Inietta UserService nel costruttore
  constructor(private user$: UserService) {}

  // Metodo del ciclo di vita di Angular, chiamato dopo l'inizializzazione del componente
  ngOnInit(): void {
    // Inizializza la lista degli utenti chiamando il metodo getUsers dal servizio
    this.users = this.user$.getUsers();
  }

  // Metodo per gestire l'eliminazione di un utente
  onDeleteUser(user: User) {
    // Chiama il metodo deleteUser del servizio per eliminare l'utente
    this.user$.deleteUser(user);
    // Nota: Qui potresti voler aggiornare la lista degli utenti dopo l'eliminazione
  }

  // Metodo per gestire la selezione di un utente
  onSelectedUser(user: User) {
    // Crea una copia dell'oggetto utente per evitare modifiche accidentali all'originale
    const userCopy = { ...user };
    // Vecchio metodo per creare una copia dell'oggetto (commentato)
    // const userCopy = Object.assign({}, user);

    // Emette la copia dell'utente selezionato al componente genitore
    this.userSelected.emit(userCopy);
  }
}
