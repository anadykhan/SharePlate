import Banner from "../components/Banner"
import FeaturedFoodDonationsCard from "../components/FeaturedFoodDonationsCard"
import { useGetDistricts } from "../hooks/Hooks"

const Home = () => {

    const { data: FeaturedFoodDonationData, isLoading: FeaturedFoodDonationLoading } = useGetDistricts()

    if (FeaturedFoodDonationLoading) {
        return <h1>Loading...</h1>
    }

    console.log(FeaturedFoodDonationData.data)

    return (
        <div
            className="flex flex-col items-center"
        >
            <Banner></Banner>
            <div className="flex flex-col lg:flex-row gap-10 lg:p-10">
                {
                    FeaturedFoodDonationData.data.map((data, index) => {
                        console.log(data)
                        return (
                            <FeaturedFoodDonationsCard
                            key = {index}
                            title = {data.name}
                            description = {data.description}
                            ></FeaturedFoodDonationsCard>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Home