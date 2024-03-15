import { IoMdList } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaEllipsisH, FaTimes } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdError } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Topbar = ({ setshow, show }) => {
  const Handleclick = () => {
    setshow(!show);
  };

  const [top, settop] = useState();

  const topnav = () => {
    if (window.scrollY > 200) {
      settop(true);
    } else {
      settop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", topnav);
  }, [topnav]);



const [ notifybtn , Shownotifybtn]=useState(false)



  return (
    <>
      <section className="relative">
        <div
          className={`flex justify-between items-center gap-3 
           px-2 text-white topnavbar
           ${top ? `fixed top-0 w-[100%] z-50` : `static`}
      `}
        >
          {/* ///left side */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-between gap-3  transition  ${
                !show ? "w-[100%]" : "w-52"
              }`}
            >
              <div className="w-32 ">
                <img
                  src="images/logicgyan.png"
                  alt="image"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>

              <div className="d-lg-block d-none">
                {show ? (
                  <IoMdList
                    className="text-2xl cursor-pointer"
                    onClick={Handleclick}
                  />
                ) : (
                  <IoMdList
                    className="text-2xl cursor-pointer"
                    onClick={Handleclick}
                  />
                )}
              </div>
            </div>

            <div className=" d-lg-block d-none">
              <div className="flex items-center gap-3 border-2 top-search-input rounded-full px-2 py-1">
                <IoSearchSharp />
                <input
                  type="search"
                  placeholder="Search Now"
                  className="  px-2 border-none outline-none text-white bg-none "
                />
              </div>
            </div>
          </div>

          {/* rigth side */}

          <div>
            <ul className="flex items-center gap-3">
              <li onClick={()=>Shownotifybtn(!notifybtn)} className="cursor-pointer">
                <IoNotifications className="text-2xl" />
              </li>
              <li>
                <div className="w-[100%] h-[100%] rounded-full">
                  <img
                    src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg?t=st=1708936184~exp=1708939784~hmac=1733f677fb3f470b605469627128149a8b0c51bd4c7d3da76e096ef6258ce379&w=1060"
                    alt="image"
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
              </li>
              <li className="d-lg-none d-block">
                {show ? (
                  <IoMdList
                    className="text-2xl cursor-pointer"
                    onClick={Handleclick}
                  />
                ) : (
                  <FaTimes
                    className="text-2xl cursor-pointer"
                    onClick={Handleclick}
                  />
                )}
              </li>
              <li className="d-none d-lg-block">
                <FaEllipsisH className="text-2xl" />
              </li>
            </ul>
          </div>
        </div>


        
//? this is the notifation bar 


{
  notifybtn ? (
    <>
    <div className="text-white box w-64 space-y-2
absolute top-20 right-3 z-50" style={{ zIndex:"99999"}}>
  <h1 className="heading p-1  mb-3">Notifications</h1>

  <ul className="space-y-2">
    <li>
      <div className="flex items-center gap-2">
        <div className="view-icon p-2 rounded-full">
          <MdError  className="text-white text-md"/>
        </div>
        <div className="">
          <h1 className="font-medium">
            Application Error
          </h1>
          <p className="">
            Just now
          </p>
        </div>
      </div>
    </li>
    <li>
    
    <div className="flex items-center gap-2">
     <div className="edit-icon p-2 rounded-full">
       <IoMdSettings className="text-white text-md"/>
    </div>
    <div className="">
        <h1 className="font-medium">Settings</h1>
        <p className="">
          Private Messages
        </p>
      </div>
    </div>
    </li>
    <li>
     
     <div className="flex items-center gap-2">
     <div className="delete-icon p-2 rounded-full">
      <FaUser className="text-white text-md"/>
     </div>
     <div className="">
        <h1 className="font-medium">
         New User 
         Registration
        </h1>
        <p className="">
          2 days ago
        </p>
      </div>
     </div>
    </li>
  </ul>
</div>
    </>
  ) : null
}
      </section>




     
    </>
  );
};

export default Topbar;
