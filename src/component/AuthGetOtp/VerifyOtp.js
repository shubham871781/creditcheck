import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
     TextField
} from "../../CommonFieldComponent/FormFields";
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
import { Link as RouterLink , useHistory } from 'react-router-dom';
import Page from '../../component/Page';
import { Formik, Form, Field ,ErrorMessage} from "formik";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { SectionWrapperStyled } from "./GetOtpFormStyle";
import { API_URL, VERIFYOTP } from "../../Apiconst/Apiconst";

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


function VerifyOtp() {
    const history = useHistory()
    const success = () => {};
  const classes = useStyles();
  const [userRequest, setUserRequest] = useState([]);

  const onSubmit = (values, e) => {
    const url1 = `${API_URL}/${VERIFYOTP}`;
    var bodyFormData = new FormData();
    bodyFormData.append("section", values.section);
    bodyFormData.append("phone_or_email", values.phone_or_email);
    bodyFormData.append("phone", values.phone);
    bodyFormData.append("otp", values.otp);
    axios
      .post(url1, bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.status === 200) {
           success(toast.success(response.data.message));
           history.push("/get-otp-by-mail");
        }else{
            history.push("/verfiy-otp");
            success(toast.success(response.data.message));
           
        }
      });
  };

  return (  
    <>    
      {/* <ToastContainer /> */}
                <Page clinic_name="Pragati Manav Seva Sansthan (PMSS) Raghogarh">
                    <Box sx={{ pb: 5 }}>
                        <Typography variant="h4">DOCTOR REGISTRATION</Typography>
                    </Box>

                    <Card className={classes.root} variant="outlined">

                        <CardContent>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                    <Formik
                                    key="one"
                                    enableReinitialize
                                    initialValues={{
                                        section: "registration",
                                        phone_or_email: "",
                                        phone: "",
                                        otp : "",
                                      
                                    }}
                                    validationSchema={Yup.object().shape({

                                        phone_or_email: Yup.string()
                                            .required("Phone or email is required"),
                                            phone: Yup.string()
                                            .required("Phone number is required"),
                                            otp: Yup.string()
                                            .required("Otp is required"),
                                    })}

                                    onSubmit={values => {
                                        onSubmit(values)
                                        console.log(values)
                                    }}

                                >
                                    {({ setFieldValue,
                                        touched,
                                        values, }) => (
                                        <>
                                                            <div className="container h-p100">
		<div className="row align-items-center justify-content-md-center h-p100">
			
			<div className="col-12">
				<div className="row justify-content-center g-0">
					<div className="col-lg-5 col-md-5 col-12">
						<div className="bg-white rounded10 shadow-lg">
							<div className="content-top-agile p-20 pb-0">
								<h2 className="text-primary">Verify Otp</h2>
								{/* <p className="mb-0">Verify Otp</p> */}
							</div>
							<div className="p-40">
								<Form key="oneForm" >
									<div className="form-group">
										<div className="input-group mb-3">
											<span className="input-group-text bg-transparent"><i className="ti-user"></i></span>
                                            <Field
                                               className="form-control ps-15 bg-transparent"
                                               placeholder="section"
                                                            label="section"
                                                            type="text"
                                                            name="section"
                                                            disabled
                                                        />
                                           
										</div>
									</div>
									<div className="form-group">
										<div className="input-group mb-3">
											<span className="input-group-text bg-transparent"><i className="ti-email"></i></span>
                                            <Field
                                               className="form-control ps-15 bg-transparent"
                                               placeholder="phone_or_email"
                                                            label="phone_or_email"
                                                            type="text"
                                                            name="phone_or_email"
                                                        />
                                           
										</div>
									</div>
                                    <ErrorMessage name="phone_or_email" />
									<div className="form-group">
										<div className="input-group mb-3">
											<span className="input-group-text bg-transparent"><i className="ti-lock"></i></span>
                                            <Field
                                               className="form-control ps-15 bg-transparent"
                                               placeholder="phone"
                                                            label="phone"
                                                            type="text"
                                                            name="phone"
                                                        />
                                          
                                                    
										</div>
									</div>
                                    <ErrorMessage name="phone" />
                                    <div className="form-group">
										<div className="input-group mb-3">
											<span className="input-group-text bg-transparent"><i className="ti-lock"></i></span>
                                            <Field
                                               className="form-control ps-15 bg-transparent"
                                               placeholder="otp"
                                                            label="otp"
                                                            type="text"
                                                            name="otp"
                                                        />
                                           
                                       
										</div>
									</div>
                                    <ErrorMessage name="otp" />
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
							  <a className="btn btn-social-icon btn-round btn-facebook" href="#"><i className="fa fa-facebook"></i></a>
							  <a className="btn btn-social-icon btn-round btn-twitter" href="#"><i className="fa fa-twitter"></i></a>
							  <a className="btn btn-social-icon btn-round btn-instagram" href="#"><i className="fa fa-instagram"></i></a>
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
                                </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Page>
             
    </>
  );
}


export default VerifyOtp