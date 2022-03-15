const fs = require('fs');
const miJson2 = require('./personas.json');

const miJson = JSON.parse(fs.readFileSync('src/personas.json', 'utf-8'));

console.log(miJson);

// const miObj = {
//     nombre : "Amine",
//     apellido : "Mucarcel",
//     edad : 0,
//     estudiante : true,
//     estudiar : () => console.log('Estudiar')
// };

// console.log(JSON.stringify(miObj));
