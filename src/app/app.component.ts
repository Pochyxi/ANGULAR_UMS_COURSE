import { Component } from '@angular/core';
import { User } from './classes/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Titolo dell'applicazione
  title = 'ums-course';

  // Flag per controllare la visibilità del form utente
  showForm: boolean = false;

  // Oggetto User per memorizzare l'utente selezionato o nuovo
  userSelected: User = new User();

  // Metodo chiamato quando un utente viene selezionato per l'aggiornamento
  updateUser(user: User) {
    // Mostra il form
    this.showForm = true;
    // Imposta l'utente selezionato
    this.userSelected = user;
  }

  // Metodo per creare un nuovo utente
  newUser() {
    // Mostra il form
    this.showForm = true;
    // Crea un nuovo oggetto User vuoto
    this.userSelected = new User();
  }
}
