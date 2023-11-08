import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  getUsers() {
    return this.users;
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);

    if (index >= -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: any) {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index !== -1) {
      this.users[index] = user;
    }
  }
}
