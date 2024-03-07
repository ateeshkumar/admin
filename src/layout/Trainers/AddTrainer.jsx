import { useState } from "react";
import { useAdd } from "../../hooks/useAdd";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useFetch } from "../../hooks/useFetch";

function AddTrainer() {
  
  const TrainerUrl= "/trainers"
  const initialFormData = {
    userType: "trainer",
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
      [name]: type === "file" ? files[0] : value,
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
    addData(formData , TrainerUrl)
      
  };

  console.log(formData);


     // fetching all country , state, and country data for showing on dropdown

  const [Citydata, error1, loading1] = useFetch(
    "https://api.logicmitra.com:8086/api/address/city-list",
    true
  );

  const [Countrydata, error2, loading2] = useFetch(
    "https://api.logicmitra.com:8086/api/address/country-list",
    true
  );

  const [Statedata, error3, loading3] = useFetch(
    "https://api.logicmitra.com:8086/api/address/state-list",
    true
  );

console.log(Countrydata , Statedata , Citydata)


  return (
    <>
      <div className="w-[100%] py-3 sm:p-3 ">
        <form
          className="forms-sample w-[100%] m-2 p-4 box"
          onSubmit={handleSubmit}
        >
          <div className=" ">
            <div className="form-group grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  Trainer Name
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sname}
                  name="sname"
                  placeholder="Trainers Name"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputUsername1">
                  User Type
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.userType}
                  name="userType"
                  placeholder="Trainers Name"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputEmail1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData?.semail}
                  name="semail"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sgender}
                  name="sgender"
                  placeholder="Gender"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.smobile}
                  name="smobile"
                  placeholder="Phone number"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Whatsapp Number
                </label>
                <input
                  type="number"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.swhatsapp}
                  name="swhatsapp"
                  placeholder="Whatsapp number"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  D.O.B
                </label>
                <input
                  type="date"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sdob}
                  name="sdob"
                  placeholder="Date of birth"
                  onChange={handleChange}
                />
              </div>
             
              <div className="">
            <label className="text-white" htmlFor="exampleInputDOB">City</label>
              
               <select 
               required
               className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2"
               onChange={handleChange} name="scity" value={formData?.scity}>
               <option> select city</option>
               {
                Citydata?.data?.map(elm=>{
                    
                    return (
                        <>
                            <option value={elm.title}> {elm.title} </option>
                        </>
                    )
                })
               }
               
               </select>
              </div>

             
              <div className="">
            <label className="text-white" htmlFor="exampleInputDOB">State</label>
              
               <select 
               required
               className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2"
               onChange={handleChange} name="sstate" value={formData?.sstate}>
               <option> select state</option>
               {
                Statedata?.data?.map(elm=>{
                    
                    return (
                        <>
                            <option value={elm.title}> {elm.title} </option>
                        </>
                    )
                })
               }
               
               </select>
              </div>

             
              <div className="">
            <label className="text-white" htmlFor="exampleInputDOB">Country</label>
              
               <select 
               required
               className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2"
               onChange={handleChange} name="scountry" value={formData?.scountry}>
               <option> select country</option>
               {
                Countrydata?.data?.map(elm=>{
                    
                    return (
                        <>
                            <option value={elm.title}> {elm.title} </option>
                        </>
                    )
                })
               }
               
               </select>
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.saddress}
                  name="saddress"
                  placeholder="Address"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Pincode
                </label>
                <input
                  type="number"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.spincode}
                  name="spincode"
                  placeholder="Pin Code"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Status
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sstatus}
                  name="sstatus"
                  placeholder="Status"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Longitude
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.slongitude}
                  name="slongitude"
                  placeholder="longitude"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Lattitude
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.slattitude}
                  name="slattitude"
                  placeholder="Lattitude"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Profile Pic
                </label>
                <input
                  type="file"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  name="sprofilepicUrl"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Banner Image
                </label>
                <input
                  type="file"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  name="sbackgroundUrl"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Intro
                </label>
                <textarea
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sintro}
                  name="sintro"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  About
                </label>
                <textarea
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sabout}
                  name="sabout"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Experience
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.experience}
                  name="experience"
                  placeholder="Experience"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Languages
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.languages}
                  name="languages"
                  placeholder="Language"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Level Of Education
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.levelOfeducation}
                  name="levelOfeducation"
                  placeholder="Level of Education"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Pass Out Year
                </label>
                <input
                  type="number"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.passOutYear}
                  name="passOutYear"
                  placeholder="Pass out year"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label className="text-white" htmlFor="exampleInputMobile">
                  Fcm
                </label>
                <input
                  type="text"
                  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "
                  value={formData.sfcm}
                  name="sfcm"
                  placeholder="Fcm "
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
            <button type="submit" className=" px-5 py-2 Add-btn rounded-md ">
              Submit
            </button>
            <button type="reset" className="px-5 py-2 Cancel-btn rounded-md ">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTrainer;
