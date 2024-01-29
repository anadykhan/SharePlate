import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useAnimate } from 'framer-motion';
import { offHoverCardAnimation, offHoverCardNumberAnimation, onHoverCardAnimation, onHoverCardNumberAnimation, } from "../animation/FeaturedFoodDonationsCardAnimation";

const FeaturedFoodDonationsCard = (props) => {
    const [scope, animate] = useAnimate()

    const { title, description } = props

    //Animation Activators
    const handleCardMouseEnter = () => {
        animate('#card', onHoverCardAnimation.animation, onHoverCardAnimation.transition);
        animate('#cardNumber', onHoverCardNumberAnimation.animation, onHoverCardNumberAnimation.transition)
    }
    const handleCardMouseExit = () => {
        animate('#card', offHoverCardAnimation.animation, offHoverCardAnimation.transition);
        animate('#cardNumber', offHoverCardNumberAnimation.animation, offHoverCardNumberAnimation.transition)
    }


    return (
        <div
            ref={scope}
        >
            <Box
                id='card'
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
                    position: 'relative',
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseExit}
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
                        id = 'cardNumber'
                        sx={{
                            fontSize: 90,
                            fontWeight: 800,
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
                            fontWeight: 500
                        }}
                    >
                        Read More <ArrowRightAltOutlinedIcon />
                    </Button>
                </Box>
            </Box>
        </div>
    )
}
export default FeaturedFoodDonationsCard