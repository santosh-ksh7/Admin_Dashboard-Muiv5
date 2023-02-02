import { Box, Typography } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import PieChart from "../../SharedComponents/PieChart"

function PieChartMain() {
  return (
    <MyParentWrapper>
        <Typography variant="h6">Pie Chart</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>Visualize your data</Typography>
        <Box sx={{height: "75vh"}}>
            <PieChart />
        </Box>
    </MyParentWrapper>
  )
}

export default PieChartMain