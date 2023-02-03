import { Box, Typography } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import BarChart from "../../SharedComponents/BarChart"


function BarChartMain() {
  return (
    <MyParentWrapper>
        <Typography variant="h6">Bar Chart</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>Visualize your data</Typography>
        <Box sx={{height: "75vh"}}>
            <BarChart smallView="false" />
        </Box>
    </MyParentWrapper>
  )
}

export default BarChartMain