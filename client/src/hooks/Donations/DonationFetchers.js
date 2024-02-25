import axios from "axios"

export const fetchDonationsGet = () => {
    return axios.get('http://localhost:8000/v1/donations')
}

export const fetchDonationsPost = (donation) => {
    return axios.post('http://localhost:8000/v1/donations', donation)
}