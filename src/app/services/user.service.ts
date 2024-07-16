import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';


@Injectable({
  providedIn: 'root', // Questo servizio è fornito a livello di root, quindi è un singleton per tutta l'applicazione
})
export class UserService {
  // Array di utenti mock. In un'applicazione reale, questi dati verrebbero probabilmente recuperati da un'API
  users: UserInterface[] = [
    {
      id: 1,
      name: 'John',
      lastname: 'Doe',
      email: 'johndoemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      id: 2,
      name: 'Mario',
      lastname: 'Rossi',
      email: 'mariorossiemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      id: 3,
      name: 'Giuseppe',
      lastname: 'Verdi',
      email: 'giuseppeverdiemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      id: 4,
      name: 'Luca',
      lastname: 'Bianchi',
      email: 'lucabianchiemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      id: 5,
      name: 'Marco',
      lastname: 'Gialli',
      email: 'marcogialliemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      id: 6,
      name: 'Paolo',
      lastname: 'Neri',
      email: 'paoloneriemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
  ];

  constructor() {}

  // Metodo per ottenere tutti gli utenti
  getUsers() {
    return this.users;
  }

  // Metodo per eliminare un utente
  deleteUser(user: any) {
    const index = this.users.indexOf(user);

    // Nota: questa condizione dovrebbe essere `index > -1`, non `>= -1`
    if (index >= -1) {
      this.users.splice(index, 1);
    }
  }

  // Metodo per aggiornare un utente esistente o aggiungerne uno nuovo
  updateUser(user: any) {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index !== -1) {
      // Se l'utente esiste, lo aggiorna
      this.users[index] = user;
    } else {
      // Se l'utente non esiste, lo aggiunge all'inizio dell'array
      this.users.push(user);
      this.users.reverse();
    }
  }
}
