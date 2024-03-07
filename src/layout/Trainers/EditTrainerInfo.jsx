import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchOnce } from "../../hooks/useFetchOnce";

function EditTrainerInfo() {
  const TrainerUrl= "/trainers"
  // Extracts student ID from URL parameters
  const { id } = useParams();

  console.log(id);
  // Fetch student data using a custom hook (useFetch)

  const [Fetch, data, loading, error] = useFetchOnce(
    `https://api.logicmitra.com:8086/api/user/details?`,
    true
  );
  console.log(data);
  // State to store form parameters

  // Updates params when data is fetched
  useEffect(() => {
    Fetch(`userID=${id}`);
  }, []);

  // State to store form parameters
  const [params, setParams] = useState({});
  console.log(params);

  // Updates params when data is fetched
  useEffect(() => {
    if (data) {
      setParams(data.data);
    }
  }, [data]);

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
    `https://api.logicmitra.com:8086/api/user/update-user`
  );

  // Handles form submission
  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append("image", params.sprofilepicUrl);
    formdata.append("banner-image", params.sbackgroundUrl);
    e.preventDefault();
    // Calls the handleUpdate function from the custom hook
    handleUpdate(`userId=${e.target.id}`, params , TrainerUrl)
    
  };
  console.log(params);
  return (
    <>
      {/* Display error message if there's an error */}
      {error && error.message}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data?.data && (
        <div className="w-100 py-3 sm:p-3">
          <form
            className="forms-sample w-100 m-2 p-4 box"
            onSubmit={handleSubmit}
            id={params?.id}
          >
            <div className="w-100 d-flex gap-3">
              <div className="form-group  row">
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputUsername1">Trainer Name</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sname"
                    value={params?.sname}
                    placeholder="Trainers Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputEmail1">Gender</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sgender"
                    value={params?.sgender}
                    placeholder="Gender"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputMobile">Date Of Birth</label>
                  <input
                    type="date"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sdob"
                    value={params?.sdob}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputMobile">Address</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="address"
                    value={params?.address}
                    placeholder="Address"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputMobile">City</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="scity"
                    value={params?.scity}
                    placeholder="City"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Pin code</label>
                  <input
                    type="number"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="spincode"
                    value={params?.spincode}
                    placeholder="Pincode"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Profile Pic</label>
                  <input
                    type="file"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sprofilepicUrl"
                    placeholder="picture"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">About</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sabout"
                    value={params?.sabout}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Status</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sstatus"
                    value={params?.sstatus}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Country</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="scountry"
                    value={params?.scountry}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">State</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sstate"
                    value={params?.sstate}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Whatsapp</label>
                  <input
                    type="number"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="swhatsapp"
                    value={params?.swhatsapp}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Lattitude</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="slattitude"
                    value={params?.slattitude}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Longitude</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="slongitude"
                    value={params?.slongitude}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB"> intro</label>
                  <input
                    type="text"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sintro"
                    value={params?.sintro}
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Banner</label>
                  <input
                    type="file"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="sbackgroundUrl"
                    onChange={handleChange}
                  />
                </div>
                <div className="col col-sm-4">
                  <label className="text-white" htmlFor="exampleInputDOB">Rating </label>
                  <input
                    type="number"
                    className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                    name="srating"
                    value={params?.srating}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Submit and cancel buttons */}
            <div className="flex items-center justify-between mt-3">
             <button type="submit" className="px-5 py-2 Add-btn rounded-md">
                Submit
              </button>
              <button type="reset" className=" py-2 Cancel-btn px-5 rounded-md">
                Cancel
              </button>
             </div>
          </form>
        </div>
      )}
    </>
  );
}

export default EditTrainerInfo;
