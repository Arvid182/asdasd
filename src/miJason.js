const fs = require('fs');
const mijason2 = require('./tareas.json')//version nueva, no solicita parse
const mijason = JSON.parse(fs.readFileSync('src/tareas.json', 'utf-8'));

console.log(mijason2);

const objetoPerro = {
    nombre: "Pomelo",
    apellido: "Knudsen",
    edad: 1,
    buenoPerro: true
};

console.log(JSON.stringify(objetoPerro));