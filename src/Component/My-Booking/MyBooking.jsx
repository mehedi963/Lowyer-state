import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStored } from '../../Pages/utilities/addToDB';
import Booking from '../Booking/Booking';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MyBooking = () => {
    const data = useLoaderData();
    const [myBookList, setMyBooked] = useState();
    
    const handleRemoveBookList = (id) =>{
        const reaminingList = myBookList.filter(book => book.id !== id);
        setMyBooked(reaminingList);
     }

    useEffect(() =>{
        const storeBookedData = getStored();
        console.log(storeBookedData);
        const convertedStoredBookData = storeBookedData.map(id => parseInt(id));
        console.log(convertedStoredBookData);
        const myBooking = data.filter(booked =>convertedStoredBookData.includes(booked.id));
        setMyBooked(myBooking);
    },[])

    return (
        <div>
            
            <BarChart width={600} height={300} data={myBookList}>
                            <XAxis dataKey={'name'} stroke="#8884d8"></XAxis>
                            <YAxis ></YAxis>
                            <Tooltip ></Tooltip>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                            <Bar dataKey={'fee'} fill="#8884d8" barSize={30} ></Bar>
                        </BarChart>
            
            <div className='text-center'>
                <h1 className='text-2xl font-bold mt-6 mb-2'>My Today Appointments</h1>
            <p className='text-sm mb-7'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>

            {
                myBookList?.map(book =><Booking key={book.id} book={book} handleRemoveBookList={handleRemoveBookList}></Booking>)
            }

        </div>
        
    );
};

export default MyBooking;