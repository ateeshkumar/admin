import React, { useEffect, useState } from "react";
import { useAdd } from "../../hooks/useAdd";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import axios from "axios";
import { toast } from "react-toastify";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhoneInput from 'react-phone-number-input/input'

function AddStudent() {
  const StudentUrl="/students";

  const navigate=useNavigate()

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
  const[ Checkbtn , Setcheckbtn]= useState(0)



  // to select the mobile or whatsap using checked input

  const handleChackchange=(e)=>{
   
Setcheckbtn(e.target.checked)
console.log(e.target.value)

if(!Checkbtn){
  setFormData(prevdata=>(
    {
      ...prevdata,
      swhatsapp:formData.smobile
    }
  ))
  }else{
    setFormData(prevdata=>(
      {
        ...prevdata,
        swhatsapp:""
      }
    ))
  }
  }


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


  console.log(formData.sgender)




  const handleSubmit = async (e) => {
    try {
      const formdata = new FormData();
    formdata.append("sprofilepicUrl", formData.sprofilepicUrl);
    formdata.append("sbackgroundUrl", formData.sbackgroundUrl);

      e.preventDefault();
      const data = await axios.post(
        `https://api.logicmitra.com:8086/api/user/create_user`,
        formData
     ,{
      headers: {
        "Content-Type": "multipart/form-data",
        
      },
     }
      );
      if (data?.data?.response === "success") {
        toast.success("Student Created Successfully");
        setTimeout(() => {
          navigate(StudentUrl);
        
        }, 1000);

        setTimeout(() => {
            window.location.reload();
        }, 2000);
      } else {
        toast.warn("error while creating course");
      }
      
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("Something Went wrong!!");
    }
    console.log("Form Submitted", formData);
  };

 
  console.log(formData)



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

  
  // choose the city after state and coutnry clicked 


  useEffect(()=>{
const fetchcitydata=async()=>{
try{

  const res = await axios.get(`https://api.logicmitra.com:8086/api/address/city-detail?cityID=${formData.scity}`)
 const data = res.data
 console.log(data?.data?.state)

  

 const datastate= Statedata?.data?.filter(elm=>elm.id===data?.data?.state)
 console.log(datastate)
 const UniquStatename= datastate.map(elm=>elm.title)
 console.log(...UniquStatename)

 setFormData((predata)=>({
  ...predata,
  sstate:UniquStatename.toString()
 }))


 console.log(datastate)

}catch(error){
  console.log(error)
}



}

fetchcitydata()

  },[formData.scity])


  console.log(formData.sstate)
  console.log(`<h1> ${formData.sstate} </h1>`)

  return (
    <div className="w-[100%] py-3 p-3 mb-16">
      <form className="forms-sample w-[100%]  p-4 box" onSubmit={handleSubmit}>
        <div className="  ">
          <div className="form-group w-[100%] grid grid-cols-1 sm:grid-cols-3 gap-2 items-center ">
            <div className="">
              <label className="text-white" htmlFor="exampleInputUsername1"> * Student Name</label>
              <input
                type="text"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sname}
                name="sname"
                placeholder="Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputUsername1"> * User Type</label>
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
              <label className="text-white" htmlFor="exampleInputDOB">Gender</label>
             
             <select className="form-select input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
               value={formData.sgender}
                name="sgender"
                
                onChange={handleChange}>
                <option>Select gender</option>
              <option value="male">
                male
              </option>
              <option value="female">female</option>
             </select>
            </div>

            <div className="">
              <label className="text-white" htmlFor="exampleInputEmail1">* Email</label>
              <input
                type="email"
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.semail}
                name="semail"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">* Mobile</label>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                maxLength={12}
                minLength={12}
                required
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.smobile}
                name="smobile"
               
                
                onChange={handleChange}
              />
            </div>

           
           
            <div className="">
              <label className="text-white " htmlFor="exampleInputMobile">
             
             <div className="flex gap-2 items-center  ">
             <p> Whatsap</p>
             
            
             <input
                type="checkbox"
                className="text-xs"
              
               checked={Checkbtn}
                onChange={handleChackchange}
              />
              <span className="text-xs text-red-300"> (same as contact no.)</span>
          
             </div>
              
              
              </label>
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="123-456-7890"
                maxLength={12}
                minLength={12}
               
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData?.swhatsapp}
                name="swhatsapp"
             
               

                
                onChange={handleChange}
              />
              
            </div>
           
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Date of Birth</label>
              <input
                type="date"
               
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.sdob}
                name="sdob"
                placeholder="Date of Birth"
                onChange={handleChange}
              />
            </div>

          
         

            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Status</label>
              <select onChange={handleChange} value={formData.sstatus} name="sstatus"
               className="form-select  input focus-within:bg-none focus:border-none outline-none w-[100%] text-white py-[10px]">
                 <option>Open Select</option>
               
                <option value={1}>Active</option>
                <option value="blocked">Blocked</option>
                <option value={0}>Inactive</option>
                
                
              </select>
              
            </div>
           
           

             
           
            <div className="">
            <label className="text-white" htmlFor="exampleInputDOB">Country</label>
              
               <select 
               
               className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2  py-[10px]"
               onChange={handleChange} name="scountry" value={formData?.scountry}>
               <option> Select country</option>
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
            <label className="text-white" htmlFor="exampleInputDOB">State</label>
              
               <select 
              
               className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2  py-[10px]"
               onChange={handleChange} name="sstate" value={formData.sstate}>
              <optoin>Select state</optoin>
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
            <label className="text-white" htmlFor="exampleInputDOB">City</label>
              
               <select 
               required
               className="form-select input focus-within:bg-none border-none outline-none focus:bg-none my-2 py-[10px]"
               onChange={handleChange} name="scity" value={formData?.scity}>
               <option> Select city</option>
               {
                Citydata?.data?.map(elm=>{
                    console.log(elm.id)
                    return (
                        <>
                            <option value={`${elm.id}`}> {elm.title} </option>
                        </>
                    )
                })
               }
               
               </select>
              </div>

              <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Address</label>
              <input
                type="text"
               
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.saddress}
                name="saddress"
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Pin Code</label>
              <input
                type="number"
               
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.spincode}
                name="spincode"
                placeholder="Pin code"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Profile Pic</label>
              <input
                type="file"
                
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="sprofilepicUrl"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputDOB">Background Image</label>
              <input
                type="file"
                
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                name="sbackgroundUrl"
                onChange={handleChange}
              />
            </div>
           

           


           
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Experience</label>
              <input
                type="text"
                
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
                
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.passOutYear}
                name="passOutYear"
                placeholder="Pass out year"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Fcm</label>
              <input
                type="text"
                
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
               
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                value={formData.slongitude}
                name="slongitude"
                placeholder="Longitude"
                onChange={handleChange}
              />
            </div>
          
          </div>
          <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">Intro</label>
              <textarea
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                
                value={formData.sintro}
                name="sintro"
                placeholder="Intro"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label className="text-white" htmlFor="exampleInputMobile">About</label>
              <textarea
                className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white"
                
                value={formData.sabout}
                name="sabout"
                placeholder="About"
                onChange={handleChange}
              />
            </div>
        </div>

        {/* Submit and cancel buttons */}
       
       <div>
      
      <div className="flex justify-between items-center mt-3">
      <button
          type="submit"
          className="my-2 Add-btn py-2 sm:px-4 px-5  rounded-md  "
        >
          Submit
        </button>
        <button type="reset"  className="my-2 Cancel-btn sm:px-4 px-5 py-2 rounded-md  ">
          Cancel
        </button>
      </div>
       </div>
      </form>
    </div>
  );
}

export default AddStudent;
