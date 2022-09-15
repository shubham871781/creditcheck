import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
     TextField
} from "../../../../CommonFieldComponent/FormFields";
import { 
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    Box, 
} from "@mui/material";
// import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import { makeStyles } from "@material-ui/styles";
import { API_URL, TAKEAPPOINTMENT } from "../../../../Apiconst/Apiconst"
// components
import { Link as RouterLink , useLocation} from 'react-router-dom';
import Page from '../../../../component/Page';
import { Formik, Form } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
// import Loader from "../../../CommonFieldComponent/Loader"

const useStyles = makeStyles(theme => ({
    tableOverflow: {
        overflow: 'auto'
    },
    submit: {
        top: "17px"
    },
    avatarpreview: {
        width: "136px",
        height: "131px"
    },
    svg: {
        display: "noneimportant"
    }
}))


function TakeAppointment() {

    const success = () => { }
    const classes = useStyles();
    const [userRequest, setUserRequest] = useState([]);

    const onSubmit = (values, e) => {
        const url1 = `${API_URL}/${TAKEAPPOINTMENT}`;
        var bodyFormData = new FormData();
        bodyFormData.append("start_date", values.start_date);
        bodyFormData.append("doctor_id", values.doctor_id);
        bodyFormData.append("end_date", values.end_date);
        bodyFormData.append("start_time", values.start_time);
        bodyFormData.append("end_time", values.end_time);
        axios
            .post(url1, bodyFormData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                })
            .then((response) => {

                if (response.status === 200) {
                    success(toast.success(response.data.message))
                    // navigate('/dashboard/press-releases', { replace: true });
                }
            })

    };
  return (
    <>
                                              <div className="content-wrapper">
        <div className="container-full">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            {/* <div className="d-flex align-items-center"> */}
              {/* <div className="me-auto"> */}
                <h4 className="page-title">Patients</h4>
                {/* <div className="d-inline-block align-items-center"> */}
            <ToastContainer />
            <Page title="Add Take-Appointment">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Add Take-Appointment</Typography>
                </Box>

                <Card className={classes.root} variant="outlined">

                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>

                                <Formik
                                    key="one"
                                    enableReinitialize
                                    initialValues={{
                                        start_date: "",
                                        doctor_id: "",
                                        end_date: "",
                                        start_time : "",
                                        end_time  :"",
                                    }}
                                    // validationSchema={Yup.object().shape({

                                    //     shortdescription: Yup.string()
                                    //         .required("User Name is required"),
                                    //     title: Yup.string()
                                    //         .required("User Name is required")
                                    // })}

                                    onSubmit={values => {
                                        onSubmit(values)
                                        console.log(values)
                                    }}

                                >
                                    {({ setFieldValue,
                                        touched,
                                        values, }) => (
                                        <>
                                            <Form key="oneForm">
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Start date"
                                                            type="text"
                                                            name="start_date"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Doctor id"
                                                            type="text"
                                                            name="doctor_id"
                                                        />
                                                    </Grid><Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="End date"
                                                            type="text"
                                                            name="end_date"
                                                        />
                                                    </Grid><Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Start time"
                                                            type="text"
                                                            name="start_time"
                                                        />
                                                    </Grid><Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="End_time"
                                                            type="text"
                                                            name="end_time"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Short Description"
                                                            type="text"
                                                            name="shortdescription"
                                                        />
                                                    </Grid>
                                                </Grid>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    ADD
                                                </Button>

                                            </Form>
                                        </>
                                    )}
                                </Formik>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Page>
            </div>
                                    </div>
                                    </div>
           
    </>
  )
}

export default TakeAppointment