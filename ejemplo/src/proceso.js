const fs = require('fs');

console.log(process.argv);

if(process.argv.length == 2) {
    console.log('Atención - Tienes que pasar una acción.');
} else if (process.argv[2].toLowerCase() == "listar") {
    const miJson = JSON.parse(fs.readFileSync('src/personas.json', 'utf-8'));
    console.log(miJson);
} else {
    console.log('No entiendo qué quieres hacer.');
}
