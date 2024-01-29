import RequestedDonationsCard from "../components/RequestedDonationsCard"
import { stagger, useAnimate } from "framer-motion"
import BannerShared from "../components/BannerShared"
import { useEffect, useState } from "react"
import { cardLoadAnimation } from "../animation/RequestedDonationsAnimation"
import NumberOfData from "../components/NumberOfData"
import SelectInput from "../components/SelectInput"

const RequestedDonations = () => {

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      '#container',cardLoadAnimation.animation,cardLoadAnimation.transition
    );
  }, []);

  return (
    <div
      ref={scope}
    >
      <BannerShared
        title='Requested Donations'
      ></BannerShared>
      <div className="w-full px-[2rem] flex flex-col justify-center items-center lg:flex-row lg:justify-between">
        <NumberOfData></NumberOfData>
        <SelectInput></SelectInput>
      </div>
      <div id="container" className="flex flex-col p-5 gap-5">
        <RequestedDonationsCard className="requested-donation-card" />
        <RequestedDonationsCard className="requested-donation-card" />
        <RequestedDonationsCard className="requested-donation-card" />
        <RequestedDonationsCard className="requested-donation-card" />
        <RequestedDonationsCard className="requested-donation-card" />
      </div>

    </div>
  )
}
export default RequestedDonations