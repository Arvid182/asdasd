let numeros = [2,4,6,8, 2, 8, 1]

function multiplicarPorDos(numero) {
    return numero * 2;
}

let multiplicados = numeros.map(multiplicarPorDos); //funcion definida
let multiplicados2 = numeros.map(function (numero) { //funcion anonima
    return numero * 2;
});
let multiplicados3 = numeros.map((numero) => numero * 2); //arrow function

console.log(multiplicados);

function filtrar(numero) {
    return numero > 3
}

let filtrados = numeros.filter(filtrar);
let filtrados2 = numeros.filter((numero) => numero > 3);

console.log(filtrados)


const arrayString = ['Agustin', 'Tito', 'Dani', 'Caro', 'Alberto'];

const nombresFiltrados = arrayString.filter((nombre) => nombre.endsWith('to'));

console.log(nombresFiltrados)


const arrayObjetos = [
    { nombre: 'Agustin', apellido: 'Giraldez', edad : 23},
    { nombre: 'Tito', apellido: 'Martinez', edad : 30},
    { nombre: 'Dani', apellido: 'Nomeacuerdoelapellido', edad : 25}
];

const objFiltrados = arrayObjetos.filter((persona) => persona.edad > 25);

console.log(objFiltrados);

const nums = [5,8,20];

function sumar(acumulador, valor) {
    return acumulador + valor
}

const resultado = nums.reduce(sumar, 10);

console.log(resultado);

const nombres = ['Agustin', 'Tito', 'Dani', 'Caro', 'Alberto'];

const resultadoN = nombres.reduce(function(acumulador, valor) {
    return acumulador + ' Nombre: ' + valor
}, 'Nombre: ');

console.log(resultadoN);

nombres.forEach((value)  => {
    console.log(value)
});

nombres.forEach(function(value) {
    console.log(value)
});

for (let index = 0; index < nombres.length; index++) {
    const nombre = array[index];
    console.log(nombre)
}



