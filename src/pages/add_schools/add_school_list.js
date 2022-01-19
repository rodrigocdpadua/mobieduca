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
                {
                    listSchools.map((school, key) => 
                        <div className="school-item" key={key}>
                            <h3>{school.schoolName}</h3>
                            <div className="school-desc">
                                <p>Director: {school.director}</p>
                                <p>Localization: {school.localization}</p>
                                <p>Shift: {school.shift.join(' / ')}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AddSchoolList