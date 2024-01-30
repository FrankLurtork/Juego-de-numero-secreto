
let listaNumerosSorteados =[];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto(); //variables fuera de las funciones son globales, dentro, son locales
let intentos = 0;

// Esta función crea el bucle para asignar texto a un elemento HTML, pudiendo llamarlo como una función al final modificable.
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // al agregar value, se selecciona que tipo de información quieres que jale, parseInt forza a ser un number y no string
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){// el usuario acierta
        asignarTextoElemento('p',`¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //habilita el boton de nuevo juego
        document.getElementById('intentar').setAttribute('disabled',true);

    } else{ // el usuario no acierta
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;    
}

function generarNumeroSecreto() {
       let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
       console.log(listaNumerosSorteados);
       if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
       }else{

        if(listaNumerosSorteados.includes(numeroGenerado))
            {
            return generarNumeroSecreto();
            }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar intervalo de numeros
    mensajesIniciales();
    //generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
     //reiniciar los intentos
     intentos = 1;
    //desabilitar el boton
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('intentar').removeAttribute('disabled');
}

function mensajesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Elige un número del 1 al ${numeroMaximo}`);
}

mensajesIniciales();