import React from 'react'
import { CardPerfil } from '../componets/Perfil/CardPerfil'
import FormularioPerfil from '../componets/Perfil/FormularioPerfil'
import Password from '../componets/Perfil/Password'


const Perfil = () => {
    return (
        <>       
            <div>
                <h1 className='font-black text-4xl text-[#9A3B3B]'>Perfil</h1>
                <hr className='my-4' />
                <p className='mb-8'>Este módulo te permite visualizar el perfil del usuario......</p>
            </div>

            <div className='flex justify-around gap-x-8 flex-wrap gap-y-8 md:flex-nowrap'>
                <div className='w-full md:w-1/2'>
                    <FormularioPerfil/>
                </div>
                <div className='w-full md:w-1/2'>
                    <CardPerfil/>
                    <Password/>
                </div>
            </div>
        </>

    )
}

export default Perfil