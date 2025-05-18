import React, { Suspense, useState, } from 'react';
import Lawyer from '../Lawyer/Lawyer';



const Lowyers = ({lawyersData}) => {
   const [show, setShow] = useState(false);
   const lawyerssData = lawyersData;
   console.log(lawyerssData);
    return (
        <div className='my-28 flex flex-col items-center'>
            <div className='text-center mb-8 '>
                <h1 className='text-3xl font-extrabold mb-2'>Our Best Lawyers</h1>
            <p className='text-[13px] text-[#0F0F0F] '>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
           

            { <div>
                <Suspense fallback={<span>Loading.....</span>}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                    lawyersData.map(lawyerData =><Lawyer key={lawyerData.id} lawyerData={lawyerData}></Lawyer>)
                }
                </div>
                </Suspense>
            </div> }
            {/* {
                lawyersData.map((item, index)=> !show && index>= 5 ?  <div>
                <Suspense fallback={<span>Loading.....</span>}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    {
                    lawyersData.map(lawyerData =><Lawyer key={lawyerData.id} lawyerData={lawyerData}></Lawyer>)
                }
                </div>
                </Suspense>
            </div> : <div></div>)
            } */}

            <button onClick={()=>setShow(!show)} className=" mt-8 btn bg-[#0EA106] text-white rounded-3xl">{
        show ? 'Show Less' : 'Show All Lawyer'
        }</button>

        </div>
    );
};

export default Lowyers;