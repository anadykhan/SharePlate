import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Box } from "@mui/system"

const AvailableFoodDonationCard = (props) => {

    const {title, expire} = props
    
    return (
        <div>
            <Card
            sx={{
                boxShadow: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
            }}
            >
                <CardMedia
                    component="img"
                    alt="Single Food Card"
                    image="https://i.ibb.co/nkzjdJm/tyson-Xg-A9-Pq-VK0a8-unsplash.jpg"
                    sx={{
                        width: 300,
                        height: 300,
                        backgroundSize: 'cover'
                    }}
                ></CardMedia>
                <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                }}
                >
                    <Typography
                    variant="h5"
                    align="center"
                    >
                        {title}
                    </Typography>
                    <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        justifyContent: 'center',
                    }}
                    >
                        <Typography
                        align="center"
                        sx={{
                                color: '#649013',
                        }}
                        >
                            Expires in
                        </Typography>
                        <Typography>
                            {expire}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
export default AvailableFoodDonationCard