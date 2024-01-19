import { Avatar, Button, Chip, Typography } from "@mui/material"
import { Box, ThemeProvider, createTheme } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const SingleFoodDonationCard = () => {

    const theme = createTheme({
        breakpoints: {
            values: {
                mbl: 425,
                xs: 1024
            }
        }
    })

    return (
        <div>
            <ThemeProvider
                theme={theme}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            mbl: 'column',
                            xs: 'row'
                        },
                        gap: 10,
                        alignItems: 'center'
                    }}
                >
                    <Box
                        //350x340
                        sx={{
                            height: {
                                mbl: 350,
                                xs: 450
                            },
                            width: {
                                mbl: 340,
                                xs: 440
                            },
                            backgroundSize: 'cover',
                            backgroundImage: `url(https://i.ibb.co/Nr4nR5r/nahil-naseer-xljt-GZ2-P3-Y-unsplash.jpg)`,
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            maxWidth: 450,
                            gap: 5,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Typography
                                sx={{
                                    width: '50%',
                                    textAlign: 'center'
                                }}
                            >
                                Will expire in 3.3.32
                            </Typography>
                            <Box
                                sx={{
                                    width: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 2
                                }}
                            >
                                <LocationOnIcon />
                                <Typography>
                                    43A, London Bridge, United Kingdom
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            }}
                        >
                            <Typography
                                variant="h3"
                            >
                                Food Choice 1
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}
                                >
                                    <Avatar sx={{ bgcolor: 'green' }}>N</Avatar>
                                    <Typography>
                                        Alen Maxwell
                                    </Typography>
                                </Box>
                                <Chip label="Available" color="success" />
                            </Box>
                        </Box>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque in! Recusandae inventore provident perspiciatis vel fugiat minima nostrum.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <FavoriteBorderOutlinedIcon
                                    sx={{
                                        fontSize: 30
                                    }}
                                />
                                <Typography>
                                    10 Likes
                                </Typography>
                            </Box>
                            <Button
                                sx={{
                                    background: '#e8b941',
                                    color: 'white',
                                    borderRadius: 0,
                                    padding: 2,
                                }}
                            >
                                Request Donation
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>

        </div>
    )
}
export default SingleFoodDonationCard