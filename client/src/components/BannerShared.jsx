import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const BannerShared = (props) => {
    const {title} = props

    return (
        <div>
            <Box
                width='100%'
                height={300}
                style={{
                    backgroundImage: 'url("/src/assets/Images/Banner/SharePlateBannerImage.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography
                fontSize={60}
                fontWeight={600}
                >
                     {title}
                </Typography>
            </Box>
        </div>
    )
}
export default BannerShared