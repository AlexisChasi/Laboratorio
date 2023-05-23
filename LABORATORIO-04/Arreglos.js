/* FORMAS DE DECLARAR UN ARREGLO */
'use strict';

const amigosUsuario = ["Jared", "Elvis", "Robert", "Joseph ", "Camila"];
console.log(amigosUsuario);

const datosNuevoUsuario = ["Alexis", "Chasi", 28, true, { ciudad: "Quito" }, ["desarrollo web", "inteligencia artificial"]];
console.log(datosNuevoUsuario);

const productos = ["Camisa", "Pantalón", "Zapatos", "Mochila"];
console.log(productos);

const seguidoresInsta= [1, 100, 350, 500];

/* Spread operators */

const Amigos = ["Maria", "Carlos", "Lucia", "Pedro", "Andrea", "Sofia"];
const Mascotas = ["Max", "Bella", "Rocky", "Luna", "Charlie", "Milo"];

// Spread operator
const combinado = [...Amigos, ...Mascotas];
console.log(combinado);

/* Uso de una propiedad de los arreglos. */

'use strict';

const coloresFavoritos = ["Azul", "Verde", "Rojo", "Amarillo"];
const frutasFavoritas = ["Manzana", "Banana", "Fresa", "Mango", "Naranja"];
const peliculasFavoritas = ["El Padrino", "El Señor de los Anillos", "La La Land", "Titanic"];

console.log("Número de colores favoritos:", coloresFavoritos.length);
console.log("Número de frutas favoritas:", frutasFavoritas.length);
console.log("Número de películas favoritas:", peliculasFavoritas.length);

/* Recorrer arreglos   */
// primera forma de iterar sobre los elementos de un arreglo 
for (let i=0 ; i<coloresFavoritos.length ; i++){
    console.log(coloresFavoritos[i]);
}

// segunda forma de iterar sobre los elementos de un arreglo 
coloresFavoritos.forEach((e,i)=>console.log(`${i} - ${e}`))


// tercera forma de iterar sobre los elementos de un arreglo 
const nuevasPeliculas= peliculasFavoritas.map((e)=> `Hola ${e}`)
console.log(peliculasFavoritas);
console.log(peliculasFavoritas);

const estudiantes = [
    {
        nombre: "Luisa",
        apellido: "jose",
        edad: 20
    },
    {
        nombre: "Andrés",
        apellido: "Cadames",
        edad: 22
    }
];

estudiantes.forEach(estudiante => console.log(`${estudiante.nombre} ${estudiante.apellido} - Edad: ${estudiante.edad}`));
/* Métodos de los arreglos   */
//Método push y unshift

'use strict';

const libros = ["El principito", "Cien años de soledad", "1984", "Orgullo y prejuicio"];
const autores = ["Antoine de Saint-Exupéry", "Gabriel García Márquez", "George Orwell", "Jane Austen"];
const generoLiterario = "Novela";

// Agrega al final del arreglo
libros.push(autores);
// Agregar al inicio del arreglo
libros.unshift(generoLiterario);

console.log(libros);
//Método pop y shift.
'use strict';

const perfilDeportista = ["Lionel Messi", "Fútbol", 35, true, { deporte: "Fútbol", equipo: "PSG" }];

// Elimina el elemento del final del arreglo
perfilDeportista.pop(perfilDeportista);

// Elimina el elemento del inicio del arreglo
perfilDeportista.shift(perfilDeportista);
console.log(perfilDeportista);
//Método find.

const amigos = ["Peter", "Juan", "Luisa", "Anahí", "Mateus"];


const mascotas = ["Perro", "Gato", "Loro", "Conejo", "Hamster"];


const mascotaUno = mascotas.find((mascota) => mascota === "Loro");
console.log(mascotaUno);

const mascotaDos = mascotas.find((mascota) => mascota === "Tortuga");
console.log(mascotaDos);

//Método findIndex.
'use strict';

const ciudades = ["Quito", "Londres", "Tokio", "París", "Roma"];

// método findIndex
const encontrarCiudad = ciudades.findIndex((c) => c === "Barcelona");
console.log(encontrarCiudad);


//Método filter
'use strict';


const tecnologia = ["iPhone", "Samsung", "Google Pixel", "MacBook", "PlayStation"];

// método filter
const tecnologiaFiltrada = tecnologia.filter((t) => t.includes("Phone"));
const tecnologiaSinSamsung = tecnologia.filter((t) => t !== "Samsung");
console.log(tecnologiaFiltrada);
console.log(tecnologiaSinSamsung);
// Método concat.
'use strict';

const deportes = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo"];
const equipos = ["Real Madrid", "Barcelona", "Manchester United", "Juventus", "Bayern Munich"];

// método concat
const nuevoArray = deportes.concat(equipos);
console.log(nuevoArray);

/* Método includes. */

'use strict';

// Funciona únicamente con arreglos de un solo valor
const perfilUsuario = ["Alexis", "Chasi", 25, true, { ciudad: "Ciudad de México" }];

console.log(perfilUsuario.includes(25));
console.log(perfilUsuario.includes(['frontend']));
/* Metodo some */
'use strict';

// Funciona para arreglos de un solo valor y arreglo de objetos

const deportess = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo"];
const usuarios = [
{
nombre: "Carlos",
apellido: "González",
edad: 28
},
{
nombre: "Laura",
apellido: "Hernández",
edad: 32
}
];
const existeDeporte = deportess.some(d => d === "Tenis");
console.log(existeDeporte);
const verificaUsuario = usuarios.some(u => u.nombre === "Carlos");
console.log(verificaUsuario);

/* Metodo every */

// Todos los elementos deben cumplir la condición
const result = usuarios.every(e=>e.edad>=500)
console.log(result);
//  Al menos un elemento debe cumplir la condición
const response = usuarios.some(e=>e.edad>=500)
console.log(response);

/* METODO REVERSE */
console.log(deportess.reverse())
/* METODO SORT */
console.log(deportess.sort())
/* METODO REDUCE */
// Obtener la suma de las edades de los usuarios utilizando reduce
const sumaEdades = usuarios.reduce((suma, usuario) => {
    return suma + usuario.edad;
    }, 0);
    
    console.log(sumaEdades);