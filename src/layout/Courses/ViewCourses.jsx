import React from "react";
import { GoClock } from "react-icons/go";
import CourseEnroll from "../../components/CourseDetails/courseDescription/CourseEnroll";
import CourseContent from "../../components/CourseDetails/courseDescription/Coursecontent";
import STdetails from "../../components/CourseDetails/courseDescription/STdetailsreview";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
function ViewCourses() {

  // https://api.logicmitra.com:8086/api/courses/course-detail?courseId=65cf3c311c9ac2fe9015264a

  const { id } = useParams();
  const [data, error, loading] = useFetch(
    `https://api.logicmitra.com:8086/api/courses/course-detail?courseId=${id}`,
    id
  );
  console.log(data);
  return (
    <>
      <div className="p-3  p-md-3 text-white w-[100%]">
        <div className="">
          
          <CourseEnroll CourseData={data}/>
        </div>
        <div className="">
          <CourseContent CourseData={data}/>
        </div>

        <div className="">
          
          <STdetails CourseData={data}/>
        </div>
      </div>
    </>
  );
}

export default ViewCourses;
