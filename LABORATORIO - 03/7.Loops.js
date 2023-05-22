//--------------------------------------------------------------------------------------
// BUCLES

'use strict';

const contador = 10;

for (let i = contador; i >= 0; i--) {
if (i === 0) {
console.log("Cuenta regresiva completa");
} else {
console.log(i);
}
}
//bucle while
'use strict';

let contador2 = 10;
while (contador2 >= 0) {
if (contador2 === 0) {
console.log("Final del conteo");
} else {
console.log(contador2);
}
contador2--;
}

// bucle do while 
'use strict';

let contadorr = 5;

do {
    if (contadorr <= 0) {
        console.log("¡Tiempo terminado!");
    } else {
        console.log("Contador:", contadorr);
    }
    contadorr--;
} while (contadorr >= 0);

// forEach - forof - forin - map



'use strict'

const tareasPendientes = ['Jugar Futbol ','Estudiar','Investigar ','Acamapar','Aprender Js']
const usuario ={
    nombre:"Alexis",
    apellido:"Chasi",
}

// uso del forEach 
tareasPendientes.forEach((t,i)=> console.log(`${i} - ${t}`))

// uso del for of -> usado para arreglos
for (const t of tareasPendientes) {
    console.log(`${t}`)
}


// uso del for in -> usado para objetos
for (const clave in usuario) {
    console.log(`${usuario[clave]}`)
}
for (const [clave,valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`)
}


// uso del map -> retorna un nuevo arreglo
const nuevasTareas = tareasPendientes.map((t)=> t)
console.log(nuevasTareas);
