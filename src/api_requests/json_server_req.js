const url = 'http://localhost:5000/';

async function getUsers() {
    const datas = [];

    await fetch(url+'datas', {method: 'GET'})
    .then(res => res.json())
    .then(result => datas.push(...result))
    .catch(err => {
        alert('Failed to Connect to Server');
        datas.push('error');
    });
    
    return datas;
}

async function postUser(user) {
    const createRes = [];

    await fetch(url+'users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.email,
            fullName: user.fullName,
            password: user.password
        })
    })
    .then(res => createRes.push(true))
    .catch(err => createRes.push(false));

    return createRes;
}

async function getSchools() {
    const datas = [];

    await fetch(url+'schools', {method: 'GET'})
    .then(res => res.json())
    .then(result => datas.push(...result))
    .catch(err => {
        alert('Failed to Connect to Server');
        datas.push('error');
    });
    
    return datas;
}

async function postSchool(school) {
    const createRes = [];

    await fetch(url+'schools', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            schoolName: school.schoolName,
            director: school.director,
            localization: school.localization,
            shift: school.shift
        })
    })
    .then(res => createRes.push(true))
    .catch(err => createRes.push(false));

    return createRes;
}

async function deleteSchool(id) {
    const deleteRes = [];

    await fetch(url+'schools/'+id, {method: 'DELETE'})
    .then(res => deleteRes.push(true))
    .catch(err => deleteRes.push(false));

    return deleteRes[0];
}

export { getUsers, postUser, getSchools, postSchool, deleteSchool };