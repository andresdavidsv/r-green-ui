import React from 'react';
import { Link } from 'react-router-dom';
import lg_little_f from '../assets/static/icon_black.svg';

const Footer = () => (
  
    <section className="bottom-0 w-full ">

      <div id="little_footer" className="flex items-stretch">

        <div className="flex w-full  items-center justify-center">

          <div>
            <Link to='/' style={{marginRight:'1em'}} >About Us</Link>
            <Link to='/' style={{marginRight:'1em'}} >Out Services</Link>
          </div>

          <div className="mx-20" >
            <img src={lg_little_f} alt="icon_footer" className='w-8' /> 
          </div>
        
          <div>
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
