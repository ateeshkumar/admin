import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";

const useAdd = (url) => {
  const navigate = useNavigate();
  const addData = async (params, redirecturl) => {
    try {
      const res = await axios.post(url, params, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }); //Adding the data
      console.log(res);

      if (res.status === 200) {
        toast.success(res?.data?.message || "Data Created successfully");
        navigate(redirecturl);

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        toast.error(res?.data?.message || "Failed Data");
      }
    } catch (error) {
      swal({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while submitting the form",
      });
    }
  };
  return [addData];
};
export { useAdd };
