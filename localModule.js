//find user by name
function findUserByName(array, name) {
    return array.find((user) => user.name.toLowerCase() === name.toLowerCase());
  }
  
  function getAvreageAge(array) {
    let res = 0;
  
    for (let i = 0; i < array.length; i++) {
      res += array[i].age;
    }
    return res / array.length;
  }
  //console.log(module)=> global obj process /console.log/setTimeout
  module.exports = {
    findUserByName,
    getAvreageAge,
  };
//  console.log(module) 
