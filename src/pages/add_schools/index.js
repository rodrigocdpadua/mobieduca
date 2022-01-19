import React, {useState} from 'react'
import '../../app.css';

const AddSchools = () => {
    const [schoolName, setSchoolName] = useState('');
    const [director, setDirector] = useState('');
    const [localization, setLocalization] = useState('');
    const [shift, setShift] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/schools', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({schoolName, director, localization, shift})
        }).then(console.log('Added School'));
    }

    const handleChangeSchoolName = (e) => {
        setSchoolName(e.target.value);
    }
    const handleChangeDirector = (e) => {
        setDirector(e.target.value);
    }
    const handleChangeLocalization = (e) => {
        setLocalization(e.target.value);
    }
    const handleChangeShift = (e) => {
        const aux = [...shift];
        if(aux.find(a => a === e.target.value)){
            const index = aux.indexOf(e.target.value);
            aux.splice(index, 1);
            setShift([...aux]);
        } else{
            setShift([...aux, e.target.value]);
        }
    }

    return(
        <>
            <div className='add-school-container'>
                <form className='add-school-form' onSubmit={handleSubmit}>
                    <h2>Add School</h2>
                    <div className='school-input'>
                        <input
                            id='schoolName'
                            type='text'
                            name='schoolName'
                            value={schoolName}
                            required
                            placeholder='School Name *'
                            onChange={handleChangeSchoolName}
                        />
                        <input
                            id='director'
                            type='text'
                            name='director'
                            value={director}
                            placeholder='Director'
                            onChange={handleChangeDirector}
                        />
                    </div>

                    <div className='location-radio'>
                        <label>Localization</label>
                        <label>
                            <input
                                id='urban-location'
                                type='radio'
                                name='loc'
                                value='Urban'
                                onChange={handleChangeLocalization}
                            />
                            Urban
                        </label>
                        <label>
                            <input
                                id='rural-location'
                                type='radio'
                                name='loc'
                                value='Rural'
                                onChange={handleChangeLocalization}
                            />
                            Rural
                        </label>
                    </div>

                    <div className='shift-checkbox'>
                        <label>Shift</label>
                        <label>
                            <input
                                id='morning-shift'
                                type='checkbox'
                                name='shift'
                                value='Morning'
                                onChange={handleChangeShift}
                            />    
                            Morning
                        </label>
                        <label>
                            <input 
                                id='afternoon-shift'
                                type='checkbox'
                                name='shift'
                                value='Afternoon'
                                onChange={handleChangeShift}
                            />
                            Afternoon
                        </label>
                        <label>
                            <input 
                                id='night-shift'
                                type='checkbox'
                                name='shift'
                                value='Night'
                                onChange={handleChangeShift}
                            />
                            Night
                        </label>
                        <label>
                            <input
                                id='full-shift'
                                type='checkbox'
                                name='shift'
                                value='Full'
                                onChange={handleChangeShift}
                            />
                            Full
                        </label>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className='add-school-list'>
                <h2>Added Schools</h2>
            </div>
        </>
    );
}

export default AddSchools