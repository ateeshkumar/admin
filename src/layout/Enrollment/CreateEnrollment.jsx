import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useAdd } from "../../hooks/useAdd";

const CreateEnrollment = () => {
  const [data, error, loading] = useFetch(
    "https://api.logicmitra.com:8086/api/courses/all-course"
  );
  const [data1, error1, loading1] = useFetch(
    "https://api.logicmitra.com:8086/api/user/list?userType=student"
  );
  console.log(data);
  console.log(data1);
  const [params, setParams] = useState({
    courseid: "",
    studentid: "",
    trainerid: "65cbaadfa02a7f37ea7bb6ff",
    payamount: "",
    utrno: "",
    paystatus: 0,
    appdiscount: "",
    coupondiscount: "",
    subtotal: "",
    couponid: "",
    status: 1,
    paymode: "",
    transactionid: "",
  });
  console.log(params);
  const handleChange = async (e) => {
    console.log(e.target);
    const { name, value, type, files } = e.target;
    setParams({
      ...params,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const [addData] = useAdd(
    `https://api.logicmitra.com:8086/api/enroll/enroll-student`
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    addData(params, "/enrollment");
  };
  return (
    <div className="w-[100%] py-3 sm:p-3">
      <form
        // Form for Adding Course information
        className="forms-sample  m-2 p-4 box "
        onSubmit={handleSubmit}
      >
        {/* Form inputs for course details */}
        <div className="w-100  gap-3">
          {/* Form group for coursename*/}
          <div className="form-group  row">
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Payment Amount
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.payamount}
                name="payamount"
                placeholder="Payment Amount"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-sm-4  flex flex-col">
              <label className="text-white" htmlFor="subcategory">
                Student
              </label>

              <div>
                <select
                  name="studentid"
                  value={params?.studentid}
                  onChange={handleChange}
                  id="studentid"
                  className="form-select input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                >
                  <option selected>Open this select menu</option>
                  {data1?.data &&
                    data1?.data?.map((elm) => {
                      // const { _id, title } = elm.csubcategory;
                      // console.log(_id, title);

                      return (
                        <>
                          <option value={elm.id}>{elm?.sname}</option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-4  flex flex-col">
              <label className="text-white" htmlFor="subcategory">
                Course
              </label>

              <div>
                <select
                  name="courseid"
                  value={params?.courseid}
                  onChange={handleChange}
                  id="courseid"
                  className="form-select input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                >
                  <option selected>Open this select menu</option>
                  {data?.data &&
                    data?.data?.map((elm) => {
                      // const { _id, title } = elm.csubcategory;
                      // console.log(_id, title);

                      return (
                        <>
                          <option value={elm?.id}>{elm?.ctitle}</option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                UTR No.
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.utrno}
                name="utrno"
                placeholder="Utr No."
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Apply Discount
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.appdiscount}
                name="appdiscount"
                placeholder="Apply Discount"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Coupon Discount
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.coupondiscount}
                name="coupondiscount"
                placeholder="Coupon Discount"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Coupon ID
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.couponid}
                name="couponid"
                placeholder="Coupon Id"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Sub Total
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.subtotal}
                name="subtotal"
                placeholder="Sub Total"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Payment Mode
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.paymode}
                name="paymode"
                placeholder="Payment Mode"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Transaction ID
              </label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={params?.transactionid}
                name="transactionid"
                placeholder="Transaction Id"
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
            <div className="col-12 col-sm-4">
              <label className="text-white">Payment Status</label>
              <div className="d-flex justify-content-start text-white gap-4 align-items-center my-2">
                <div className=" ">
                  <input
                    type="radio"
                    id="active"
                    name="paystatus"
                    value={1}
                    checked={params?.paystatus == 1}
                    onChange={handleChange}
                  />
                  Paid
                </div>

                <div className="">
                  <input
                    type="radio"
                    id="inactive"
                    value={0}
                    name="paystatus"
                    onChange={handleChange}
                    checked={params?.paystatus == 0}
                  />
                  Pending
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
  );
};

export default CreateEnrollment;
