import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "../../CommonFieldComponent/FormFields";
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
// components
import { Link,  useHistory } from "react-router-dom";
import Page from "../../component/Page";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import { API_URL, GETOTP } from "../../Apiconst/Apiconst";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
  submit: {
    top: "17px",
  },
  avatarpreview: {
    width: "136px",
    height: "131px",
  },
  svg: {
    display: "noneimportant",
  },
}));
function LoginFrom() {
  const history = useHistory();
  const success = () => {};
  const classes = useStyles();

  const url = `${API_URL}/${GETOTP}`;

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${GETOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append("section", values.section);
    bodyFormData.append("phone_or_email", values.phone_or_email);
    bodyFormData.append("email", values.email);
    axios
      .post(url1, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          history.push("/login-verfication");
        } else {
          history.push("/");
          success(toast.success(response.data.message));
        }
      });
  };

  return (
    <>
     {/* <ToastContainer /> */}
      <Page clinic_name="Login">
        <Box sx={{ pb: 5 }}>
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Login
          </Typography>
        </Box>

        {/* <Card className={classes.root} variant="outlined">

                        <CardContent>
                            <Grid container spacing={4}>
                                <Grid item xs={12}> */}

        <Formik
          key="one"
          enableReinitialize
          initialValues={{
            section: "login",
            phone_or_email: "",
            email: "",
          }}
          validationSchema={Yup.object().shape({

            phone_or_email: Yup.string()
                  .required("Phone or email is required"),
                  email: Yup.string()
                  .required("Email is required")
          })}

          onSubmit={(values) => {
            onSubmit(values);
            console.log(values);
          }}
        >
          {({ setFieldValue, touched, values }) => (
            <>
              <div className="container h-p100">
                <div className="row align-items-center justify-content-md-center h-p100">
                  <div className="col-12">
                    <div className="row justify-content-center g-0">
                      <div className="col-lg-5 col-md-5 col-12">
                        <div className="bg-white rounded10 shadow-lg">
                          <div className="content-top-agile p-20 pb-0">
                            <h2 className="text-primary">
                              Get started with Us
                            </h2>
                            <p className="mb-0">Login</p>
                          </div>
                          <div className="p-40">
                            <Form key="oneForm">
                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <span className="input-group-text bg-transparent">
                                    <i className="ti-user"></i>
                                  </span>
                                  <Field
                                    className="form-control ps-15 bg-transparent"
                                    label="section"
                                    type="text"
                                    name="section"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <span className="input-group-text bg-transparent">
                                    <i className="ti-email"></i>
                                  </span>
                                  <Field
                                    className="form-control ps-15 bg-transparent"
                                    label="phone_or_email"
                                    type="text"
                                    variant="outlined"
                                    name="phone_or_email"
                                    placeholder="phone_or_email"
                                  />
                                </div>
                              </div>
                              <ErrorMessage name="phone_or_email"/>

                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <span className="input-group-text bg-transparent">
                                    <i className="ti-lock"></i>
                                  </span>
                                  <Field
                                    className="form-control ps-15 bg-transparent"
                                    label="Email"
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                  />
                                </div>
                              </div>
                              <ErrorMessage name="email"/>

                              <div>
                                <Link to="/get-otp">Sign Up</Link>
                              </div>

                              <div className="row">
                               
                                <div className="col-12 text-center">
                                  <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                  >
                                    ADD
                                  </Button>
                                </div>
                              
                              </div>
                            </Form>
                         
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="mt-20 text-white">- Register With -</p>
                          <p className="gap-items-2 mb-20">
                            <a
                              className="btn btn-social-icon btn-round btn-facebook"
                              href="#"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                            <a
                              className="btn btn-social-icon btn-round btn-twitter"
                              href="#"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                            <a
                              className="btn btn-social-icon btn-round btn-instagram"
                              href="#"
                            >
                              <i className="fa fa-instagram"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Form key="oneForm">
                                                
                                                  <Grid container spacing={2}>
                                                      <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="section"
                                                            type="text"
                                                            name="section"
                                                            disabled
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="phone_or_email"
                                                            type="text"
                                                            variant="outlined"
                                                            name="phone_or_email"
                                                        />
                                                    </Grid><Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Email"
                                                            type="text"
                                                            name="email"
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

                                            </Form> */}
            </>
          )}
        </Formik>
      </Page>
    </>
  );
}

export default LoginFrom;
