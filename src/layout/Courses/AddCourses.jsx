import React, { useState } from "react";
import { useAdd } from "../../hooks/useAdd";
import { useFetch } from "../../hooks/useFetch";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddCourses() {
  const navigate = useNavigate();
  const [subCat, setSubCat] = useState();
  //fetching the category data for specific id and title

  const [data, error, loading] = useFetch(
    "https://api.logicmitra.com:8086/api/categories/list",
    true
  );

  console.log(data);
  const initialFormData = {
    cslug: "",
    ctitle: "",
    cintro: "",
    AccessPeriodDays: "",
    caddon: "",
    cstatus: "",
    ccategory: "",
    csubcategory: "",
    ctype: "",
    cduration: "",
    cfees: "",
    cofferfees: "",
    ctrainer: "",
    cthumbnail: null,
    ccoverimage: null,
    cdemovideo: "",
    ckeywords: "",
    cmodules: "",
    cdescription: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  console.log(subCat);
  const [data2, error2, loading2] = useFetch(
    `https://api.logicmitra.com:8086/api/trainers/list`
  );
  console.log(data2);
  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
    try {
      const data = await axios.get(
        `https://api.logicmitra.com:8086/api/categories/sub-cat?catg=${formData.ccategory}`
      );
      setSubCat(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  //add courses to the database
  const handleSubmit = async (e) => {
    try {
      const formdata = new FormData();
      formdata.append("image", formdata.ccoverimage);
      formdata.append("banner", formdata.cthumbnail);
      e.preventDefault();
      const data = await axios.post(
        `https://api.logicmitra.com:8086/api/courses/create-course`,
        formData
      );
      if (data?.data?.response === "success") {
        toast.success("Course Created Successfully");
        setTimeout(() => {
          navigate("/courses");
          // window.location.reload();
        }, 1000);
      } else {
        toast.warn("error while creating course");
      }
      //logic to submit data
      // addData(formData).then((data) => {
      //   console.log(data);
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Something Went wrong!!");
    }
    console.log("Form Submitted", formData);
  };

  console.log(formData);
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
              <label className="text-white" htmlFor="exampleInputUsername1">Course Title</label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData?.ctitle}
                name="ctitle"
                placeholder="Course Title"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-sm-4  flex flex-col">
              <label className="text-white" htmlFor="category">Category</label>

              <div>
                <select
                  name="ccategory"
                  value={formData.ccategory}
                  onChange={handleChange}
                  id="category"
                  className="form-select input focus-within:bg-none focus:border-none outline-none w-[100%] text-white py-2"
                >
                  <option selected>Open this select menu</option>
                  {data?.data &&
                    data?.data.map((elm) => {
                      // const { _id, title } = elm.ccategory;
                      // console.log(_id, title);
                      return (
                        <>
                          <option value={elm.id}>{elm.title}</option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
            {subCat && (
              <div className="col-12 col-sm-4  flex flex-col">
                <label className="text-white" htmlFor="subcategory">Subcategory</label>

                <div>
                  <select
                    name="csubcategory"
                    value={formData.csubcategory}
                    onChange={handleChange}
                    id="subcategory"
                    className="form-select input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                  >
                    <option selected>Open this select menu</option>
                    {subCat?.data &&
                      subCat?.data?.map((elm) => {
                        // const { _id, title } = elm.csubcategory;
                        // console.log(_id, title);

                        return (
                          <>
                            <option value={elm.id}>{elm.title}</option>
                          </>
                        );
                      })}
                  </select>
                </div>
              </div>
            )}

            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Duration</label>
              <input
                type="number"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData?.cduration}
                name="cduration"
                placeholder="Course Duration"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Fees</label>
              <input
                type="number"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData?.cfees}
                name="cfees"
                placeholder="Course Fees"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Offer Fees</label>
              <input
                type="number"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData?.cofferfees}
                name="cofferfees"
                placeholder="Course Offer Fees"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4  flex flex-col">
              <label className="text-white" htmlFor="ctrainer">Course Trainer</label>

              <div>
                <select
                  name="ctrainer"
                  value={formData.ctrainer}
                  onChange={handleChange}
                  id="ctrainer"
                  className="form-select input focus-within:bg-none focus:border-none outline-none w-[100%] text-white py-2"
                >
                  <option selected>Open this select menu</option>
                  {data2?.data &&
                    data2?.data.map((elm) => {
                      // const { _id, sname } = elm.ctrainer;
                      // console.log(_id, sname);
                      return (
                        <>
                          <option value={elm.id}>{elm.sname}</option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>

            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Thumbnail</label>
              <input
                type="file"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="cthumbnail"
                placeholder="Course Duration"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Cover Image</label>
              <input
                type="file"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="ccoverimage"
                placeholder="Course Cover Image"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-sm-4">
              <label className="text-white" htmlFor="exampleInputUsername1">
                Course Demo Video Url
              </label>
              <input
                type="link"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="cdemovideo"
                value={formData?.cdemovideo}
                placeholder="Course Demo Video URL"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Keywords</label>
              <input
                type="text"
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData?.ckeywords}
                name="ckeywords"
                placeholder="Course keywords"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className="text-white" htmlFor="exampleInputUsername1">Course Discription</label>
              <textarea
                name="cdescription"
                id=""
                handleChange={formData?.cdescription}
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
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
}

export default AddCourses;
