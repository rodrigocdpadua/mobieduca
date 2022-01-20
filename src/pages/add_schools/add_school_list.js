import React, { useEffect, useState } from "react";

const AddSchoolList = (props) => {
    const [listSchools, setListSchools] = useState([]);

    useEffect(() => {
        console.log("UseEffect")

        fetch('http://localhost:5000/schools')
        .then(res => res.json())
        .then(
            schools => { setListSchools(schools) }
        );
    },[props.listSchoolsChange])

    return(
        <div className="add-school-list-container">
            <div className="add-school-list-card">
                <h2>Added Schools</h2>
                <table className='table-list-school'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Director</th>
                            <th>Localization</th>
                            <th>Shift</th>
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
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AddSchoolList