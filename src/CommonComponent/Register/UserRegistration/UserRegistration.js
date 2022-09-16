import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField } from "../../../CommonFieldComponent/FormFields";
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
import { API_URL, USERREGISTRATION } from "../../../Apiconst/Apiconst";
// components
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import Page from "../../../component/Page";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// import { TEXT_FIELD, EMAIL, URL, PRICE_NUMBER } from "../../Validation";
import * as Yup from "yup";
import Loader from "../../../CommonFieldComponent/Loader";

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

export default function UserRegistration() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const success = () => {};
  const { state } = useLocation();
  const { setValue } = useForm();
  const [region, SetselectRegion] = useState("");
  // const [city, SetselectCity] = useState('');
  const classes = useStyles();
  const [userRequest, setUserRequest] = useState({
    user: null,
  });

  const onSubmit = (values, e) => {
    console.log(values);
    const url1 = `${API_URL}/${USERREGISTRATION}`;
    var bodyFormData = new FormData();
    bodyFormData.append("fname", values.fname);
    bodyFormData.append("lname", values.lname);
    bodyFormData.append("phone", values.phone);
    bodyFormData.append("email", values.email);
    axios
      .post(url1, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
          success(toast.success(response.data.message));
          history.push("/login");
        } else {
          history.push("/user-registration");
          success(toast.success(response.data.message));
        }
      });
  };

  return (
    <>
      {/* <ToastContainer /> */}
      <Page clinic_name="Pragati Manav Seva Sansthan (PMSS) Raghogarh">
        <Box sx={{ pb: 5 }}>
          <Typography sx={{ textAlign: "center" }} variant="h4">
            DOCTOR REGISTRATION
          </Typography>
        </Box>
        <Formik
          key="one"
          enableReinitialize
          initialValues={{
            fname: "",
            lname: "",
            phone: "",
            email: "",
          }}
          validationSchema={Yup.object().shape({
            fname: Yup.string().required("First name  is required"),
            lname: Yup.string().required("Last name is required"),
            phone: Yup.string().required("Phone is required"),
            email: Yup.string().required("Email is required"),
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
                            <p className="mb-0">Register a new membership</p>
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
                                    placeholder="fname"
                                    label="First Name"
                                    type="text"
                                    name="fname"
                                  />
                                </div>
                              </div>
                              <ErrorMessage name="fname" />

                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <span className="input-group-text bg-transparent">
                                    <i className="ti-email"></i>
                                  </span>

                                  <Field
                                    className="form-control ps-15 bg-transparent"
                                    placeholder="lname"
                                    label="Last Name"
                                    type="text"
                                    name="lname"
                                  />
                                </div>
                              </div>
                              <ErrorMessage name="lname" />
                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <span className="input-group-text bg-transparent">
                                    <i className="ti-lock"></i>
                                  </span>

                                  <Field
                                    className="form-control ps-15 bg-transparent"
                                    placeholder="phone"
                                    label="Phone"
                                    type="text"
                                    name="phone"
                                  />
                                </div>
                              </div>
                              <ErrorMessage name="phone" />
                              <div className="form-group">
                                <div className="input-group mb-3">
                                  <span className="input-group-text bg-transparent">
                                    <i className="ti-lock"></i>
                                  </span>

                                  <Field
                                    className="form-control ps-15 bg-transparent"
                                    placeholder="email"
                                    label="Email"
                                    type="text"
                                    name="email"
                                  />
                                </div>
                              </div>
                              <ErrorMessage name="email" />
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
             
            </>
          )}
        </Formik>
      </Page>
    </>
  );
}
