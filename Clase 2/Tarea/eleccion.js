const llamado = require('./operaciones');

let myArgv = process.argv.slice(2);

const operaciones =(myArgv[0]);
const n1 = Number(myArgv[1]);
const n2 = Number(myArgv[2]);

console.log(llamado.operaciones(operaciones, n1, n2));