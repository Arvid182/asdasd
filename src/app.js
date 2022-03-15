const fs = require('fs');

if(process.argv.length == 2){
   console.log("Atencion - Tienes que pasar una acción");
} else if(process.argv[2].toLowerCase() == "listar"){
   const tareas = JSON.parse(fs.readFileSync('src/tareas.json', 'utf-8'));
   console.log(tareas); 
} else{
    console.log("No entiendo que quieres hacer.");
}




