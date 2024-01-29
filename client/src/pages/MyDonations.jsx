import { useEffect } from "react";
import BannerShared from "../components/BannerShared"
import RequestedDonationsCard from "../components/RequestedDonationsCard"
import { cardLoadAnimation } from "../animation/MyDonationsAnimation"
import { useAnimate } from "framer-motion";
import NumberOfData from "../components/NumberOfData";
import SelectInput from "../components/SelectInput";

const MyDonations = () => {
    
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(
            '#container', cardLoadAnimation.animation, cardLoadAnimation.transition
        );
    }, []);

    return (
        <div
        ref={scope}
        >
            <BannerShared
            title = "My Donations"
            ></BannerShared>
            <div className="w-full px-[2rem] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                <NumberOfData></NumberOfData>
                <SelectInput></SelectInput>
            </div>
            <div id="container" className="flex flex-col p-5 gap-5">
                <RequestedDonationsCard></RequestedDonationsCard>
                <RequestedDonationsCard></RequestedDonationsCard>
                <RequestedDonationsCard></RequestedDonationsCard>
                <RequestedDonationsCard></RequestedDonationsCard>
            </div>
        </div>
    )
}
export default MyDonations