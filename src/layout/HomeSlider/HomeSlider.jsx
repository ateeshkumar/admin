import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useDeleteOne } from "../../hooks/useDeleteOne";
import { useAdd } from "../../hooks/useAdd";
import Popup from "reactjs-popup";
import ImageViewer from "../../components/ImageViewer";

function HomeSlider() {
  const HomeUrl = "/home-slider";

  // State to store filter parameters
  const [params, setParams] = useState({
    title: "",
    bannerUrl: "",
    status: "1",
    position: "",
    sequence: "",
  });

  // Handle changes in filter inputs
  const handleChange = (e) => {
    console.log(e.target);
    const { name, value, type, files } = e.target;
    setParams({
      ...params,
      [name]: type === "file" ? files[0] : value,
    });
  };
  // add the home slider data
  const [addData] = useAdd(
    `https://api.logicmitra.com:8086/api/advertise/create-advetise`
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", params.bannerUrl);
    event.preventDefault();
    addData(params, HomeUrl);
  };
  console.log(params);
  const { Delete } = useDeleteOne("");
  // Handle deletion of a slider item
  const handleDelete = async (e) => {
    Delete(e.target.id, HomeUrl);
  };
  // Fetch category data using a custom hook (useFetch)
  const [data, error, loading] = useFetch(
    "https://api.logicmitra.com:8086/api/advertise/advertise-list",
    params
  );
  console.log(data);
  return (
    <>
      <div className="pl-3  p-md-3 text-white w-[100%]  relative">
        <section className="section py-3">
          <div className="text-xl font-medium ">
            <h1>Home Slider</h1>
            <div className="section-header-breadcrumb"></div>
          </div>
        </section>

        {/* homeslide Table */}
        <div className="row space-y-5 lg:space-y-0">
          <div className="col col-lg-7">
            <div className="">
              {/* Display loading message while data is being fetched */}
              {loading && <h1 className="text-white">Loading...</h1>}
              {/* Display error message if there's an error */}
              {error && <h1 className="text-white">{error.message}</h1>}
              {/* Display Category data if available */}
              {data.data && (
                <div className="table-responsive Ttable h-[500px] overflow-y-auto">
                  <table className=" table-striped w-[100%]">
                    <thead>
                      <tr className="Thead">
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Position</th>
                        <th scope="col">Status</th>
                        <th scope="col">Sequence</th>

                        <th scope="col">Options</th>
                      </tr>
                    </thead>
                    <tbody className="table-group-divider">
                      {/* Map through trainers data and display in table rows */}
                      {data.data.map((item) => (
                        <tr key={item.id} className="Tbody">
                          <td>{item.title}</td>
                          <td>
                            <Popup
                              trigger={
                                <button>
                                  <img
                                    src={`https://api.logicmitra.com/uploads/advertiseBanner/${item.bannerUrl}`}
                                    alt="image"
                                    className="w-10 h-10 rounded-md object-contain"
                                  />
                                </button>
                              }
                              modal
                              nested
                            >
                              {(close) => (
                                <ImageViewer
                                  url={`https://api.logicmitra.com/uploads/advertiseBanner/${item.bannerUrl}`}
                                  close={close}
                                />
                              )}
                            </Popup>
                          </td>
                          <td>{item.position}</td>
                          <td>{item.status === 1 ? "Active " : "Inactive"}</td>
                          <td>{item.sequence}</td>

                          <td className="flex gap-2 items-center justify-center">
                            <Link
                              to={`/home-slider/view/${item.id}`}
                              className="py-2 px-3 rounded-md view-icon text-white"
                              id={item.id}
                            >
                              <i id={item.id} className="bi bi-eye-fill"></i>
                            </Link>
                            {/* Action links for each trainer */}
                            <Link
                              className="py-2 px-3 rounded-md edit-icon"
                              to={`/home-slider/edit/${item.id}`}
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
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2 text-white"
                  />
                </div>
                <div className="">
                  <p className="text-white">Image Url</p>
                  <input
                    onChange={handleChange}
                    required
                    name="bannerUrl"
                    type="file"
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
                  <p className="text-white">Position</p>
                  <input
                    onChange={handleChange}
                    required
                    name="position"
                    value={params?.position}
                    type="text"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                  />
                </div>

                {/* {similar fields} */}
                <button className="Add-btn px-3 py-2 rounded-md mt-3 w-[100%]">
                  Add Category
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeSlider;
