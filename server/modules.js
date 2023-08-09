// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./names')
const sayHello = require('./utils')
const data = require('./flavor')
require('./grenade')
console.log(data);
console.log(names);
console.log("test");
