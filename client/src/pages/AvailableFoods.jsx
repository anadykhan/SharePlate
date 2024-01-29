import { useEffect, useState } from "react"
import { useGetFoodDonations } from "../hooks/Hooks"
import { Button, Typography } from "@mui/material"
import AvailableFoodDonationCard from "../components/AvailableFoodDonationCard"
import SearchBox from "../components/SearchBox"
import CategoryCard from "../components/CategoryCard"
import { motion } from 'framer-motion';
import BannerShared from "../components/BannerShared"
import SelectInput from "../components/SelectInput"
import { ButtonHover } from "../animation/Variants"
import NumberOfData from "../components/NumberOfData"

const AvailableFoods = () => {

    const [quantity, setQuantity] = useState(6)
    const [limitedFoodDonationData, setLimitedFoodDonationData] = useState([])
    const [limitedFoodDonationDataLoading, setLimitedFoodDonationDataLoading] = useState(true)
    const categories = ["Available", "Canceled", "Booked", "Most Liked"] 

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
        <div>
            <div className="w-full">
                <BannerShared
                title = 'Donation List'
                ></BannerShared>
            </div>
            <div className="flex flex-col items-center p-10 gap-10 lg:flex-row-reverse lg:justify-between lg:items-start lg:p-5 lg:pt-20">
                <div className="flex flex-col justify-center items-center gap-16">
                    <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                        <NumberOfData></NumberOfData>
                        <SelectInput></SelectInput>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                        {
                            limitedFoodDonationData.map((data, index) => {
                                //console.log(data)
                                return (
                                    <motion.div
                                        variants={{}}
                                        initial="hidden"
                                        animate="visible"
                                        key={index}
                                    >
                                        <AvailableFoodDonationCard
                                            title={data.name}
                                            expire={data.date}
                                        ></AvailableFoodDonationCard>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                    <Button
                        variant={ButtonHover}
                        initial = "hidden"
                        whilehover= "hover"
                        sx={buttonStyle}
                        onClick={() => { setQuantity(10) }}
                    >
                        Load More
                    </Button>
                </div>
                <div className="flex flex-col w-full lg:w-[16rem] gap-12">
                    <SearchBox></SearchBox>
                    <div>
                        <Typography
                            fontSize={30}
                        >
                            Food Categories
                        </Typography>
                        {categories.map((data, index) => (
                            <CategoryCard 
                            key={index} 
                            title={data}></CategoryCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AvailableFoods