"use strict";

var assert = require("assert");
var aritGeo = require("../aritgeo");

describe('test for aritGeo function', function () {

   it("no arguement should return -1", function () {
      assert(aritGeo() === -1);
   });

   it("parsing a string intead of array should return -1", function () {
      assert(aritGeo('array') === -1);
   });
   it("empty array should return 0", function () {
      assert(aritGeo([]) === 0);
   });
   it("array with string should return -1", function () {
      assert(aritGeo(['str', 1, 3, 5]) === -1);
   });
   it("should return Geometric", function () {
      assert(aritGeo([2, 4, 8, 16]) === 'Geometric');
   });
   it("should return Arithmethic", function () {
      assert(aritGeo([1, 3, 5, 7]) === 'Arithmethic');
   });
   it("array not a Geometric or Arithmetic Sequence should return -1", function () {
      assert(aritGeo([4, 7, 9, 22, 44]) === -1);
   });

   it("parsing list of numbers instead of array should return -1", function () {
      assert(aritGeo(44, 47, 50, 53) === -1);
   });
   it("array of strings should return -1", function () {
      assert(aritGeo(['er', 'str', 'ob', 'kk']) === -1);
   });
   it("parsing an object should return  -1", function () {
      assert(aritGeo({}) === -1);
   });
});