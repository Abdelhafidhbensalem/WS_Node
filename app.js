// on a 3 types de module
// local module => cree dans un projet
const localModule = require("./localModule");
// local module est un objet qui contient sum and minus
                /*console.log(localModule.findUserByName(array, name));*/
// //local modules 

const users = require("./contact");
const uf = require("./localModule");

 console.log(uf.findUserByName(users, "Jhon"));

 console.log(uf.getAvreageAge(users));

// --------------------------------------------------------

