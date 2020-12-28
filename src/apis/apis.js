import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'


export const createPetApi = (data) => {
    axios({
        method: 'post',
        url: baseUrl + '/pet',
        data: data
    })
        .then((res) => {
            console.log(res); // Delete!!!
            alert(res.data.message)
            window.location.reload(false)
        })
        .catch((err) => console.log(err));
}

export const createUserApi = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/user',
        data: data
    })
        .then((res) => {
            alert(`Account creation successful. \nWelcome to I-Pets ${res.data.name}!`)
            window.location.assign(`${window.location.origin}/pets`);
            
        })
        .catch((err) => {
            console.log(err && err.response.data.error)
            alert(err.response.data.error)
        })
}

export const getPetsApi = (data) => {
    return axios({
        method: 'get',
        url: baseUrl + '/pets',
        data: data
    })
}

export const getUsersApi = (data) => {
    return axios({
        method: 'get',
        url: baseUrl + '/users',
        data: data
    })
}
