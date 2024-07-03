const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})

var nombre = document.getElementById('name');
var email = document.getElementById('email');
var error = document.getElementById('error');
error.style.color = 'red';
function enviarFormulario(){
    console.log('Enviando Formulario...');
    
    var mensajesError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(email.value === null || email.value === ''){
        mensajesError.push('Ingresa tu email');
    }

    error.innerHTML = mensajesError.join(',');

    return false;
}

