import React, {  } from 'react';
import CountUp from 'react-countup';
const Success = ({serdata}) => {
   const {icon,number,title} = serdata;
    return (
        <div className='bg-gray-200 shadow-xl rounded-2xl md:px-4 md:py-3 lg:ml-3 lg:w-3/4'>
            <img src={icon} alt="" /> 
            <div className='flex flex-col'>
                <span className='text-3xl font-bold my-2'><CountUp end={number}
                duration={5}/>+</span>
            <span>{title}</span>
            </div>
        </div>
    );
};

export default Success;