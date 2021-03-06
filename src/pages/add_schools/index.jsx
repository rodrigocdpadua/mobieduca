import React, {useState} from 'react';
import AddSchoolsList from './add_school_list';
import Loading from '../../components/loading';
import { postSchool } from '../../api_requests/json_server_req';
import './styles.css';

const AddSchools = () => {
    const [schoolName, setSchoolName] = useState('');
    const [director, setDirector] = useState('');
    const [localization, setLocalization] = useState('');
    const [shift, setShift] = useState([]);
    const [listSchoolsChange, setListSchoolsChange] = useState(false);
    const [loading, setLoading] = useState(false);

    const clearInputs = () => {
        setSchoolName('');
        setDirector('');
        setLocalization('');
        setShift([]);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        reqPostSchools();
    }

    async function reqPostSchools() {
        setListSchoolsChange(false);
        setLoading(true);
        
        if(await postSchool({schoolName: schoolName, director: director, localization: localization, shift: shift})) {
            clearInputs();
            setListSchoolsChange(true);
        } else {
            alert('Failed to Connect to Server');
            clearInputs();
        }

        setLoading(false);
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
                                checked={localization === 'Urban'}
                                required
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
                                checked={localization === 'Rural'}
                                required
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
                                checked={shift.indexOf('Morning') >= 0}
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
                                checked={shift.indexOf('Afternoon') >= 0}
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
                                checked={shift.indexOf('Night') >= 0}
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
                                checked={shift.indexOf('Full') >= 0}
                                onChange={handleChangeShift}
                            />
                            Full
                        </label>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
                {loading && <Loading  />}
            </div>
            <AddSchoolsList listSchoolsChange={listSchoolsChange}/>
        </>
    );
}

export default AddSchools;