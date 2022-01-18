import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Connection from './pages/connection';
import AddSchools from './pages/add_schools';
import AboutMe from './pages/about_me';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Connection />}/>
                <Route path='add-schools' element={<AddSchools />} />
                <Route path='list-schools' element={<h1>Schools List</h1>}/>
                <Route path='about-me' element={<AboutMe />} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;