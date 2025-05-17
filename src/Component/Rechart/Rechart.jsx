import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
// const rechartData = [
//   {
//     "id": 1,
//     "name": "Advocate Nazmul Hasan",
//     "speciality": "Criminal Law",
//     "experience": "10 years",
//     "licenseNumber": "BD-CR-001",
//     "fee": 2000,
//     "availability": ["Sunday", "Tuesday", "Thursday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 2,
//     "name": "Barrister Sarah Rahman",
//     "speciality": "Family Law",
//     "experience": "8 years",
//     "licenseNumber": "BD-FM-002",
//     "fee": 1800,
//     "availability": ["Monday", "Wednesday", "Saturday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 3,
//     "name": "Advocate Imran Kabir",
//     "speciality": "Corporate Law",
//     "experience": "12 years",
//     "licenseNumber": "BD-CO-003",
//     "fee": 2500,
//     "availability": ["Sunday", "Monday", "Thursday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 4,
//     "name": "Barrister Mahmudul Islam",
//     "speciality": "Civil Litigation",
//     "experience": "9 years",
//     "licenseNumber": "BD-CV-004",
//     "fee": 2200,
//     "availability": ["Tuesday", "Wednesday", "Friday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 5,
//     "name": "Advocate Fatema Khatun",
//     "speciality": "Immigration Law",
//     "experience": "7 years",
//     "licenseNumber": "BD-IM-005",
//     "fee": 1600,
//     "availability": ["Monday", "Thursday", "Saturday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 6,
//     "name": "Barrister Rafiq Ahmed",
//     "speciality": "Tax Law",
//     "experience": "11 years",
//     "licenseNumber": "BD-TX-006",
//     "fee": 2300,
//     "availability": ["Sunday", "Wednesday", "Friday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 7,
//     "name": "Advocate Nabila Sultana",
//     "speciality": "Labor Law",
//     "experience": "6 years",
//     "licenseNumber": "BD-LB-007",
//     "fee": 1900,
//     "availability": ["Monday", "Tuesday", "Friday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 8,
//     "name": "Barrister Zubair Hossain",
//     "speciality": "Property Law",
//     "experience": "13 years",
//     "licenseNumber": "BD-PR-008",
//     "fee": 2100,
//     "availability": ["Sunday", "Wednesday", "Saturday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 9,
//     "name": "Advocate Tanvir Alam",
//     "speciality": "Environmental Law",
//     "experience": "5 years",
//     "licenseNumber": "BD-EN-009",
//     "fee": 1700,
//     "availability": ["Monday", "Thursday", "Saturday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 10,
//     "name": "Barrister Munira Haque",
//     "speciality": "Banking Law",
//     "experience": "10 years",
//     "licenseNumber": "BD-BK-010",
//     "fee": 2400,
//     "availability": ["Tuesday", "Thursday", "Saturday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 11,
//     "name": "Advocate Sajid Mahmud",
//     "speciality": "Human Rights Law",
//     "experience": "9 years",
//     "licenseNumber": "BD-HR-011",
//     "fee": 1800,
//     "availability": ["Sunday", "Tuesday", "Friday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   },
//   {
//     "id": 12,
//     "name": "Barrister Jannatul Mawa",
//     "speciality": "Cyber Law",
//     "experience": "4 years",
//     "licenseNumber": "BD-CY-012",
//     "fee": 2000,
//     "availability": ["Monday", "Wednesday", "Friday"],
//     "image": "https://i.ibb.co/tw8fbqRZ/lawyer.png"
//   }
// ];

// function CustomTooltip({ payload,  active }) {
//   if (active) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${payload[0].value}`}</p>
//       </div>
//     );
//   }
// }

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