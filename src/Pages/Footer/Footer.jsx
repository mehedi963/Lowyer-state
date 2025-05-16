import React from 'react';
import { FaBeer } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import footerImage from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black rounded p-10 text-white">
                <div className='flex'>
                    <img src={footerImage} alt="" />
                    <h1 className='text-xl font-bold text-white '>Law.BD</h1>
                </div>
  <nav className="grid grid-flow-col gap-4 ">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">My-Booking</a>
    <a className="link link-hover">Blogs</a>
     <a className="link link-hover">Contact Us</a>
  </nav>
  <div className='border-dotted border-1 border-white w-full'>

  </div>
  <nav>
    <div className="grid grid-flow-col gap-4 text-2xl">
      <a>
        <FaFacebook />
      </a>
      <a>
        <FaXTwitter />
      </a>
      <a>
        <FaLinkedin />
      </a>
      <a>
        <FaYoutube />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;