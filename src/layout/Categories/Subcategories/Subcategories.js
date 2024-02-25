import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { useAdd } from "../../../hooks/useAdd";
import { useDeleteOne } from "../../../hooks/useDeleteOne";

import { UsesubcategoriesContext } from "../../../context/SubcatContext";

const SubCategories = () => {
 

  const SubCatUrl= "/categories/subcategories"

  // Fetch subcategory data using a custom hook (useFetch)

  const { subcatData, loading, error, categoryId } = UsesubcategoriesContext();

  console.log(subcatData);
  console.log(categoryId);

  const [params, setparams] = useState({
    title: "",
    imageUrl: "",
    category: categoryId,
    sequence: "",
    status: "1",
    description: "",
  });
  console.log(
    params.title,
    params.imageUrl,
    params.description,
    params.sequence,
    params.status,
    params.category
  );
  //handle addition of category
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
  const handleSubmit = (event) => {
    event.preventDefault();
    addData(params , SubCatUrl)
     
  };
  // delete the particular Categories
  const { Delete } = useDeleteOne(
    `https://api.logicmitra.com:8086/api/categories/delete-subcat?subcatId=`
  );

  // Handle deletion of a category
  const handleDelete = async (e) => {
    Delete(e.target.id , SubCatUrl);
  };

  return (
    <div className="pl-3  p-md-3 text-white w-[100%]  relative">
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
              {subcatData.data && (
                <div className="table-responsive Ttable ">
                <table className=" table-striped w-[100%]">
                  <thead>
                    <tr>
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
                          <img
                            src={`https://api.logicmitra.com/uploads/subcategories/${item.imageUrl}`}
                            alt="image" className="w-10 h-10 rounded-md"
                          />
                        </td>

                        <td>{item.status === 1 ? "Active " : "Inactive"}</td>
                        <td>{item.sequence}</td>

                        <td className="flex gap-2 items-center">
                          {/* Action links for each trainer */}
                          <Link
                            id={item.id}
                            className=" py-2 px-3 rounded-md bg-danger "
                            onClick={handleDelete}
                          >
                            <i id={item.id} className="bi bi-trash3"></i>
                          </Link>{" "}
                          <Link
                            className="py-2 px-3 rounded-md bg-warning"
                            to={`/categories/subcategories/edit/${item.id}`}
                          >
                            <i class="bi bi-pencil-square"></i>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              )}
            
          </div>
        </div>
        {subcatData?.data && (
          <div className="col-lg-5 lg:px-5">
          <form
            className="box   py-4 shadow-lg  lg:h-50"
            onSubmit={handleSubmit}
          >
            <div className="">
              <p className="text-white">Title</p>
              <input
                onChange={handleChange}
                required
                name="title"
                value={params?.title}
                type="text"
                className="form-control my-2"
              />
            </div>

            <div className="">
              <p className="text-white">Image Url</p>
              <input
                onChange={handleChange}
                required
                name="imageUrl"
                type="file"
                className="form-control my-2"
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
                required
                name="sequence"
                value={params?.sequence}
                type="number"
                className="form-control my-2"
              />
            </div>
            <div className="">
              <p className="text-white">Description</p>
              <textarea
                type="text"
                required
                className="form-control my-2"
                value={params?.description}
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>

            {/* {similar fields} */}
            <button className="Add-btn px-3 py-2 rounded-md mt-3 w-[100%]">Add Subcategory</button>
          </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubCategories;
