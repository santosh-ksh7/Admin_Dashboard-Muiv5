import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, useTheme } from "@mui/material"
import { useState } from "react";


function MyDialogForChangingRole({colors, open, handleClose, status, updateAction, track}){

    const[currentSelection, setCurrentselection] = useState(status);

    function handleSubmit(event){
        event.preventDefault();
        console.log(currentSelection);
        updateAction({id: track, access: currentSelection});
        handleClose();
    }

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Update Your Team Member's Role"}
            </DialogTitle>
            <form onSubmit={(event) => handleSubmit(event)}>
                <DialogContent> 
                    <DialogContentText id="alert-dialog-description">
                        <input name="selectRole" type="radio" id="user" value="user" onChange={(e) => setCurrentselection(e.target.value)} checked={currentSelection === "user" } />
                        <label htmlFor="user">User</label>           
                        <input name="selectRole" type="radio" id="admin" value="admin" onChange={(e) => setCurrentselection(e.target.value)} checked={currentSelection === "admin" } />
                        <label htmlFor="admin">Admin</label>
                        <input name="selectRole" type="radio" id="manager" value="manager" onChange={(e) => setCurrentselection(e.target.value)} checked={currentSelection === "manager" } />
                        <label htmlFor="manager">Manager</label>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" sx={{backgroundColor: colors.blueAccent[700],color: colors.grey[100]}}>Update</Button>
                    <Button sx={{backgroundColor: colors.blueAccent[700],color: colors.grey[100]}} onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}


export default MyDialogForChangingRole