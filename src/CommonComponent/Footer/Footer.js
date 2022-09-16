import React from "react";
import { Link, useLocation } from "react-router-dom";
function Footer() {
    const location = useLocation()
    let locationpath = location.pathname;
  return (
    <div>
        {locationpath === "/modal-register" ||
      locationpath === "/doctor-registration" ||
      locationpath === "/" ||
      locationpath === "/user-registration"   ? (
        <></>
      ) : (
        <>
          <footer className="main-footer">
            <div className="pull-right d-none d-sm-inline-block">
              <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Purchase Now
                  </Link>
                </li>
              </ul>
            </div>
            &copy; <script>document.write(new Date().getFullYear())</script>{" "}
            <Link to="https://www.multipurposethemes.com/">
              Multipurpose Themes
            </Link>
            . All Rights Reserved.
          </footer>
        </>
      )}
    </div>
  );
}

export default Footer;
