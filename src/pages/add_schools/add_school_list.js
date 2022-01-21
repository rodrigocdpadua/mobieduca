import React, { useEffect, useState } from "react";

const AddSchoolList = (props) => {
    const [listSchools, setListSchools] = useState([]);

    useEffect(() => {
        updateListSchools()
    },[props.listSchoolsChange])

    const updateListSchools = () => {
        fetch('http://localhost:5000/schools')
        .then(res => res.json())
        .then(
            schools => { setListSchools(schools) }
        );
    }

    const deleteSchool = (e) => {
        const answer = window.confirm('Are you sure to delete this school?')

        if(answer){
            fetch('http://localhost:5000/schools/' + e.target.value, {
                method: 'DELETE'
            })
            .then(updateListSchools())
        }
    }

    return(
        <div className="add-school-list-container">
            {listSchools.length !== 0 &&
                <div className="add-school-list-card">
                    <h2>Added Schools</h2>
                    <table className='table-list-school'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Director</th>
                                <th>Localization</th>
                                <th>Shift</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listSchools.map((school, key) => 
                                    <tr key={key}>
                                        <td>{school.schoolName}</td>
                                        <td>{school.director}</td>
                                        <td>{school.localization}</td>
                                        <td>{school.shift.join(' / ')}</td>
                                        <td id="td-delete"><button value={school.id} className="delete-school-button" onClick={deleteSchool}>X</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export default AddSchoolList