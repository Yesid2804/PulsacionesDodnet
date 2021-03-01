function calcularPulsaciones(){
    var radios = document.getElementsByName('genero');
    var inputEdad = document.getElementsByName('edad');

    let genero = "";
    var pulsaciones = 0;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            genero = radios[i].value
            break;
        }
    }

    if (genero=="mujer") {
        let idEdad = document.getElementById("edad").value;
        pulsaciones = (220-idEdad)/10;
    }
    if (genero=="hombre") {
        let idEdad = document.getElementById("edad").value;
        pulsaciones = (210-idEdad)/10;
    }
     document.getElementById("idResultado").value = "Pulsaciones: " +  pulsaciones; 
}


