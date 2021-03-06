import React from 'react';

const Ficha = (props) => {

    
    return(
  

        <div className='xl:h-full h-full bg-cover bg-center h-auto py-24 px-10 object-fill bg-black bg-opacity-25 ' >

            <div className='xl:w-full xl:h-full p-8 mt-80 rounded-md ' style={{backgroundColor: '#f5fef4b8'}}>
                
                <p className='font-bold text-sm uppercase text-green-400 text-justify'>{props.txt_uno}</p>
                <p className='xl:h-14 mb-2 text-3xl font-bold text-green-900 text-justify'>{props.txt_dos}</p>
                <p className='xl:h-28 xl:w-auto text-2xl mb-10 text-gray-700 text-justify'>{props.txt_tres}</p>

                <a href='#' className='ml-10 bg-green-800 py-5 px-8 text-white font-bold uppercase text-xs rounded hover:bg-green-700 hover:text-gray-800'>{props.txt_btn}</a>    
            </div> 
        </div>
            
  
    )
};

  
  export default (Ficha);
  
