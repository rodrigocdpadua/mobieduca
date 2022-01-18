import './styles.css'

const SignUp = () => {
    return(
        <form className='signup-form'>
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='FullName' />
            <input type='password' placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
    );
}

export default SignUp