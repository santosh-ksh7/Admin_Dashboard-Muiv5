import { Box, Typography, useTheme } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import {mockDataTeam} from "../../AppData/mockData"
import { tokens } from "../../theme";
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";



function ManageTeam() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Gives a custom column name to data grid columns & injects the value matching with field, alongWith flexGrow for column layout a/t space
    // Also the renderCell function takes in info of current cell corresponding to column and then allows us to return JSX for conditional
    const columns = [
        {field: "id", headerName: "ID"}, //This won't grow
        {field: "name", headerName: "Name", flex: 1}, // This will grow
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", flex: 1}, // This will grow
        {field: "phone", headerName: "Phone Number", flex: 1}, // This will grow
        {field: "email", headerName: "Email", flex: 1}, // This will grow
        {field: "access", headerName: "Access Level", flex: 1, 
        renderCell: 
            ({row: {access}}) => {
            return( 
                <Box
                    sx={{ width: "60%",
                        margin: "auto",
                        padding: "5px",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor:  access === "admin" ? colors.greenAccent[600] :  colors.greenAccent[700],
                        borderRadius: "4px"
                    }}
                >
                    {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                    {access === "manager" && <SecurityOutlinedIcon />}
                    {access === "user" && <LockOpenOutlinedIcon />}
                    <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                        {access}   
                    </Typography>
                </Box>
            )
        }}, // This will grow
    ]

  return (
    <MyParentWrapper>
        <Typography variant="h6">Manage Team</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>Manage your Team</Typography>
        <Box 
            sx={{
                height: "75vh",
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
                "& .MuiDataGrid-cellContent":{
                    fontSize: "10px"
                }
            }}
        >
            <DataGrid rows={mockDataTeam} columns={columns} />
        </Box>
    </MyParentWrapper>
  )
}

export default ManageTeam