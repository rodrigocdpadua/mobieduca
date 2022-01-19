import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/header';
import Connection from './pages/connection';
import AddSchools from './pages/add_schools';
import AboutMe from './pages/about_me';
import { AuthProvider, AuthContext } from './auth';

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className='loading'>Loading</div>
        }
        
        return !authenticated ? <Navigate to='/' /> : children
    }
    const LoggedOut = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        return authenticated ? <Navigate to='/list-schools' /> : children
    }

    return(
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<LoggedOut><Connection /></LoggedOut>}/>
                    <Route path='add-schools' element={<Private><AddSchools /></Private>} />
                    <Route path='list-schools' element={<Private><h1>Schools List</h1></Private>}/>
                    <Route path='about-me' element={<AboutMe />} />
                    <Route path='*' element={<h1>Not Found</h1>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;