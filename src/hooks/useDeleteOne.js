import axios from "axios"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
const useDeleteOne = (url)=>{
    const navigate = useNavigate()

    const Delete = async(id , redirectUrl)=>{
        try {
            const res = await axios.delete(`${url}${id}`)

            if(res.status===200){
                swal({
                    title: "Are you sure?",
                    text: "you want to delete this !",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })

                  navigate(redirectUrl)
                  
                     setTimeout(() => {
                      window.location.reload()
                     }, 2000);
                    
            }
            
        } catch (error) {
            swal({
                icon: "error",
                title: "Oops...",
                text: "An error occurred while deleting the data",
              });
        }
    }
    return {Delete}
    
}
export {useDeleteOne}