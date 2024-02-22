
import * as React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';


const CourseContent=({CourseData})=>{


  const [data ,setdata]=useState()
  React.useEffect(()=>{
setdata(CourseData)
  },[CourseData])


    const [show, setshow] = useState(false);
    const showmoreclick = () => {
      setshow(!show);
    };

    const content1 = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis sequi deleniti fugiat sed ipsam commodi exercitationem amet maiores, esse provident cumque! Incidunt eos quibusdam illo suscipit nulla, aspernatur debitis maiores veritatis deleniti placeat laboriosam asperiores labore maxime veniam amet sequi, voluptatibus cumque eius dicta harum officiis iure eligendi dolorum rem. Dolore, alias! Porro temporibus quaerat reiciendis, praesentium consequatur ea voluptas magni saepe repudiandae ipsa illo debitis voluptatem vero velit culpa, deleniti distinctio alias! Praesentium, error aliquid cum perspiciatis officia molestias tempore. Nulla laborum rerum id repellat aut architecto vero voluptates voluptatum obcaecati beatae ut aliquam maiores, corporis, placeat amet numquam totam dolore. Quam molestias corporis architecto eligendi cupiditate eaque, earum repellendus quaerat commodi numquam nulla soluta voluptatibus aperiam, quos id facilis vitae et voluptatum officiis incidunt. Ipsum, autem corporis officiis atque non reprehenderit quis nemo, impedit harum aspernatur consequuntur et dolorem! Culpa, nihil. Dolorum, aliquam. Numquam rem nihil recusandae molestias fuga quisquam cum culpa eum quia pariatur, consectetur animi magnam assumenda nisi ex enim voluptatem rerum nulla quibusdam. Eius libero nam placeat magni illum consectetur provident quam molestias quisquam sed veritatis omnis, asperiores neque non doloremque deserunt? Harum doloribus magnam placeat et eligendi, unde sapiente aperiam sed quidem optio corrupti.";
   
    return (
        <>
             <section className='py-3 sm:p-3 text-white'>
                 
                 {/* accordian course content */}
                <div className="space-y-4 lg:mt-32">
            


    <div className='box p-0 ' style={{backgroundColor:""}}>
      <Accordion defaultExpanded>
        <AccordionSummary 

          expandIcon={<ExpandMoreIcon className='text-white'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            
            backgroundColor:"#013437",
          color:"white",
            borderBottom:"0.5px solid #CCAA00"
          }}
        >
<div className=" flex justify-between gap-4 w-[100%]">
    <h1> Program Introduction</h1>
    <div className="flex ">
        <h1>2 Lectures</h1>
        <h1>20 minutes</h1>
    </div>
</div>
        </AccordionSummary>
        <AccordionDetails
        sx={{
            backgroundColor:"#04775A",
            color:"white",
            borderBottom:"1px solid #CCAA00"
        }}>

        <div className="">
            <ul className='flex justify-between'>
                <li> programm introduction</li>
                <li> Review 15minute</li>
            </ul>
        </div>
         
        </AccordionDetails>
        <AccordionDetails
        sx={{
            backgroundColor:"#04775A",
            color:"white",
            borderBottom:"1px solid #CCAA00"
        }}>

        <div className="">
            <ul className='flex justify-between'>
                <li> programm introduction</li>
                <li> Review 15minute</li>
            </ul>
        </div>
         
        </AccordionDetails>
      </Accordion>
      <Accordion 
      >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            
            backgroundColor:"#013437",
          color:"white",
            borderBottom:"0.5px solid #CCAA00"
          }}
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails
        sx={{
            backgroundColor:"#04775A",
            color:"white",
            borderBottom:"1px solid #CCAA00"
        }}>

        <div className="">
            <ul className='flex justify-between'>
                <li> programm introduction</li>
                <li> Review 15minute</li>
            </ul>
        </div>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
        
          expandIcon={<ExpandMoreIcon className='text-white' />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            
            backgroundColor:"#013437",
          color:"white",
            borderBottom:"0.5px solid #CCAA00"
          }}
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails
        sx={{
            backgroundColor:"#04775A",
            color:"white",
            borderBottom:"1px solid #CCAA00"
        }}>

        <div className="">
            <ul className='flex justify-between '>
                <li> programm introduction</li>
                <li> Review 15minute</li>
            </ul>
        </div>
         
        </AccordionDetails>
       
      </Accordion>
    </div>
 
   
{/* Requirements */}

   <div className="">
   <h1 className='font-medium'> Requirements : </h1>
    <ul className='list-disc p-3'>
        <li>
        There are no skill prerequisites for this course although it's helpful if you are familiar with operating your computer and using the internet.</li>
        <li>You can take this course using a Mac, PC or LInux machine.</li>
        <li>It is recommended that you download the free Komodo text editor.</li>
    </ul>
   </div>

{/* description */}

<div className="">
     <h1 className='font-medium'> Description :</h1>

     <div className="flex flex-col items-start justify-between space-y-8 p-1">
              <p>{show ? content1 : `${content1.slice(0, 300)}...`}</p>

              <button className="" onClick={() => showmoreclick()}>
                {show ? (
                  <div className="flex items-center  text-sm gap-1 w-[100%]">
                    {" "}
                    <BiChevronUp className="text-yellow-600 text-2xl font-extrabold" />{" "}
                    Show less
                  </div>
                ) : (
                  <div className="flex items-center  text-sm gap-1  w-[100%]">
                    {" "}
                    <BiChevronDown className="text-yellow-600 text-2xl font-extrabold" />{" "}
                    Show more
                  </div>
                )}
              </button>
            </div>
</div>

                </div>
             </section>
        </>
    )
}

export default CourseContent;