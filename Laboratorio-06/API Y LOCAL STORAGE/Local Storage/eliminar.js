"use strict";

const eliminarlocalStorage =()=>{
    !localStorage.key("user") ? console.log("Sin clave encontrada!!" ): localStorage.removeItem("user")
}

eliminarlocalStorage()