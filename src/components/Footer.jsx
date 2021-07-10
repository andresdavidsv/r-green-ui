import React from 'react';
import lg_little_f from '../assets/img/little_logo.svg';

const Footer = () => (
  
    <section className="bottom-0 w-full ">

      <div className="bg-gradient-to-b from-green-500 to-green-800 text-white">

        <div className="w-full flex items-center">

          <div className="w-full  ">
            <a className="opacity-90 m-5">About Us</a>
            <a className="opacity-90 m-5">Responsibilities</a>
            <a className="opacity-90 m-5">Out Services</a>
            <a className="opacity-90 m-5">Contact</a>
          </div>

          <img src={lg_little_f} alt="" className='w-20' />

          <div className="flex">
            <i className="fab m-5 fa-facebook-f"></i>
            <i className="fab m-5 fa-twitter"></i>
            <i className="fab m-5 fa-instagram"></i>
            <i className="fab m-5 fa-google"></i>
          </div>
  
        </div>
        
      </div>
    </section>

);

export default Footer;
