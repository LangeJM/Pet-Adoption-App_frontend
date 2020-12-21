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

