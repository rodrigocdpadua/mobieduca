const url = 'https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas?';

async function getSchools(name) {
    const schools = [];

    await fetch(url+'nome='+name)
    .then(res => res.json())
    .then(datas => schools.push(...datas[1]))
    .catch(err => console.log('Error'));

    return schools;
}

export { getSchools };