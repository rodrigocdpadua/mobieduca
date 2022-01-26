import React, { useState } from 'react';
import LogIn from './login';
import SignUp from './signup';
import './styles.css';

const Connection = () => {
    const [connectionType, setConnectionType] = useState('login');

    const changeType = (e) => {
        setConnectionType(e.target.value);
    }

    return(
        <div className='connection-container'>
            {
                connectionType === 'login' ?
                <div className='connection-card'>
                    <h2>Log In</h2>
                    <LogIn />
                    <label>Don't have an account?</label>
                    <button value='signup' onClick={changeType}>Sign Up</button>
                </div>
                :
                <div className='connection-card'>
                    <h2>Sign Up</h2>
                    <SignUp />
                    <label>Heve an account?</label>
                    <button value='login' onClick={changeType}>Log In</button>
                </div>
            }
        </div>
    );
}

export default Connection;