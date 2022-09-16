import Sidebar from "../InnerComponent/Sidebar/Sidebar";
import Header from "../CommonComponent/Header/Header";
import Footer from "../CommonComponent/Footer/Footer";

import Mainsection from "../InnerComponent/Mainsection";
import { TOKEN } from "./Route/index";
import { Redirect } from "react-router-dom";
import LoginFrom from "../component/Auth/LoginFrom";
let userrole = localStorage.getItem(TOKEN);
var sidenav = [];
if (userrole === "admin") {
  sidenav = [
    { name: "Dashboard", label: "Dashboard", link: "/dashboard-admin" },
    { name: "CreateDoctorLocation", label: "Doctor-Location", link: "/create-doctor-location" }
  ];
} else if (userrole === "doctor") {
  sidenav = [
    { name: "Dashboard", label: "Dashboard", link: "/dashboard-doctor" },
    { name: "Doctor-List", label: "Doctor-List", link: "/view-all-doctor" },
    { name: "Take-Appointment", label: "Take-Appointment", link: "/take-appointment" }

  ];
} else if (userrole === "user") {
  sidenav = [
    { name: "Dashboard", label: "Dashboard", link: "/dashboard-user" },
    { name: "Patients", label: "Patients", link: "/patient-user" },
    { name: "Book Appoinments", label: "Book Appoinments", link: "/book-appoinment" },
    { name: "Take Appoinments", label: "Take Appoinments", link: "/take-appoinment" },
    { name: "Doctor Timing", label: "Doctor Timing", link: "/doctor-timing" },
    { name: "Doctor Rating", label: "Doctor Rating", link: "/doctor-rating" },

  ];
}

function Main() {
  return (
    <>
     
      {userrole === null ? (<>
      <LoginFrom/>
      </>) :(
       <>
         <Header />
        <Sidebar sidenav={sidenav}/>
       </>
       )}
        <Mainsection />
    
    </>
  );
}

export default Main;
