import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import AddSchools from './pages/add_schools';
import AboutMe from './pages/about_me';

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='add-schools' element={<AddSchools />} />
                <Route path='list-schools' element={<h1>Schools List</h1>}/>
                <Route path='about-me' element={<AboutMe />} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;