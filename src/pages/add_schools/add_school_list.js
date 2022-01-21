import React, { useEffect, useState } from "react";
import Loading from '../../components/loading';

const AddSchoolList = (props) => {
    const [listSchools, setListSchools] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        updateListSchools()
    },[props.listSchoolsChange])

    const updateListSchools = () => {
        setLoading(true);
        fetch('http://localhost:5000/schools')
        .then(res => res.json())
        .then(
            schools => {
                setListSchools(schools)
                setLoading(false)
            }
        );
    }

    async function deleteSchool(e) {
        const answer = window.confirm('Are you sure to delete this school?');
        const url = 'http://localhost:5000/schools/' + e.target.value;

        if(answer){
            const http = new XMLHttpRequest()
            http.open('DELETE', url, true)    
            http.responseType = 'json'

            const result = await new Promise(function (resolve, reject) {
                http.onload = function (e) {
                    if (http.readyState === 4 && http.status === 200) {
                        resolve(http)
                        updateListSchools()
                    } else {
                        reject(http)
                        alert('Error deleting school')
                    }
                }
                http.onerror = function() {
                    alert('Error deleting school')
                }

                http.send()
            })
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
            {loading && <Loading  />}
        </div>
    );
}

export default AddSchoolList