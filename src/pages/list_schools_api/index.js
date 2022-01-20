import React, { useState } from "react";
import './styles.css'

const ListSchoolsApi = () => {
    const api_url = 'https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas?'

    //const api_url = 'http://educacao.dadosabertosbr.com/api/escolas?nome=aplicacao'
    //https://cors-anywhere.herokuapp.com/corsdemo

    const [searchKey, setSearchKey] = useState('')
    const [listSchools, setListSchools] = useState([])

    async function getApi(url) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)    
        xhr.responseType = 'json'
    
        const result = await new Promise(function (resolve, reject) {
            xhr.onload = function (e) {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr)
                } else {
                    reject(xhr)
                }
            }
        
            xhr.send()
        })

        return (result.response[1])
    }

    async function searcheName(){
        const receiveList = await getApi(api_url + 'nome=' + searchKey)
        setListSchools(receiveList)
    }

    const handleSearch = (e) => {
        setSearchKey(e.target.value)
    }

    const admDependency = (dependency) => {
        switch (dependency) {
            case 1:
                return 'Federal'
                break;
            case 2:
                return 'Estadual'
                break;
            case 3:
                return 'Municipal'
                break;
            case 4:
                return 'Privada'
                break;
            default:
                return '-'
                break;
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
        </div>
    )
}

export default ListSchoolsApi