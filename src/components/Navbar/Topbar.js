import { IoMdList } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaEllipsisH, FaTimes } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Topbar = ({setshow ,show}) => {


    const Handleclick=()=>{
        setshow(!show)
    }
  return (
    <>
      <section>
        <div className="flex justify-between items-center gap-3 py-2 px-2 text-white topnavbar ">
          {/* ///left side */}
          <div className="flex items-center gap-3">
            
            <div className={`flex items-center justify-between gap-3  transition  ${!show ? "w-[100%]" : "w-52"}`}>
            <div className="w-20 ">
              <img
                src="images/logicgyan.png"
                alt="image"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>

            <div className="d-lg-block d-none">
              
              {
            show ?  (<IoMdList className="text-2xl cursor-pointer" onClick={Handleclick}/>)
            : ( <IoMdList className="text-2xl cursor-pointer" onClick={Handleclick}/>)
              }
              
            </div>
            </div>

            <div className=" d-lg-block d-none">
             
             <div className="flex items-center gap-3 border-2 top-search-input rounded-full px-2 py-1">
             <IoSearchSharp />
              <input
                type="search"
                placeholder="search Now"
                className="  px-2 border-none outline-none text-white bg-none "
              />
             </div>
            </div>
          </div>

          {/* rigth side */}

          <div>
            <ul className="flex items-center gap-3">
              <li>
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
              {
               ! show ? (
                    <IoMdList className="text-2xl cursor-pointer" onClick={Handleclick}/>
                ) : 
                (
                    <FaTimes className="text-2xl cursor-pointer" onClick={Handleclick}/>
                )
              }
             
              </li>
              <li className="d-none d-lg-block">
                
                <FaEllipsisH className="text-2xl" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topbar;
