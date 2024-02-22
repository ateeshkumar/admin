import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./App.css";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [
      {
        path : "",
        element : <Dashboard/>
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
            path: "subcategories",
            children: [
              {
                path: "",
                element: <SubCategories />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SubModuleContext>
      <SubcatContext>
        <RouterProvider router={router} />
      </SubcatContext>
    </SubModuleContext>
  </React.StrictMode>
);
