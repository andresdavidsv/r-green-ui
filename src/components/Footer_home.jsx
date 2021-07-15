import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/img/R-Green_2.0.svg';

const Footer_home = () => (
    <section className='bottom-0 w-full '>

        <div id='footer_home' className='h-40 xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10'>

            <div className='w-1/3 sm:w-1/3 inline-block justify-items-center'>
                <img src={logo1} className='w-48' />
                <br />
                <p>© 2021 R-Green Company</p>
            </div>

            <div className='w-1/3 sm:w-1/3 inline-block items-center'>
                <div  id='line'  ></div>
            </div>

            <div className='mt-8 w-1/3 sm:w-1/3 inline-block jusify-items-center'>
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
