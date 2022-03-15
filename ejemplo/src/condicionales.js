const edad = 16;

if(edad > 18) {
    console.log("La persona es mayor de edad");
}else {
    console.log("La persona es menor de edad");
}

const numero1= 15;
const numero2 = 16;
const numero3 = 17;

if(numero1 > numero2 && numero2 > numero3) {
    console.log("El numero uno es mayor");
} else if(numero2 > numero1 && numero2 > numero3) {
    console.log("El numero dos es mayor");
} else {
    console.log("El numero tres es mayor");
}

let color = "Negro"

if(color == "Blanco") {
    console.log("El color es blanco");
}

if(color == "Blanco") {
    console.log("El color es blanco");
} else if ("Negro") {
    console.log("El color es Negro");
} else if ("Azul") {
    console.log("El color es Azul");
}

let colorAsignado1 = '';
if(color == "Blanco") {
    colorAsignado1 = "Blanco";
} else if ("Negro") {
    colorAsignado1 = "Negro";
} else {
    colorAsignado1 = "Azul";
}

const colorAsignado = color == 'Blanco' ? 'Blanco' : color == 'Negro' ? 'Negro' : 'Azul';

switch (color) {
    case "Blanco":
        console.log("El color es Blanco");
        break;
    case "Negro":
        console.log("El color es Negro");
        break;
    case "Azul":
        console.log("El color es Azul");
        break;
    default:
        console.log("El color no esta definido");
}