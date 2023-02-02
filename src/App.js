import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import BarChartMain from "./View/BarChartMain/BarChartMain";
import Dashboard from "./View/Dashboard/Dashboard";
import Faq from "./View/FAQ/Faq";
import Sidebar from "./View/Global/Sidebar";
import Topbar from "./View/Global/Topbar";
import LineChartMain from "./View/LineChartMain.jsx/LineChartMain";
import PieChartMain from "./View/PieChartMain/PieChartMain";
import ProfileForm from "./View/ProfileForm/ProfileForm";


function App() {

  const[theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <div className="content">
            <Topbar />
            {/* routes */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/form" element={<ProfileForm />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<BarChartMain />} />
              <Route path="/pie" element={<PieChartMain />} />
              <Route path="/line" element={<LineChartMain />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
