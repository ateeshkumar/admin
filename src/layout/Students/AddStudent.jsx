import React, { useState } from "react";
import { useAdd } from "../../hooks/useAdd";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const StudentUrl="/students";

  const initialFormData = {
    userType: "student",
    sname: "",
    semail: "",
    smobile: "",
    languages: "",
    experience: "",
    sintro: "",
    sabout: "",
    sgender: "",
    sdob: "",
    scity: "",
    saddress: "",
    levelOfeducation: "",
    passOutYear: "",
    sstate: "",
    scountry: "",
    spincode: "",
    sstatus: "",
    swhatsapp: "",
    sfcm: "",
    slattitude: "",
    slongitude: "",
    sbackgroundUrl: null,

    sprofilepicUrl: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "files" ? files[0] : value,
    }));
  };
  //useAdd here
  const [addData] = useAdd(
    "https://api.logicmitra.com:8086/api/user/create_user"
  );
  const handleSubmit = (e) => {
    const formdata = new FormData();
    formdata.append("image", formData.sprofilepicUrl);
    formdata.append("banner-image", formData.sbackgroundUrl);
    e.preventDefault();

    addData(formData , StudentUrl)
      
  };

  console.log(formData);
  return (
    <div className="w-[100%] py-3 sm:p-3 ">
      <form className="forms-sample w-[100%] m-2 p-4 box" onSubmit={handleSubmit}>
        <div className="  ">
          <div className="form-group w-[100%] grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="">
              <label className="text-white" htmlFor="exampleInputUsername1">Student Name</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sname}
                name="sname"
                placeholder="Student Name"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputUsername1">User Type</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.userType}
                name="userType"
                placeholder="Trainers Name"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.semail}
                name="semail"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Mobile</label>
              <input
                type="number"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.smobile}
                name="smobile"
                placeholder="Mobile"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Whatsapp</label>
              <input
                type="number"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.swhatsapp}
                name="swhatsapp"
                placeholder="Whatsapp"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Date of Birth</label>
              <input
                type="date"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sdob}
                name="sdob"
                placeholder="Date of Birth"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Status</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sstatus}
                name="sstatus"
                placeholder="Status"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">City</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.scity}
                name="scity"
                placeholder="City"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Address</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.saddress}
                name="saddress"
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">State</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sstate}
                name="sstate"
                placeholder="State"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Country</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.scountry}
                name="scountry"
                placeholder="Country"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Profile Pic</label>
              <input
                type="file"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="sprofilepicUrl"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Background Image</label>
              <input
                type="file"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="sbackgroundUrl"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Pin Code</label>
              <input
                type="number"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.spincode}
                name="spincode"
                placeholder="Pin code"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Gender</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sgender}
                name="sgender"
                placeholder="Gender"
                onChange={handleChange}
              />
            </div>

            <div className="col-12">
              <label className="text-white" htmlFor="exampleInputMobile">Intro</label>
              <textarea
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                required
                value={formData.sintro}
                name="sintro"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <label className="text-white" htmlFor="exampleInputMobile">About</label>
              <textarea
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                required
                value={formData.sabout}
                name="sabout"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Experience</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.experience}
                name="experience"
                placeholder="Experience"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Languages</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.languages}
                name="languages"
                placeholder="Language"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Level Of Education</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.levelOfeducation}
                name="levelOfeducation"
                placeholder="Level of Education"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Pass Out Year</label>
              <input
                type="number"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.passOutYear}
                name="passOutYear"
                placeholder="pass out year"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Fcm</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sfcm}
                name="sfcm"
                placeholder="Fcm "
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Lattitude</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.slattitude}
                name="slattitude"
                placeholder="Lattitude"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Longitude</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.slongitude}
                name="slongitude"
                placeholder="Longitude"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Submit and cancel buttons */}
       
       <div>
      
      <div className="flex justify-between items-center">
      <button
          type="submit"
          className="my-2 Add-btn py-2 px-5  rounded-md  "
        >
          Submit
        </button>
        <button type="reset" className="my-2 Cancel-btn px-5 py-2 rounded-md  ">
          Cancel
        </button>
      </div>
       </div>
      </form>
    </div>
  );
}

export default AddStudent;
