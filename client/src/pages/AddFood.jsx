import { Button, TextField } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import BannerShared from "../components/BannerShared"

const AddFood = () => {
    const [selectedDate, handleDateChange] = useState(null);

    const buttonStyle = {
        width: '9rem',
        background: '#7c8c0f',
    }
    const textInputStyle = {
        width: '100%',
    }

    const handleForm = (event) => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value
        const image = form.image.value
        const quantity = form.quantity.value
        const address = form.address.value 
        const expireDate = form.date.value 
        const notes = form.notes.value
        const donorID = "3sflkjds3sdfk" 
        const status = form.status.value
        const likes = []

        const newDonation = {
            expireDate,
            donorID,
            status,
            quantity,
            address,
            name,
            notes,
            likes,
        }

        console.log(newDonation)

        
    }

    return (
        <div>
            <BannerShared
            title = "Add a Donation"
            ></BannerShared>
            <form action="" onSubmit={handleForm} className="flex flex-col gap-5 items-center p-10 lg:px-52">
                <TextField
                    id="outlined-basic"
                    label="Food Name"
                    variant="outlined"
                    sx={textInputStyle}
                    name="name"
                />
                <TextField
                    id="outlined-basic"
                    label="Food Image"
                    variant="outlined"
                    sx={textInputStyle}
                    name="image"
                />
                <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={textInputStyle}
                    name="quantity"
                />
                <TextField
                    id="outlined-basic"
                    label="Pick Up Address"
                    variant="outlined"
                    sx={textInputStyle}
                    name="address"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Expiration Date"
                        inputFormat="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={(date) => handleDateChange(date)}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                        sx={textInputStyle}
                        name="date"
                    />
                </LocalizationProvider>
                <TextField
                    id="outlined-basic"
                    label="Additional Notes"
                    variant="outlined"
                    sx={textInputStyle}
                    name="notes"
                />
                <TextField
                    id="outlined-basic"
                    label="Availability"
                    variant="outlined"
                    value='Available'
                    inputProps={
                        {
                            readOnly: true,
                        }
                    }
                    sx={textInputStyle}
                    name="status"
                />
                <Button
                    variant="contained"
                    sx={buttonStyle}
                    type="submit"
                >Share</Button>
            </form>
        </div>
    )
}
export default AddFood