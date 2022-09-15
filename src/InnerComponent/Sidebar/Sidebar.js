import React from "react";
import { Link } from "react-router-dom";
import { SidebarstyleWrapperStyled } from "./Sidebarstyle";

function Sidebar({ sidenav }) {
  console.log(sidenav);

  return (
    <>
      <div>
        <aside className="main-sidebar">
          {/* <!-- sidebar--> */}
          <section className="sidebar position-relative">
            <div className="help-bt">
              <Link to="/" className="d-flex align-items-center">
                <div className="bg-danger rounded10 h-50 w-50 l-h-50 text-center me-15">
                  <i data-feather="mic"></i>
                </div>
                <h4 className="mb-0">
                  Emergency
                  <br />
                  help
                </h4>
              </Link>
            </div>
            <div className="multinav">
              <div className="multinav-scroll" style={{ height: "100%" }}>
                {/* <!-- sidebar menu--> */}

                <ul className="sidebar-menu" data-widget="tree">
               
                  {sidenav.map(({ label, name, link }) => (
                    <li className="treeview" key={name}>
                      <Link className="nav-link collapsed" exact to={link}>
                      <i data-feather="users"></i>
                        <span>{label}</span>
                      </Link>
                      <hr className="sidebar-divider " />
                    </li>
                  ))}
       
           
                </ul>
                <div className="sidebar-widgets">
                  <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                    <div className="text-center">
                      <img
                        src="fonts/custom-17.svg"
                        className="sideimg p-5"
                        alt=""
                      />
                      <h4 className="title-bx text-primary">
                        Make an Appointments
                      </h4>
                      <Link to="#" className="py-10 fs-14 mb-0 text-primary">
                        Best Helth Care here{" "}
                        <i className="mdi mdi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="copyright text-center m-25">
                    <p>
                      <strong className="d-block">Admin Dashboard</strong> ©{" "}
                      <script>document.write(new Date().getFullYear())</script>{" "}
                      All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
