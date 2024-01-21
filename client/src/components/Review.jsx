import { Avatar, Rating, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";


const Review = () => {

  return (
    <div>
      <Box
      sx={{
        display: 'flex',
        gap: 2  
      }}
      >
        <Avatar sx={{
          bgcolor: 'red',
          padding: 4
        }} variant="square">
          N
        </Avatar>
        <Box>
          <Rating
            name="simple-controlled"
            value={3}
          />
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1
              }}
            >
              <Typography
              sx={{
                fontWeight: 800
              }}
              >
                John Doe</Typography>
              -
              <Typography
              fontWeight={300}
              >1.1.2012</Typography>
            </Box>
            <Typography
            fontWeight={300}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab facilis, eligendi vel molestias quae beatae reprehenderit temporibus, fugiat quo doloremque expedita provident consequatur, eum ut omnis? At nam voluptates aperiam.
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
export default Review