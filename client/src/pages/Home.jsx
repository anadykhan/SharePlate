import { FeaturedCardVariant } from "../animation/Variants"
import BannerHome from "../components/BannerHome"
import FeaturedFoodDonationsCard from "../components/FeaturedFoodDonationsCard"
import { useGetDistricts } from "../hooks/Hooks"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Questions from "../components/Questions"

const Home = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

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
            <div className="w-full flex flex-col bg-cover justify-end items-center bg-no-repeat lg:h-[60rem] lg:bg-repeat lg:bg-contain lg:justify-center lg:items-center">
                <div className="flex flex-col w-full h-[95rem] items-center justify-end gap-10 bg-[url('https://i.ibb.co/wKj43Bv/Untitled-design.jpg')] bg-cover lg:flex-col lg:h-[49rem] lg:bg-contain">
                    <div className="text-white text-6xl text-center ">
                        Loved Donations
                    </div>
                    <div className="flex flex-col gap-12 lg:flex-row">
                        {
                            FeaturedFoodDonationData.data.map((data, index) => {
                                console.log(data)
                                return (
                                    <FeaturedFoodDonationsCard
                                        key={index}
                                        title={data.name}
                                        description={data.description}
                                    ></FeaturedFoodDonationsCard>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 px-5">
                <div className="text-4xl lg:text-6xl">
                    Frequently asked questions
                </div>
                <div>
                    <Questions
                        question='What is food donation?'
                        answer='Food donation is the act of giving surplus or unused food to those in need, typically through charitable organizations or food banks.'
                    ></Questions>
                    <Questions
                        question='Why is food donation important?'
                        answer='Food donation helps reduce food waste, alleviates hunger, and supports vulnerable populations by providing them with nutritious meals.'
                    ></Questions>
                    <Questions
                        question='What types of food can be donated?'
                        answer='Non-perishable items like canned goods, dry pasta, rice, and shelf-stable products are commonly accepted. Some organizations may also accept perishable items with proper handling instructions.'
                    ></Questions>
                </div>
            </div>
        </div>
    )
}
export default Home