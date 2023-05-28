const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hola probando JS"
buscador.appendChild(button);

/*  */

const enlaces = document.querySelector('.uk-panel p')
const enlaceNuevo = document.createElement('b')
enlaceNuevo.textContent="Instagram"
enlaceNuevo.style.color="red"
enlaces.insertBefore(enlaceNuevo,enlaces.children[1])