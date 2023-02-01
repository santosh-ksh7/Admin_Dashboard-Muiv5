import { Box, Button, Grid, styled, TextField, Typography } from "@mui/material";
import { useFormik } from "formik/dist";
import * as yup from "yup";

function Form() {

    const mySchema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
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


    const MyParentWrapper = styled(Box)({
        padding: "10px"
    })

  return (
    <MyParentWrapper>
        <Typography variant="h6">Create a New User Profile</Typography>
        <form onSubmit={formik.handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                <Button type="submit" color="secondary" variant="contained">Submit</Button>
            </Box>
        </form>
    </MyParentWrapper>
  )
}

export default Form