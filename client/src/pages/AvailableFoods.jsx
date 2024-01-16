import { useEffect, useState } from "react"
import { useGetFoodDonations } from "../hooks/Hooks"
import { Button } from "@mui/material"
import FoodCard from "../components/FoodCard"

const AvailableFoods = () => {

    const [quantity, setQuantity] = useState(9)
    const [limitedFoodDonationData, setLimitedFoodDonationData] = useState([])
    const [limitedFoodDonationDataLoading, setLimitedFoodDonationDataLoading] = useState(true)

    const {data: FoodDonationsData, isLoading: FoodDonationsDataLoading} = useGetFoodDonations()

    

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

  return (
    <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-3 lg:p-10">
        {
              limitedFoodDonationData.map((data, index) => {
                  //console.log(data)
                  return (
                      <FoodCard
                          key={index}
                          title={data.name}
                          expire={data.date}
                          donorName={data.donorName}
                          image={data.image}
                          description={data.description}
                          loves={data.loves}
                      ></FoodCard>
                  )
              })
        }
        <Button
        onClick={() => {setQuantity(10)}}
        >
            Load More
        </Button>
    </div>
  )
}
export default AvailableFoods