/* uso de funciones y reutilización. */
"use strict";

function saludar() {
console.log("¡Bienvenidos al mundo del deporte!");
console.log("Trabajando con JavaScript");
}

saludar();
saludar();
/* uso de funciones declaradas y expresadas. */
"use strict";

function saludarDeclarada() {
console.log("¡Bienvenidos a los fundamentos de la programación en JavaScript!");
}
saludarDeclarada();

const saludarExpresada = function() {
console.log("¡Trabajando con tecnología y desarrollo web!");
}
saludarExpresada();

/* uso del this */
const usuario = {
    nombre: "TechMaster",
    saludar: function() {
    setTimeout(() => {
    console.log("Hola, soy " + this.nombre);
    }, 1000);
    },
    };
    
    usuario.saludar();