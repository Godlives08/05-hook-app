import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const {formState,onInputChange, resetForm,username,useremail,password} = useForm({
        username:'',
        useremail:'',
        password:''
    })

    // const { username, useremail, password } = formState;

    return (
        <>
            <h1>Formulario With Custom Hook</h1>
            <hr />
            <input
                type='text'
                className='form-control mt-2'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className='form-control mt-2'
                placeholder='Email'
                name='useremail'
                value={useremail}
                onChange={onInputChange}
            />

            <input
                type='password'
                className='form-control mt-2'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button className='btn btn-primary mt-2' onClick={resetForm}>Reset</button>
        </>
    )
}
