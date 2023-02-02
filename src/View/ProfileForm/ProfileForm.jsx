import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper";

function ProfileForm() {

    const mySchema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        contact: yup.number().required(),
        address1: yup.string().required(),
        address2: yup.string().required(),
    })

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            address1: "",
            address2: ""
        },
        validationSchema: mySchema,
        onSubmit: (values)=>{
            console.log(values)
        }
    })

  return (
    <MyParentWrapper>
        <Typography variant="body1" sx={{marginBottom: "20px"}}>Create a New User Profile</Typography>
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="firstName"
                        error= {formik.touched.firstName && formik.errors.firstName ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="First Name"
                        helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="lastName"
                        error= {formik.touched.lastName && formik.errors.lastName ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Last Name"
                        helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="email"
                        error= {formik.touched.email && formik.errors.email ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="E-mail"
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="contact"
                        error= {formik.touched.contact && formik.errors.contact ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AddIcCallOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Contact"
                        helperText={formik.touched.contact && formik.errors.contact ? formik.errors.contact : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="address1"
                        error= {formik.touched.address1 && formik.errors.address1 ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <BusinessOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Address-1"
                        helperText={formik.touched.address1 && formik.errors.address1 ? formik.errors.address1 : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="address2"
                        error= {formik.touched.address2 && formik.errors.address2 ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <BusinessOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Address-2"
                        helperText={formik.touched.address2 && formik.errors.address2 ? formik.errors.address2 : null}
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: {xs: "center", sm: "flex-end"}, marginTop: "20px"}}>
                <Button type="submit" color="secondary" variant="contained">Submit</Button>
            </Box>
        </form>
    </MyParentWrapper>
  )
}

export default ProfileForm