import React from 'react';
import '../../app.css';

class AboutMe extends React.Component{
    render(){
        return(
            <div className='aboutme-container'>
                <section className='about-me'>
                    <h2>Abot Me</h2>
                </section>
                <section className='tools'>
                    <h2>Tolls Used</h2>
                </section>
                <section className='difficulty'>
                    <h2>Difficulties</h2>
                </section>
                <section className='suggestions'>
                    <h2>Suggestions</h2>
                </section>
            </div>
        );
    }
}

export default AboutMe;