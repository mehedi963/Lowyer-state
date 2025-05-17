import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStored } from '../../Pages/utilities/addToDB';
import Booking from '../Booking/Booking';

const MyBooking = () => {
    const data = useLoaderData();
    const [myBookList, setMyBooked] = useState();

    useEffect(() =>{
        const storeBookedData = getStored();
        console.log(storeBookedData);
        const convertedStoredBookData = storeBookedData.map(id => parseInt(id));
        console.log(convertedStoredBookData);
        const myBooking = data.filter(booked =>convertedStoredBookData.includes(booked.id));
        setMyBooked(myBooking);
    },[])
    console.log( myBookList);
    return (
        <div>
            
            <div className='text-center'>
                <h1 className='text-2xl font-bold mt-6 mb-2'>My Today Appointments</h1>
            <p className='text-sm mb-7'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            {/* {
                myBookList.map(book =><Booking lawyerData={book}></Booking>)
            } */}
        </div>
    );
};

export default MyBooking;