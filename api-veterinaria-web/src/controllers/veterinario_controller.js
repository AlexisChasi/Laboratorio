
// importar el modelo veterinario
import Veterinario from "../models/Veterinario.js"
import sendMailToUser from "../config/nodemailer.js"


const login = async(req,res)=>{
    // capturar datos del request
    const {email,password} = req.body
    // validacion de campos vacios
    if (Object.values(req.body).includes("")) return res.status(404).json({msg:"Lo sentimos, debes llenar todos los campos"})
    // obtener el usuario en base al email
    const veterinarioBDD = await Veterinario.findOne({email}).select("-status -__v -token -updatedAt -createdAt")
    //validacion de la cuenta del email
    if(veterinarioBDD?.confirmEmail===false) return res.status(403).json({msg:"Lo sentimos, debe verificar su cuenta"})
    // validar si existe el usuario 
    if(!veterinarioBDD) return res.status(404).json({msg:"Lo sentimos, el usuario no se encuentra registrado"})
    // validar  si el password del request es el mismo de la bdd
    const verificarPassword = await veterinarioBDD.matchPassword(password)
// desestructurar la info del usuario
    if(!verificarPassword) return res.status(404).json({msg:"Lo sentimos, el password no es el correcto"})
    const {nombre,apellido,direccion,telefono,_id} = veterinarioBDD
    // presentar datos
    res.status(200).json({
        nombre,
        apellido,
        direccion,
        telefono,
        _id,
        email:veterinarioBDD.email
    })
}


const perfil=(req,res)=>{
    res.status(200).json({res:'perfil del veterinario'})
}



const registro = async (req,res)=>{
    // capturar los datos del body de la peticion
    const {email,password} = req.body
    // validacion de los campos vacios
    if (Object.values(req.body).includes("")) return res.status(400).json({msg:"Lo sentimos, debes llenar todos los campos"})
    // verificar la existencia del mail 
    const verificarEmailBDD = await Veterinario.findOne({email})
    if(verificarEmailBDD) return res.status(400).json({msg:"Lo sentimos, el email ya se encuentra registrado"})
    // crear la instancia del modelo
    const nuevoVeterinario = new Veterinario(req.body)
    // encriptar el password del usuario
    nuevoVeterinario.password = await nuevoVeterinario.encrypPassword(password)
   
    // crear el token de usuario
    const token = nuevoVeterinario.crearToken()
    // invocar la funcion para el envio de correo
    await sendMailToUser(email,token)
    // guardar en bdd
    await nuevoVeterinario.save()
    // respuesta al usuario
    res.status(200).json({msg:"Revisa tu correo electrónico para confirmar tu cuenta"})
}

const confirmEmail = async (req,res)=>{
    // validar el token del correo
    if(!(req.params.token)) return res.status(400).json({msg:"Lo sentimos, no se puede validar la cuenta"})
    // verificar si en base al token existe el usuario
    const veterinarioBDD = await Veterinario.findOne({token:req.params.token})
// validar si el token ya fue seteado a null
    if(!veterinarioBDD?.token) return res.status(404).json({msg:"La cuenta ya ha sido confirmada"})
    // setear a null el token
    veterinarioBDD.token = null
    // cambiar a true la confirmacion de la cuenta
    veterinarioBDD.confirmEmail=true
    // guardar en la bdd
    await veterinarioBDD.save()
    // presentar mensaje a usuario
    res.status(200).json({msg:"Token confirmado, ya puedes iniciar sesión"}) 
}

const listarVeterinarios = (req,res)=>{
    res.status(200).json({res:'lista de veterinarios registrados'})
}
const detalleVeterinario = (req,res)=>{
    res.status(200).json({res:'detalle de un veterinario registrado'})
}
const actualizarPerfil = (req,res)=>{
    res.status(200).json({res:'actualizar perfil de un veterinario registrado'})
}
const actualizarPassword = (req,res)=>{
    res.status(200).json({res:'actualizar password de un veterinario registrado'})
}
const recuperarPassword= (req,res)=>{
    res.status(200).json({res:'enviar mail recuperación'})
}
const comprobarTokenPasword= (req,res)=>{
    res.status(200).json({res:'verificar token mail'})
}
const nuevoPassword= (req,res)=>{
    res.status(200).json({res:'crear nuevo password'})
}
// exportancion nombrada 
export {
    login,
    perfil,
    registro,
    confirmEmail,
    listarVeterinarios,
    detalleVeterinario,
    actualizarPerfil,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword
}


