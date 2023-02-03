import { Box, Typography } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import LineChart from "../../SharedComponents/LineChart"


function LineChartMain() {
    return (
      <MyParentWrapper>
          <Typography variant="h6">Line Chart</Typography>
          <Typography variant="body2" sx={{marginBottom: "20px"}}>Visualize your data</Typography>
          <Box sx={{height: "75vh"}}>
              <LineChart smallView="false" />
          </Box>
      </MyParentWrapper>
    )
  }
  
  export default LineChartMain