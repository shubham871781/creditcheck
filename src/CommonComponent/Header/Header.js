import React, { useState } from "react";
import { Link, useLocation , usehistory} from "react-router-dom";
import { TOKEN } from "../../InnerComponent/Route/index";
import DoctorRegistration from "../Register/DoctorRegistration/DoctorRegistration";
import {
  Box,
  Button,
  Typography,
  Modal
} from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Header() {
  const location = useLocation();
  let locationpath = location.pathname;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {locationpath === "/modal-register" ||
      locationpath === "/doctor-registration" ||
      locationpath === "/" ||
      locationpath === "/user-registration" ? (
        <>
          {locationpath === "/doctor-registration" || locationpath === "/user-registration" ? (
            <></>
          ) : (
            <>
             <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Link to="/doctor-registration">DoctorRegister-Form</Link>
          </Typography>
          <hr/>
          <Typography id="modal-modal-description" variant="h6" component="h2">
          <Link to="/user-registration">UserRegistration-Form </Link>.
          </Typography>
        </Box>
      </Modal>
             
             
            </>
          )}
        </>
      ) : (
        <>
          <div>
            <header className="main-header">
              <div className="d-flex align-items-center logo-box justify-content-start">
                {/* <!-- Logo --> */}
                <Link to="/" className="logo">
                  {/* <!-- logo--> */}
                  <div className="logo-mini w-50">
                    <span className="light-logo">
                      <img src="images/logo-letter.png" alt="logo" />
                    </span>
                    <span className="dark-logo">
                      <img src="images/logo-letter.png" alt="logo" />
                    </span>
                  </div>
                  <div className="logo-lg">
                    <span className="light-logo">
                      <img src="images/logo-dark-text.png" alt="logo" />
                    </span>
                    <span className="dark-logo">
                      <img src="images/logo-light-text.png" alt="logo" />
                    </span>
                  </div>
                </Link>
              </div>
              {/* <!-- Header Navbar --> */}
              <nav className="navbar navbar-static-top">
                {/* <!-- Sidebar toggle button--> */}
                <div className="app-menu">
                  <ul className="header-megamenu nav">
                    <li className="btn-group nav-item">
                      <a
                        href="#"
                        className="waves-effect waves-light nav-link push-btn btn-primary-light"
                        data-toggle="push-menu"
                        role="button"
                      >
                        <i data-feather="align-left"></i>
                      </a>
                    </li>
                    <li className="btn-group d-lg-inline-flex d-none">
                      <div className="app-menu">
                        <div className="search-bx mx-5">
                          <form>
                            <div className="input-group">
                              <input
                                type="search"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon2"
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn"
                                  type="submit"
                                  id="button-addon3"
                                >
                                  <i data-feather="search"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="navbar-custom-menu r-side">
                  <ul className="nav navbar-nav">
                    <li className="btn-group nav-item d-lg-inline-flex d-none">
                      <a
                        href="#"
                        data-provide="fullscreen"
                        className="waves-effect waves-light nav-link full-screen btn-warning-light"
                        title="Full Screen"
                      >
                        <i data-feather="maximize"></i>
                      </a>
                    </li>
                    {/* <!-- Notifications --> */}
                    <li className="dropdown notifications-menu">
                      <a
                        href="#"
                        className="waves-effect waves-light dropdown-toggle btn-info-light"
                        data-bs-toggle="dropdown"
                        title="Notifications"
                      >
                        <i data-feather="bell"></i>
                      </a>
                      <ul className="dropdown-menu animated bounceIn">
                        <li className="header">
                          <div className="p-20">
                            <div className="flexbox">
                              <div>
                                <h4 className="mb-0 mt-0">Notifications</h4>
                              </div>
                              <div>
                                <a href="#" className="text-danger">
                                  Clear All
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          {/* <!-- inner menu: contains the actual data --> */}
                          <ul className="menu sm-scrol">
                            <li>
                              <a href="#">
                                <i className="fa fa-users text-info"></i>{" "}
                                Curabitur id eros quis nunc suscipit blandit.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-warning text-warning"></i>{" "}
                                Duis malesuada justo eu sapien elementum, in
                                semper diam posuere.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-users text-danger"></i>{" "}
                                Donec at nisi sit amet tortor commodo porttitor
                                pretium a erat.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-shopping-cart text-success"></i>{" "}
                                In gravida mauris et nisi
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-user text-danger"></i>{" "}
                                Praesent eu lacus in libero dictum fermentum.
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-user text-primary"></i> Nunc
                                fringilla lorem
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-user text-success"></i>{" "}
                                Nullam euismod dolor ut quam interdum, at
                                scelerisque ipsum imperdiet.
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="footer">
                          <a href="#">View all</a>
                        </li>
                      </ul>
                    </li>

                    {/* <!-- Control Sidebar Toggle Button --> */}
                    <li className="btn-group nav-item">
                      <a
                        href="#"
                        data-toggle="control-sidebar"
                        title="Setting"
                        className="waves-effect full-screen waves-light btn-danger-light"
                      >
                        <i data-feather="settings"></i>
                      </a>
                    </li>

                    {/* <!-- User Account--> */}
                    <li className="dropdown user user-menu">
                      <a
                        href="#"
                        className="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent py-0 no-shadow"
                        data-bs-toggle="dropdown"
                        title="User"
                      >
                        <div className="d-flex pt-5">
                          <div className="text-end me-10">
                            <p className="pt-5 fs-14 mb-0 fw-700 text-primary">
                              Johen Doe
                            </p>
                            <small className="fs-10 mb-0 text-uppercase text-mute">
                              Admin
                            </small>
                          </div>
                          <img
                            src="images/avatar-1.png"
                            className="avatar rounded-10 bg-primary-light h-40 w-40"
                            alt
                          />
                        </div>
                      </a>
                      <ul className="dropdown-menu animated flipInX">
                        <li className="user-body">
                          <a className="dropdown-item" href="#">
                            <i className="ti-user text-muted me-2"></i> Profile
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ti-wallet text-muted me-2"></i> My
                            Wallet
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ti-settings text-muted me-2"></i>{" "}
                            Settings
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                            <i className="ti-lock text-muted me-2"></i> Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
