import React, {useState, useContext} from 'react'
import { AuthContext } from '../../auth'
import Loading from '../../components/loading'
import './styles.css'

const LogIn = () => {
    const {login} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    const get_json = () => {
        const http = new XMLHttpRequest()
        http.open('GET', 'http://localhost:5000/users', true)
        http.responseType = 'json'

        setLoading(true);

        http.onload = function(){
            const users = http.response
            const userFound = users.find(user => (user.email === email && user.password === password))
            userFound ?
                login(userFound.fullName, userFound.email, userFound.password)
            :
                alert('Email or Password Invalid!')
                clearInputs()
        }
        http.onerror = function(){
            alert('Failed to Connect to Server')
            clearInputs()
            setLoading(false);
        }

        http.send()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        get_json()
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
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
            {loading && <Loading  />}
        </>
    );
}

export default LogIn