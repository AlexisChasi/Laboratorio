/* login = (username,password)=>{
    if(!username && !password) return console.log("Acceso Denegado!! sin autorizacion!!")
    console.log(`Bienvenido!! ${username}`)
}

module.exports = login */

/* ------------------------------- */

/* login = (username,password)=>{
    if(!username && !password) return console.log("Acceso Denegado!! sin autorizacion!!")
    console.log(`Bienvenido!! ${username}`)
}

const LIKES = 100

module.exports = {
    login,
    LIKES
} */

/* --------- */

/* module.exports.login = (username,password)=>{
    if(!username && !password) return console.log("You are not autorized")
    console.log(`Welcome ${username}`)
}

module.exports.LIKES = 150 */

/* --------ES Moules----- */


const login = (username,password)=>{
    if(!username && !password) return console.log("NO estas autorizado ")
    console.log(`Welcome ${username}`)
}

export default login