import "./App.css";
import { Switch } from "react-router-dom";
import LoginFrom from "./component/Auth/LoginFrom";
import PublicRoute from "./InnerComponent/Route/PublicRoute";
import Header from "./CommonComponent/Header/Header";
import Footer from "./CommonComponent/Footer/Footer";
import Main from "./InnerComponent/Main";
import DoctorRegistration from "./CommonComponent/Register/DoctorRegistration/DoctorRegistration";
import UserRegistration from "./CommonComponent/Register/UserRegistration/UserRegistration";
import GetOtp from "./component/AuthGetOtp/GetOtp";
import VerifyOtp from "./component/AuthGetOtp/VerifyOtp";
import RegistrationFormModal from "./component/AuthGetOtp/Common/RegistrationFormModal";
import LoginVerification from "./component/Auth/LoginVerification";
import TabGroup from './component/AuthGetOtp/Common/TabGroup/TabGroup'
import VerifyOtpByEmail from "./component/AuthGetOtp/Common/VerifyOtpByEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetOtpByEmail from "./component/AuthGetOtp/Common/GetOtpByEmail";

function App() {
  return (
    <>
    <ToastContainer />
        <PublicRoute
          exact 
          path={["/modal-register"]}
          component={Header}
        />
      <Switch>
        <PublicRoute 
        exact 
        path="/" 
        restricted={false}
        component={LoginFrom} 
        />
             <PublicRoute 
        exact 
        path="/get-otp" 
        restricted={false}
        component={GetOtp} 
        />
              <PublicRoute 
        exact 
        path="/get-otp-by-mail" 
        restricted={false}
        component={GetOtpByEmail} 
        />
         <PublicRoute 
        exact 
        path="/login-verfication" 
        restricted={false}
        component={LoginVerification} 
        />
          <PublicRoute 
        exact 
        path="/login" 
        restricted={false}
        component={LoginFrom} 
        />
        <PublicRoute 
        exact 
        path="/doctor-registration" 
        restricted={false}
        component={DoctorRegistration} 
        />
         <PublicRoute 
        exact 
        path="/user-registration" 
        restricted={false}
        component={UserRegistration} 
        />
         <PublicRoute 
        exact 
        path="/verfiy-otp" 
        restricted={false}
        component={VerifyOtp} 
        />
         <PublicRoute 
        exact 
        path="/verfiy-otp-email" 
        restricted={false}
        component={VerifyOtpByEmail} 
        />
           {/* <PublicRoute 
        exact 
        path="/modal-register" 
        restricted={false}
        component={RegistrationFormModal} 
        /> */}
        <Main />
      </Switch>
      <PublicRoute
          exact
          path={["/modal-register"]}
          component={Footer}
        />
      
    </>
  );
}

export default App;
