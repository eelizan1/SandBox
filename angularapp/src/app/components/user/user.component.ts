import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html', 
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  // PROPERTIES 
  firstName: string;
  lastName: string;
  age: number; 
  address; 

  /**
   * Other TYPES:
   * foo: any; // any type
   * hasKids: boolean; // trur or false
   * numberArray: number[]; // number array
   * stringArray: string[]; // string array
   * mixedArray: any[]; // mixed array of any type
   * myTupleArray: [string, number, booleam] // must be in this order
   * usueable: void; 
   * u: undefined; 
   * n: null; 
   */

  // CONSTRUCTOR - USED TO INJECT DEPENDENCIES 
  constructor() {
    // call sayHello()
    // this.sayHello();
    // console.log(this.age);
    // this.hasBirthday(); // will get run before the html output so a year will be added
    // console.log(this.age);
    this.firstName = 'Enrico'; 
    this.lastName = 'Elizan'; 
    this.age = 26; 
    this.address = {
      street: '5315 Derby Chase Ct', 
      city: 'Alpharetta', 
      state: 'GA'
    }
  }

    // METHODS - USED BY CONSTRUCTOR
    sayHello() {
      console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    hasBirthday() {
      this.age += 1; 
    }

    showAge() {
      return this.age;
    }
}
