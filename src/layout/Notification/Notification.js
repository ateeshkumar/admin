
import React from 'react'

 const Notification = () => {
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
   
    <input type='radio' id='inputelement' className='' name='Notificationuser'/>
    <label  className="text-white" htmlFor='inputelement'> All Users</label>
   </div>


   <div className="flex gap-2 items-center">
   
    <input type='radio' id='inputelement' className='' name='Notificationuser'/>
    <label  className="text-white" htmlFor='inputelement'>Trainers</label>
   </div> 
   
   <div className="flex gap-2 items-center">
  
    <input type='radio' id='inputelement' className='' name='Notificationuser'/>
    <label  className="text-white" htmlFor='inputelement'>Students</label>
   </div>

</div>

<div className="space-y-3">
<textarea type="text" className='form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white'>
    Type here...
</textarea>

<div className="">
     <input type='file' className="form-control input focus-within:bg-none focus:border-none outline-none w-[100%] text-white "/>
 </div>

 <button className='Add-btn px-3 py-2 rounded-md mt-3 '> Send Notification</button>
</div>

</div>

</section>
    </>
  )
}


export default Notification