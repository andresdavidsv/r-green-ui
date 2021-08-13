import React from 'react';
import { Link } from 'react-router-dom';
import lg_little_f from '../assets/static/icon_black.svg';

const Footer = () => (

  <section className="bottom-0 w-full ">

    <div id="little_footer" className="flex items-stretch">

      <div className="flex w-full  items-center justify-center">

        <div>
          <Link to='/About_us' style={{ marginRight: '1em' }} >Acerca de Nosotros</Link>
          <Link to='/' style={{ marginRight: '1em' }} >Nuestros Servicios</Link>
        </div>

        <div className="mx-20" >
          <img src={lg_little_f} alt="icon_footer" className='w-8' />
        </div>

        <div>
          <a href='https://www.facebook.com' target='_blank' className='fab m-5 fa-facebook-f'></a>
          <a href='https://www.twitter.com' target='_blank' className='fab m-5 fa-twitter'></a>
          <a href='https://www.instagram.com' target='_blank' className='fab m-5 fa-instagram'></a>
          <a href='' target='_blank' className='fab m-5 fa-google'></a>
        </div>

      </div>

    </div>
  </section>

);

export default Footer;
