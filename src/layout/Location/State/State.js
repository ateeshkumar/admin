import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

import Popup from "reactjs-popup";
import ImageViewer from "../../../components/ImageViewer";
import { useAdd } from "../../../hooks/useAdd";
import { useDeleteOne } from "../../../hooks/useDeleteOne";
import { useFetch } from "../../../hooks/useFetch";

function LocationState() {
  const StateUrl = "/state";

  const [params, setparams] = useState({
    title: "",

    sequence: "",
    status: "1",
    country: "",
  });
  console.log(
    params.title,

    params.country,
    params.sequence,
    params.status
  );
  //handle addition of category
  const handleChange = (event) => {
    console.log(event.target);
    const { name, value, type, files } = event.target;
    setparams({
      ...params,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const [addData] = useAdd(
    `https://api.logicmitra.com:8086/api/address/create-state`
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    
    

    addData(params);
  };

 
  // delete the particular Categories
  const { Delete } = useDeleteOne(
    `https://api.logicmitra.com:8086/api/address/delete-state?stateId=`
  );

  // Handle deletion of a category
  const handleDelete = async (e) => {
    console.log("cate id is ", e.target.id);
    Delete(e.target.id, StateUrl);
  };

  // Fetch category data using a custom hook (useFetch)
  const [data, error, loading] = useFetch(
    "https://api.logicmitra.com:8086/api/address/state-list    ",
    true
  );

  console.log(data);

  // Fetch category data using a custom hook (useFetch)
  const [data1, error1, loading1] = useFetch(
    "https://api.logicmitra.com:8086/api/address/country-list",
    true
  );

  console.log(data1);

 

  return (
    <div className="pl-3  p-md-3 text-white w-[100%]  relative">
      <section className="section py-3">
        <div className="text-xl font-medium ">
          <h1>State List</h1>
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
            {/* Display Category data if available */}
            {data.data && (
              <div className="table-responsive Ttable h-[500px] overflow-y-auto">
                <table className=" table-striped w-[100%]">
                  <thead>
                    <tr className="Thead">
                      <th scope="col">Title</th>
                      <th scope="col">Country</th>

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
                          {
                            data1?.data?.filter((elm) => {
                              return elm.id === item.country;
                            }).map(elm=>{
                                return (
                                    <>
                                        <div className="" key={elm.id}>
                                            {elm.title}
                                        </div>
                                    </>
                                )
                            })
                          }
                        </td>

                        <td>{item.status === 1 ? "Active " : "Inactive"}</td>
                        <td>{item.sequence}</td>

                        <td className="flex gap-2 items-center justify-center">
                          {/* Action links for each trainer */}
                          <Link
                            className="py-2 px-3 rounded-md edit-icon"
                            to={`/state/edit/${item.id}`}
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
                <p className="text-white">State</p>
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
                <p className="text-white">Country</p>
                <select
                  required
                  className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                  onChange={handleChange}
                  name="country"
                  value={params?.country}
                >
                  <option> select country</option>
                  {data1?.data?.map((elm) => {
                    return (
                      <>
                        <option value={elm.id}> {elm.title} </option>
                      </>
                    );
                  })}
                </select>
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

              {/* {similar fields} */}
              <button className="Add-btn px-3 py-2 rounded-md mt-3 w-[100%]">
                Add State
              </button>
            </form>
          </div>
        )}
      </div>
      {/* Card to show and add subcategories */}
    </div>
  );
}

export default LocationState;
