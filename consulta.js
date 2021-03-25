function actualizarTabla(){
    var personas  = localStorage.getItem('personas')
    if(personas == undefined)
        personas = []
    else
        personas = JSON.parse(personas)

    var filas = '';
    personas.forEach(persona => {
        fila = `
            <tr>
                <td>${persona.nombre}</td>
                <td>${persona.edad}</td>
                <td>${persona.genero}</td>
                <td>${persona.pulsaciones}</td>
            </tr>
        `;
        filas = filas + fila;
    });
    document.getElementById('listaPersonas').innerHTML = filas
}


