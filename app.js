// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];


function asignarTextoElemento(elemento, texto) {   
    const listaMostrar = document.getElementById(elemento);   
    texto.forEach(nombre => { 
        const li = document.createElement("li");
        li.textContent = nombre;
        listaMostrar.appendChild(li);
    });
    return; 
}
    
function limpiarCaja(elemento) {
    document.querySelector(elemento).value = '';
}

function limpiarLista(elemento){
    const lista = document.getElementById(elemento);
    lista.innerHTML = ""
}  


function agregarAmigo() {
    let NombreAmigo = document.getElementById('amigo').value;

    if (NombreAmigo === '' ) {
          alert("Ingrese amigo");
    } else {
       listaAmigoSecreto.push(NombreAmigo);
        limpiarCaja('#amigo');
        limpiarLista('listaAmigos');
       asignarTextoElemento('listaAmigos',listaAmigoSecreto)        
    }

}


function sortearAmigo(){
   let numeroAmigos = listaAmigoSecreto.length;

    if (numeroAmigos === 0) {
        alert("No hay amigos en la lista");
        return;
    }

    let numeroGenerado = Math.floor(Math.random() * numeroAmigos);
    
    document.getElementById('resultado').innerHTML = '';

    let Resultado = document.getElementById('resultado');
    Resultado.innerHTML = listaAmigoSecreto[numeroGenerado];

  
}
