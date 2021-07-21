import React from 'react';

const Pagination = () =>{
    return(
        <section>
                <div id='pagination' className='absolute bottom-0 w-full flex justify-center pt-4 items-center'>
                    <i className='fas fa-angle-left'></i>
                    <p className='leading-relaxed cursor-pointer mx-2 text-blue-600 hover:text-blue-600 text-sm'>1</p>
                    <p className='leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600'>2</p>
                    <p className='leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600'> 3 </p>
                    <p className='leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600'> 4 </p>
                    <i className='fas fa-angle-right'></i>
                </div>
        </section>
    )
};

export default (Pagination);