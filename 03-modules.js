// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names  = require('./04-names')
const sayHi = require('./05-utils')
console.log(sayHi);

// sayHi('susan')
// sayHi(john)
// sayHi(peter)