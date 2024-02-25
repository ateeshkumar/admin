import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment'

const TransactionTrainer =({TrainerData})=>{


  const [data , setdata] =useState()

useEffect(()=>{

  setdata(TrainerData)
},[TrainerData])
 
console.log(data?.data?.walletTranscation)

   
    return(
        <>

{
  data?.data?.walletTranscation?.length===0 ? (<>
        <div className="text-white px-2 py-3 "> There is no Transaction Data</div>
        </>) : (
          <div className="px-2 py-3 "> 
        <div className="">
       
       <div className="flex justify-between items-center my-2"> 
       <h1 className="heading "> Transaction Details</h1>
       <button className="btn-seeAll px-4 py-1 text-sm"> See All</button>
        </div>
        <div className="card-body ">
          {/* {loading && <h1 className="text-black">Loading...</h1>}
          {error && <h1 className="text-black">{error.message}</h1>}
          
          */}
            
            
  
             
          
            <div className="table-responsive card">
              <table className=" table-striped Ttable">
                <thead className="Thead">
                  <tr >
                    <th scope="col">Sender</th>
                    <th scope="col">Reciever</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                   

                    
                  </tr>
                  
                  
                </thead>
                <tbody>
                {
                  data?.data?.walletTranscation.map(item=>{
                    console.log(item)
                    return(
                      <>
                 <tr className="Tbody" key={item.id}>
                    <td>{item?.senderId?.sname}</td>
                    <td>{item?.receiverId?.sname}</td>
                    <td>{item?.cardType}</td>
                    <td>{item?.transmethod}</td>
                    <td>{item?.amount}</td>
                    <td className="flex flex-row"> {moment(item?.date).format("DD/ mm /yyyy")}</td>
                 </tr>
                      </>
                    )
                  })
                }
                 
                </tbody>
              </table>
            </div>
        

          </div>
          </div>
        
        </div>


        )
      }


     
  
  
  

        </>
    )
}

export default TransactionTrainer;