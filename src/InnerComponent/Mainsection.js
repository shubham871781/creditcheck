import React from "react";
import { useLocation } from "react-router-dom";
import PrivateRoute from "../InnerComponent/Route/PrivateRoute";

// Admin
// import Admin from "../component/pages/Admin/Admin";
// import Admindata from "../component/pages/Admin/Admindata";
// import AdminDataAdd from "../component/pages/Admin/AdminDataAdd";

//User
// import User from "../component/pages/User/User";
// import AddUser from "../component/pages/User/AddUser";
// import UserData from "../component/pages/User/UserData";

//Doctor
// import Doctor from "../component/pages/Doctor/Doctor";
// import Doctordata from "../component/pages/Doctor/Doctordata";
// import DoctorDataAdd from "../component/pages/Doctor/DoctorDataAdd";
import { TOKEN } from "./Route/index";
// import RegistrationForm from "../CommonComponent/Register/RegistrationForm";
import Dashboard from "../CommonComponent/Dashboard/Dashboard";
import Patient from "../component/pages/User/Patient/Patient";
import ViewAllDoctor from "../component/pages/Doctor/ViewAllDoctor/ViewAllDoctor";
import CreateDoctorLocation from "../component/pages/Admin/CreateDoctorLocation/CreateDoctorLocation";
import EditDoctor from "../component/pages/Doctor/EditDoctor/EditDoctor";
import TakeAppointment from "../component/pages/Doctor/TakeAppointment/TakeAppointment";
import BookAppoinments from "../component/pages/User/BookAppoinments/BookAppoinments";
import TakeAppoinments from "../component/pages/User/TakeAppoinments/TakeAppoinments";
import DoctorTiming from "../component/pages/User/DoctorTiming/DoctorTiming";
import DoctorRatingReview from "../component/pages/User/DoctorRatingReview/DoctorRatingReview";

const Mainsection = () => {
  const location = useLocation();
  let locationpath = location.pathname;
  let userrole = localStorage.getItem(TOKEN);
  const Pathswich = () => {
    switch (locationpath) {
      // Admin route
      case "/dashboard-admin":
        return { ComponentName: <Dashboard />, Pathvalue: "dashboard-admin" };
      case "/create-doctor-location":
        return { ComponentName: <CreateDoctorLocation />, Pathvalue: "create-doctor-location" };

      // user route

      case "/dashboard-user":
        return { ComponentName: <Dashboard />, Pathvalue: "dashboard-user" };
      case "/view-all-doctor":
        return { ComponentName: <ViewAllDoctor />, Pathvalue: "view-all-doctor" };
        case "/book-appoinment":
          return { ComponentName: <BookAppoinments />, Pathvalue: "book-appoinment" };
          case "/take-appoinment":
            return { ComponentName: <TakeAppoinments />, Pathvalue: "take-appoinment" };
            case "/doctor-timing":
              return { ComponentName: <DoctorTiming />, Pathvalue: "doctor-timing" };
              case "/doctor-rating":
                return { ComponentName: <DoctorRatingReview />, Pathvalue: "doctor-rating" };
                    

      //Doctor copmpontens
      case "/dashboard-doctor":
        return { ComponentName: <Dashboard />, Pathvalue: "dashboard-doctor" };
      case "/patient-doctor":
        return { ComponentName: <Patient />, Pathvalue: "patient-doctor" };
      case "/doctor-edit":
        return { ComponentName: <EditDoctor />, Pathvalue: "doctor-edit/:id" };
        case "/take-appointment":
        return { ComponentName: <TakeAppointment />, Pathvalue: "take-appointment" };
    }
  };
  return (
    <>
      {/* {userrole === 'user'
                ?
                <> */}
       <div className="main-content">
        <div className="container-fluid no-gutters p-0">

          {/* User page route */}
          <PrivateRoute exact path="/dashboard-user" component={Dashboard} />
          <PrivateRoute exact path="/patient-user" component={Patient} />
          <PrivateRoute exact path="/book-appoinment" component={BookAppoinments} />
          <PrivateRoute exact path="/take-appoinment" component={TakeAppoinments} />
          <PrivateRoute exact path="/doctor-timing" component={DoctorTiming} />
          <PrivateRoute exact path="/doctor-rating" component={DoctorRatingReview} />


          {/* Admin page route */}
          <PrivateRoute exact path="/dashboard-admin" component={Dashboard} />
          <PrivateRoute exact path="/create-doctor-location" component={CreateDoctorLocation} />

          {/* Doctor page route */}
          <PrivateRoute exact path="/dashboard-doctor" component={Dashboard} />
          <PrivateRoute exact path="/view-all-doctor" component={ViewAllDoctor} />
          <PrivateRoute exact path="/doctor-edit/:id" component={EditDoctor} />
          <PrivateRoute exact path="/take-appointment" component={TakeAppointment} />
 

        </div>
      </div>
 
    </>
  );
};
export default Mainsection;
