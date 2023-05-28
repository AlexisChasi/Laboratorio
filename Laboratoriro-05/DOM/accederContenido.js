/*  acceder a los elementos HTML */
document.body
document.links[1]
document.images[5]


/* obtener clases del elemento */
//obtener las clases del elemento
document.forms[1].classList
document.forms[1].className

/* seleccionar elementos por clase */

const icono = document.getElementsByClassName('uk-icon-institution')
icono[2]

const iconos = document.getElementsByClassName('custom-logo')
iconos[2]

/* seleccionar elementos por id */
const html = document.getElementById('search-170')
html

/* seleccionar elementos con querySelector */

const tarjeta = document.querySelector('.uk-width-medium-0-4')
tarjeta



const buscador = document.querySelector('#search-170')
buscador

const enlace = document.querySelector('b')
enlace

/* seleccionar elementos con querySelectorAll */
const tarjetas = document.querySelectorAll('.uk-width-medium-1-3')
tarjetas[0]