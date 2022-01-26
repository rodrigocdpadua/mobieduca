import React, { useEffect, useState } from "react";
import Loading from '../../components/loading';
import {getSchools, deleteSchool } from "../../api_requests/json_server_req";

const AddSchoolList = (props) => {
    const [listSchools, setListSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        updateListSchools();
    },[props.listSchoolsChange]);

    async function updateListSchools() {
        setLoading(true);

        const listS = await getSchools();

        if(listS[0] !== 'error'){
            setListSchools(listS);
        }

        setLoading(false);
    }

    async function deleteS(e) {
        const answer = window.confirm('Are you sure to delete this school?');

        if(answer){
            if(await deleteSchool(e.target.value)){
                updateListSchools();
            } else {
                alert('Failed to Delete');
            }
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
                                        <td id="td-delete"><button value={school.id} className="delete-school-button" onClick={deleteS}>X</button></td>
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

export default AddSchoolList;