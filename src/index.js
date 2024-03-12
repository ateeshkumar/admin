import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import {
  Trainers,
  AddTrainer,
  ViewTrainerInfo,
  EditTrainerInfo,
  Students,
  ViewStudentInfo,
  EditStudentInfo,
  Categories,
  ViewCategories,
  EditCategories,
  HomeSlider,
  ViewHomeSlider,
  EditHomeSlider,
  Courses,
  AddCourses,
  EditCourses,
  ViewCourses,
  Dashboard,
  AddStudent,
  AddModules,
} from "./layout";
import SubCategories from "./layout/Categories/Subcategories/Subcategories";
import EditSubcategories from "./layout/Categories/Subcategories/EditSubcategories";
import { SubcatContext } from "./context/SubcatContext";
import { SubModuleContext } from "./context/CourseContext";
import SubModule from "./layout/CourseDetails/SubModule";
import EditModule from "./layout/CourseDetails/EditModule";
import EditSubModule from "./layout/CourseDetails/EditSubModule";
import Enrollment from "./layout/Enrollment/Enrollment";
import Batches from "./layout/Batches/Batches";
import CreateBatches from "./layout/Batches/CreateBatches";
import AddBatchesStudent from "./layout/Batches/AddBatchesStudent";
import EditBatch from "./layout/Batches/EditBatch";
import CreateEnrollment from "./layout/Enrollment/CreateEnrollment";
import BatchesDetails from "./layout/Batches/BatchesDetails";
import EnrollDetails from "./layout/Enrollment/EnrollDetails";
import LocationCountry from "./layout/Location/Country/Country";
import LocationState from "./layout/Location/State/State";
import LocationCity from "./layout/Location/City/City";
import EditCountry from "./layout/Location/Country/EditCountry";
import EditLocationState from "./layout/Location/State/EditState";
import Subscription from "./layout/Subscription/Subscription";
import Position from "./layout/Position/Position";
import EditCity from "./layout/Location/City/EditCity";
import SubcatList from "./layout/Categories/Subcategories/SubcatList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "trainers",
        children: [
          {
            path: "",
            element: <Trainers />,
          },
          {
            path: "view/:id",
            element: <ViewTrainerInfo />,
          },
          {
            path: "edit/:id",
            element: <EditTrainerInfo />,
          },
          {
            path: "add",
            element: <AddTrainer />,
          },
        ],
      },
      {
        path: "students",
        children: [
          {
            path: "",
            element: <Students />,
          },
          {
            path: "view/:id",
            element: <ViewStudentInfo />,
          },
          {
            path: "edit/:id",
            element: <EditStudentInfo />,
          },
          {
            path: "add",
            element: <AddStudent />,
          },
        ],
      },
      {
        path: "courses",
        children: [
          {
            path: "",
            element: <Courses />,
          },
          {
            path: "view/:id",
            element: <ViewCourses />,
          },
          {
            path: "edit/:id",
            element: <EditCourses />,
          },
          {
            path: "add",
            element: <AddCourses />,
          },
          {
            path: "module",
            element: <AddModules />,
          },
          {
            path: "module/edit/:id",
            element: <EditModule />,
          },
          {
            path: "module/sub-module",
            element: <SubModule />,
          },
          {
            path: "module/sub-module/edit/:id",
            element: <EditSubModule />,
          },
        ],
      },
      {
        path: "categories",
        children: [
          {
            path: "",
            element: <Categories />,
          },
          {
            path: ":id/subcategories",
            children: [
              {
                path: "",
                element: <SubCategories />,
              },
              {
                path: "list",
                element: <SubcatList />,
              },
              {
                path: "edit/:id",
                element: <EditSubcategories />,
              },
            ],
          },
          {
            path: "view/:id",
            element: <ViewCategories />,
          },
          {
            path: "edit/:id",
            element: <EditCategories />,
          },
        ],
      },
      {
        path: "home-slider",
        children: [
          {
            path: "",
            element: <HomeSlider />,
          },
          {
            path: "view/:id",
            element: <ViewHomeSlider />,
          },
          {
            path: "edit/:id",
            element: <EditHomeSlider />,
          },
        ],
      },
      {
        path: "enrollment",
        children: [
          {
            path: "",
            element: <Enrollment />,
          },
          {
            path: "create",
            element: <CreateEnrollment />,
          },
          {
            path: "view/:id",
            element: <EnrollDetails />,
          },
        ],
      },
      {
        path: "batches",
        children: [
          {
            path: "",
            element: <Batches />,
          },
          {
            path: "create",
            element: <CreateBatches />,
          },
          {
            path: "view/:id",
            element: <BatchesDetails />,
          },
          {
            path: "edit/:id",
            element: <EditBatch />,
          },
          {
            path: "add-student/:id",
            element: <AddBatchesStudent />,
          },
        ],
      },
      {
        path: "country",
        children: [
          {
            path: "",
            element: <LocationCountry/>,
          },
          {
            path: "edit/:id",
            element: <EditCountry/>,
          },
        ],
      },
      {
        path: "state",
        children: [
          {
            path: "",
            element: <LocationState/>,
          },
          {
            path: "edit/:id",
            element: <EditLocationState />,
          },
         
        ],
      },
      {
        path: "city",
        children: [
          {
            path: "",
            element: <LocationCity/>,
          },
          {
            path: "edit/:id",
            element: <EditCity/>,
          },
         
        ],
      },
      {
        path :"subscription",
        element:<Subscription/>
      },
      {
        path :"position",
        element:<Position/>
      }
    ],
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SubModuleContext>
      <SubcatContext>
        <RouterProvider router={router} />
        <ToastContainer />
      </SubcatContext>
    </SubModuleContext>
  </React.StrictMode>
);
