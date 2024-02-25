import { useMutation } from "react-query"
import { fetchDonationsPost } from "./DonationFetchers"

export const usePostDonation = () => {
    return useMutation (
        fetchDonationsPost
    )
}

