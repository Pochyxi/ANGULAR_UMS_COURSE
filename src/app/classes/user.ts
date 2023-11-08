import { UserInterface } from "../interfaces/user";

export class User implements UserInterface{
  id: number;
  name: string;
  lastname: string;
  email: string;
  fiscalcode: string;
  province: string;
  phone: string;
  age: number;

  constructor(user?: UserInterface) {

    if (!user) {
      this.id = 0;
      this.name = '';
      this.lastname = '';
      this.email = '';
      this.fiscalcode = '';
      this.province = '';
      this.phone = '';
      this.age = 0;
      return;
    }

    this.id = user.id;
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.fiscalcode = user.fiscalcode;
    this.province = user.province;
    this.phone = user.phone;
    this.age = user.age;
  }
}
