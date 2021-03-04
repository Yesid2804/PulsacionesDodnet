function getGenero(){
    var radios = document.getElementsByName('genero');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value
        }
    }
}

function calcularPulsaciones(genero,edad){
    var pulsaciones = 0;

    if (genero=="mujer") {
        let edad = document.getElementById("edad").value;
        pulsaciones = (220-edad)/10;
    }
    if (genero=="hombre") {
        let edad = document.getElementById("edad").value;
        pulsaciones = (210-edad)/10;
    }
    return pulsaciones;
}

function registrar(){
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    let genero = getGenero();
    let pulsaciones = calcularPulsaciones(genero,edad);
    var personas = localStorage.getItem('personas');
    if(personas == undefined)
        personas = []
    else
        personas = JSON.parse(personas)
        
        var nuevaPersona = {
            nombre,
            edad,
            genero,
            pulsaciones
    }
    
    personas.push(nuevaPersona);
    localStorage.setItem('personas',JSON.stringify(personas));
    document.getElementById("idResultado").value = "Pulsaciones: " +  pulsaciones; 
}
