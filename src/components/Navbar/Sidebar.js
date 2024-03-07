import { NavLink } from "react-router-dom";

import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useState } from "react";
const Sidebar = ({ setshow, show }) => {
  const [showdrop, setshowdrop] = useState(false);
  const Dropclick = () => {
    setshowdrop(!showdrop);
  };

  

  return (
    <>
      <section
        className={` text-white  sidebar px-1 py-3  lg:static fixed  top-20 h-[1000px]    ${
          show ? "   right-0 " : "lg:w-14 -right-72"
        }`}
      >
        <ul className=" space-y-3 overflow-y-scroll sidebar-overflow h-[50%] lg:h-[100%]">
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Dashboard"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/students"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Students"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Students
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/trainers"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Trainers"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Trainers
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/courses"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Courses"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Courses
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/categories"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Categories"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Categories
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/home-slider"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Home-slider"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Home Slider
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/enrollment"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Enrollment"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Enrollment
              </span>
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/batches"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Batch"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
                Batches
              </span>
            </NavLink>
          </li>
          <li>
           
             
             <div className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md cursor-pointer w-[100%]">
             {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Batch"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}

              <div className={` ${!show ? "d-lg-none" : "d-block"}`}>
                <div
                  className="flex justify-around items-center w-[100%] gap-5"
                  onClick={Dropclick}
                >
                  Location
                  {showdrop ? (
                    <BiChevronUp className="text-xl" />
                  ) : (
                    <BiChevronDown className="text-xl" />
                  )}
                </div>
              </div>
             </div>
           

            {showdrop ? (
              <>
                <ul className=" border-none outline-none gap-2 side-menu p-2 rounded-md mt-2 space-y-1">
                  <li>
                  <NavLink className="locationdropdown p-1 cursor-pointer flex gap-2 items-center rounded-md" to="/country" style={{ color: "white" }}>
                    <CiGrid41 className="text-xl" />
                  
                      
                      Country
                    </NavLink>
                  </li>
                  <li>
                  <NavLink className="locationdropdown p-1 cursor-pointer flex gap-2 items-center rounded-md" to="/state"  style={{ color: "white" }}>
                    <CiGrid41 className="text-xl" /> 
                    State</NavLink>
                  </li>
                  <li>
                  <NavLink  className="locationdropdown p-1 cursor-pointer flex gap-2 items-center rounded-md" to="/city"  style={{ color: "white" }}>
                    <CiGrid41 className="text-xl" /> 
                    City</NavLink>
                  </li>
                </ul>
              </>
            ) : null}
          </li>
          <li>
          <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/subscription"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Batch"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
               Subscription
              </span>
            </NavLink>
          </li>

          <li>
          <NavLink
              className="border-none outline-none flex items-center gap-2 side-menu p-2 rounded-md "
              style={{ color: "white" }}
              to="/position"
            >
              {show ? (
                <CiGrid41 className="text-xl" />
              ) : (
                <button
                  className=""
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Batch"
                >
                  <CiGrid41 className="text-xl" />
                </button>
              )}
              <span className={` ${!show ? "d-lg-none" : "d-block"}`}>
               Position
              </span>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
