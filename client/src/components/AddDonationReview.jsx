import { Button, Rating, TextField, Typography } from "@mui/material"
import { useState } from "react"

const AddDonationReview = () => {
    const [rating, setRating] = useState(0)

    const handleForm = (event) => {
        event.preventDefault()
        console.log('Form working')
        const form = event.target

        const rating = form.rating.value
        const review = form.review.value
    }

    const buttonStyle = {
        background: '#e8b941',
        color: 'white',
        borderRadius: 0,
        padding: 2
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <Typography>
                    Your Raitng:
                </Typography>
                <Rating
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                    name='rating'
                ></Rating>
                <TextField
                    sx={{
                        width: '100%',
                    }}
                    label='Add a review'
                    name='review'
                >
                </TextField>
                <Button
                    sx={buttonStyle}
                    type="submit"
                >
                    Share
                </Button>
            </form>
        </div>
    )
}
export default AddDonationReview