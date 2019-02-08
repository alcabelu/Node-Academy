//require module de Node    
//Documentacion de NodeJS    https://nodejs.org/en/docs/    https://docs.npmjs.com/   https://docs.nodejitsu.com/
//constante Documentacion de ECMAScript 6   

const os = require('os');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();


console.log(cpu);
console.log(sistema);
console.log(usuario);