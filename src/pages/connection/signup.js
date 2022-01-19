import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../auth'
import './styles.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, fullName, password})
        }).then(login());
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangeFullName = (e) => {
        setFullName(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <form className='signup-form' onSubmit={handleSubmit}>
            <input
                id='email'
                type='email'
                name='email'
                value={email}
                placeholder='Email *'
                required
                onChange={handleChangeEmail}
            />
            <input
                id='fullName'
                type='text'
                name='fullName'
                value={fullName}
                placeholder='Full Name *'
                required
                onChange={handleChangeFullName}
            />
            <input
                id='password'
                type='password'
                name='password'
                value={password}
                placeholder='Password *'
                required
                onChange={handleChangePassword}
            />
            <button type='submit'>Sign Up</button>
        </form>
    );
}

export default SignUp