import axios from "axios"

export const fetchDistricts = () => {
    return axios.get('/src/assets/Data/FeaturedFoodDonations.json')
}

export const fetchFoodDonations = () => {
    return axios.get('/src/assets/Data/FoodDonations.json')
}