import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useDeleteOne } from "../../hooks/useDeleteOne";

function HomeSlider() {
  const HomeUrl = "/home-slider";

  // State to store filter parameters
  const [params, setParams] = useState({
    htitle: "",
    himage: "",
    hstatus: "",
  });

  // Handle changes in filter inputs
  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
    // console.log(params);
  };

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
    <div className="py-3  sm:p-3 text-white w-[100%] relative">
      <section className="section py-3">
        <div className="text-xl font-medium   d-flex justify-between items-center">
          <h1>Home Sliders List</h1>
          <div className="">
            <Link to="" className="Add-btn px-3 py-2 rounded-md">
              Add Home Slider
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Table */}
      <div className="w-[100%]">
        <div className=" ">
          {/* Display loading message while data is being fetched */}
          {loading && <h1 className="text-white">Loading...</h1>}
          {/* Display error message if there's an error */}
          {error && <h1 className="text-white">{error.message}</h1>}
          {/* Display Category data if available */}
          {data?.data && (
            <div className="table-responsive Ttable">
              <table className=" table-striped w-[100%]">
                <thead>
                  <tr className="Thead">
                    <th scope="col">Title</th>
                    <th scope="col">position</th>
                    <th scope="col">Image</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sequence</th>
                    <th scope="col">Options</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {/* Map through trainers data and display in table rows */}
                  {data?.data?.map((item) => (
                    <tr key={item.id} className="Tbody text-white">
                      <td>{item.title}</td>
                      <td>{item.position}</td>
                      <td>
                        <img
                          src={`https://api.logicmitra.com/uploads/advertiseBanner/${item.bannerUrl}`}
                          alt="image"
                          className="w-10 h-10 object-cover"
                        />
                      </td>
                      <td>{item.status}</td>
                      <td>{item.sequence}</td>
                      <td className="flex gap-2 items-center justify-center">
                        {/* Action links for each trainer */}
                        <Link
                          className="px-3 py-2 rounded-md   view-icon"
                          to={`/home-slider/view/:${item.id}`}
                        >
                          <i className="bi bi-eye-fill"></i>
                        </Link>{" "}
                        <Link
                          className="px-3 py-2 rounded-md  edit-icon"
                          to={`/home-slider/edit/:${item.id}`}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </Link>
                        <Link
                          id={item.htitle}
                          className="px-3 py-2 rounded-md   delete-icon"
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
    </div>
  );
}

export default HomeSlider;
