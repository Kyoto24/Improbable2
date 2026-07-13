/*==================================================

    IMPROBABLE
    Transiciones

    Responsabilidad:
    Coordinar todas las animaciones del proyecto.

==================================================*/

function iniciarTransicion(botonSeleccionado){

    activarBoton(botonSeleccionado);

    setTimeout(() => {

        cambiarAlModoNoche();

    }, 250);

    setTimeout(() => {

        abrirPanel();

    }, 650);

    setTimeout(() => {

        botonSeleccionado.classList.add("hide");

    }, 1100);

    setTimeout(() => {

    logo.classList.add("fade-out");
    message.classList.add("fade-out");

    },150);

    setTimeout(() => {

    botonSeleccionado.classList.add("fade-away");

    }, 1100);

}



const logo = document.querySelector(".logo-container");
const message = document.querySelector(".message-container");