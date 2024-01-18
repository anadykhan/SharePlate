import { useEffect, useState } from "react"
import { useGetFoodDonations } from "../hooks/Hooks"
import { Button } from "@mui/material"
import AvailableFoodDonationCard from "../components/AvailableFoodDonationCard"
import SearchBox from "../components/SearchBox"
import CategoryCard from "../components/CategoryCard"

const AvailableFoods = () => {

    const [quantity, setQuantity] = useState(6)
    const [limitedFoodDonationData, setLimitedFoodDonationData] = useState([])
    const [limitedFoodDonationDataLoading, setLimitedFoodDonationDataLoading] = useState(true)

    const { data: FoodDonationsData, isLoading: FoodDonationsDataLoading } = useGetFoodDonations()



    useEffect(() => {
        setLimitedFoodDonationDataLoading(true)
        if (!FoodDonationsDataLoading) {
            setLimitedFoodDonationData(FoodDonationsData.data.slice(0, quantity));
            setLimitedFoodDonationDataLoading(false)
        }
    }, [FoodDonationsData, quantity]);

    if (limitedFoodDonationDataLoading) {
        return <h1>Loading...</h1>
    }

    const buttonStyle = {
        background: '#e8b941',
        width: 200,
        color: 'white',
        borderRadius: 0,
        padding: 2
    }

    return (
        <div className="flex flex-col items-center p-10 gap-10 lg:flex-row-reverse lg:justify-between lg:items-start lg:p-5">
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                    {
                        limitedFoodDonationData.map((data, index) => {
                            //console.log(data)
                            return (
                                <AvailableFoodDonationCard
                                    key={index}
                                    title={data.name}
                                    expire={data.date}
                                ></AvailableFoodDonationCard>
                            )
                        })
                    }
                </div>
                <Button
                    sx={buttonStyle}
                    onClick={() => { setQuantity(10) }}
                >
                    Load More
                </Button>
            </div>
            <div className="w-full lg:w-[16rem]">
                <SearchBox></SearchBox>
                <CategoryCard></CategoryCard>
            </div>
        </div>
    )
}
export default AvailableFoods