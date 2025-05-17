import React, { Suspense, useEffect, useState, } from 'react';
import Success from '../Success/Success';

const LawyerService = () => {
const [service, setService] = useState([]);

    useEffect(()=>{
         fetch('success.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
        // const servicePromise = fetch('success.json').then(res => res.json());
    // console.log(service);
    return (
    
        <div>
            <div className='text-center mb-6'>
                <h1 className='text-3xl font-extrabold text-[#0F0F0F]'>We Provide Best Law Services</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-4 mb-28 gap-8'>
                {
                service.map(serdata =><Suspense fallback={<p>Loading....</p>}>
            <Success key={serdata.id} serdata={serdata}></Success>
            </Suspense>)
            }
            </div>
            
        </div>
    );
};

export default LawyerService;