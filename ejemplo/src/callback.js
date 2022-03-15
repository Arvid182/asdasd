function unaFuncion(param1, param2) {
    return "";
}

function escribirEnConsola(){
    console.log('Funcion definida');
}

setTimeout(escribirEnConsola, 1000);
setTimeout(function() {
    console.log('Funcion anonima');
}, 1000);

setTimeout(() => console.log('Funcion anonima'), 1000);

//string
//int
//object
//booleanos
//arrays
//funcion

function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

function nombreCompletoAlrevez(nombre, apellido) {
    return apellido + " " + nombre;
}

let persona = {
    darNombre : (nombre, apellido) => { console.log('dando nombre' + nombre+ apellido)}
}


function saludar(nombre, apellido, callback) {
    return "Hola! " + callback(nombre, apellido) + "!";
}

const saludo = saludar('Walter', 'Leskovar', nombreCompleto);

console.log(saludo);


