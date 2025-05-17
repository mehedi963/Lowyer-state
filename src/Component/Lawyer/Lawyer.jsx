import React from 'react';
import { Link } from 'react-router';

const Lawyer = ({ lawyerData }) => {
    // console.log(lawyerData);

    const {id,image,experience, name, speciality, licenseNumber } = lawyerData;
    return (
        <div className="bg-white border-[#0F0F0F] rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mx-auto">
            <div className="w-24 h-24 bg-gray-300 rounded-full">
                <img src={image} alt="" />
            </div>

            <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Available
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {experience} Experience
                    </span>
                </div>

                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">{speciality}</p>
                <p className="text-sm text-gray-500">License No: {licenseNumber}</p>

                <Link to={`/lawyerDetails/${id}`}><button  className="mt-3 px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full transition">
                    View Details
                </button></Link>
            </div>
        </div>

    );
};

export default Lawyer;