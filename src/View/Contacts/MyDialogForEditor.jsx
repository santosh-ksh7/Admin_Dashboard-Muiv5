import * as yup from "yup";
import { useFormik } from "formik";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, TextField, Typography, useTheme } from "@mui/material"



export default function MyDailogForEditor({open, handleClose, data2edit, editAction, colors}){

    const mySchema = yup.object({
        id: yup.number().required(),
        name: yup.string().required(),
        age: yup.number().required(),
        email: yup.string().required(),
        phone: yup.number().required(),
        address: yup.string().required(),
        city: yup.string().required(),
        zipCode: yup.number().required(),
    })

    const formik = useFormik({
        initialValues: {
            id: data2edit.id,
            name: data2edit.name,
            age: data2edit.age,
            email: data2edit.email,
            phone: data2edit.phone,
            address: data2edit.address,
            city: data2edit.city,
            zipCode: data2edit.zipCode,
        },
        validationSchema: mySchema,
        onSubmit: (values)=>{
            editAction(values);
            handleClose();
        }
    })

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Edit Contact Information"}
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent> 
                    <DialogContentText id="alert-dialog-description">   
                        <TextField
                            fullWidth
                            disabled={true}
                            name="id"
                            value={formik.values.id}
                            id="standard-error-helper-text"
                            label="ID"
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="name"
                            value={formik.values.name}
                            error= {formik.touched.name && formik.errors.name ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="Name"
                            helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="age"
                            value={formik.values.age}
                            error= {formik.touched.age && formik.errors.age ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <AccessTimeOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="age"
                            helperText={formik.touched.age && formik.errors.age ? formik.errors.age : null}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="email"
                            value={formik.values.email}
                            error= {formik.touched.email && formik.errors.email ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="email"
                            helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="phone"
                            value={formik.values.phone}
                            error= {formik.touched.phone && formik.errors.phone ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <LocalPhoneOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="phone"
                            helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="address"
                            value={formik.values.address}
                            error= {formik.touched.address && formik.errors.address ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <BusinessOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="address"
                            helperText={formik.touched.address && formik.errors.address ? formik.errors.address : null}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="city"
                            value={formik.values.city}
                            error= {formik.touched.city && formik.errors.city ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <BusinessOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="city"
                            helperText={formik.touched.city && formik.errors.city ? formik.errors.city : null}
                            variant="standard"
                        />
                        <TextField
                            fullWidth
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="zipCode"
                            value={formik.values.zipCode}
                            error= {formik.touched.zipCode && formik.errors.zipCode ? true : false}
                            id="standard-error-helper-text"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <KeyboardOutlinedIcon />
                                </InputAdornment>
                                ),
                            }}
                            label="zipCode"
                            helperText={formik.touched.zipCode && formik.errors.zipCode ? formik.errors.zipCode : null}
                            variant="standard"
                        />     
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