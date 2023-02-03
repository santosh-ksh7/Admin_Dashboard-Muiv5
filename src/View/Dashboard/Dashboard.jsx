import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper";
import { Box, Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import {tokens} from "../../theme"
import CircularProgress from '@mui/material/CircularProgress';
import LineChart from "../../SharedComponents/LineChart"
import BarChart from "../../SharedComponents/BarChart"
import PieChart from "../../SharedComponents/PieChart"


const MyTopWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

function Dashboard() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const statBoxData = [
    {
      title:"12,361",
      subtitle:"Emails Sent",
      progress:"0.75",
      increase:"+14%",
      icon: <EmailIcon  sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
    },
    {
      title:"431,225",
      subtitle:"Sales Obtained",
      progress:"0.50",
      increase:"+21%",
      icon: <PointOfSaleIcon  sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
    },
    {
      title:"32,441",
      subtitle:"New Clients",
      progress:"0.30",
      increase:"+5%",
      icon: <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
    },
    {
      title:"1,325,134",
      subtitle:"Traffic Received",
      progress:"0.80",
      increase:"+43%",
      icon: <TrafficIcon  sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
    }
  ]

  return (
    <MyParentWrapper>
      {/* Top row */}
      <MyTopWrapper>
        <div>
          <Typography variant="h6">Dashboard</Typography>
          <Typography variant="body2" sx={{marginBottom: "20px"}}>Your bird's eye view</Typography>
        </div>
        <div>
          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </div>
      </MyTopWrapper>
      {/* Grid Container Below */}
      <Grid container spacing={2}>
        {/* Stat Box */}
        {statBoxData.map((ele, index) => <StatBox obj={ele} key={index} />)}
        {/* Line Chart & Transaction Table */}
        <Grid item xs={12} sm={12} md={8}><LineChartSmallView /></Grid>
        <Grid item xs={12} md={4} ></Grid>
        {/* Bar Chart & Pie Chart */}
        <Grid item xs={6} md={6} ><BarChartSmallView /></Grid>
        <Grid item xs={6} md={6} ><PieChartSmallView /></Grid>
      </Grid>
    </MyParentWrapper>
  )
}

export default Dashboard


function StatBox({obj}){

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const MyStatBoxWrapper = styled(Box)({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "3px"
  })

  return(
    <Grid item xs={6} md={3}>
      <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
        <MyStatBoxWrapper>
          {obj.icon}
          <Typography variant="body1" sx={{color: colors.grey[100]}}>{obj.title}</Typography>
          <Typography variant="body2" sx={{ color: colors.greenAccent[600] }}>{obj.subtitle}</Typography>
        </MyStatBoxWrapper>
        <MyStatBoxWrapper>
          <CircularProgress variant="determinate" value={obj.progress * 100} sx={{ color: colors.greenAccent[600] }} />
          <Typography variant="body2" sx={{color: colors.grey[100]}}>{obj.increase}</Typography>
        </MyStatBoxWrapper>
      </Box>
    </Grid>
  )
}

function LineChartSmallView(){

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px"}}>
      <Typography variant="body1" sx={{color: colors.grey[100]}}>Revenue Chart</Typography>
      <LineChart smallView="true" />
    </Box>
  )
}

function BarChartSmallView(){

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px"}}>
      <Typography variant="body1" sx={{color: colors.grey[100]}}>Traffic Chart</Typography>
      <BarChart smallView="true" />
    </Box>
  )
}

function PieChartSmallView(){

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px"}}>
      <Typography variant="body1" sx={{color: colors.grey[100]}}>Share Chart</Typography>
      <PieChart />
    </Box>
  )
}