import React from 'react'
import Tabla from '../componets/Tabla'

const Listar = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-[#9A3B3B]'>Lista Pacientes/productos/etc</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este módulo te permite listar los registros</p>
            <Tabla/>
        </div>
    )
}

export default Listar