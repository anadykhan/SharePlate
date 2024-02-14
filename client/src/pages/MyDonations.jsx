import { useEffect, useState } from "react";
import BannerShared from "../components/BannerShared"
import RequestedDonationsCard from "../components/RequestedDonationsCard"
import { cardLoadAnimation } from "../animation/MyDonationsAnimation"
import { useAnimate } from "framer-motion";
import NumberOfData from "../components/NumberOfData";
import SelectInput from "../components/SelectInput";
import { Button } from "@mui/material";
import MyDonationsCard from "../components/MyDonationsCard";

const MyDonations = () => {
    
    const [scope, animate] = useAnimate()
    const [loadData, setLoadNumber] = useState(4)

    useEffect(() => {
        animate(
            '#container', cardLoadAnimation.animation, cardLoadAnimation.transition
        );
    }, []);

    const handleButtonClick = () => {
        setLoadNumber(loadData + 4)
        console.log(loadData)
    }

    return (
        <div
        ref={scope}
        className="flex flex-col gap-5 justify-center items-center"
        >
            <BannerShared
            title = "My Donations"
            ></BannerShared>
            <div className="w-full px-[2rem] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
                <NumberOfData></NumberOfData>
                <SelectInput></SelectInput>
            </div>
            <div id="container" className="flex flex-col p-5 gap-5">
                <MyDonationsCard></MyDonationsCard>
                <MyDonationsCard></MyDonationsCard>
                <MyDonationsCard></MyDonationsCard>
                <MyDonationsCard></MyDonationsCard>
                <MyDonationsCard></MyDonationsCard>
            </div>
            <Button
                sx={{
                    width: '10rem',
                    background: '#e8b941',
                    color: 'white',
                    borderRadius: 0,
                    padding: 2,
                }}
                onClick = {handleButtonClick}
            >
                 Load More
            </Button>
        </div>
    )
}
export default MyDonations