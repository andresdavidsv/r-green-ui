import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/img/R-Green_2.0.svg';

const Footer_home = () => (
    <section id='footer_home' className='bottom-0 w-full h-20'>

        <div className='flex items-stretch'>

            <div className='flex w-1/2 pt-6 pl-36  inline-block items-center justify-center'>
                <img src={logo1} className='w-48' />
                <br />
            </div>
            <div className='flex w-1/3 sm:w-1/3 pt-4 items-center justify-center'>
                <hr />
            </div>
            <div className='flex mt-8 w-1/2 pr-28  sm:w-1/2 inline-block items-center justify-center'>
                <div>
                    <Link to='/' style={{ marginRight: '1em' }} >About Us</Link>
                    
                </div>
                <br />
                <div>
                    <Link to='/' style={{ marginRight: '1em' }} >Out Services</Link>
                </div>
                <br />
                <div className='flex flex-row space-x-7'>
                    <a href='https://www.facebook.com' target='_blank' className='fab fa-facebook-f'></a>
                    <a href='https://www.twitter.com' target='_blank' className='fab fa-twitter'></a>
                    <a href='https://www.instagram.com' target='_blank' className='fab fa-instagram'></a>
                    <a href='' target='_blank' className='fab fa-google'></a>
                </div>
            </div>
        </div>
    </section>
);

export default Footer_home;
