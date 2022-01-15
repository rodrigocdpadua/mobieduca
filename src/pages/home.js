import React from 'react';
import LogIn from './login';
import SignUp from './signup';
import './pages.css';

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            type_connection: 'login'
        }
    }

    changeType = (event) => {
        this.setState({
            type_connection: event.target.value
        });
    }

    render(){
        return(
            <div className='container'>
                {
                    this.state.type_connection == 'login' ?
                        <div className='logInContainer'>
                            <LogIn />
                            <label>Don't have an account?</label>
                            <button value='signup' onClick={this.changeType}>Sign Up</button>
                        </div>
                    :
                        <div className='signUpContainer'>
                            <SignUp />
                            <label>Heve an account?</label>
                            <button value='login' onClick={this.changeType}>Log In</button>
                        </div>
                }
            </div>
        );
    }
}

export default Home