import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import useUpdate from "../../hooks/useUpdate";

const EditSubModule = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/course-detail/get-submodule-detail?submoduleId=${id}`
  );
  const [params, setParams] = useState({});
  useEffect(() => {
    if (data) {
      setParams(data?.data);
    }
  }, [data]);
  console.log(params);
  const handleChange = async (e) => {
    console.log(e.target);
    const { name, value, type, files } = e.target;
    setParams({
      ...params,
      [name]: type === "file" ? files[0] : value,
    });
  };
  const [handleUpdate] = useUpdate(
    `https://api.logicmitra.com:8086/api/course-detail/update-submodule`
  );
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    handleUpdate(`submoduleId=${e.target.id}`, params, "/courses/module");
  };

  return (
    <div>
      {/* Display error message if there's an error */}
      {error && error.message}

      {/* Display loading message while data is being fetched */}
      {loading && "Loading..."}

      {/* Render the form if data is available */}
      {data.data && (
        <div className="w-100 p-3 bg-main">
          <form
            // Form for updating category information
            className="forms-sample w-100 m-2 p-4 card"
            onSubmit={handleSubmit}
            id={params?.id}
          >
            {/* Form inputs for category details */}
            <div className="w-100 d-flex gap-3">
              {/* Form group for title */}
              <div className="form-group w-100 row">
                <div className="col-4">
                  <label htmlFor="exampleInputUsername1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={params?.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="exampleInputUsername1">File Url</label>
                  <input
                    type="url"
                    className="form-control"
                    value={params?.fileUrl}
                    name="fileUrl"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="exampleInputUsername1">Video Url</label>
                  <input
                    type="url"
                    className="form-control"
                    value={params?.videoUrl}
                    name="videoUrl"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-4">
                  <label htmlFor="exampleInputUsername1">Status</label>
                  <div className="text-black d-flex gap-2">
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
                  <label htmlFor="exampleInputUsername1">Sequence</label>
                  <input
                    type="number"
                    className="form-control"
                    value={params?.sequence}
                    name="sequence"
                    placeholder="sequence"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="exampleInputUsername1">Description</label>
                  <textarea
                    type="text"
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
          </form>
        </div>
      )}
    </div>
  );
};

export default EditSubModule;
