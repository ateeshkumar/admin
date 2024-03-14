import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAdd } from "../../hooks/useAdd";
import swal from "sweetalert";
import { UseCourseContext } from "../../context/CourseContext";
import { UsesubcategoriesContext } from "../../context/SubcatContext";
import { useDeleteOne } from "../../hooks/useDeleteOne";
import axios from "axios";
import { toast } from "react-toastify";

const AddModules = () => {
  const navigate = useNavigate();
  const { courseId, setCourseId, trainerId, setTrainerId } =
    UsesubcategoriesContext();
  const { moduleId, setModuleId } = UseCourseContext();

  //get submodule data
  const getSubModuleData = async (e) => {
    e.preventDefault();
    setModuleId(e.target.id);
  };

  const [params, setparams] = useState({
    title: "",
    description: "",
    duration: "",
    fileUrl: "",
    videoUrl: "",
    trainer: trainerId,
    status: "1",
    course: courseId,
    sequence: "",
  });


  console.log(params);

  // console.log(data1?.data?.ctrainer?._id);

  //add module data
  const [addData] = useAdd(
    `https://api.logicmitra.com:8086/api/course-detail/create-module`
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    addData(params, "/courses/module");
  };

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setparams({
      ...params,
      [name]: value,
    });
  };

  const { Delete } = useDeleteOne(
    `https://api.logicmitra.com:8086/api/course-detail/delete-module?moduleId=`
  );
  const handleDelete = async (e) => {
    console.log("cate id is ", e.target.id);
    swal({
      title: "Are you sure?",
      text: "you want to delete this !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Delete(e.target.id);
        window.location.reload();
      } else {
        swal("Your  is safe");
      }
    });
  };

  

  //fetch module data from couses
  const [data, error ,loading] = useFetch(
    `https://api.logicmitra.com:8086/api/course-detail/course-modules?courseId=${courseId}`,
    courseId
  );
  console.log(data);
  return (
    <div className="py-3  p-3 text-white w-[100%]  relative mb-16">
      <section className="section py-3">
        <div className="text-xl font-medium ">
          <h1>Course Module List</h1>
          <div className="section-header-breadcrumb"></div>
        </div>
      </section>

      {/* Categories Table */}
      <div className="row space-y-5 lg:space-y-0">
        <div className="col col-lg-7">
          <div className="">
           {/* Display loading message while data is being fetched */}
           {loading && <h1 className="text-white">Loading...</h1>}
          {/* Display error message if there's an error */}
          {error && <h1 className="text-white">{error.message}</h1>}
          {/* Display trainers data if available */}
            {data.data && (
              <div className="table-responsive Ttable">
                <table className=" table-striped w-[100%] text-center">
                  <thead>
                    <tr className="Thead">
                      <th scope="col">Title</th>
                      <th scope="col">Duration</th>

                      <th scope="col">Status</th>
                      <th scope="col">Count</th>
                      <th scope="col">SubModule</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {/* Map through trainers data and display in table rows */}
                    {data.data.map((item) => (
                      <tr key={item.title} className="Tbody">
                        <td>{item.title}</td>
                        <td>{item?.duration}</td>

                        <td>{item.status === 1 ? "Active " : "Inactive"}</td>
                        <td>{item.subModule.length}</td>

                        <td className="w-full">
                          {/* This button will show te subcatehory card */}
                          <button className="btn " onClick={getSubModuleData}>
                            <Link
                              to={"/courses/module/sub-module"}
                              className="py-2 px-3 rounded-md view-icon text-white"
                              id={item.id}
                            >
                              <i id={item.id} className="bi bi-eye-fill"></i>
                            </Link>
                          </button>
                        </td>
                        <td className="flex gap-2 items-center justify-center">
                          {/* Action links for each trainer */}
                          <Link
                            className="py-2 px-3 rounded-md edit-icon"
                            to={`/courses/module/edit/${item.id}`}
                          >
                            <i class="bi bi-pencil-square"></i>
                          </Link>
                          <Link
                            id={item.id}
                            className=" py-2 px-3 rounded-md delete-icon "
                            onClick={handleDelete}
                          >
                            <i id={item.id} className="bi bi-trash3"></i>
                          </Link>{" "}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        {data.data && (
          <div className="col-lg-5 lg:px-5">
            <form
              className="box   py-4 shadow-lg  lg:h-50"
              onSubmit={handleSubmit}
            >
              <div className="">
                <p className="text-white">Title</p>
                <input
                  onChange={handleChange}
                  required
                  name="title"
                  value={params?.title}
                  type="text"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>
              <div className="">
                <p className="text-white">Duration</p>
                <input
                  onChange={handleChange}
                  required
                  name="duration"
                  value={params?.duration}
                  type="text"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>
              <div className="">
                <p className="text-white">File Url</p>
                <input
                  onChange={handleChange}
                  required
                  name="fileUrl"
                  value={params?.fileUrl}
                  type="url"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>
              <div className="">
                <p className="text-white">Video Url</p>
                <input
                  onChange={handleChange}
                  required
                  name="videoUrl"
                  value={params?.videoUrl}
                  type="url"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>

              <div className="">
                <p className="text-white">Status</p>

                <div className="d-flex justify-content-start text-white gap-4 align-items-center my-2">
                  <div className=" ">
                    <input
                      type="radio"
                      id="active"
                      name="status"
                      value={1}
                      checked={params?.status == 1}
                      onChange={handleChange}
                    />
                    Active
                  </div>

                  <div className="">
                    <input
                      type="radio"
                      id="inactive"
                      value={0}
                      name="status"
                      onChange={handleChange}
                      checked={params?.status == 0}
                    />
                    Inactive
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-white">Sequence</p>
                <input
                  onChange={handleChange}
                  required
                  name="sequence"
                  value={params?.sequence}
                  type="number"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>
              <div className="">
                <p className="text-white">Description</p>
                <textarea
                  type="text"
                  required
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                  value={params?.description}
                  name="description"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* {similar fields} */}
              <button className="Add-btn px-3 py-2 rounded-md mt-3 w-[100%]">
                Add Module
              </button>
            </form>
          </div>
        )}
      </div>
      {/* Card to show and add subcategories */}
    </div>
  );
};

export default AddModules;
