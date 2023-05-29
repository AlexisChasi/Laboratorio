"use strict";

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => {
        {
            let usuario ={
                ci:json.ci,
                nombre:json.nombre,
                anio:json.anio
            }
            guardarLocalStorage(usuario)
        }
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}