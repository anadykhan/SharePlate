import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useAnimate } from "framer-motion"

const CategoryCard = (props) => {

  const [scope, animate] = useAnimate()



  const {title} = props
  return (
    <div>
        <Typography
        sx={{
            width: 'full',
            padding: 2,
            borderBottom: 1,
            fontSize: 20,
            fontWeight: 300
        }}
        >
          <Box
          id = "title"
          >
            {title}
          </Box>
        </Typography>
    </div>
  )
}
export default CategoryCard