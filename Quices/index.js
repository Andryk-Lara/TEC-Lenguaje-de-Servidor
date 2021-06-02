const module1 = require('./app');
const module2 = require('./app2');
let nums = process.argv.slice(2);
let numes = process.argv.slice(2);
// console.log(module1.suma(nums));
console.log(`El Numero Mayor es ${module1.numeroMayor(nums)}`);
console.log(`El Numero Menor es ${module1.numeroMenor(nums)}`);
console.log(module2.listaOrdenada(numes));
console.log(module2.suma(numes));