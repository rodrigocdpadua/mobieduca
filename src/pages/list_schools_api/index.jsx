import React, { useState } from "react";
import Loading from '../../components/loading';
import './styles.css';

const ListSchoolsApi = () => {
    const api_url = 'https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas?';

    //const api_url = 'http://educacao.dadosabertosbr.com/api/escolas?nome=aplicacao'
    //https://cors-anywhere.herokuapp.com/corsdemo

    const [searchKey, setSearchKey] = useState('');
    const [listSchools, setListSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getApi(url) {
        const http = new XMLHttpRequest();
        http.open('GET', url, true); 
        http.responseType = 'json';
        
        setLoading(true);
        const result = await new Promise(function (resolve, reject) {
            http.onload = function (e) {
                if (http.readyState === 4 && http.status === 200) {
                    resolve(http);
                } else {
                    reject(http);
                }
            }
        
            http.send();
        })
        setLoading(false);
        return (result.response[1]);
    }

    async function searcheName(){
        const receiveList = await getApi(api_url + 'nome=' + searchKey);
        setListSchools(receiveList);
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