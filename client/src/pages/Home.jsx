import BannerHome from "../components/BannerHome"
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
            <BannerHome></BannerHome>
            <div className="w-full h-[100rem] p-5 flex flex-col gap-10 bg-cover justify-end items-center bg-[url('https://i.ibb.co/wKj43Bv/Untitled-design.jpg')] bg-no-repeat lg:h-[55rem] lg:flex-row lg:items-end lg:bg-repeat lg:bg-contain lg:justify-center">
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