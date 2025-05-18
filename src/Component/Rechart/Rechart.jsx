import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';


const Rechart = ({list}) => {
    console.log(list);

    return (
        <div>
            <BarChart width={600} height={300} data={list}>
                <XAxis dataKey={'name'} stroke="#8884d8"></XAxis>
                <YAxis ></YAxis>
                <Tooltip ></Tooltip>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                <Bar dataKey={'fee'} fill="#8884d8" barSize={30} ></Bar>
            </BarChart>
        </div>
    );
};

export default Rechart;