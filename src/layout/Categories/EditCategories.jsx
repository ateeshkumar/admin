import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

import useUpdate from "../../hooks/useUpdate";
import { useFetch } from "../../hooks/useFetch";

function EditCategories() {
  const navigate = useNavigate();
  // Extracts category title from URL parameters

  const { id } = useParams();
  const catId = id;

  // Fetch category data using a custom hook (useFetch)

  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/categories/cat-detail?catId=${catId}`,
    catId
  );

  // State to store form parameters
  const [params, setParams] = useState({});

  console.log(params?.status);
  // Updates params when data is fetched
  useEffect(() => {
    if (data) {
      setParams(data.data);
    }
  }, [data, loading, error]);

  // Handles changes in form inputs
  const handleChange = (e) => {
    // Dynamically updates the corresponding form parameter

    const { name, value, type, files } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  console.log(params);

  // Uses a custom hook (useUpdate) for handling the update API call
  const [handleUpdate] = useUpdate(
    `https://api.logicmitra.com:8086/api/categories/update-cat`
  );

  console.log(params);
  // Handles form submission
  const handleSubmit = (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("image", params.imageUrl);

    e.preventDefault();
    // Calls the handleUpdate function from the custom hook
    handleUpdate(`catId=${e.target.id}`, params).then(() => {
      // Displays a success message using SweetAlert library
      swal("Good job!", "Category Updated Successfully", "success");
     
      window.location.reload()
      setTimeout(() => {
        navigate("/categories");
      }, 1000);
    });
  };

  return (
    <>
      {/* Display error message if there's an error */}
      {error && error.message}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data.data && (
        <div className="w-100 p-3 ">
          <form
            // Form for updating category information
            className="forms-sample w-100 m-2 p-4 box"
            onSubmit={handleSubmit}
            id={params?.id}
          >
            {/* Form inputs for category details */}
            <div className="w-100 d-flex gap-3">
              {/* Form group for title */}
              <div className="form-group w-100 row">
                <div className="col-4">
                  <label className="text-white" htmlFor="exampleInputUsername1">Title</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={params?.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-4">
                  <label className="text-white" htmlFor="exampleInputUsername1">ImageUrl</label>
                  <input
                    type="file"
                    required
                    className="form-control"
                    // value={params?.imageUrl}
                    name="imageUrl"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-4">
                  <label className="text-white" htmlFor="exampleInputUsername1">Status</label>

                  <div className="text-white d-flex gap-2">
                    <input
                      type="radio"
                      id="active"
                      name="status"
                      value={1}
                      checked={params?.status == 1}
                      onChange={handleChange}
                    />
                    Active
                    <input
                      type="radio"
                      id="active"
                      name="status"
                      value={0}
                      checked={params?.status == 0}
                      onChange={handleChange}
                    />
                    Inactive
                  </div>
                </div>

                <div className="col-4">
                  <label className="text-white" htmlFor="exampleInputUsername1">Sequence</label>
                  <input
                    type="number"
                    required
                    className="form-control"
                    value={params?.sequence}
                    name="sequence"
                    placeholder="sequence"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label className="text-white" htmlFor="exampleInputUsername1">Description</label>
                  <textarea
                    type="text"
                    required
                    cols="30"
                    rows="10"
                    className="form-control"
                    value={params?.description}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit and cancel buttons */}
           
           <div className="space-y-2">
           <button type="submit" className="w-[100%] bg-blue-500 mr-2 rounded-md p-2">
              Submit
            </button>
            <button type="reset" className="bg-gray-200 w-[100%] rounded-md p-2">
              Cancel
            </button>
           </div>
          </form>
        </div>
      )}
    </>
  );
}

export default EditCategories;
