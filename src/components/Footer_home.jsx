import React from 'react';
import logo1 from '../assets/img/R-Green_2.0.svg';

const Footer_home = () => (
    <section className='footer_home'>
        <div className='bg-gradient-to-b from-green-500 to-green-800 text-white'>
            <div className='xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10'>
                <div className='w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start'>
                    <div className='w-full sm:w-2/5 pr-6 flex flex-col space-y-4'>
                        <img src={logo1} className='logo_completo'/>
                    <p className='bottom-0'>© 2021 R-Green Company</p>
                    </div>
                    <div className='w-full sm:w-1/5 flex flex-col space-y-4'>
                        <a className='opacity-90'>Acerca de Nosotros</a>
                        <a className='opacity-90'>Nuestros Servicios</a>
                        <div className='flex flex-row space-x-7'>
                            <a href='https://www.facebook.com' target='_blank' className='fab fa-facebook-f'></a>
                            <a href='https://www.twitter.com' target='_blank' className='fab fa-twitter'></a>
                            <a href='https://www.instagram.com' target='_blank' className='fab fa-instagram'></a>
                            <a href='' target='_blank' className='fab fa-google'></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Footer_home;
