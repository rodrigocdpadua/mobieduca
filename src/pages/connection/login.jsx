import React, {useState, useContext} from 'react';
import { AuthContext } from '../../auth';
import Loading from '../../components/loading';
import { getUsers } from '../../api_requests/json_server_req';
import './styles.css';

const LogIn = () => {
    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        
        const userFound = await checkExistAcc();

        if(userFound){
            if(userFound === 'error'){
                clearInputs();
                setLoading(false);
            } else{
                login(userFound.fullName, userFound.email, userFound.password);
            }
        } else{
            alert('Email or Password Invalid!');
            clearInputs();
            setLoading(false);
        }
    }
    
    async function checkExistAcc(){
        const users = await getUsers();
        const findUser = users[0] === 'error' ?
            users[0]
        :
            users.find(user => user.email === email && user.password === password);
        
        return findUser;
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
                <button className='button-submit' type='submit'>Log in</button>
            </form>
            {loading && <Loading  />}
        </>
    );
}

export default LogIn;