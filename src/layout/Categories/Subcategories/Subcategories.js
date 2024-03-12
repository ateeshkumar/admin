import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { useAdd } from "../../../hooks/useAdd";
import { useDeleteOne } from "../../../hooks/useDeleteOne";


import Popup from "reactjs-popup";
import ImageViewer from "../../../components/ImageViewer";
import axios from "axios";
import { useFetch } from "../../../hooks/useFetch";
import { useFetchOnce } from "../../../hooks/useFetchOnce";
import { UsesubcategoriesContext } from "../../../context/SubcatContext";

const SubCategories = () => {

  const {id}=useParams()
console.log(id)
 const Url= window.location.href;

 const SubCatUrl = Url.substring(Url.indexOf('/categories'));
 console.log(SubCatUrl)
  //  Fetch subcategory data using a custom hook (useFetch)

 
const { subcatData, setData,
loading, setLoading,
error, setError ,categoryId, setcatId}=UsesubcategoriesContext()


  

  

 



 

 
  


useEffect(()=>{

  const fetchdata=async()=>{

    try{
      setLoading(true);
      const res =await  axios.get(`https://api.logicmitra.com:8086/api/categories/sub-cat?catg=${id}`)
      console.log(res.data)
      
      if(res.status===200){
        console.log(res.data)
        setLoading(false);
              setData(await res.data);
      }else{
        console.log("somethidng wen wrong")
      }
    }catch(error){
      console.log(error)
      setError({
              status: true,
              error: error.message,
            });
    }
  }
  

  fetchdata()
},[id, setData ])


console.log(subcatData,)







  const [params, setparams] = useState({
    title: "",
    imageUrl: "",
    category: id,
    sequence: "",
    status: "1",
    description: "",
  });

  console.log(params)
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    setparams({
      ...params,
      [name]: type === "file" ? files[0] : value,
    });
  };






  const [addData] = useAdd(
    `https://api.logicmitra.com:8086/api/categories/create-subcat`
  );

  const handleSubmit =async(e)=>{
console.log(e.target.id)

// 65ecbfa6437e1a85a26d7ea1

    e.preventDefault();
    
    const formData = new FormData();
    formData.append("image", params.imageUrl);

    addData(params, SubCatUrl);
    
  }
   



  
  
  // delete the particular Categories
  const { Delete } = useDeleteOne(
    `https://api.logicmitra.com:8086/api/categories/delete-subcat?subcatId=`
  );

  // Handle deletion of a category
  const handleDelete = async (e) => {
    Delete(e.target.id, SubCatUrl);
  };

  
  return (
    <div className="py-3  p-3 text-white w-[100%]  relative mb-16">
      <section className="section py-3">
        <div className="text-xl font-medium">
          <h1>Sub Category List</h1>
          <div className="section-header-breadcrumb"></div>
        </div>
      </section>

 {/* Categories Table */}
 <div className="row  space-y-5 lg:space-y-0">
        <div className="col col-lg-7">
          <div className=" ">
            {/* Display loading message while data is being fetched */}
            {loading && <h1 className="text-white">Loading...</h1>}
            {/* Display error message if there's an error */}
            {error && <h1 className="text-white">{error.message}</h1>}
            {/* Display Category data if available */}
            {!subcatData?.data ==[] && (
              <div className="table-responsive Ttable  overflow-y-auto Table-overflow">
                <table className=" table-striped w-[100%]">
                  <thead>
                    <tr className="Thead">
                      <th scope="col">Title</th>
                      <th scope="col">Image</th>

                      <th scope="col">Status</th>
                      <th scope="col">Sequence</th>

                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {/* Map through trainers data and display in table rows */}
                    {subcatData?.data.map((item) => (
                      <tr key={item.title} className="Tbody">
                        <td>{item.title}</td>
                        <td>
                          <Popup
                            trigger={
                              <button>
                                <img
                                  src={`https://api.logicmitra.com/uploads/subcategories/${item.imageUrl}`}
                                  alt="image"
                                  className="w-10 h-10 rounded-md"
                                />
                              </button>
                            }
                            modal
                            nested
                          >
                            {(close) => (
                              <ImageViewer
                                url={`https://api.logicmitra.com/uploads/subcategories/${item.imageUrl}`}
                                close={close}
                              />
                            )}
                          </Popup>
                        </td>

                        <td>{item.status === 1 ? "Active " : "Inactive"}</td>
                        <td>{item.sequence}</td>

                        <td className="flex gap-2 items-center">
                          {/* Action links for each trainer */}
                          <Link
                            className="py-2 px-3 rounded-md edit-icon"
                            to={`${SubCatUrl}/edit/${item.id}`}
                          >
                            <i class="bi bi-pencil-square"></i>
                          </Link>
                          <Link
                            id={item.id}
                            className="py-2 px-3 rounded-md delete-icon "
                            onClick={handleDelete}
                          >
                            <i id={item.id} className="bi bi-trash3"></i>
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
        
        {subcatData?.data &&
          <div className="col-lg-5 lg:px-5">
            <form
              className="box   py-4 shadow-lg  lg:h-50"
              onSubmit={handleSubmit}
            >
              <div className="">
                <p className="text-white">* Title</p>
                <input
                  onChange={handleChange}
                  required
                  name="title"
                  placeholder="Title"
                  value={params?.title}
                  type="text"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>

              <div className="">
                <p className="text-white">* Image Url</p>
                <input
                  onChange={handleChange}
                 required
                  name="imageUrl"
                  type="file"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>

              <div className="">
                <p className="text-white">Status</p>

                <div className="d-flex justify-content-start text-white gap-4 align-items-center my-2">
                  <div className=" ">
                    <input
                      defaultChecked
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
              <div className="">
                <p className="text-white">Sequence</p>
                <input
                  onChange={handleChange}
                 
                  name="sequence"
                  placeholder="Sequence"
                  value={params?.sequence}
                  type="number"
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                />
              </div>
              <div className="">
                <p className="text-white">Description</p>
                <textarea
                  type="text"
                 
                  className="form-control input focus-within:bg-none border-none outline-none focus:bg-none my-2"
                  value={params?.description}
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* {similar fields} */}
              <button className="Add-btn px-3 py-2 rounded-md mt-3 w-[100%]">
                Add Subcategory
              </button>
            </form>
          </div>
        }
       </div>
    
    </div>
  );
};



export default SubCategories;
