import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { useFetch } from "../../../hooks/useFetch";
import useUpdate from "../../../hooks/useUpdate";

function EditSubcategories() {
  const SubcatUrl = "/categories/subcategories";

  const { id } = useParams();
  const subcatId = id;

  // Fetch category data using a custom hook (useFetch)

  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/categories/subcat-detail?subcatId=${subcatId}`,
    subcatId
  );

  // State to store form parameters
  const [params, setParams] = useState({});
  const [formdata1, setformdata] = useState({});

  // Updates params when data is fetched
  useEffect(() => {
    if (data) {
      setParams(data.data);
      setformdata(data.data);
    }
  }, [data, loading, error]);

  const handleChange = (e) => {
    // Dynamically updates the corresponding form parameter
    const { name, value, type, files } = e.target;
    setformdata({
      ...formdata1,
      [name]: type === "file" ? files[0] : value,
    });
  };
  console.log(params);
  // Uses a custom hook (useUpdate) for handling the update API call
  const [handleUpdate] = useUpdate(
    `http://localhost:8086/api/categories/update-subcat`
  );
  // Handles form submission
  const handleSubmit = (e) => {
    const formdata = new FormData();

    formdata.append(
      "image",
      formdata1?.imageUrl === "" ? params?.imageUrl : formdata1?.imageUrl
    );
    console.log(e);
    e.preventDefault();
    // Calls the handleUpdate function from the custom hook
    handleUpdate(`subcatId=${e.target.id}`, params, SubcatUrl);
  };

  console.log(formdata1);

  return (
    <>
      {/* Display error message if there's an error */}
      {error && error.message}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data?.data && (
        <div className="w-[100%] py-3 sm:p-3">
          <form
            // Form for updating category information
            className="forms-sample w-100 m-2 p-4 box"
            onSubmit={handleSubmit}
            id={formdata1?.id}
          >
            {/* Form inputs for category details */}
            <div className="w-100 ">
              {/* Form group for title */}
              <div className="form-group">
                <div className="flex flex-col-reverse md:flex-row md:flex items-center justify-between ">
                  <div className=" grid grid-cols-1  sm:grid-cols-2 gap-5 w-[100%] md:w-[70%] ">
                    <div className=" ">
                      <label
                        className="text-white"
                        htmlFor="exampleInputUsername1"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control w-[100%]"
                        value={formdata1?.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                      />
                    </div>
                    <div className=" ">
                      <label
                        className="text-white"
                        htmlFor="exampleInputUsername1"
                      >
                        ImageUrl
                      </label>
                      <input
                        type="file"
                        className="form-control w-[100%]"
                        // value={formdata1?.imageUrl[0]}
                        name="imageUrl"
                        placeholder="imageUrl"
                        onChange={handleChange}
                      />
                    </div>

                    <div className=" ">
                      <label
                        className="text-white"
                        htmlFor="exampleInputUsername1"
                      >
                        Sequence
                      </label>
                      <input
                        type="text"
                        className="form-control w-[100%]"
                        value={formdata1?.sequence}
                        name="sequence"
                        placeholder="sequence"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-4">
                      <label
                        className="text-white"
                        htmlFor="exampleInputUsername1"
                      >
                        Status
                      </label>

                      <div className="text-white d-flex gap-2">
                        <input
                          type="radio"
                          id="active"
                          name="status"
                          value={1}
                          checked={formdata1?.status == 1}
                          onChange={handleChange}
                        />
                        Active
                        <input
                          type="radio"
                          id="active"
                          name="status"
                          value={0}
                          checked={formdata1?.status == 0}
                          onChange={handleChange}
                        />
                        Inactive
                      </div>
                    </div>
                  </div>

                  <div className="h-44 md:h-[100%]  w-[100%] md:w-[20%] border-2 rounded-md">
                    <img
                      src={`https://api.logicmitra.com/uploads/subcategories/${formdata1?.imageUrl}`}
                      alt="image"
                      className="w-[100%] h-[100%]  object-contain"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label className="text-white" htmlFor="exampleInputUsername1">
                    Description
                  </label>
                  <textarea
                    type="text"
                    cols="10"
                    rows="10"
                    className="form-control w-[100%]"
                    value={formdata1?.descprition}
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit and cancel buttons */}

            <div className=" flex items-center my-4 justify-between">
              <button
                type="submit"
                className="submit bg-blue-500 mr-2  rounded-md px-5 py-2"
              >
                Submit
              </button>
              <button
                type="reset"
                className="cancel bg-gray-200  rounded-md px-5 py-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default EditSubcategories;
