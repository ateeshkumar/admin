import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { HomeSlider } from "./layout";
import Topbar from "./components/Navbar/Topbar";
import Sidebar from "./components/Navbar/Sidebar";
import { useState } from "react";

function Home() {

  const [show , setshow]=useState(true)

  return (
    <>
     

       <Topbar setshow={setshow} show={show}/>
      <div className=" flex  pl-0 h-[100%]">
        
        <div>
        <Sidebar setshow={setshow} show={show} />
        </div>
        <Outlet />
       
      </div>
    </>
  );
}

export default Home;
