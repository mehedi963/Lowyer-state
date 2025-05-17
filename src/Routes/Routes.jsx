import React from 'react';
import {
  createBrowserRouter,

} from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Component/Home/Home';
import MyBooking from '../Component/My-Booking/MyBooking';
import Blogs from '../Component/Blogs/Blogs';
import LawyerDetails from '../Component/LawyerDetails/LawyerDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {index:true,
            path:'/',
            loader:()=>fetch('/lawyer.json'),
            Component: Home
        },
        {
          path:'/booking',
          loader:()=>fetch('/lawyer.json'),
          Component: MyBooking
        },
        {
          path:'/blogs',
          Component: Blogs
        },
        {
          path:'/lawyerDetails/:id',
          loader:()=>fetch('/lawyer.json'),
          Component: LawyerDetails
        }
    ]
  },
]);