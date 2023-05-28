
/* Evento - click */
const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hola estoy usando JS"
buscador.appendChild(button);

button.addEventListener('click',function () {
    alert("Hola proceso exitoso!!!")
})

/* Evento - mouseout */

const buscador = document.querySelector('#search-178')


buscador .addEventListener('input',function (e) {
    if(e.target.value ==="")
			{
		    const buscador = document.querySelector('#search-178')
				buscador.style.border="20px black solid"
			}
		else 
			{
		    const buscador = document.querySelector('#search-178')
				buscador.style.border=""
				console.log(e.target.value)
			}
})

/* Evento - input */

const buscador = document.querySelector('#search-178')


buscador .addEventListener('input',function (e) {
    if(e.target.value ==="")
			{
		    const buscador = document.querySelector('#search-178')
				buscador.style.border="20px black solid"
			}
		else 
			{
		    const buscador = document.querySelector('#search-178')
				buscador.style.border=""
				console.log(e.target.value)
			}
})

/* Evento - submit */
const buscador = document.querySelector('#search-178')


buscador .addEventListener('submit',(e)=> {
	e.preventDefault()
	console.log("Enviando datos, usando JS")
})

/* Evento - keypress */
/* const buscador2 = document.querySelector('#search-178')


buscador2 .addEventListener('keypress',(e)=> {
  if (event.key === "6") {
			e.preventDefault()
			console.log("Enviando datos, usando JS")
	}
}) */