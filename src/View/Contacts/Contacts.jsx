import { Box, Typography, useTheme } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import {mockDataContacts} from "../../AppData/mockData"
import { tokens } from "../../theme";
import { DataGrid , GridToolbar } from '@mui/x-data-grid';


function Contacts() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Gives a custom column name to data grid columns & injects the value matching with field, alongWith flexGrow for column layout a/t space
    const columns = [
        {field: "id", headerName: "ID"}, //This won't grow
        {field: "registrarId", headerName: "Registrar ID", flex: 1}, // This will grow
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", flex: 1}, // This will grow
        {field: "phone", headerName: "Phone Number", flex: 1}, // This will grow
        {field: "email", headerName: "Email", flex: 1}, // This will grow
        {field: "address", headerName: "Address", flex: 1}, // This will grow
        {field: "city", headerName: "City", flex: 1}, // This will grow
        {field: "zipCode", headerName: "Zip Code", flex: 1}, // This will grow
    ]

  return (
    <MyParentWrapper>
        <Typography variant="h6">Contacts</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>View all your Contacts</Typography>
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
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                    fontSize: "10px"
                },
            }}
        >
            {/* The components prop allows us to add any options at top of data grid */}
            <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar: GridToolbar}} />
        </Box>
    </MyParentWrapper>
  )
}

export default Contacts