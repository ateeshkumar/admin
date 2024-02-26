import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const EditSubModule = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/course-detail/get-submodule-detail?submoduleId=${id}`
  );

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
            // onSubmit={handleSubmit}
            // id={params?.id}
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
                    // value={params?.title}
                    name="title"
                    placeholder="title"
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="exampleInputUsername1">ImageUrl</label>
                  <input
                    type="file"
                    className="form-control"
                    // value={params?.imageUrl}
                    name="imageUrl"
                    // onChange={handleChange}
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
                      //   checked={params?.status == 1}
                      //   onChange={handleChange}
                    />
                    Active
                    <input
                      type="radio"
                      id="active"
                      name="status"
                      value={0}
                      //   checked={params?.status == 0}
                      //   onChange={handleChange}
                    />
                    Inactive
                  </div>
                </div>

                <div className="col-4">
                  <label htmlFor="exampleInputUsername1">Sequence</label>
                  <input
                    type="number"
                    className="form-control"
                    // value={params?.sequence}
                    name="sequence"
                    placeholder="sequence"
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="exampleInputUsername1">Description</label>
                  <textarea
                    type="text"
                    cols="30"
                    rows="10"
                    className="form-control"
                    // value={params?.description}
                    name="description"
                    placeholder="Description"
                    // onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit and cancel buttons */}
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button type="reset" className="btn btn-light">
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditSubModule;
