import React from 'react';
import Ficha from '../components/Pedir/Ficha';

const Pedir = () => {

    return(
        
        <section className='h-screen'>


            {/* Ficha numero 1*/ }

            <section className='w-1/3 inline-block bg-center h-full' style={{  backgroundImage: `url("https://pbs.twimg.com/profile_images/1006492321008021504/ebiUsqEP.jpg")` }}>
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Multimedia products"
                    txt_tres="Atractive designs for your brand"
                    txt_btn="Enviar"
                />
            </section>   

            {/* Ficha numero 2*/ }

            <section className='w-1/3 inline-block bg-center h-full' style={{  backgroundImage: `url("https://caracoltv.brightspotcdn.com/dims4/default/9c6c0f6/2147483647/strip/true/crop/959x1280+0+0/resize/959x1280!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F6c%2F36%2F07c299f940a1af1ca73b6a850a6c%2Fmeme-2.jpg")` }} >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Multimedia products"
                    txt_tres="Atractive designs for your brand"
                    txt_btn="Enviar"
                />
            </section>   

            {/* Ficha numero 3*/ }

            <section className='w-1/3 inline-block bg-center h-full' style={{  backgroundImage: `url("http://pm1.narvii.com/6402/0486691c593b809e70657ab4475ba721d73e223f_00.jpg")` }}>
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Multimedia products"
                    txt_tres="Atractive designs for your brand"
                    txt_btn="Enviar"
                />
            </section>   
            
               
                

                        
        </section>
  
    )
};

  
  export default (Pedir);
  
