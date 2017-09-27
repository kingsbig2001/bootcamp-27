'use strict';

module.exports = class Person {
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
    if(newName.length < 20){
    this._name = newName;
    }
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
// module.exports = class Engineer extends Person { 
//   constructor(name,status, field, accountBal) {
//     super(name, status);
//     this._field = field;
//     this._accountBal = accountBal;
//   }
  
//   get field() {
//     return this._field;
//   }
  
//   set field(newField) {
//     this._field = newField;
//   }
//   get accountBal(){
//     return this._accountBal;
//   }
  
//   set accountBal(newBal){
//     let previousBal = this._accountBal;
//     if(newBal && typeof newBal === 'number'){
//       this._accountBal = newBal; 
//     }
//     else{
//       this._accountBal = previousBal;
//     }
//   }
//   working() {
//     console.log(this._name + ' working in ' + this._field + ' dept.');
//   }
//}

// let ibeh = new Person('ibeh', 'hired');
// console.log(ibeh);

// ibeh.hired();
// ibeh.status = 'unemployed';
// console.log(ibeh.hired());
// let ebube = new Engineer('Ebube', 'hired', 'Electrical', 99);
// ebube.hired();
// ebube.working();
// console.log(ebube);
// ebube.accountBal;
// ebube.accountBal = 9000;
// ebube.accountBal;
// ebube.accountBal = 'omo';
// ebube.accountBal;


