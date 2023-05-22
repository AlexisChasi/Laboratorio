//Acceder a sus claves 
const user = {
    name: "Maria",
    lastName: "se fue",
    age: 18,
    address: {
        city: "New Solanda",
        telephone: "1234567890",
        street: "ajavi "
    },
    Friends: ['John', 'Emily', 'Michael', 'Sarah'],
    state: false,
    sendEmail() {
        return `Send email to ${this.Friends[0]}
    `},
    sendNotification() {
        return ` Send notification to ${this.Friends[5]}
    `}
};

console.log(user.state);
console.log(user.sendEmail());
console.log(user.sendNotification());


// Agregar y eliminar propiedades al objeto.

'use strict';
const user1 = {
    name: "Alexis ",
    lastName: "Chasi",
    age: 28,
    address: {
        city: "Solanda",
        telephone: "12345",
        street: "ajavi"
    },
    Friends: ['Marco', 'Antonio', 'Solis', 'Estrada'],
    state: false,
    sendMail() {
        return `Sending email to ${this.Friends[0]}
`},
    sendNotification: function () {
        return `Sending notification to ${this.Friends[1]}
`}
}

// Agregar un par de clave y valor al objeto
user1.image = "hola.com/foto.jpg"

// Eliminar un par de clave y valor del objeto
delete user1.state

console.log(user1);




// Destructuración de objetos 
'use strict';
const jugador = {
    nombre: "Lionel",
    apellido: "Messi",
    edad: 34,
    equipo: "FC Barcelona",
    posicion: "Delantero"
}

// Destructuring del objeto "jugador"
const { nombre, apellido, edad, equipo } = jugador
console.log(nombre, apellido, edad, equipo);

// Destructuring del objeto "jugador" con valor predeterminado
//const { nombre, apellido, edad, equipo: miEquipo = "Agente Libre" } = jugador
//console.log(nombre, apellido, edad, miEquipo);

// Destructuring con operador de propagación
//const { nombre, apellido, ...resto } = jugador
//console.log(nombre, apellido, resto);


// CONJELAR UN OBJETO
// USO DEL FREEZE 
'use strict';
const equipoFutbol = {
    nombre: "Barcelona",
    pais: "España",
    liga: "La Liga",
    titulos: 26,
    estadio: {
        nombre: "Camp Nou",
        capacidad: 99354,
        ubicacion: "Barcelona"
    }


};

console.log(`Nombre del equipo: ${equipoFutbol.nombre}`);
console.log(`País: ${equipoFutbol.pais}`);
console.log(`Liga: ${equipoFutbol.liga}`);
console.log(`Cantidad de títulos: ${equipoFutbol.titulos}`);
console.log(`Estadio: ${equipoFutbol.estadio.nombre}`);
console.log(`Capacidad del estadio: ${equipoFutbol.estadio.capacidad}`);
console.log(`Ubicación del estadio: ${equipoFutbol.estadio.ubicacion}`);
//FREEZE
Object.freeze(equipoFutbol)
console.log(Object.isFrozen(equipoFutbol));
user.image = "t.ly/Rhgs"
// SEAL
// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(equipoFutbol)
console.log(Object.isSealed(equipoFutbol))
equipoFutbol.titulos = 35
console.log(equipoFutbol);

// COPIAR DOS OBJETOS
const allInformation = { ...equipoFutbol, ...jugador }
console.log(allInformation)

// USO DEL THIS 
'use strict';
const equipoFutbol1 = {
    nombre: "Barcelona",
    pais: "España",
    liga: "La Liga",
    titulos: 26,
    estadio: {
        nombre: "Camp Nou",
        capacidad: 99354,
        ubicacion: "Barcelona"
    },
    plantilla: [
        { nombre: "Lionel Messi", edad: 34, nacionalidad: "Argentina" },
        { nombre: "Gerard Piqué", edad: 34, nacionalidad: "España" },
        { nombre: "Jordi Alba", edad: 32, nacionalidad: "España" },
        { nombre: "Frenkie de Jong", edad: 24, nacionalidad: "Países Bajos" }
    ],state:true,
   /*  sendMail (){
        return `send mail to ${this.plantilla[0]}`
    },
    sendNotification: (){
        return `send notification to ${this.plantilla[3]}`
    
   
} */
}
/* console.log(user.sendMail());
console.log(user.sendNotification()); */

// METODOS
console.log("Obtener las claves:",Object.keys(equipoFutbol))
console.log("Obtener los valores:",Object.values(equipoFutbol))
console.log("Obtener las claves y valores en un array:",Object.entries(equipoFutbol))

// (ES6) Nombres abreviados de propiedades 
const nombreProducto = "Smartphone";
const precioProducto = 800;

const nuevoProducto = {
nombre: nombreProducto,
precio: precioProducto
};

console.log(nuevoProducto);