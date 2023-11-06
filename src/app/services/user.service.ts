import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    {
      name: 'John',
      lastname: 'Doe',
      email: 'johndoemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      name: 'Mario',
      lastname: 'Rossi',
      email: 'mariorossiemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      name: 'Giuseppe',
      lastname: 'Verdi',
      email: 'giuseppeverdiemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      name: 'Luca',
      lastname: 'Bianchi',
      email: 'lucabianchiemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
      name: 'Marco',
      lastname: 'Gialli',
      email: 'marcogialliemail.com',
      fiscalcode: 'ABCDEF12G34H567I',
      province: 'Milano',
      phone: '1234567890',
      age: 30,
    },
    {
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
}
