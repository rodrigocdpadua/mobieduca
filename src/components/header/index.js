import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth';
import './styles.css';

const Header = () => {

    const {authenticated, logout} = useContext(AuthContext)

    const handleLogout = () => {
        logout();
    }

    return (
        <header className="header">
            <h1 className="title">MOBIEDUCA.ME</h1>
            {
                authenticated ?
                <nav className='nav'>
                    <Link to='/list-schools'>List Schools</Link>
                    <Link to='/add-schools'>Add Schools</Link>
                    <Link to='/about-me'>About Me</Link>
                    <Link to='/' onClick={handleLogout}>Log Out</Link>
                </nav>
                :
                <nav className='nav'>
                    <Link to='/'>Log In</Link>
                    <Link to='/about-me'>About Me</Link>
                </nav>
            }
        </header>
    );
}

export default Header;