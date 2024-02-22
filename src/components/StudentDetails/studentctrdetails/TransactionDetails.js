import { Link } from "react-router-dom";

const TransactionDetails = () => {

const data =[{
    id:1,
courses:"vishuf",
            amount:"",
        payment:"",
            status:"",
            
            date:""

},
{
    id:1,
courses:"vishuf",
            amount:"",
        payment:"",
            status:"",
            
            date:""

},
{
    id:1,
courses:"vishuf",
            amount:"",
        payment:"",
            status:"",
            
            date:""

}]
    return (
      <>
        
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
                    <th scope="col">Courses</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Payment Method</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Date</th>
                   

                    
                  </tr>
                  
                  
                </thead>
                <tbody>
                  {data?.map((item) => (
                    <tr className=" Tbody" key={item.id}>
                     
                    <td>{item.courses}</td>
                    <td>{item.courses}</td>
                    <td>{item.courses}</td>
                    <td>{item.courses}</td>
                    <td>{item.courses}</td>
                   
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        

          </div>
          </div>
        
        </div>
      </>

    );
  };
  
  export default TransactionDetails;
  