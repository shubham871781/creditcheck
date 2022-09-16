import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
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
import {
  API_URL,
  DOCTORREGISTRATION,
  DOCTORSPECIALITY,
  DOCTORQUALIFICATION,
} from "../../../Apiconst/Apiconst";
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

export default function DoctorRegistration() {
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
  const [userReq, setUserReq] = useState([]);
  const [userSpeciality, setUserSpeciality] = useState([]);

  const [contractdetail, setcontractdetail] = useState({});
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);

  const [profile_photo, setProfile_photo] = useState("notset");
  const [digital_signature, setDigital_signature] = useState("notset");
  const [
    address_proof_of_clinic_regetration,
    setAddress_proof_of_clinic_regetration,
  ] = useState("notset");
  const [degree_certificate, setDegree_certificate] = useState("notset");
  const [doctor_regestration_no_proof, setDoctor_regestration_no_proof] =
    useState("notset");
  const [clinic_regestration_certificate, setClinic_regestration_certificate] =
    useState("notset");

  const onChange5 = ({ fileList }) => {
    setProfile_photo({ fileList });
  };
  const onChange = ({ fileList }) => {
    setDigital_signature({ fileList });
  };
  const onChange1 = ({ fileList }) => {
    setAddress_proof_of_clinic_regetration({ fileList });
  };
  const onChange2 = ({ fileList }) => {
    setDegree_certificate({ fileList });
  };
  const onChange3 = ({ fileList }) => {
    setDoctor_regestration_no_proof({ fileList });
  };
  const onChange4 = ({ fileList }) => {
    setClinic_regestration_certificate({ fileList });
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview1 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview2 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview3 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview4 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const onPreview5 = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFiles1, setSelectedFiles1] = useState([]);
  const [selectedFiles2, setSelectedFiles2] = useState([]);
  const [selectedFiles3, setSelectedFiles3] = useState([]);
  const [selectedFiles4, setSelectedFiles4] = useState([]);
  const [selectedFiles5, setSelectedFiles5] = useState([]);

  const [image, SetImage] = useState("notset");
  const [image1, SetImage1] = useState("notset");
  const [image2, SetImage2] = useState("notset");
  const [image3, SetImage3] = useState("notset");
  const [image4, SetImage4] = useState("notset");
  const [image5, SetImage5] = useState("notset");

  var resultdiv = {
    display: "flex",
  };

  const renderPhotos = (source) => {
    return source.map((photo) => {
      SetImage(photo);
      return <></>;
    });
  };
  const renderPhotos1 = (source) => {
    return source.map((photo) => {
      SetImage1(photo);
      return <></>;
    });
  };
  const renderPhotos2 = (source) => {
    return source.map((photo) => {
      SetImage2(photo);
      return <></>;
    });
  };
  const renderPhotos3 = (source) => {
    return source.map((photo) => {
      SetImage3(photo);
      return <></>;
    });
  };
  const renderPhotos4 = (source) => {
    return source.map((photo) => {
      SetImage4(photo);
      return <></>;
    });
  };
  const renderPhotos5 = (source) => {
    return source.map((photo) => {
      SetImage5(photo);
      return <></>;
    });
  };
  const onSubmit = (values, e) => {
    console.log(values);
    const url1 = `${API_URL}/${DOCTORREGISTRATION}`;
    var bodyFormData = new FormData();
    bodyFormData.append("registration_number", values.registration_number);
    bodyFormData.append("qualification_id", selected.value);
    bodyFormData.append("clinic_name", values.clinic_name);
    bodyFormData.append(
      "clinic_registration_number",
      values.clinic_registration_number
    );
    bodyFormData.append("bio", values.bio);
    bodyFormData.append("specilization_id", selected1.value);
    bodyFormData.append("experience_years", values.experience_years);
    bodyFormData.append("user_id", values.user_id);

    if (profile_photo.fileList) {
      for (var i = 0; i < profile_photo.fileList.length; i++) {
        bodyFormData.append(
          "profile_photo",
          profile_photo.fileList[i].originFileObj
        );
      }
    }
    if (digital_signature.fileList) {
      for (var i = 0; i < digital_signature.fileList.length; i++) {
        bodyFormData.append(
          "digital_signature",
          digital_signature.fileList[i].originFileObj
        );
      }
    }
    if (address_proof_of_clinic_regetration.fileList) {
      for (
        var i = 0;
        i < address_proof_of_clinic_regetration.fileList.length;
        i++
      ) {
        bodyFormData.append(
          "address_proof_of_clinic_regetration",
          address_proof_of_clinic_regetration.fileList[i].originFileObj
        );
      }
    }
    if (degree_certificate.fileList) {
      for (var i = 0; i < degree_certificate.fileList.length; i++) {
        bodyFormData.append(
          "degree_certificate",
          degree_certificate.fileList[i].originFileObj
        );
      }
    }
    if (doctor_regestration_no_proof.fileList) {
      for (var i = 0; i < doctor_regestration_no_proof.fileList.length; i++) {
        bodyFormData.append(
          "doctor_regestration_no_proof",
          doctor_regestration_no_proof.fileList[i].originFileObj
        );
      }
    }
    if (clinic_regestration_certificate.fileList) {
      for (
        var i = 0;
        i < clinic_regestration_certificate.fileList.length;
        i++
      ) {
        bodyFormData.append(
          "clinic_regestration_certificate",
          clinic_regestration_certificate.fileList[i].originFileObj
        );
      }
    }
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
          success(toast.success(response.data.message));
          history.push("/doctor-registration");
        }
      });
  };

  const [label, setlables] = useState();
  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${DOCTORQUALIFICATION}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserReq(data.response);
        console.log(data.response);
        let lablearray = [];
        for (let index = 0; index < data.response.length; index++) {
          lablearray.push({
            label: data.response[index].name || data.response[index].id,
            value: data.response[index].id,
          });
        }
        setlables(lablearray);
      });
  }, [state]);

  const [label1, setlables1] = useState();
  useEffect(() => {
    setLoading(true);
    const url = `${API_URL}/${DOCTORSPECIALITY}`;

    axios
      .get(url, {})
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setUserSpeciality(data.responce);
        console.log(data.responce);
        let lablearray1 = [];
        for (let index = 0; index < data.responce.length; index++) {
          lablearray1.push({
            label: data.responce[index].name || data.responce[index].id,
            value: data.responce[index].id,
          });
        }
        setlables1(lablearray1);
      });
  }, [state]);
  return (
    <>
      {/* <ToastContainer /> */}
      <Formik
        key="one"
        enableReinitialize
        initialValues={{
          registration_number: "",
          qualification_id: "",
          clinic_name: "",
          clinic_registration_number: "",
          bio: "",
          specilization_id: "",
          experience_years: "",
          user_id: "",
        }}
        // validationSchema={Yup.object().shape({
        //     // profile_photo: Yup.boolean()
        //     //     .required("Profile photo  is required"),
        //     registration_number: Yup.string()
        //         .required("Registration number is required"),
        //     qualification_id: Yup.string()
        //         .required("Qualification  is required"),
        //     clinic_name: Yup.string()
        //         .required("Clinic name is required"),
        //     clinic_registration_number: Yup.string()
        //         .required("Clinic registration number is required"),
        //     bio: Yup.string()
        //         .required("Bio is required"),
        //     specilization_id: Yup.string()
        //         .required("Specilization id is required"),
        //     experience_years: Yup.string()
        //         .required(" Experience years is require "),
        // })}
        onSubmit={(values) => {
          // if (selected.value && selected1.value) {
          //     onSubmit(values)
          // }

          onSubmit(values);
        }}
      >
        {({ setFieldValue, touched, values }) => (
          <>
            <div className="container h-p100">
              <div className="row align-items-center justify-content-md-center h-p100">
                <div className="col-12">
                  <div className="row justify-content-center g-0">
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="bg-white rounded10 shadow-lg">
                        <div className="content-top-agile p-20 pb-0">
                          <h2 className="text-primary">Get started with Us</h2>
                          <p className="mb-0">Get Otp By Phone</p>
                        </div>
                        <div className="p-40">
                          <Form key="oneForm">
                          {/* <label style={{textAlign : "center"}}> registration_number</label> */}
                            <div className="form-group">
                              <div className="input-group mb-3">
                               
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-user"></i>
                                </span>
      
                                <Field
                                  className="form-control ps-15 bg-transparent"
                                  placeholder="Enter your registration number"
                                  label="Registration_number1"
                                  type="text"
                                  name="registration_number"
                                  // className="registration_number1"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="registration_number" />
                            <div className="d-flex justify-content-between">
                            <div className="form-group">
                              <div className="input-group ">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-user"></i>
                                </span>
                                <Select
                                  options={label}
                                  onChange={setSelected}
                                  value={selected}
                                  selected={selected}
                                  placeholder="Select City"
                                  name="qualification_id"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="qualification_id" />

                         
                            <div className="form-group ">
                              <div className="input-group ">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-lock"></i>
                                </span>
                                <Select
                        
                                  options={label1}
                                  onChange={setSelected1}
                                  value={selected1}
                                  selected={selected1}
                                  placeholder="Select City"
                                  name="specilization_id"
                                />
                              </div>
                            </div>
                            </div>

                            <div className="form-group">
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-user"></i>
                                </span>

                                <Field
                                  className="form-control ps-15 bg-transparent"
                                  placeholder="Enter your clinic name"
                                  label="Clinic_name"
                                  type="text"
                                  name="clinic_name"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="clinic_name" />

                            <div className="form-group">
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-user"></i>
                                </span>

                                <Field
                                  className="form-control ps-15 bg-transparent"
                                  placeholder="Enter your clinic registration number"
                                  label="Clinic_registration_number"
                                  type="text"
                                  name="clinic_registration_number"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="clinic_registration_number" />

                            <div className="form-group">
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-email"></i>
                                </span>

                                <Field
                                  className="form-control ps-15 bg-transparent"
                                  placeholder="Enter your bio"
                                  label="Bio"
                                  type="text"
                                  name="bio"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="bio" />

                            <ErrorMessage name="specilization_id" />

                            <div className="form-group">
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-lock"></i>
                                </span>

                                <Field
                                  className="form-control ps-15 bg-transparent"
                                  placeholder="Enter your experience years"
                                  label="Experience_years"
                                  type="text"
                                  name="experience_years"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="experience_years" />

                            <div className="form-group">
                              <div className="input-group mb-3">
                                <span className="input-group-text bg-transparent">
                                  <i className="ti-lock"></i>
                                </span>

                                <Field
                                  className="form-control ps-15 bg-transparent"
                                  placeholder="Enter your user id"
                                  label="User_id"
                                  type="text"
                                  name="user_id"
                                />
                              </div>
                            </div>
                            <ErrorMessage name="user_id" />

                            <div className="row">
                              <Grid item xs={12} sm={6}>
                                <div className={classes.edit}>
                                  <div className="avatar-upload">
                                    <div>
                                      <Upload
                                        name="profile_photo"
                                        onChange={onChange5}
                                        onPreview={onPreview}
                                      >
                                        {"Choose profile"}
                                      </Upload>
                                    </div>
                                  </div>
                                </div>
                                {/* <ErrorMessage  name="profile_photo" /> */}
                              </Grid>

                              <Grid item xs={12} sm={6}>
                                <div className={classes.edit}>
                                  <div className="avatar-upload">
                                    <div>
                                      <Upload
                                        name="digital_signature"
                                        // listType="picture-card"
                                        onChange={onChange}
                                        onPreview={onPreview}
                                      >
                                        {"Add digital signature"}
                                      </Upload>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              {/* <ErrorMessage name="digital_signature" /> */}

                              <Grid item xs={12} sm={6}>
                                <div className={classes.edit}>
                                  <div className="avatar-upload">
                                    <div>
                                      <Upload
                                        name="address_proof_of_clinic_regetration"
                                        // listType="picture-card"
                                        onChange={onChange1}
                                        onPreview={onPreview1}
                                      >
                                        {
                                          "Add address proof of clinicregetration"
                                        }
                                      </Upload>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              {/* <ErrorMessage name="address_proof_of_clinic_regetration" /> */}

                              <Grid item xs={12} sm={6}>
                                <div className={classes.edit}>
                                  <div className="avatar-upload">
                                    <div>
                                      <Upload
                                        name="degree_certificate"
                                        // listType="picture-card"
                                        onChange={onChange2}
                                        onPreview={onPreview2}
                                      >
                                        {"Add degree certificate"}
                                      </Upload>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              {/* <ErrorMessage name="degree_certificate" /> */}

                              <Grid item xs={12} sm={6}>
                                <div className={classes.edit}>
                                  <div className="avatar-upload">
                                    <div>
                                      <Upload
                                        name="doctor_regestration_no_proof"
                                        // listType="picture-card"
                                        onChange={onChange3}
                                        onPreview={onPreview3}
                                      >
                                        {"Add doctor regestration no proof"}
                                      </Upload>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              {/* <ErrorMessage name="doctor_regestration_no_proof" /> */}

                              <Grid item xs={12} sm={6}>
                                <div className={classes.edit}>
                                  <div className="avatar-upload">
                                    <div>
                                      <Upload
                                        name="clinic_regestration_certificate"
                                        // listType="picture-card"
                                        onChange={onChange4}
                                        onPreview={onPreview4}
                                      >
                                        {"Add clinic regestration certificate"}
                                      </Upload>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                              {/* <ErrorMessage name="clinic_regestration_certificate" /> */}

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
                                                                label="Registration_number1"
                                                                type="text"
                                                                name="registration_number"
                                                                className="registration_number1"
                                                            />
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="Qualification_id"
                                                                type="text"
                                                                name="qualification_id"
                                                            />
                                                     </Grid>
                                                     <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="Clinic_name"
                                                                type="text"
                                                                name="clinic_name"
                                                            />
                                                     </Grid>
                                                     <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="Clinic_registration_number"
                                                                type="text"
                                                                name="clinic_registration_number"
                                                            />
                                                            </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="Bio"
                                                                type="text"
                                                                name="bio"
                                                            />
                                                            </Grid>
                                                <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="Specilization_id"
                                                                type="text"
                                                                name="specilization_id"
                                                            />
                                                      </Grid>
                                                      <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="Experience_years"
                                                                type="text"
                                                                name="experience_years"
                                                            />
                                                            </Grid>
                                                         <Grid item xs={12} sm={6}>
                                                            <TextField
                                                                label="User_id"
                                                                type="text"
                                                                name="user_id"
                                                            />
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
</Grid>
                                                </Form> */}
          </>
        )}
      </Formik>
      {/* </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Page> */}
    </>
  );
}
