// to add a 3rd party module we need
// to intialize npm
// => npm init
//-----------------------------------------------
// require module 3rd party (express)
// const express = require("express");
const uuid=require('uuid')
const users = [
  {
    name: "jhon",
    age: 30,
    id:uuid.v4()
  },
  {
    name: "Mohamed",
    age: 25,
    id:uuid.v4()
  },
  {
    name: "Ali",
    age: 25,
  },
  {
    name: "Dorra",
    age: 25,
    id:uuid.v4()
  },
];
//console.log(users)
module.exports = users;