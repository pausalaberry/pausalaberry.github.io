"use strict";

/*Función que itera cada ancla guardada como variable y, con el ciclo for, agrega o desaparece una clase en específico. Sólo se visualiza cuando max-width: 600px*/

function accion(){
    var ancla = document.getElementsByClassName("nav-enlace");
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle("desaparece");
    }
}
