import React from 'react';
import LogIn from './login';
import SignUp from './signup';
import '../../app.css';

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
            <main className='main'>
                <div className='container'>
                    {
                        this.state.type_connection == 'login' ?
                            <div className='logInContainer'>
                                <h2>Log In</h2>
                                <LogIn />
                                <label>Don't have an account?</label>
                                <button value='signup' onClick={this.changeType}>Sign Up</button>
                            </div>
                        :
                            <div className='signUpContainer'>
                                <h2>Sign Up</h2>
                                <SignUp />
                                <label>Heve an account?</label>
                                <button value='login' onClick={this.changeType}>Log In</button>
                            </div>
                    }
                </div>
            </main>
        );
    }
}

export default Home