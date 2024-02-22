import React, { useState } from "react";
import { UseCourseContext } from "../../context/CourseContext";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { UsesubcategoriesContext } from "../../context/SubcatContext";
import { useAdd } from "../../hooks/useAdd";
import swal from "sweetalert";
import axios from "axios";
import { useDeleteOne } from "../../hooks/useDeleteOne";

const SubModule = () => {
  const { moduleId, setModuleId } = UseCourseContext();
  const { courseId, setCourseId, trainerId, setTrainerId } =
    UsesubcategoriesContext();
  const [data, loading, error] = useFetch(
    `https://api.logicmitra.com:8086/api/course-detail/course-submodule?moduleId=${moduleId}`,
    moduleId
  );

  const [params, setParams] = useState({
    title: "",
    description: "",
    duration: "",
    fileUrl: "",
    videoUrl: "",
    sequence: "",
    trainer: trainerId,
    course: courseId,
    module: moduleId,
    status: "1",
  });
  console.log(params);
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value, files, type } = event.target;
    setParams({
      ...params,
      [name]: value,
    });
  };
  const [addData] = useAdd(
    `https://api.logicmitra.com:8086/api/course-detail/create-submodule`
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(
        "https://api.logicmitra.com:8086/api/course-detail/create-submodule",
        params
      )
      .then((data) => {
        swal({
          title: "Good job!",
          text: "Your data has been submitted",
          icon: "success",
        }).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        });
      });
    console.log(params);
  };
  const { Delete } = useDeleteOne(
    `https://api.logicmitra.com:8086/api/course-detail/delete-submodule?submoduleId=`
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

  console.log(moduleId);
  console.log(data);
  return (
    <div className="w-100 p-3 bg-main relative">
      <section className="section">
        <div className="section-header">
          <h1>Sub Module Lists</h1>
          <div className="section-header-breadcrumb"></div>
        </div>
      </section>
      <div className="row gap-5 p-3">
        <div className="card col-7">
          <div className="card-body ">
            <div className="table-responsive ">
              {/* Display loading message while data is being fetched */}
              {!loading && <h1 className="text-black">Loading...</h1>}
              {/* Display error message if there's an error */}
              {error && <h1 className="text-black">{error.message}</h1>}
              {/* Display Category data if available */}
              {data.data && (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Description</th>
                      <th scope="col">Status</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {/* Map through trainers data and display in table rows */}
                    {data.data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.duration}</td>
                        <td>{item.description}</td>
                        <td>{item.status}</td>
                        <td>
                          {/* Action links for each trainer */}
                          <Link
                            id={item.id}
                            className=" icon bg-danger icon"
                            onClick={handleDelete}
                          >
                            <i id={item.id} className="bi bi-trash3"></i>
                          </Link>{" "}
                          <Link
                            className="icon bg-warning"
                            to={`/courses/module/sub-module/edit/${item.id}`}
                          >
                            <i class="bi bi-pencil-square"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        {data.data && (
          <form
            className="card  col-4 py-4 shadow-lg  h-50"
            onSubmit={handleSubmit}
          >
            <div className="">
              <p className="text-black">Title</p>
              <input
                onChange={handleChange}
                name="title"
                value={params?.title}
                type="text"
                className="form-control my-2"
              />
            </div>
            <div className="">
              <p className="text-black">Video Url</p>
              <input
                onChange={handleChange}
                name="videoUrl"
                type="link"
                value={params?.videoUrl}
                className="form-control my-2"
              />
            </div>
            <div className="">
              <p className="text-black">File Url</p>
              <input
                onChange={handleChange}
                name="fileUrl"
                type="link"
                value={params?.fileUrl}
                className="form-control my-2"
              />
            </div>
            <div className="">
              <p className="text-black">Duration</p>
              <input
                name="description"
                type="text"
                value={params?.duration}
                onChange={handleChange}
                className="form-control my-2"
              />
            </div>

            <div className="">
              <p className="text-black">Status</p>

              <div className="d-flex justify-content-start text-black gap-4 align-items-center my-2">
                <div className=" ">
                  <input
                    defaultChecked
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
              <p className="text-black">Sequence</p>
              <input
                onChange={handleChange}
                name="sequence"
                value={params?.sequence}
                type="number"
                className="form-control my-2"
              />
            </div>
            <div className="">
              <p className="text-black">Description</p>
              <textarea
                type="text"
                className="form-control my-2"
                value={params?.description}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* {similar fields} */}
            <button className="btn btn-primary mt-3">Add Sub Module</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SubModule;
