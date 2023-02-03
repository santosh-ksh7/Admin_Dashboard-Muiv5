import { Box, Typography, useTheme } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import {mockDataInvoices} from "../../AppData/mockData"
import { tokens } from "../../theme";
import { DataGrid } from '@mui/x-data-grid';

function Invoices() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Gives a custom column name to data grid columns & injects the value matching with field, alongWith flexGrow for column layout a/t space
    const columns = [
        {field: "id", headerName: "ID"}, //This won't grow
        {field: "name", headerName: "Name", flex: 1}, // This will grow
        {field: "phone", headerName: "Phone Number", flex: 1}, // This will grow
        {field: "email", headerName: "Email", flex: 1}, // This will grow
        {field: "cost", headerName: "Cost", flex: 1}, // This will grow
        {field: "date", headerName: "Date", flex: 1}, // This will grow
    ]

  return (
    <MyParentWrapper>
        <Typography variant="h6">Invoices</Typography>
        <Typography variant="body2" sx={{marginBottom: "20px"}}>View all Invoices</Typography>
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
            }}
        >
            {/* The components prop allows us to add any options at top of data grid */}
            <DataGrid rows={mockDataInvoices} columns={columns} />
        </Box>
    </MyParentWrapper>
  )
}

export default Invoices