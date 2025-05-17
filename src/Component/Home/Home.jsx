import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Lowyers from '../Lawyers/Lowyers';
import { useLoaderData } from 'react-router';
import LawyerService from '../LawyerService/LawyerService';

const Home = () => {

    const lawyersData = useLoaderData();
    console.log(lawyersData);
    return (
        <div>
            <Banner></Banner>
            <Lowyers lawyersData={lawyersData}></Lowyers>
            <LawyerService></LawyerService>
        </div>
    );
};

export default Home;