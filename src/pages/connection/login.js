import React, {useState, useContext} from 'react'
import { AuthContext } from '../../auth'
import './styles.css'

const LogIn = () => {
    const {login} = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(
            users => {
                const userFound = users.find(user => (user.email === email && user.password === password))
                userFound ?
                login(userFound.fullName, userFound.email, userFound.password) :
                alert('Email or Password Invalid!')
            }
        );
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form className='login-form' onSubmit={handleSubmit}>
            <input
                id='email'
                type='email'
                name='email'
                value={email}
                placeholder='Email'
                onChange={handleChangeEmail}
            />
            <input
                id='password'
                type='password'
                name='password'
                value={password}
                placeholder='Password'
                onChange={handleChangePassword}
            />
            <button type='submit'>Log in</button>
        </form>
    );
}

export default LogIn