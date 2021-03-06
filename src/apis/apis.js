import axios from 'axios'
import Cookies from 'js-cookie';

// Local server:
// const baseUrl = 'http://localhost:5000/api'

// Cloud-hosted server:
const baseUrl = `${window.location.origin}:5000/api`

export const createUserApi = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/user',
        data: data
    })
        .then((res) => {
            alert(`Account creation successful. \nWelcome to I-Pets ${res.data.name}!`)
            Cookies.set('I-Pets', `${res.data.sessionId}`, { path: '/' });
            window.location.assign(`${window.location.origin}/pets`);
        })
        .catch((err) => {
            alert(err.response.data.error)
        })
}

//If password matches hashed pwd in db  (needs to be checked in corresponding route in back end) sign nin otherwise error message and remain on window
export const loginUserApi = (data) => { 
    return axios({
        method: 'post',
        url: baseUrl + '/login',
        data: data
    })
        .then((res) => {
            alert(`Login successful. \n\nWelcome to I-Pets ${res.data.name}!`)
            Cookies.set('I-Pets', `${res.data.sessionId}`, { path: '/' });
            window.location.assign(`${window.location.origin}/pets`);
        })
        .catch((err) => {
            alert(err.response.data.error)
        })
}

export const getCurrentUserApi = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/currentUser',
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

export const getPetsApi = (data) => {
    return axios({
        method: 'get',
        url: baseUrl + '/pets',
        data: data
    })
}

export const getPetsSampleApi = (data) => {
    return axios({
        method: 'get',
        url: baseUrl + '/petsSample',
        data: data
    })
}

export const getPetsBySearchApi = (data) => {
    return axios({
        method: 'get',
        url: baseUrl + '/petsSearch' + data,
    })
}

export const createPetApi = (data) => {
    axios({
        method: 'post',
        url: baseUrl + '/pet',
        data: data
    })
        .then((res) => {
            alert(res.data.message)
            window.location.reload()
        })
        .catch((err) => console.log(err));
}

export const getPetById = (data) => { 
    return axios({
        method: 'get',
        url: baseUrl + '/pet/:' + data
    })
}

export const updatePetApi = (data, id) => {
    axios({
        method: 'put',
        url: `${baseUrl}/petUpdate?id=${id}`,
        data: data
    })
        .then((res) => {
            alert(res.data.message)
        })
        .catch((err) => console.log(err));
}

export const updateUserApi = (data) => {
    axios({
        method: 'put',
        url: `${baseUrl}/userUpdate`,
        data: data
    })
        .then((res) => {
            console.log(res.data.message)
        })
        .catch((err) => console.log(err));
}

export const updateUserPetsApi = (data) => {
    axios({
        method: 'post',
        url: `${baseUrl}/userPetsUpdate`,
        data: data
    })
        .then((res) => {
            console.log(res.data.message)
        })
        .catch((err) => console.log(err));
}

export const getUserPetsApi = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/userPets',
        data: data
    })
}

