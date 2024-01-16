import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const FeaturedFoodDonationsCard = (props) => {

    const {title, description} = props

    return (
        <div>
            <Box
                sx={{
                    maxWidth: 420, // Set your desired width
                    height: 580, // Set your desired height
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage: `url(https://i.ibb.co/Nr4nR5r/nahil-naseer-xljt-GZ2-P3-Y-unsplash.jpg)`,  // Set the image URL here
                    backgroundSize: 'cover',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        border: 2,
                        borderColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        color: 'white',
                        padding: 3
                    }}
                >
                    <Typography
                    sx={{
                        fontSize: 90,
                        fontWright: 800,
                        position: 'absolute',
                        left: 35,
                        top: 5,
                        opacity: 0.4
                    }}
                    >
                        01
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, fontSize: 30 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray.500', fontWeight: 100, fontSize: 13, textAlign: 'center' }}>
                        {description}
                    </Typography>
                    <Button
                    sx={{
                        color: 'white',
                        fontSize: 13,
                    }}
                    >
                        Read More <ArrowRightAltOutlinedIcon/>
                    </Button>
                </Box>
            </Box>
        </div>
    )
}
export default FeaturedFoodDonationsCard