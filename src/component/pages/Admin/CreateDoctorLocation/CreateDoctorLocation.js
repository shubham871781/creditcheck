
import {API_URL, CREATEDOCTORLOCATION} from '../../../../Apiconst/Apiconst'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
     TextField
} from "../../../../CommonFieldComponent/FormFields";
import { 
    Button, 
} from "@mui/material";
import { Upload } from "antd";
import { makeStyles } from "@material-ui/styles";
// components
import { Link as RouterLink , useLocation} from 'react-router-dom';
import { Formik, Form } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import * as Yup from "yup";


const useStyles = makeStyles(theme => ({
    // tableOverflow: {
    //     overflow: 'auto'
    // },
    // submit: {
    //     top: "17px"
    // },
    // avatarpreview: {
    //     width: "136px",
    //     height: "131px"
    // },
    // svg: {
    //     display: "noneimportant"
    // }
}))

function CreateDoctorLocation() {
    const classes = useStyles();
    const success = () => { }

    const [userRequest, setUserRequest] = useState({
        user: null,
    });

    const onSubmit = (values, e) => {
        console.log(values)
          const url = `${API_URL}/${CREATEDOCTORLOCATION}`;
          var bodyFormData = new FormData();
          bodyFormData.append("name", values.name);
          bodyFormData.append("section", values.section);
          axios
          .post(url, bodyFormData,
              {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                  }
              })
          .then((response) => {

              if (response.status === 200) {
                  success(toast.success(response.data.message))
              }
          })
    }
  return (
    <>
          <Formik
                                        key="one"
                                        enableReinitialize
                                        initialValues={{
                                            name: "",
                                            section: "",
                                        }}
                                        validationSchema={Yup.object().shape({
                                            name: Yup.string()
                                                .required("Name  is required"),
                                                section: Yup.string()
                                                .required("Section is required"),
                                        
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
                                              <div className="content-wrapper">
        <div className="container-full">
          {/* <!-- Content Header (Page header) --> */}
          <div className="content-header">
            {/* <div className="d-flex align-items-center"> */}
              {/* <div className="me-auto"> */}
                <h4 className="page-title">Patients</h4>
                {/* <div className="d-inline-block align-items-center"> */}
                                                <Form key="oneForm">
                                                 
                                                            <TextField
                                                                label="Name"
                                                                type="text"
                                                                name="name"
                                                                className="registration_number1"
                                                            />
                                                    
                                                            <TextField
                                                                label="Section"
                                                                type="text"
                                                                name="section"
                                                            />
                                                     
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
                                                </div>
</div>
</div>
{/* </div> */}
{/* </div> */}
{/* </div> */}
                                            </>
                                        )}
                                    </Formik>
                
    </>
  )
}

export default CreateDoctorLocation