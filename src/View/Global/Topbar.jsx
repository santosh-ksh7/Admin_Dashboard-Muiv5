import { Box, IconButton, InputBase, styled, useTheme } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const MyTopBarFlexbox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

const MySearchBarWrapper = styled("div")({
  display: "flex",
  borderRadius: "3px",
})

const MyIconsWrapper = styled(Box)({
  display: "flex"
})

function Topbar() {
  // Allow access to your MUI theme object for use
  const theme = useTheme();
  // This function returns our custom color object
  const colors = tokens(theme.palette.mode);
  // This is to switch between dark mode and light mode
  const colorMode = useContext(ColorModeContext);

  return (
    <MyTopBarFlexbox>
      {/* search bar */}
      <MySearchBarWrapper sx={{backgroundColor: colors.primary[400]}}>
        <InputBase placeholder="Search..." />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </MySearchBarWrapper>
      {/* Icons at right side */}
      <MyIconsWrapper>
        <IconButton onClick={colorMode.toggleColorMode} >
          {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </MyIconsWrapper>
    </MyTopBarFlexbox>
  )
}

export default Topbar