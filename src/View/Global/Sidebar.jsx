import { Avatar, Box, IconButton, styled, Typography, useTheme } from "@mui/material"
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";



const SideBarWrapper = styled(Box)({
  width: "min-content",
  padding: "10px"
})

const MyTopRowFLexContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "15px"
})

const MyAdminInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "15px"
})

const MyLinksParentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: '7px',
  margin: "auto"
})

function Sidebar() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // To track the current active route & higlight it accordingly by tracking the URL of the page & using useLocation hook from react-router-dom
  const loc = useLocation();

  useEffect(()=> {
    const route = loc.pathname;
    const routeIndex = sideBarLinksArray.findIndex((item) => item.link === route);
    if(routeIndex !== -1){
      setTrack(routeIndex);
    }
  }, [loc])

  // Toggle to collapse/expand the sidebar
  const[isCollapsed, setIsCollapsed] = useState("block");

  const toggleSideBar = () => setIsCollapsed(isCollapsed === "none" ? "block" : "none");
  // Toggle to collapse/expand the sidebar

  // Trcak which option is currently selected to highlight the selected option
  const[track, setTrack] = useState(0);

  const sideBarLinksArray = [
    {
      title: "Dashboard",
      link: "/",
      icon: <HomeOutlinedIcon />
    },
    {
      title: "Manage Team",
      link: "/team",
      icon: <PeopleOutlinedIcon />
    },
    {
      title: "Contacts Info",
      link: "/contacts",
      icon: <ContactsOutlinedIcon />
    },
    {
      title: "Invoices",
      link: "/invoices",
      icon: <ReceiptOutlinedIcon />
    },
    {
      title: "Profile Form",
      link: "/form",
      icon: <PersonOutlinedIcon />
    },
    {
      title: "Calender",
      link: "/calendar",
      icon: <CalendarTodayOutlinedIcon />
    },
    {
      title: "FAQ Page",
      link: "/faq",
      icon: <HelpOutlineOutlinedIcon />
    },
    {
      title: "Pie Chart",
      link: "/pie",
      icon: <PieChartOutlineOutlinedIcon />
    },
    {
      title: "Bar Chart",
      link: "/bar",
      icon: <BarChartOutlinedIcon />
    },
    {
      title: "Line Chart",
      link: "/line",
      icon: <TimelineOutlinedIcon />
    },
    {
      title: "Geography Chart",
      link: "/geography",
      icon: <MapOutlinedIcon />
    },
  ]
  

  return (
    <SideBarWrapper sx={{backgroundColor: colors.primary[400]}}>
      {/* Top section */}
      <MyTopRowFLexContainer>
        <Typography variant="span" sx={{display: isCollapsed, marginRight: "90px"}} >ADMIN</Typography>
        <IconButton sx={{padding: "0px"}} onClick={toggleSideBar} >
          {isCollapsed === "none" ? <MenuOutlinedIcon /> : <KeyboardArrowLeftIcon />}
        </IconButton>
      </MyTopRowFLexContainer>
      {/* Admin info */}
      <MyAdminInfo sx={{display: isCollapsed === "none" ? "none" : "flex"}}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
        <Typography variant="body1">Santosh</Typography>
      </MyAdminInfo>
      {/* Sidebar navigation links as a list */}
      <MyLinksParentWrapper>
        {sideBarLinksArray.map((ele, index) => <LinksChild key={index} index={index} obj={ele} isCollapsed={isCollapsed} colors={colors} track={track} />)}
      </MyLinksParentWrapper>
  </SideBarWrapper>
  )
}

export default Sidebar



function LinksChild({obj, isCollapsed, colors, track, index}){

  const navigate = useNavigate();

  const MylinksWrapper = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    padding: "auto",
    color: index === track ? "#6870fa" : colors.grey[300],
    "&:hover": {
      color: "#868dfb"
    },
    "&:active": {
      color: "#6870fa"
    }
  })

  const MyIconButton = styled(Box)({
    padding: "0px",
    color: index === track ? "#6870fa" : colors.grey[300],
    "&:hover": {
      color: "#868dfb"
    }
  })

  const trackSelectedOption = () => {
    navigate(obj.link);
  }

  return(
    <MylinksWrapper onClick={trackSelectedOption}>
      <MyIconButton>
        {obj.icon}
      </MyIconButton>
      <Typography variant="caption" sx={{display: isCollapsed}} >{obj.title}</Typography>
    </MylinksWrapper>
  )
}