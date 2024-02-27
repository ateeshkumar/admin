import { NavLink } from "react-router-dom";

import { CiGrid41 } from "react-icons/ci";
import { Tooltip } from "@mui/material";

const Sidebar = ({ setshow, show }) => {

   

  return (
    <>
      <section
        className={` text-white sidebar px-1 py-3  lg:static fixed  top-16 h-[1000px]    ${
         show ? "   right-0 " : "lg:w-14 -right-72"
        }`}
      >
        <ul className=" space-y-3 ">
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
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
              <span className={` ${!show ? "d-lg-none" : "d-block"}`} >
                Batches
              </span>
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
