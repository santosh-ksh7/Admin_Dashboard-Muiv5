import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import { MyParentWrapper } from "../../SharedComponents/AllContentWrapper";
import { createNewUser } from "../../Redux/actionCreator";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function ProfileForm({addNewContact}) {

    const navigate = useNavigate();

    const mySchema = yup.object({
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
            name: "",
            age: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            zipCode: ""
        },
        validationSchema: mySchema,
        onSubmit: (values)=>{
            addNewContact(values);
            navigate("/contacts");
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
                        name="name"
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
                        label="Email"
                        helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="age"
                        error= {formik.touched.age && formik.errors.age ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AccessTimeOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Age"
                        helperText={formik.touched.age && formik.errors.age ? formik.errors.age : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="address"
                        error= {formik.touched.address && formik.errors.address ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <BusinessOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Address"
                        helperText={formik.touched.address && formik.errors.address ? formik.errors.address : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="city"
                        error= {formik.touched.city && formik.errors.city ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <BusinessOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="City"
                        helperText={formik.touched.city && formik.errors.city ? formik.errors.city : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="zipCode"
                        error= {formik.touched.zipCode && formik.errors.zipCode ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <KeyboardOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Zip Code"
                        helperText={formik.touched.zipCode && formik.errors.zipCode ? formik.errors.zipCode : null}
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        fullWidth
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="phone"
                        error= {formik.touched.phone && formik.errors.phone ? true : false}
                        id="standard-error-helper-text"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <AddIcCallOutlinedIcon />
                            </InputAdornment>
                            ),
                        }}
                        label="Phone"
                        helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: {xs: "center", sm: "flex-end"}, marginTop: "20px", gap: "10px"}}>
                <Button type="submit" color="secondary" variant="contained">Submit</Button>
                <input type="reset" variant="contained" value="Reset" />
            </Box>
        </form>
    </MyParentWrapper>
  )
}


const mapDispatchToProps = (dispatch) => {
    return{
        addNewContact: (data) => dispatch(createNewUser(data))
    }
}

export default connect(null, mapDispatchToProps)(ProfileForm)