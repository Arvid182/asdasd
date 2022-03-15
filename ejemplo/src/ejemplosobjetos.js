let futbolista = {
    nombre: 'Leonel messi',
    equipo: 'PSG',
    patear: function () { return '🦶'; }
};

function futbolista2(nombre, equipo) {
    this.nombre = nombre;
    this.equipo = equipo
}

let futbolista3 = {
    nombre: 'Leonel messi',
    equipo: 'PSG',
    patear: () => '🦶'
};

//console.log(new futbolista2('cristiano ronald', 'Manchester United'));

//console.log(futbolista.patear());

let futbolista4 = {
    nombre: 'Leonel messi',
    equipo: 'PSG',
    patear: function () { 
        return this.nombre; 
    }
};
console.log(futbolista4.patear());


let futbolista5 = {
    nombre: 'Leonel messi',
    equipo: 'PSG',
    patear: () => { 
        this.nombre = 'Mbappe';
        return this.nombre; 
    }
};
console.log(futbolista5.patear());