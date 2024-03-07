import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import { useFetch } from "../../../hooks/useFetch";
import useUpdate from "../../../hooks/useUpdate";


function EditCity() {

  const CitUrl = "/city";

  const { id } = useParams();
  const catId = id;

  // Fetch category data using a custom hook (useFetch)

  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/address/city-detail?cityID=${catId}`,
    catId
  );

  console.log(data)
  // State to store form parameters
  const [params, setParams] = useState({});

  console.log(params);
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

  

  // Uses a custom hook (useUpdate) for handling the update API call
  const [handleUpdate] = useUpdate(
    `https://api.logicmitra.com:8086/api/address/update-city`
  );

  
  // Handles form submission
  const handleSubmit = (e) => {
    console.log(e);
   
    e.preventDefault();
    // Calls the handleUpdate function from the custom hook
    handleUpdate(`addId=${e.target.id}`, params, CitUrl);
  };

  return (
    <>
      {/* Display error message if there's an error */}
      {error && 
      <div className="text-white"> {error.message}</div>}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data.data && (
        <div className="w-[100%] py-3 sm:p-3">
          <form
            // Form for updating category information
            className="forms-sample w-100 m-2 p-4 box"
            onSubmit={handleSubmit}
            id={params?.id}
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
                        className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                        value={params?.title}
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
                        Sequence
                      </label>
                      <input
                        type="text"
                        className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                        value={params?.sequence}
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
                  </div>

                 
                </div>

               
              </div>
            </div>

            {/* Submit and cancel buttons */}

            <div className=" flex items-center my-4 justify-between">
              <button
                type="submit"
                className="submit Add-btn mr-2  rounded-md px-5 py-2"
              >
                Submit
              </button>
              <button
                type="reset"
                className="Cancel-btn  rounded-md px-5 py-2"
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



export default EditCity;
