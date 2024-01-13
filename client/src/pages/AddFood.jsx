import { Button, TextField } from "@mui/material"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";

const AddFood = () => {
    const [selectedDate, handleDateChange] = useState(null);

    const buttonStyle = {
        width: '9rem',
        background: '#7c8c0f'
    }
    const textInputStyle = {
        width: '100%'
    }

    const handleForm = (event) => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value
        const image = form.image.value
        const quantity = form.quantity.value
        const address = form.address.value 
        const date = form.date.value 
        const notes = form.notes.value
        const donorName = form.donorName.value
        const donorEmail = form.donorEmail.value
        const donorImage = form.donorImage.value
        const status = form.status.value

        //console.log(name, image, quantity, address, date, notes, donorName, donorEmail, donorImage, status)
    }

    return (
        <div>
            <form action="" onSubmit={handleForm} className="flex flex-col gap-5 items-center p-10">
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
                    label="Number"
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
                        label="Select Date"
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
                    label="Donator Name"
                    variant="outlined"
                    value ='Donator name'
                    inputProps={
                        {
                            readOnly: true,
                        }
                    }
                    sx={textInputStyle}
                    name="donorName"
                />
                <TextField
                    id="outlined-basic"
                    label="Donator email"
                    variant="outlined"
                    value = 'Donator email'
                    inputProps={
                        {
                            readOnly: true,
                        }
                    }
                    sx={textInputStyle}
                    name="donorEmail"
                />
                <TextField
                    id="outlined-basic"
                    label="Donator Image"
                    variant="outlined"
                    value='Donator image'
                    inputProps={
                        {
                            readOnly: true,
                        }
                    }
                    sx={textInputStyle}
                    name="donorImage"
                />
                <TextField
                    id="outlined-basic"
                    label="Available"
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