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
import { mockTransactions } from "../../AppData/mockData";



const MyStatBoxWrapper = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  gap: "3px"
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
        <div>
          <Typography variant="h6">Dashboard</Typography>
          <Typography variant="body2" sx={{marginBottom: "20px"}}>Your bird's eye view</Typography>
        </div>
      {/* Grid Container Below */}
      <Grid container spacing={2}>
        {/* Stat Box */}
        {statBoxData.map((ele, index) => <StatBox obj={ele} key={index} colors={colors} />)}
        {/* Line Chart & Transaction Table */}
        <Grid item xs={12} sm={12} md={8}><LineChartSmallView colors={colors} /></Grid>
        <Grid item xs={12} md={4} ><RecentTransaction colors={colors} /></Grid>
        {/* Bar Chart & Pie Chart */}
        <Grid item xs={6} md={6} ><BarChartSmallView colors={colors} /></Grid>
        <Grid item xs={6} md={6} ><PieChartSmallView colors={colors} /></Grid>
      </Grid>
    </MyParentWrapper>
  )
}

export default Dashboard


function StatBox({obj, colors}){

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

function LineChartSmallView({colors}){

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px"}}>
      <Typography variant="body1" sx={{color: colors.grey[100]}}>Revenue Chart</Typography>
      <LineChart smallView="true" />
    </Box>
  )
}

function BarChartSmallView({colors}){

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px"}}>
      <Typography variant="body1" sx={{color: colors.grey[100]}}>Traffic Chart</Typography>
      <BarChart smallView="true" />
    </Box>
  )
}

function PieChartSmallView({colors}){

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px"}}>
      <Typography variant="body1" sx={{color: colors.grey[100]}}>Share Chart</Typography>
      <PieChart />
    </Box>
  )
}

function RecentTransaction({colors}){

  return(
    <Box sx={{width: "100%", backgroundColor: colors.primary[400], height: "250px", padding: "10px", overflow: "hidden"}}>
      <Typography variant="h6" sx={{color: colors.grey[100]}}>Recent Transactions</Typography>
      {mockTransactions.map((ele, index) => <SingleTransaction obj={ele} key={index} colors={colors} />)}
    </Box>
  )
}

function SingleTransaction({obj, colors}){

  return(
    <Box sx={{display: 'flex', justifyContent: "space-between", margin: "4px"}}>
      <Typography variant="body2" sx={{color: colors.greenAccent[500]}}>{obj.date}</Typography>
      <Typography variant="body2">{obj.user}</Typography>
      <Typography variant="body2">{obj.cost}</Typography>
    </Box>
  )
}