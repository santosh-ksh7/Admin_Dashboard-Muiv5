import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Dashboard from "./View/Dashboard/Dashboard";
import Form from "./View/Form/Form";
import Sidebar from "./View/Global/Sidebar";
import Topbar from "./View/Global/Topbar";


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
              <Route path="/form" element={<Form />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
