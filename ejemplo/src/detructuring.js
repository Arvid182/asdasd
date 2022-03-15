let apellidos = ['Vanegas', 'Deluca', 'Gibert', 'Andres'];

// let primera = apellidos[0];
// let segundoa = apellidos[1];
// let tercera = apellidos[2];

let [primera, segundoa, tercera, cuartoa, quintoa] = apellidos;

console.log(primera);
console.log(segundoa);
console.log(tercera);
console.log(cuartoa);
console.log(quintoa);

let persona = { 
    nombre: 'Felipe',
    apellido: 'Colodro',
    edad: 18
};

let { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

