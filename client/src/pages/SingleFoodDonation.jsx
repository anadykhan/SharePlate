import { Button, Rating, TextField, Typography } from "@mui/material"
import Review from "../components/Review"
import SingleFoodDonationCard from "../components/SingleFoodDonationCard"
import { useState } from "react"
import AddDonationReview from "../components/AddDonationReview"

const SingleFoodDonation = () => {

  return (
    <div className="flex flex-col gap-20 p-10 lg:px-16">
      <SingleFoodDonationCard></SingleFoodDonationCard>
      <AddDonationReview></AddDonationReview>
      <Review></Review>
    </div>
  )
}
export default SingleFoodDonation