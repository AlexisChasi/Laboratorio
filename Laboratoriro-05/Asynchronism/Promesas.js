"use strict";

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión exitosa!!!") : reject("Conexión fallida!!")
        },3000)
    })
}

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');




conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))



obtenerProductos
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[1].name))
    .catch(error=>console.log(error))