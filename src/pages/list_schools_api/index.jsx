import React, { useState } from "react";
import Loading from '../../components/loading';
import { getSchools } from "../../api_requests/educa_api_req";
import './styles.css';

const ListSchoolsApi = () => {
    const api_url = 'https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas?';
    //https://cors-anywhere.herokuapp.com/corsdemo

    const [searchKey, setSearchKey] = useState('');
    const [listSchools, setListSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    async function searcheName(e){
        e.preventDefault();
        setLoading(true);
        const receiveList = await getSchools(searchKey);
        setListSchools(receiveList);
        setLoading(false);
    }

    const handleSearch = (e) => {
        setSearchKey(e.target.value);
    }

    const admDependency = (dependency) => {
        switch (dependency) {
            case 1:
                return 'Federal'
            case 2:
                return 'Estadual'
            case 3:
                return 'Municipal'
            case 4:
                return 'Privada'
            default:
                return '-'
        }
    }

    return (
        <div className='list-schools-api'>
            <h2>Search Schools</h2>
            <div className='search-container'>
                <input value={searchKey} onChange={handleSearch} placeholder="Enter the name or part of a school's name" />
                <button onClick={searcheName}>Search</button>
            </div>
            {listSchools.length !== 0 &&
            <table className="table-list-school">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>TYPE</th>
                        <th>STATS</th>
                    </tr>
                </thead>
                <tbody>
                    {listSchools.map((school, key) => 
                        <tr key={key}>
                            <td>{school.nome}</td>
                            <td>{school.cidade}</td>
                            <td>{admDependency(school.dependenciaAdministrativa)}</td>
                            <td>{school.situacaoFuncionamentoTxt}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            }
            {loading && <Loading />}
        </div>
    )
}

export default ListSchoolsApi;