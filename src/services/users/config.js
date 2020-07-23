import axios from 'axios'


export const usersApi = axios.create({
    baseURL: 'https://randomuser.me/',
    timeout:10000
})