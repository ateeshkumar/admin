import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import swal from "sweetalert";
import { useDeleteOne } from "../../hooks/useDeleteOne";
import { UseCourseContext } from "../../context/CourseContext";
import { UsesubcategoriesContext } from "../../context/SubcatContext";
import axios from "axios";

function Courses() {
  const navigate = useNavigate();

  const [params, setParams] = useState({
    name: "",
    startDate: "",
    endDate: "",
    filter: "",
  });

  // Handle changes in filter inputs
  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
    // console.log(params);
  };

  const [data, error, loading] = useFetch(
    "https://api.logicmitra.com:8086/api/courses/all-course",
    true
  );

  const { courseId, setCourseId, trainerId, setTrainerId } =
    UsesubcategoriesContext();
  //open subModeule of course
  const getSubModuleData = async (e) => {
    e.preventDefault();
    console.log("event ka data is " + e.target.id);
    setCourseId(e.target.id);

    try {
      const res = await axios.get(
        `http://localhost:8086/api/course-detail/course-modules-list?courseId=${e.target.id}`
      );
      console.log(res.data);
      if (res.status === 200) {
        console.log(await res.data);
        setTrainerId(res.data.data.ctrainer._id);
      } else {
        console.log("somethind fizzt");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //setting student categories count
  const [totalCourses, setTotalCourses] = useState(0);
  const [activeCourses, setActiveCourses] = useState(0);
  const [inactiveCourses, setInactiveCourses] = useState(0);
  const [blockedCourses, setBlockedCourses] = useState(0);
  useEffect(() => {
    setTotalCourses(0);
    setBlockedCourses(0);
    setInactiveCourses(0);
    setActiveCourses(0);
    data.data?.map((item) => {
      setTotalCourses((prevTotal) => prevTotal + 1);
      if (item.status === "blocked") {
        setBlockedCourses((blockedCourses) => blockedCourses + 1);
      } else if (item.status === "1") {
        setActiveCourses((activeCourses) => activeCourses + 1);
      } else if (item.status === "0") {
        setInactiveCourses((inactiveCourses) => inactiveCourses + 1);
      }
    });
  }, [data]);

  // delete the particular Courses
  const { Delete } = useDeleteOne(
    `https://api.logicmitra.com:8086/api/courses/delete-course?courseId=`
  );

  const handleDelete = async (e) => {
    console.log("course id is", e.target.id);
    swal({
      title: "Are you sure?",
      text: "you want to delete this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Delete(e.target.id);

        window.location.reload();
      } else {
        swal("Your data is safe");
      }
    });
  };

  console.log(data);
  return (
    <>
      <div className="py-3  sm:p-3 text-white w-[100%] overflow-x-auto courses-page">
        <section className="section py-3">
          <div className="text-xl font-medium   d-flex justify-between items-center">
            <h1>Course List</h1>
            <div className="">
              <Link
                to="/courses/add"
                className="Add-btn px-3 py-2 rounded-md  me-2"
              >
                Add Cources
              </Link>
            </div>
          </div>
        </section>

        <div className="row ">
          <Card title="Total Courses" value={totalCourses} />
          <Card title="Active Courses" value={activeCourses} />
          <Card title="Inactive Courses" value={inactiveCourses} />
          <Card title="Blocked Courses" value={blockedCourses} />
        </div>

        <div className="row">
          <div className="col">
            <div className="box ">
              <div className="card-body row">
                <div className="border-bottom mb-3 border-black">
                  <h4 className="text-white heading">Filters</h4>
                </div>
                <div className="col-12 col-sm-3 text-white relative ">
                  <label className="text-white" htmlFor="search">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none fs-6  w-[100%] w-100 text-white"
                    id="search"
                    name="name"
                    onChange={handleChange}
                    aria-describedby="emailHelp"
                    placeholder="search"
                  />
                </div>
                <div className="col-12 col-sm-3 text-white">
                  <label className="text-white" htmlFor="start-date">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none "
                    name="startDate"
                    id="start-date"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-3 text-white">
                  <label className="text-white" htmlFor="end-date">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none "
                    id="endDate"
                    placeholder=""
                    onChange={handleChange}
                    name="end-date"
                  />
                </div>
                <div className="col-12 col-sm-3 text-white">
                  <label className="text-white" htmlFor="filters">
                    Filters
                  </label>
                  <select
                    id="filters"
                    className="form-select py-2 input focus-within:bg-none border-none outline-none focus:bg-none"
                    value={params.filter}
                    onChange={handleChange}
                    name="filter"
                    aria-label=""
                  >
                    <option className="h-100">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[100%]">
          <div className=" ">
            {loading && <h1 className="text-white">Loading...</h1>}
            {error && <h1 className="text-white">{error.message}</h1>}
            {data && (
              <div className="table-responsive Ttable mt-4  ">
                <table className=" table-striped w-[100%]">
                  <thead>
                    <tr className="Thead">
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Subcategory</th>
                      <th scope="col">Trainer</th>
                      <th scope="col">Rating</th>
                      <th scope="col">No of Enrollment</th>
                      <th scope="col">Offer Fees</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Views</th>
                      <th scope="col">Options</th>
                      <th scope="col">Add Module</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {data.data?.map((item) => (
                      <tr key={item.id} className="Tbody">
                        <td>{item.ctitle}</td>
                        <td>
                          {item?.ccategory?.title == null
                            ? "NAN"
                            : item?.ccategory?.title}
                        </td>
                        <td>
                          {" "}
                          {item?.csubcategory?.title == null
                            ? "NAN"
                            : item?.csubcategory?.title}
                        </td>
                        <td>
                          {" "}
                          {item?.ctrainer?.sname == null
                            ? "NAN"
                            : item?.ctrainer?.sname}
                        </td>
                        <td> {item.ratings}</td>
                        <td> {item.enrollStudent.length}</td>
                        <td> {item.cofferfees}</td>
                        <td>{item.cduration}</td>
                        <td>{item.cviews}</td>
                        <td className="flex gap-2 items-cente justify-center">
                          <Link
                            className="  py-2 px-3 rounded-md view-icon"
                            to={`/courses/view/${item.id}`}
                          >
                            <i className="bi bi-eye-fill"></i>
                          </Link>{" "}
                          <Link
                            className=" py-2 px-3 rounded-md edit-icon"
                            to={`/courses/edit/${item.id}`}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Link>
                          <Link
                            className="  py-2 px-3 rounded-md delete-icon "
                            onClick={handleDelete}
                            id={item.id}
                          >
                            <i id={item.id} className="bi bi-trash3"></i>
                          </Link>{" "}
                        </td>
                        <td>
                          <button
                            onClick={getSubModuleData}
                            className="flex flex-row w-[100%]"
                          >
                            <Link
                              className="  py-2 px-3 text-sm rounded-md view-icon"
                              to={`/courses/module`}
                              id={item.id}
                            >
                              Add Module
                            </Link>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
