import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import axios from 'axios';
import {
     TextField
} from "../../../../CommonFieldComponent/FormFields";
import Page from '../../../Page';
import { 
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    Box, 
} from "@mui/material";
// import {
//     Grid,
//     Typography,
//     Button,
//     Card,
//     CardContent,
//     Box,
// } from "@mui/material";
import { Upload } from "antd";
import { makeStyles } from "@material-ui/styles";
import * as Yup from "yup";
import {API_URL, GETSINGLEDOCTOR, EDITDOCTOR} from '../../../../Apiconst/Apiconst'

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

function EditDoctor() {
    const {id} = useParams()
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const success = () => { }
    // const {state}=useLocation();
    const { setValue } = useForm();
    const [region, SetselectRegion] = useState('');
    const [city, SetselectCity] = useState('');
    const classes = useStyles();
    const [userRequest, setUserRequest] = useState({
        user: null,
    });
    const [contractdetail, setcontractdetail] = useState({});
    useEffect(() => {
        setLoading(true)
        const url = `${API_URL}/${GETSINGLEDOCTOR}/${id}/`;

        axios.get(url, 
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then(response => response.data)
            .then((data) => {
                setLoading(false)
                setUserRequest({
                    user: data.response[0]
                });
            })

    }, []);
    const { user } = userRequest;
    if (user) {
        setValue('registration_number', user.registration_number);
        setValue('qualification_id', user.qualification_id);
        setValue('clinic_name', user.clinic_name);
        setValue('clinic_registration_number', user.clinic_registration_number);
        setValue('bio', user.bio);
        setValue('specilization_id', user.specilization_id);
        setValue('experience_years', user.experience_years);
        setValue('user_id', user.user_id);
    }
    const [profile_photo, setProfile_photo] = useState("notset");
    const [digital_signature, setDigital_signature] = useState("notset");
    const [address_proof_of_clinic_regetration, setAddress_proof_of_clinic_regetration] = useState("notset");
    const [degree_certificate, setDegree_certificate] = useState("notset");
    const [doctor_regestration_no_proof, setDoctor_regestration_no_proof] = useState("notset");
    const [clinic_regestration_certificate, setClinic_regestration_certificate] = useState("notset");



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
   const onChange5 = ({ fileList }) => {
    setProfile_photo({ fileList });
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
  };  const renderPhotos2 = (source) => {
    return source.map((photo) => {
        SetImage2(photo);
        return <></>;
    });
};  const renderPhotos3 = (source) => {
  return source.map((photo) => {
      SetImage3(photo);
      return <></>;
  });
};  const renderPhotos4 = (source) => {
  return source.map((photo) => {
      SetImage4(photo);
      return <></>;
  });
};  const renderPhotos5 = (source) => {
  return source.map((photo) => {
      SetImage5(photo);
      return <></>;
  });
};
    const onSubmit1 = (values, e) => {
        const url1 = `${API_URL}/${EDITDOCTOR}`;
        var bodyFormData = new FormData();
        bodyFormData.append("doctor_id", user.id);
        bodyFormData.append("registration_number", values.registration_number);
        bodyFormData.append("qualification_id", values.qualification_id);
        bodyFormData.append("clinic_name", values.clinic_name);
        bodyFormData.append("clinic_registration_number", values.clinic_registration_number);
        bodyFormData.append("bio", values.bio);
        bodyFormData.append("specilization_id", values.specilization_id);
        bodyFormData.append("experience_years", values.experience_years);
        bodyFormData.append("user_id", values.user_id);

        if (profile_photo.fileList) {
          for (var i = 0; i < profile_photo.fileList.length; i++) {
              bodyFormData.append("profile_photo", profile_photo.fileList[i].originFileObj);
          }
      }
        if (digital_signature.fileList) {
          for (var i = 0; i < digital_signature.fileList.length; i++) {
              bodyFormData.append("digital_signature", digital_signature.fileList[i].originFileObj);
          }
        } if (address_proof_of_clinic_regetration.fileList) {
          for (var i = 0; i < address_proof_of_clinic_regetration.fileList.length; i++) {
            bodyFormData.append("address_proof_of_clinic_regetration", address_proof_of_clinic_regetration.fileList[i].originFileObj);
           }
        } if (degree_certificate.fileList) {
          for (var i = 0; i < degree_certificate.fileList.length; i++) {
          bodyFormData.append("degree_certificate", degree_certificate.fileList[i].originFileObj);
         }
       } if (doctor_regestration_no_proof.fileList) {
        for (var i = 0; i < doctor_regestration_no_proof.fileList.length; i++) {
        bodyFormData.append("doctor_regestration_no_proof", doctor_regestration_no_proof.fileList[i].originFileObj);
        }
       } if (clinic_regestration_certificate.fileList) {
       for (var i = 0; i < clinic_regestration_certificate.fileList.length; i++) {
         bodyFormData.append("clinic_regestration_certificate", clinic_regestration_certificate.fileList[i].originFileObj);
         }
}
        axios
            .put(url1, bodyFormData,
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
            <Page title="Edit-Doctor">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Edit-Doctor</Typography>
                </Box>

                <Card className={classes.root} variant="outlined">

                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                    <Formik
                                        key="one"
                                        enableReinitialize
                                        initialValues={{
                                            registration_number: (user && user.registration_number) ? user.registration_number : "" ,
                                            qualification_id: (user && user.qualification_id) ? user.qualification_id : "",
                                            clinic_name: (user && user.clinic_name) ? user.clinic_name : "",
                                            clinic_registration_number: (user && user.clinic_registration_number) ? user.clinic_registration_number : "",
                                            bio: (user && user.bio) ? user.bio : "",
                                            specilization_id: (user && user.specilization_id) ? user.specilization_id : "",
                                            experience_years: (user && user.experience_years) ? user.experience_years : "",
                                            user_id: (user && user.user_id) ? user.user_id : "",
                                        }}
                                        // validationSchema={Yup.object().shape({
                                        //     metadescription: Yup.string()
                                        //         .required("Meta Description  is required"),
                                        //     metakeywords: Yup.string()
                                        //         .required("Meta Keywords is required"),
                                        //     metaauthor: Yup.string()
                                        //         .required("Meta Author is required"),
                                        //     websitetitle: Yup.string()
                                        //         .required("Website Title is required"),
                                        //     footertitle: Yup.string()
                                        //         .required("Footer Title is required"),
                                        //     footercopyright: Yup.string()
                                        //         .required("Footer Copyright is required"),
                                        //     facebook_url: Yup.string()
                                        //         .matches(URL, "Enter valid Facebook Url.")
                                        //         .required("Facebook Url is required"),
                                        //     instragram_url: Yup.string()
                                        //         .required("Instragram Url is required")
                                        //         .matches(URL, "Enter valid Instragram Url"),
                                        //     twitter_url: Yup.string()
                                        //         .matches(URL, "Enter valid Twitter Url.")
                                        //         .required("Twitter Url is required"),
                                        //     youtube_url: Yup.string()
                                        //         .matches(URL, "Enter valid Youtube Url.")
                                        //         .required("Youtube Url is required"),
                                        //     })}
                                        onSubmit={values => {
                                            onSubmit1(values)
                                            console.log(values)
                                            // console.log(values.user[0].logoimage)

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
                                         <Grid item xs={12} sm={6}>
                                               <div className={classes.edit}>
                                                 <div className="avatar-upload">
                                                     <div className={classes.avatarpreview}>
                                                   {profile_photo == "notset" &&
                                                                    user &&
                                                                    user.profile_photo ? (
                                                                    <img
                                                                        src={
                                                                          
                                                                            user.profile_photo 
                                                                           
                                                                        }
                                                                        className=""
                                                                        alt="user image"
                                                                        width="100"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{
                                                                            backgroundImage: "url(" + profile_photo + ")",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                     </div>
                                                     <div
                                                         className="result"
                                                         style={resultdiv}
                                                         id="file-image"
                                                     >
                                                         {renderPhotos(selectedFiles)}
                                                     </div>
                                                     <div>
                                                         <Upload
                                                             name="profile_photo"
                                                             listType="picture-card"
                                                             onChange={onChange5}
                                                             onPreview={onPreview5}
                                                         >
                                                             {"profile_photo" }
                                                         </Upload>
                                                     </div>
                                                 </div>
                                             </div>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                             <div className={classes.edit}>
                                                 <div className="avatar-upload">
                                                     <div className={classes.avatarpreview}>
                                                     {digital_signature == "notset" &&
                                                                    user &&
                                                                    user.digital_signature ? (
                                                                    <img
                                                                        src={
                                                                          
                                                                            user.digital_signature 
                                                                           
                                                                        }
                                                                        className=""
                                                                        alt="user image"
                                                                        width="100"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{
                                                                            backgroundImage: "url(" + digital_signature + ")",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                     </div>
                                                     <div
                                                         className="result"
                                                         style={resultdiv}
                                                         id="file-image"
                                                     >
                                                         {renderPhotos1(selectedFiles1)}
                                                     </div>
                                                     <div>
                                                         <Upload
                                                             name="digital_signature"
                                                             listType="picture-card"
                                                             onChange={onChange}
                                                             onPreview={onPreview}
                                                         >
                                                             {"digital_signature"}
                                                         </Upload>
                                                     </div>
                                                 </div>
                                             </div>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                             <div className={classes.edit}>
                                                 <div className="avatar-upload">
                                                     <div className={classes.avatarpreview}>
                                                     {address_proof_of_clinic_regetration == "notset" &&
                                                                    user &&
                                                                    user.address_proof_of_clinic_regetration ? (
                                                                    <img
                                                                        src={
                                                                          
                                                                            user.address_proof_of_clinic_regetration 
                                                                           
                                                                        }
                                                                        className=""
                                                                        alt="user image"
                                                                        width="100"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{
                                                                            backgroundImage: "url(" + address_proof_of_clinic_regetration + ")",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                     </div>
                                                     <div
                                                         className="result"
                                                         style={resultdiv}
                                                         id="file-image"
                                                     >
                                                         {renderPhotos2(selectedFiles2)}
                                                     </div>
                                                     <div>
                                                         <Upload
                                                             name="address_proof_of_clinic_regetration"
                                                             listType="picture-card"
                                                             onChange={onChange1}
                                                             onPreview={onPreview1}
                                                         >
                                                             {"address_proof_of_clinic_regetration"}
                                                         </Upload>
                                                     </div>
                                                 </div>
                                             </div>
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                             <div className={classes.edit}>
                                                 <div className="avatar-upload">
                                                     <div className={classes.avatarpreview}>
                                                     {degree_certificate == "notset" &&
                                                                    user &&
                                                                    user.degree_certificate ? (
                                                                    <img
                                                                        src={
                                                                          
                                                                            user.degree_certificate 
                                                                           
                                                                        }
                                                                        className=""
                                                                        alt="user image"
                                                                        width="100"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{
                                                                            backgroundImage: "url(" + degree_certificate + ")",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                     </div>
                                                     <div
                                                         className="result"
                                                         style={resultdiv}
                                                         id="file-image"
                                                     >
                                                         {renderPhotos3(selectedFiles3)}
                                                     </div>
                                                     <div>
                                                         <Upload
                                                             name="degree_certificate"
                                                             listType="picture-card"
                                                             onChange={onChange2}
                                                             onPreview={onPreview2}
                                                         >
                                                             {"degree_certificate"}
                                                         </Upload>
                                                     </div>
                                                 </div>
                                             </div> 
                                             </Grid>
                                             <Grid item xs={12} sm={6}>
                                             <div className={classes.edit}>
                                                 <div className="avatar-upload">
                                                     <div className={classes.avatarpreview}>
                                                     {doctor_regestration_no_proof == "notset" &&
                                                                    user &&
                                                                    user.doctor_regestration_no_proof ? (
                                                                    <img
                                                                        src={
                                                                          
                                                                            user.doctor_regestration_no_proof 
                                                                           
                                                                        }
                                                                        className=""
                                                                        alt="user image"
                                                                        width="100"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{
                                                                            backgroundImage: "url(" + doctor_regestration_no_proof + ")",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                     </div>
                                                     <div
                                                         className="result"
                                                         style={resultdiv}
                                                         id="file-image"
                                                     >
                                                         {renderPhotos4(selectedFiles4)}
                                                     </div>
                                                     <div>
                                                         <Upload
                                                             name="doctor_regestration_no_proof"
                                                             listType="picture-card"
                                                             onChange={onChange3}
                                                             onPreview={onPreview3}
                                                         >
                                                             {"doctor_regestration_no_proof"}
                                                         </Upload>
                                                     </div>
                                                 </div>
                                             </div>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                             <div className={classes.edit}>
                                                 <div className="avatar-upload">
                                                     <div className={classes.avatarpreview}>
                                                     {clinic_regestration_certificate == "notset" &&
                                                                    user &&
                                                                    user.clinic_regestration_certificate ? (
                                                                    <img
                                                                        src={
                                                                          
                                                                            user.clinic_regestration_certificate 
                                                                           
                                                                        }
                                                                        className=""
                                                                        alt="user image"
                                                                        width="100"
                                                                    />
                                                                ) : (
                                                                    <div
                                                                        id="imagePreview"
                                                                        style={{
                                                                            backgroundImage: "url(" + clinic_regestration_certificate + ")",
                                                                        }}
                                                                    ></div>
                                                                )}
                                                     </div>
                                                     <div
                                                         className="result"
                                                         style={resultdiv}
                                                         id="file-image"
                                                     >
                                                         {renderPhotos5(selectedFiles5)}
                                                     </div>
                                                     <div>
                                                         <Upload
                                                             name="clinic_regestration_certificate"
                                                             listType="picture-card"
                                                             onChange={onChange4}
                                                             onPreview={onPreview4}
                                                         >
                                                             {"clinic_regestration_certificate"}
                                                         </Upload>
                                                     </div>
                                                 </div>
                                             </div>
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

export default EditDoctor