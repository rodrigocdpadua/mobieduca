import React, { useContext } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/header';
import Connection from './pages/connection';
import AddSchools from './pages/add_schools';
import AboutMe from './pages/about_me';
import ListSchoolsApi from './pages/list_schools_api';
import NotFound from './components/not_found';
import Loading from './components/loading';
import { AuthProvider, AuthContext } from './auth';

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <Loading />
        }
        
        return !authenticated ? <Navigate to='/' /> : children
    }
    const LoggedOut = ({ children }) => {
        const { authenticated } = useContext(AuthContext);

        return authenticated ? <Navigate to='/list-schools' /> : children;
    }

    return(
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path='/' element={<LoggedOut><Connection /></LoggedOut>}/>
                    <Route path='add-schools' element={<Private><AddSchools /></Private>} />
                    <Route path='list-schools' element={<Private><ListSchoolsApi /></Private>}/>
                    <Route path='about-me' element={<AboutMe />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;