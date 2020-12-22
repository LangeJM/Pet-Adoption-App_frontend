import axios from 'axios'

const baseUrl = 'http://localhost:5000/api'


export const createPetApi = (data) => {
    axios({
        method: 'post',
        url: baseUrl + '/pet',
        data: data
    })
        .then(data => window.alert(data.data.message))
        .catch(err => console.log(err))
}

export const createUserApi = (data) => {
    axios({
        method: 'post',
        url: baseUrl + '/user',
        data: data
    })
        .then(data => window.alert(data.data.message))
        .catch(err => console.log(err))
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
