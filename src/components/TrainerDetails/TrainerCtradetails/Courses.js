import { useEffect, useState } from "react";
import FormatPrice from "../../FormatPrice/FormatPrice";

const CourseTrainer = ({TrainerData}) => {

  const [data , setdata] =useState()

useEffect(()=>{

  setdata(TrainerData)
},[TrainerData])
 
console.log(data?.data?.courses)

  return (
    <>
      <section>
        <div className="flex justify-between items-center my-2 px-2 py-3">
          <h1 className="heading "> Courses</h1>
          <button className="btn-seeAll px-4 py-1 text-sm"> See All</button>
        </div>

{
  data?.data?.courses?.length===0 ? 
  (
    <>
      <div className="text-white">
        There is no Courses 
      </div>
    </>
  ) :
  (
    <>
    <div className="box">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
   
   { data?.data?.courses.map(elm=>{
      return (
        <>
       
            <div className="box p-0 space-y-1">
              <img
                src="https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg"
                alt="image"
                className="w-[100%] h-44 border-b-2  border-yellow-500 "
              />

              <div className="px-3 py-1">
                <h1 className="text-xl font-extrabold">
                 
                  {elm.ctitle}
                </h1>
                <ul className="flex gap-2 font-bold">
    <li className="Text">{<FormatPrice price={elm.cfees}/>}</li>
    <li> <del>{elm.cfees*2}</del></li>
    <li className="Text"> {elm.cofferfees} Offers </li>
</ul>

                <div className="">
                  <ul className="flex justify-between items-center border-t-2 border-yellow-500 w-[100%] mt-2 p-1">
                    <li className=" gap-2 flex justify-between items-center">
                     
                      23 Topics
                    </li>
                    <li className=" gap-2 flex justify-between items-center">
                     
                      23 Months
                    </li>
                    <li className=" gap-2 flex justify-between items-center">
                     
                      ⭐{elm.ratings}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

           
   

        </>
      )
    }) }

    </div>
    </div>
   </>
  )
}
       
      </section>
    </>
  );
};

export default CourseTrainer;
