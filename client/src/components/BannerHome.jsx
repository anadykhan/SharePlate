import { Box } from "@mui/system"

const BannerHome = () => {
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '300px', // Set an explicit height
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%', // Take up 100% of the parent height
            backgroundImage: `url(https://i.ibb.co/Qbtw90K/Untitled-design.jpg)`,
            backgroundSize: 'cover',
          }}
        ></Box>
      </Box>

    </div>
  )
}
export default BannerHome