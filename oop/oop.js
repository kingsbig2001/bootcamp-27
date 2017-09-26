'use strict';

class Person {
  constructor(name, status) {
    this._name = name;
    this._status = status;
  }
  //setting the getter Method
  get name() {
    return this._name;
  }
  //setting the setter Method
  set name(newName) {
    this._name = newName;
  }
  get status(){
    return this._status;
  }
  
  set status(newStatus){
    this._status = newStatus;
  }
  
  hired() {
    console.log(this._name + ` is currently ${this._status}`);
  }
}
//child class 'Engineer' Inheriting from Parent class 'Person'
class Engineer extends Person { 
  constructor(name,status, field) {
    super(name, status);
    this._field = field;
  }
  
  get field() {
    return this._field;
  }
  
  set field(newField) {
    this._field = newField;
  }
  
  working() {
    console.log(this._name + ' working in ' + this._field + ' dept.');
  }
}

let ibeh = new Person('ibeh', 'hired');
ibeh.hired();
ibeh.status = 'unemployed';
console.log(ibeh.hired());
let ebube = new Engineer('Ebube', 'hired', 'Electrical');
ebube.hired();
ebube.working();
console.log(ebube.name);