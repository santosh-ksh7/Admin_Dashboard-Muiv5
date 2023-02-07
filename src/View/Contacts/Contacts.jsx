import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, styled, TextField, Typography, useTheme } from "@mui/material"
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper"
import { tokens } from "../../theme";
import { DataGrid , GridToolbar } from '@mui/x-data-grid';
import { connect } from "react-redux";
import { deleteExistingUser, editExistngUser } from "../../Redux/actionCreator";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect, useState } from "react";
import MyDailogForEditor from "./MyDialogForEditor";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useNavigate } from "react-router-dom";



const MyTopWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

function Contacts({myContactsData, editAction, deleteAction}) {

    // Dialog-Box MUI
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [data2edit,setData2edit] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setData2edit(null);
        setData(null);
    };

    useEffect(() => {
        if(data){
            const extractObjectToEdit = myContactsData.filter((ele) => ele.id === data);
            setData2edit(extractObjectToEdit[0]);
            handleClickOpen();
        }
    }, [data])
    // Dialog-Box MUI

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const navigate = useNavigate();

    // Gives a custom column name to data grid columns & injects the value matching with field, alongWith flexGrow for column layout a/t space
    const columns = [
        {field: "name", headerName: "Name", flex: 1}, // This will grow
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", flex: 1}, // This will grow
        {field: "phone", headerName: "Phone Number", flex: 1}, // This will grow
        {field: "email", headerName: "Email", flex: 1}, // This will grow
        {field: "address", headerName: "Address", flex: 1}, // This will grow
        {field: "city", headerName: "City", flex: 1}, // This will grow
        {field: "zipCode", headerName: "Zip Code", flex: 1}, // This will grow
        {field: "id", headerName: "Actions", flex: 1,
        renderCell: 
            ({row: {id}}) => {
                return( 
                    <div>
                        <IconButton onClick={() => deleteAction(id)}>
                            <DeleteOutlineOutlinedIcon sx={{color: "red"}} />
                        </IconButton>
                        <IconButton onClick={() => setData(id)}>
                            <EditOutlinedIcon sx={{color: "blue"}} />
                        </IconButton>
                    </div>
                )
            }
        }, // This will grow
    ]

  return (
    <MyParentWrapper>
        {/* Top Wrapper flex-box */}
        <MyTopWrapper>
            <div>
                <Typography variant="h6">Contacts</Typography>
                <Typography variant="body2" sx={{marginBottom: "20px"}}>View all your Contacts (CRUD operations)</Typography>
            </div>
            <div>
                <Button onClick={()=> navigate("/form")} sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    cursor: "pointer"
                }}>
                    <AddOutlinedIcon sx={{ mr: "10px" }} />
                    Add New Contacts
                </Button>
            </div>
        </MyTopWrapper>
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
            <DataGrid rows={myContactsData} columns={columns} components={{Toolbar: GridToolbar}} />
        </Box>
        {data2edit ? <MyDailogForEditor open={open} handleClose={handleClose} data2edit={data2edit} editAction={editAction} colors={colors} /> : null}
    </MyParentWrapper>
  )
}


const mapStateToProps = (store) => {
    return{
        myContactsData: store.contactsReducer.usersInContactSection
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editAction: (id) => dispatch(editExistngUser(id)),
        deleteAction: (id) => dispatch(deleteExistingUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)