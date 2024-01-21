import { Button, Rating, TextField, Typography } from "@mui/material"
import Review from "../components/Review"
import SingleFoodDonationCard from "../components/SingleFoodDonationCard"
import { useState } from "react"
import AddDonationReview from "../components/AddDonationReview"
import BannerShared from "../components/BannerShared"

const SingleFoodDonation = () => {

  return (
    <div className="flex flex-col gap-20 p-5 lg:px-10">
      <BannerShared
        title='Donation Detail'
      ></BannerShared>
      <SingleFoodDonationCard></SingleFoodDonationCard>
      <div className="flex flex-col gap-8">
        <Typography
          fontSize={45}
          fontWeight={400}
        >
          Add a Review
        </Typography>
        <AddDonationReview></AddDonationReview>
      </div>
      <div className="flex flex-col gap-8">
        <Typography
        fontSize={45}
        >
          Reviews
        </Typography>
        <Review></Review>
      </div>
    </div>
  )
}
export default SingleFoodDonation