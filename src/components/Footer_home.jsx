import React from 'react';

const Footer = () => (
    <section className='bottom-0 w-full'>
        <div className='bg-gradient-to-b from-green-500 to-green-800 text-white'>
            <div className='xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10'>
                <div className='w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start'>
                    <div className='w-full sm:w-2/5 pr-6 flex flex-col space-y-4'>
                            <defs>
                                <pattern id='pattern' preserveAspectRatio='none' width='100%' height='100%' viewBox='0 0 197 70'>
                                    (imagen r-green)
                                    <image width='197' height='70' />
                                </pattern>
                            </defs>
            
                        <p className='opacity-90'>Concord Royal Court (3rd floor)
                            Dhanmondi, Dhaka 1209, Bangladesh.</p>
                    </div>
                    <div className='w-full sm:w-1/5 flex flex-col space-y-4'>
                        <a className='opacity-90'>About Us</a>
                        <a className='opacity-90'>Responsibilities</a>
                        <a className='opacity-90'>Out Services</a>
                        <a className='opacity-90'>Contact</a>
                    </div>
                    <div className='w-full sm:w-1/5 flex flex-col space-y-4'>
                        <a className='opacity-90'>Disclaimer</a>
                        <a className='opacity-90'>Testimonials</a>
                        <a className='opacity-90'>Privacy Policy</a>
                        <a className='opacity-90'>Terms of Service</a>
                    </div>
                    <div className='w-full sm:w-1/5 pt-6 flex items-end mb-1'>
                        <div className='flex flex-row space-x-4'>
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-google'></i>
                        </div>
                    </div>
                </div>
                <div className='opacity-90 pt-2'>
                    <p>© 2021 R-Green Company</p>
                </div>
            </div>
        </div>
    </section>
);

export default Footer;
