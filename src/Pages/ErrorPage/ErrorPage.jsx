import React from 'react';
import image404 from '../../assets/image404.jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={image404} alt="" />
            <h1 className='text-3xl font-bold text-fuchsia-500 my-2'>404 - Page Not Found</h1>
            <span>Ooops! The page you're looking for doesn't exist</span>
            <Link to='/'><button className='btn btn-active btn-secondary'>Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;