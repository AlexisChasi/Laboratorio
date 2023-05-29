"use strict";

const obtenerLocalStorage =()=>{
    const respuesta = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "Ningun dato encontrado"
    console.log(respuesta);
}
obtenerLocalStorage()