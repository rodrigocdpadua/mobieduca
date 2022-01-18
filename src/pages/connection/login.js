import './styles.css'

const LogIn = () => {
    return (
        <form className='login-form'>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Log in</button>
        </form>
    );
}

export default LogIn