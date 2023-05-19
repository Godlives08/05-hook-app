import React, { useEffect, useState } from 'react'
import { Message } from './Message'


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'mastacio',
        useremail: 'mastacio@mail.com'
    })

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const { username, useremail } = formState;

    // useEffect(() => {
    //     console.log('useEffect Called!');
    // }, []);

    // useEffect(() => {
    //     console.log('formState Changed!');
    // }, [formState]);

    // useEffect(() => {
    //     console.log('Email Changed!');
    // }, [useremail]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type='text'
                className='form-control mt-2'
                placeholder='Username'
                name='username'
                onChange={onInputChange}
                value={username}
            />
            {username === 'mastacio' && <Message />}
            <input
                type='email'
                className='form-control mt-2'
                placeholder='Email'
                name='useremail'
                onChange={onInputChange}
                value={useremail}
            />
        </>
    )
}
