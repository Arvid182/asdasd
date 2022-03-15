
let contador = 0;
for (let index = 0; index < 20; index++) {
   if(index%2 != 0) {
    contador++;   
   }
}
console.log(contador);

let frase =  [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"];

let palabra = '';
for (let index = frase.length - 1; index > -1; index--) {
    const element = frase[index];
    if(element != '*') {
        palabra+= element;
    }
}

let frase2 = frase.reverse().join('*').replaceAll('*', '');

console.log(frase2);
