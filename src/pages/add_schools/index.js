import React from 'react';
import '../../app.css';

class AddSchools extends React.Component{
    render() {
        return(
            <>
                <div className='add-school-container'>
                    <form className='add-school-form'>
                        <h2>Add School</h2>
                        <div className='school-input'>
                            <input placeholder='School Name' />
                            <input placeholder='Director' />
                        </div>

                        <div className='location-radio'>
                            <label>Localization</label>
                            <label>
                                <input type='radio' name='loc' id='urban-location' value='Urban'/>
                                Urban
                            </label>
                            <label>
                                <input type='radio' name='loc' id='rural-location' value='Rural'/>
                                Rural
                            </label>
                        </div>

                        <div className='shift-checkbox'>
                            <label>Shift</label>
                            <label>
                                <input type='checkbox' name='shift' id='morning-shift' value='Morning'/>    
                                Morning
                            </label>
                            <label>
                                <input type='checkbox' name='shift' id='afternoon-shift' value='Afternoon'/>
                                Afternoon
                            </label>
                            <label>
                                <input type='checkbox' name='shift' id='night-shift' value='Night'/>
                                Night
                            </label>
                            <label>
                                <input type='checkbox' name='shift' id='full-shift' value='Full' />
                                Full
                            </label>
                        </div>

                        <button>Submit</button>
                    </form>
                </div>
                <div className='add-school-list'>
                    <h2>Added Schools</h2>
                </div>
            </>
        );
    }
}

export default AddSchools