import { useQuery } from "react-query"
import { fetchDistricts, fetchFoodDonations } from "./Fetchers"

export const useGetDistricts = () => {
    console.log('The function is: ', fetchDistricts())
    return useQuery({
        queryKey: ['districts'],
        queryFn: fetchDistricts
    })
}

export const useGetFoodDonations = () => {
    return useQuery({
        queryKey: ['donations'],
        queryFn: fetchFoodDonations
    })
}