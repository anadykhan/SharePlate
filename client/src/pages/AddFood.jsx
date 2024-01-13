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

    }

    return (
        <div>
            <form action="" onSubmit={handleForm} className="flex flex-col gap-5 items-center p-10">
                <TextField
                    id="outlined-basic"
                    label="Food Name"
                    variant="outlined"
                    sx={textInputStyle}
                />
                <TextField
                    id="outlined-basic"
                    label="Food Image"
                    variant="outlined"
                    sx={textInputStyle}
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={textInputStyle}
                />
                <TextField
                    id="outlined-basic"
                    label="Pick Up Address"
                    variant="outlined"
                    sx={textInputStyle}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        inputFormat="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={(date) => handleDateChange(date)}
                        renderInput={(params) => <TextField {...params} variant="outlined" />}
                        sx={textInputStyle}
                    />
                </LocalizationProvider>
                <TextField
                    id="outlined-basic"
                    label="Additional Notes"
                    variant="outlined"
                    sx={textInputStyle}
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
                />
                <Button
                    variant="contained"
                    sx={buttonStyle}
                >Share</Button>
            </form>
        </div>
    )
}
export default AddFood