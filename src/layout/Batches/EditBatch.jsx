import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import useUpdate from "../../hooks/useUpdate";
import Home from "../../Home";

const EditBatch = () => {
  const { id } = useParams();
  const [data, error, loading] = useFetch(
    `/batches/batch-detail?batchId=${id}`
  );
  const [params, setParams] = useState({});
  console.log(params);
  useEffect(() => {
    if (data) {
      setParams(data?.data);
    }
  }, [data]);
  console.log(data);

  const handleChange = async (e) => {
    console.log(e.target);
    const { name, value, type, files } = e.target;
    setParams({
      ...params,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const [handleUpdate] = useUpdate(`/batches/update-batch`);
  const handleSubmit = async (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("image", params.bimage);

    e.preventDefault();
    handleUpdate(`batchId=${e.target.id}`, params, "/batches");
  };
  return (
    <Home>
      <div className="w-[100%] py-3 sm:p-3">
        <form
          // Form for Adding Course information
          className="forms-sample  m-2 p-4 box "
          onSubmit={handleSubmit}
          id={params?.id}
        >
          {/* Form inputs for course details */}
          <div className="w-100  gap-3">
            {/* Form group for coursename*/}
            <div className="form-group  row">
              <div className="col-12 col-sm-4">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Batch Title
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  value={params?.btitle}
                  name="btitle"
                  placeholder="Batch Title"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-4">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  value={params?.bstartdate}
                  name="bstartdate"
                  placeholder="Start date"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-4">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Batch Time
                </label>
                <input
                  type="time"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  value={params?.btime}
                  name="btime"
                  placeholder="Batch time"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-4">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Batch Seats
                </label>
                <input
                  type="number"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  value={params?.bseats}
                  name="bseats"
                  placeholder="Batch seats"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-4">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Batch Image
                </label>
                <input
                  type="file"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  name="bimage"
                  placeholder="Image File"
                  onChange={handleChange}
                />
              </div>
              <div className="h-44 md:h-[100%]  w-[100%] md:w-[20%] border-2 rounded-md m-6">
                <img
                  src={`https://api.logicmitra.com:8086/uploads/batch/${params?.bimage}`}
                  alt="image"
                  className="w-[100%] h-[100%]  object-contain"
                />
              </div>

              <div className="col-12 col-sm-4">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Sequence
                </label>
                <input
                  type="number"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  name="bsequence"
                  value={params?.bsequence}
                  placeholder="Batch Sequence"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-sm-4">
                <label className="text-white">Status</label>

                <div className="d-flex justify-content-start text-white gap-4 align-items-center my-2">
                  <div className=" ">
                    <input
                      type="radio"
                      id="active"
                      name="bstatus"
                      value={1}
                      checked={params?.bstatus == 1}
                      onChange={handleChange}
                    />
                    Running
                  </div>

                  <div className="">
                    <input
                      type="radio"
                      id="inactive"
                      value={0}
                      name="bstatus"
                      onChange={handleChange}
                      checked={params?.bstatus == 0}
                    />
                    upcomming
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="inactive"
                      value={2}
                      name="bstatus"
                      onChange={handleChange}
                      checked={params?.bstatus == 2}
                    />
                    completed
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="inactive"
                      value={3}
                      name="bstatus"
                      onChange={handleChange}
                      checked={params?.bstatus == 3}
                    />
                    cancelled
                  </div>
                </div>
              </div>
            </div>

            {/* Submit and cancel buttons */}

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="Add-btn rounded-sm py-2 my-2  px-5"
              >
                Submit
              </button>
              <button
                type="reset"
                className="Cancel-btn  py-2  rounded-sm my-2 px-5"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </Home>
  );
};

export default EditBatch;
