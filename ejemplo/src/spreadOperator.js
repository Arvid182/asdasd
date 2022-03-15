const apellidos = ['Vanegas', 'Deluca', 'Gibert', 'Andres'];
const nombres = ['Agustin', 'Tito', 'Dani', 'Caro', 'Alberto'];

const arraySupremo = [...apellidos, ...nombres, 'Otro nombre'];

console.log(arraySupremo);

let auto = { marca: 'Ferrari', kms: 0, anio: 2020 };

let corredor1 = { nombre: 'un nombre', ...auto };

console.log(corredor1);

function resta (numero1, numero2) {
    return numero1 - numero2;
}

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas);

function promedio(...parametros) {
    let result = 0;
    for (let index = 0; index < parametros.length; index++) {
        result += parametros[index];        
    }
    return result/parametros.length;
}

function promedio2(parametros) {
    let result = 0;
    for (let index = 0; index < parametros.length; index++) {
        result += parametros[index];        
    }
    return result/parametros.length;
}

console.log(promedio2([1,2,3,4]));

console.log(promedio(1,2,3,4,5,4,5,75,4,8,745,574));
