import React, {useState, useContext} from 'react';
import { AuthContext } from '../../auth';
import Loading from '../../components/loading';
import { postUser } from '../../api_requests/json_server_req';
import './styles.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setFullName('');
        setPassword('');
    }

    async function reqPostUser() {
        setLoading(true);

        if(await postUser({email: email, fullName: fullName, password: password})) {
            login(fullName, email);
        } else {
            alert('Failed to Connect to Server');
            clearInputs();
        }
        
        setLoading(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        reqPostUser();
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
        <>
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
                <button className='button-submit' type='submit'>Sign Up</button>
            </form>
            {loading && <Loading  />}
        </>
    );
}

export default SignUp;