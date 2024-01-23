import { Badge, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { Box } from "@mui/system"

const RequestedDonationsCard = (props) => {

    const { imageSrc, title, subtitle, badgeContent } = props

    return (
        <div>
            <Card
                sx={{
                    display: 'flex',
                    height: '10rem',
                    width: '100%',
                    boxShadow: 'none',
                    alignItems: 'center'
                }}
            >
                <CardMedia
                    component="img"
                    alt="Image"
                    image="https://i.ibb.co/nkzjdJm/tyson-Xg-A9-Pq-VK0a8-unsplash.jpg"
                    sx={{
                        width: '9rem',
                        height: '9rem',
                        backgroundSize: 'cover',
                    }}
                />
                <CardContent
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Typography variant="h5" component="div">
                        Food Cart 3
                    </Typography>
                    <Box
                        width='100%'
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <Typography variant="subtitle1" color="text.secondary">
                            Expires in 1.2.33
                        </Typography>
                        <Chip label="Available" color="success" />
                    </Box>
                    <Typography
                    sx={{
                        fontWeight: 300
                    }}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque laudantium veniam nobis doloribus eius adipisci iusto iste aliquam. Dignissimos, quae?
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default RequestedDonationsCard