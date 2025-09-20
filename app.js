// Requisito: Declarar una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let listaDeAmigos = [];

function agregarAmigo() {
    
    /* Capturar el valor del campo de entrada */
    let inputAmigo = document.getElementById("amigo");
    let amigoDirty = inputAmigo.value
    const amigo = amigoDirty.charAt(0).toUpperCase() + amigoDirty.slice(1).toLowerCase()

    /* Implementar una validación para asegurarse de que el campo no esté vacío y que el nombre no este duplicado */
   if (amigo === ""){
        alert("Por favor, ingresa un amigo para sortear...");
        return;
    } else if (listaDeAmigos.includes(amigo)){
        alert(`${amigo}, ya esta en la lista de amigos...`)
        limpiarInput();
        return;
    }

    /* Normalizar el Nombre para que sea más estético */
    //const amigoNormalizado = amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase()
    
    /* Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos */
       listaDeAmigos.push(amigo);
    
       /* Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.*/
       limpiarInput();
       mostrarNombres();
}

/* Implementa una función para actualizar la lista de amigos */
function mostrarNombres(){
    /* Obtener el elemento de la lista: Utilizar document.getElementById() */
    let listaNombres = document.getElementById("listaAmigos");
   
    /* Limpiar la lista existente: Establecer listaNombres.innerHTML = "" */
    listaNombres.innerHTML = "";
    
    for (i = 0; i < listaDeAmigos.length; i++){
        nombre = document.createElement("li");
        nombre.textContent = listaDeAmigos[i];
        listaNombres.appendChild(nombre);
    }
}

/* Limpiar el imput de Amigo y devolver el foco */
function limpiarInput(){
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

/* Implementa una función para sortear los amigos */
function sortearAmigo(){

    // Validar que haya amigos disponibles
    if (listaDeAmigos.length < 2){
        alert("¡Necesitas al menos 2 amigos para sortear!");
        return;
    } 
    
    // Generar un índice aleatorio
    elegido = Math.floor(Math.random()*listaDeAmigos.length);
        
    // Obtener el nombre sorteado
    amigoSecreto = listaDeAmigos[elegido];

    // Mostrar el resultado
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    nombre = document.createElement("li");
    nombre.textContent = `¡Tu amigo Secreto es ${amigoSecreto}!`
    resultado.appendChild(nombre);
    return;

}