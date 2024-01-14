import { useQuery } from "react-query"
import { fetchFeaturedFoodDonation } from "./fetcher"

export const useGetFeaturedFoodDonation = () => {
    return useQuery({
        queryKey: ['donations'],
        queryFn: fetchFeaturedFoodDonation
    })
}