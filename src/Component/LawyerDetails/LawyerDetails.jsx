import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Pages/utilities/addToDB';
  import { ToastContainer, toast } from 'react-toastify';
const LawyerDetails = () => {
    const notify = () => toast("Wow so easy!");

    const { id } = useParams();
    const detailsId = parseInt(id);
    const detailsData = useLoaderData();
    const singleDetail = detailsData.find(detail => detail.id === detailsId);
    // console.log(singleDetail);
    const { name, speciality, licenseNumber
        , image, fee, experience
        , availability
    } = singleDetail;

    const handleBook = (id) =>{
        addToStoreDB(id);

    }
    return (
        <div>
            <div className="card bg-gray-200 shadow-sm text-center">
                <div className="card-body ">
                    <h2 className="text-2xl font-bold text-center">Lawyer’s Profile Details</h2>
                    <p>"Experienced legal professional specializing in civil and criminal law. Committed to providing personalized legal solutions with integrity and dedication."</p>
                </div>
            </div>


            <div className="card card-side bg-white shadow-sm my-8">
                <figure>
                    <img className='w-2/3 mx-auto  bg-gray-200 rounded-2xl px-4 py-3 '
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body ">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-2/6">
                        {experience} Experience
                    </span>
                    <h2 className="card-title text-xl font-semibold">{name}</h2>
                    <div className='flex gap-8 text-sm text-gray-500"'>
                        <span>{speciality}</span>
                        <span>License No: {licenseNumber}</span>
                    </div>
                    <div className='flex items-center gap-6'>
                        <span className="text-md font-semibold">
                            Available :
                        </span>
                        {
                            availability.map((available, index) => < button className='btn btn-sm bg-amber-100 text-black text-xs font-medium px-2.5 py-0.5 rounded-full' key={index} >{available}</button>)
                        }
                    </div>
                    <span>
                        Consultation Fee: <span className=' text-green-800 text-xs font-medium px-2.5 py-0.5 '>
                            Taka: {fee}
                        </span>
                    </span>

                </div>
            </div>

                        <div className='card bg-gray-200 shadow-sm text-center mb-5'>
                            <h2 className='mb-2 py-3 border-b-2 border-dotted'>Book an Appointment</h2> 
                            <div className='border-b-2 border-dotted py-2 flex justify-between mx-4'>
                                <span className='text-green-800 text-md font-medium'>Avaiability</span>
                                <span className='text-green-800 text-xs font-medium'>
                                    
                                    Layer Available Today</span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-green-800 text-xs font-medium bg-amber-300 shadow-lg rounded-3xl my-4'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                                <Link to='/booking'><button onClick={()=>handleBook(id,notify)} className='btn bg-green-300 text-black rounded-2xl '>Book Appointment Now</button></Link>
                            </div>
                        </div>
        </div>
    );
};

export default LawyerDetails;