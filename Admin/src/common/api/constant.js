
export const ADDFAQ = "Faq/addfaq";
export const SINGLEFAQDATA = "Faq/getsingledata";
export const FAQTYPE = "Faq/getallfaqdata";
export const GETALLFAQ = "Faq/getalldata";
export const UPDATEFAQ = "Faq/updatefaq";
export const DELETEFAQ ="Faq/deletefaq";

export const ADDREPORT = "report/addreport";
export const GETREPORT = "report/getallreportdata";
export const UPDATEREPORT = "report/getsingledata";
export const UPDATEDATA = "report/updatereport";
export const DELETEREPORT = "report/deletereport";

export const ADMINLOGIN ="admin_login/login";

export const ABOUTUSSINGLE = "aboutus/getsingledata";
export const ADDDATA ="aboutus/adddata";
export const UPDATEABOUT = "aboutus/updatedata";

export const USERSINGLE = "users/getsingledata";
export const USERUPDATE = "users/updatestatus";
export const GETALLUSER = "users/getall";

export const CHAT = "chat/addchat";
export const SHOW = "chat/singlechat";
export const SHOWCOUNT = "chat/showcount";
export const UPDATECOUNT = "chat/updateCount";
export const PROFILE = "admin_profile/profile_detail";
export const UPDATEPROFILE = "admin_profile/update_profile_detail";
export const RESETPASSWORD = "admin_login/resetPassword";
export const IMAGEUPLOAD = "admin_profile/imageupload";


export const API_URL = "http://localhost:8000";

console.log(API_URL)

export const CHAT_URL = process.env.REACT_APP_CHAT_URL
