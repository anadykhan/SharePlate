import axios from "axios"

export const fetchFeaturedFoodDonation = () => {
    return axios.get('/client/src/assets/Data/FeaturedFoodDonations.json')
}