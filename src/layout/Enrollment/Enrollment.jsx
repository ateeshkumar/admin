import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
const Enrollment = () => {
  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/enroll/enroll-list`
  );
  console.log(data);
  return (
    <>
      <div className=" p-3  p-md-3 text-white w-[100%]  relative courses-page">
        <section className="section py-3">
          <div className="text-xl font-medium   d-flex justify-between items-center">
            <h1>Enrollment Lists</h1>
            <div className="">
              <Link
                to="/enrollment/create"
                className="Add-btn px-3 py-2 rounded-md  me-2"
              >
                Create Enroll
              </Link>
            </div>
          </div>
        </section>
        <div className="row ">
          {/* <Card title="Total Courses" value={totalCourses} />
          <Card title="Active Courses" value={activeCourses} />
          <Card title="Inactive Courses" value={inactiveCourses} />
          <Card title="Blocked Courses" value={blockedCourses} /> */}
        </div>
        <div className="row">
          <div className="col">
            <div className="box ">
              <div className="card-body row">
                <div className="border-bottom mb-3 border-black">
                  <h4 className="text-white heading">Filters</h4>
                </div>
                <div className="col-12 col-sm-3 text-white relative ">
                  <label className="text-white" htmlFor="search">
                    Search
                  </label>
                  <input
                    type="search"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none fs-6  w-[100%] w-100 text-white"
                    id="search"
                    name="name"
                    // onChange={handleChange}
                    aria-describedby="emailHelp"
                    placeholder="search"
                  />
                </div>
                <div className="col-12 col-sm-3 text-white">
                  <label className="text-white" htmlFor="start-date">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none "
                    name="startDate"
                    id="start-date"
                    // onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-3 text-white">
                  <label className="text-white" htmlFor="end-date">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="form-control input focus-within:bg-none border-none outline-none focus:bg-none "
                    id="endDate"
                    placeholder=""
                    // onChange={handleChange}
                    name="end-date"
                  />
                </div>
                <div className="col-12 col-sm-3 text-white">
                  <label className="text-white" htmlFor="filters">
                    Filters
                  </label>
                  <select
                    id="filters"
                    className="form-select py-2 input focus-within:bg-none border-none outline-none focus:bg-none"
                    // value={params.filter}
                    // onChange={handleChange}
                    name="filter"
                    aria-label=""
                  >
                    <option className="h-100">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[100%]">
          <div className=" ">
            {/* {loading && <h1 className="text-white">Loading...</h1>} */}
            {error && <h1 className="text-white">{error.message}</h1>}
            {data && (
              <div className="table-responsive Ttable mt-4  h-[500px] overflow-y-auto">
                <table className=" table-striped w-[100%]">
                  <thead>
                    <tr className="Thead">
                      <th scope="col">Student Name</th>
                      <th scope="col">Trainer Name</th>
                      <th scope="col">Course Name</th>
                      <th scope="col">Enroll Date</th>
                      <th scope="col">Payment Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Pay Status</th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {data.data?.map((item, index) => (
                      <tr key={index} className="Tbody">
                        <td>{item.studentid?.sname}</td>
                        <td>{item.trainerid?.sname}</td>
                        <td>{item?.courseid?.ctitle}</td>
                        <td> {item?.enrolldate.substring(0, 10)}</td>
                        <td> {item?.payamount} Rs</td>
                        <td> {item.status}</td>
                        <td> {item?.paystatus == 1 ? "paid" : "pending"}</td>
                        <td className="flex gap-2 items-cente justify-center">
                          <Link
                            className="  py-2 px-3 rounded-md view-icon"
                            to={`/enrollment/view/${item.id}`}
                          >
                            <i className="bi bi-eye-fill"></i>
                          </Link>{" "}
                          {/* {/* <Link
                            className=" py-2 px-3 rounded-md edit-icon"
                            to={`/batches/edit/${item.id}`}
                          >
                            <i className="bi bi-pencil-square"></i>
                          </Link> */}
                          <Link
                            className="  py-2 px-3 rounded-md delete-icon "
                            // onClick={handleDelete}
                            id={item.id}
                          >
                            Cancel
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
    </>
  );
};

export default Enrollment;
