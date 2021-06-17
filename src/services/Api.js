import axios from 'axios'

const API_ENDPOINT = 'https://pokeapi.co/api/v2/'

const Api = axios.create({
    baseURL: API_ENDPOINT
})

export default Api