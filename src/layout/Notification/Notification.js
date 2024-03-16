
import React, { useState } from 'react'
import FieldUST from './FieldUST'
import { FaTimeline } from 'react-icons/fa6';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';

 const Notification = () => {


    const [open, setOpen] = useState("AlluserList");

    console.log(open)
    const handleClickOpen = (elm) => {
      setOpen(elm);
    };




    const [params , SetParams]=useState({
      title:"",
      message:"",
      banner:"",
      userId:[]
    })



    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
  
     
  
    
      SetParams((prevData) => ({
        ...prevData,
        [name]: type === "file" ? files[0] : value,
      }));
    
    };


    console.log(params)

  return (
    <>

<section className='w-[100%] py-3 p-3 mb-16'>

<section className="section py-3">
        <div className="text-xl font-medium text-white  d-flex justify-between items-center">
          <h1>Notification</h1>
         
        </div>
      </section>
<div className="box text-white p-3">

<div className="flex items-center gap-3">
   
   <div className="flex gap-2 items-center">
   
<input type='radio' id='inputelement' className='' name='Notificationuser' onClick={()=>handleClickOpen("UserList")}/>
    <label  className="text-white" htmlFor='inputelement'> All Users</label>
   </div>







   <div className="flex gap-2 items-center">
   
    <input type='radio' id='inputelement' className='' name='Notificationuser' onClick={()=>handleClickOpen("TrainerList")}/>
    <label  className="text-white" htmlFor='inputelement'>Trainers</label>
   </div> 
   
   <div className="flex gap-2 items-center">
  
    <input type='radio' id='inputelement' className='' name='Notificationuser' onClick={()=>handleClickOpen("StudentList")}/>
    <label  className="text-white" htmlFor='inputelement'>Students</label>
   </div>

</div>








<div className="">
{
    <FieldUST open={open} setOpen={setOpen} userId={params.userId} SetParams={SetParams}/>
}
</div>


<div className="space-y-3">


<div className="space-y-2">
<p> Title</p>
 <input type='text' name="title"  onChange={handleChange}
     placeholder='Title' className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "/>
 </div>

<div className="space-y-2">
<p> Messages</p>
<textarea type="text" name="message" onChange={handleChange}  className='form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white'>
    Type here...
</textarea>
</div>


<div className="space-y-2">
<p> Image</p>
     <input type='file' name="banner" onChange={handleChange}  className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "/>
 </div>

 <button className='Add-btn px-3 py-2 rounded-md mt-3 '> Send Notification</button>
</div>

</div>

</section>




    </>
  )
}


export default Notification