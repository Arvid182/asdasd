const suma = require("./calculadora");
const moment = require("moment");

console.log(moment("02/23/2022").format("DD-MM-YYYY"));
console.log(suma(3,5));

let auto = { marca: 'Ferrari', kms: 0, anio: 2020 };
console.log(JSON.stringify(auto));