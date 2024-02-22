// Declaración del array 'personas' con objetos que contienen el nombre y la edad de cada persona.
let personas=[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"Benja", edad:5},
];

// Definición de la función 'agregarPersona' que agrega una nueva persona al array 'personas' basada en la información ingresada por el usuario.
agregarPersona=function(){
    // Se recuperan el nombre y la edad ingresados por el usuario.
    let nombre=recuperarTexto("cajaNombre");
    let edad=recuperarInt("cajaEdad");
    let correct=true;

    // Se verifica si el nombre tiene menos de 3 caracteres y se muestra un mensaje de error si es así.
    if(nombre.length<3 || nombre==""){
        mostrarTexto("lblErroresN","El nombre debe tener al menos 3 caracteres");
        correct=false;
    }
    // Se verifica si la edad está fuera del rango válido (0 a 100) y se muestra un mensaje de error si es así.
    if(edad<0 || edad>100 || isNaN(edad)){
        mostrarTexto("lblErrores","La edad debe ser un numero entre 0 y 100");
        correct=false;
    } 
    
    if(correct==true){
        // Si el nombre y la edad son válidos, se crea un nuevo objeto 'nuevaPersona' con los datos ingresados.
        let nuevaPersona={
            nombre: nombre,
            edad: edad
        };
        // Se añade el objeto 'nuevaPersona' al array 'personas'.
        personas.push(nuevaPersona);
        // Se muestra una alerta indicando que la persona se agregó correctamente.
        alert("PERSONA AGREGADA CORRECTAMENTE");
        // Se llama a la función 'mostrarPersonas' para actualizar la visualización de las personas.
        mostrarPersonas();
        // Se llama a la función 'limpiar' para borrar los campos de entrada y los mensajes de error.
        limpiar();
    }
}

// Definición de la función 'mostrarPersonas' que muestra en una tabla la lista de personas con sus respectivas edades.
mostrarPersonas=function(){
    // Se obtiene el elemento HTML donde se insertará la tabla.
    let cmpTabla=document.getElementById("tablaPersonas");
    // Se inicializa el contenido de la tabla con los encabezados.
    let contenidoTabla="<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"
    "</tr>";
    let lapersona;
    // Se recorre el array 'personas' para construir las filas de la tabla con los datos de cada persona.
    for(let i=0;i<personas.length;i++){
        lapersona=personas[i];
        contenidoTabla+=
        "<tr><td>"+lapersona.edad+"</td>"
        +"<td>"+lapersona.nombre+"</td></tr>"
    }
    // Se cierra la etiqueta de la tabla.
    contenidoTabla+="</table>"
    // Se asigna el contenido de la tabla al elemento HTML.
    cmpTabla.innerHTML=contenidoTabla;
}

// Definición de la función 'limpiar' que borra los mensajes de error y los campos de entrada.
limpiar=function(){
    // Se borran los mensajes de error y se vacían los campos de entrada.
    mostrarTexto("lblErroresN","");
    mostrarTexto("lblErrores","");
    mostrarTextoEnCaja("cajaNombre","");
    mostrarTextoEnCaja("cajaEdad","");
}

// Definición de la función 'encontrarMayor' que busca la persona con la mayor edad en el array 'personas'.
encontrarMayor=function(){
    let personaMayor=personas[0]; // Se inicializa con el primer elemento del array 'personas'.
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        if(personas[i].edad>personaMayor.edad){ // Si la edad de la persona en la posición 'i' es mayor que la edad de 'personaMayor'.
            elementoPersona=personas[i]; // Se actualiza 'elementoPersona' con la persona en la posición 'i'.
            personaMayor=elementoPersona; // Se actualiza 'personaMayor' con la persona de mayor edad.
        }    
    }
    return personaMayor; // Se devuelve la persona de mayor edad.
}

// Definición de la función 'determinarMayor' que llama a 'encontrarMayor' para mostrar la persona de mayor edad.
determinarMayor=function(){
    let mayor=encontrarMayor(); // Se llama a 'encontrarMayor' para obtener la persona de mayor edad.
    mostrarTexto("mayoresYMenores","La persona mayor es: "+mayor.nombre+" "+mayor.edad); // Se muestra en pantalla la persona de mayor edad.
}

// Definición de la función 'encontrarMenor' que busca la persona con la menor edad en el array 'personas'.
encontrarMenor=function(){
    let personaMenor=personas[0]; // Se inicializa con el primer elemento del array 'personas'.
    let elementoPersona;
    for(let i=1;i<personas.length;i++){
        if(personas[i].edad<personaMenor.edad){ // Si la edad de la persona en la posición 'i' es menor que la edad de 'personaMenor'.
            elementoPersona=personas[i]; // Se actualiza 'elementoPersona' con la persona en la posición 'i'.
            personaMenor=elementoPersona; // Se actualiza 'personaMenor' con la persona de menor edad.
        }    
    }
    return personaMenor; // Se devuelve la persona de menor edad.
}

// Definición de la función 'determinarMenor' que llama a 'encontrarMenor' para mostrar la persona de menor edad.
determinarMenor=function(){
    let menor=encontrarMenor(); // Se llama a 'encontrarMenor' para obtener la persona de menor edad.
    mostrarTexto("mayoresYMenores","La persona menor es: "+menor.nombre+" "+menor.edad); // Se muestra en pantalla la persona de menor edad.
}
