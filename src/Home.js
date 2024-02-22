import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { HomeSlider } from "./layout";

function Home() {
  return (
    <>
      <TopBar />
      <div className="container-fluid page-body-wrapper pl-0">
        <SideBar />
        <Outlet />
       
      </div>
    </>
  );
}

export default Home;
