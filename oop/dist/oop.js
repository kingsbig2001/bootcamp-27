'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person(name, status) {
    _classCallCheck(this, Person);

    this._name = name;
    this._status = status;
  }
  //setting the getter Method


  _createClass(Person, [{
    key: 'hired',
    value: function hired() {
      console.log(this._name + (' is currently ' + this._status));
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
    //setting the setter Method
    ,
    set: function set(newName) {
      if (newName.length < 20) {
        this._name = newName;
      }
    }
  }, {
    key: 'status',
    get: function get() {
      return this._status;
    },
    set: function set(newStatus) {
      this._status = newStatus;
    }
  }]);

  return Person;
}();
//child class 'Engineer' Inheriting from Parent class 'Person'


var Engineer = function (_Person) {
  _inherits(Engineer, _Person);

  function Engineer(name, status, field, accountBal) {
    _classCallCheck(this, Engineer);

    var _this = _possibleConstructorReturn(this, (Engineer.__proto__ || Object.getPrototypeOf(Engineer)).call(this, name, status));

    _this._field = field;
    _this._accountBal = accountBal;
    return _this;
  }

  _createClass(Engineer, [{
    key: 'working',
    value: function working() {
      console.log(this._name + ' working in ' + this._field + ' dept.');
    }
  }, {
    key: 'field',
    get: function get() {
      return this._field;
    },
    set: function set(newField) {
      this._field = newField;
    }
  }, {
    key: 'accountBal',
    get: function get() {
      return this._accountBal;
    },
    set: function set(newBal) {
      var previousBal = this._accountBal;
      if (newBal && typeof newBal === 'number') {
        this._accountBal = newBal;
      } else {
        this._accountBal = previousBal;
      }
    }
  }]);

  return Engineer;
}(Person);

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