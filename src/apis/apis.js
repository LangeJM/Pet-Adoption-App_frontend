import axios from 'axios'

import Cookies from 'js-cookie';

const baseUrl = 'http://localhost:5000/api'




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
    // console.log("apis: ",data)
    return axios({
        method: 'get',
        url: baseUrl + '/petsSearch' + data,
        // data: data
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

export const getPetById = (data) => { //NEEDS TO BE REWORKED
    // console.log("apis: ",data)
    return axios({
        method: 'get',
        url: baseUrl + '/pet/:' + data, //needs id param :id
        // data: data
    })
}


