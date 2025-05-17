import React from 'react';

const Booking = ({book}) => {
    console.log(book);
    const {name, fee, speciality}= book;
    return (
        <div className="card w-full bg-base-100 shadow-sm gap-3 mb-8">
  <div className="card-body">

    <div className='flex justify-between items-center border-b-2 border-dashed'>
        <div className='flex flex-col'>
        <span className='text-md font-semibold mb-2'>{name}</span>
        <span>{speciality}</span>
    </div>
    <span>Appointment Fee: {fee}Taka</span>
    </div>

    <div className="mt-6">
      <button className="btn btn-dash btn-secondary btn-block">Cancle Appointment</button>
    </div>
  </div>
</div>
    );
};

export default Booking;