import React from 'react';
import Ficha from '../components/Pedir/Ficha';

const Pedir = ()=> {

    return(
        
        <section id="pedirConteiner">
          
            {/* Ficha numero 1*/ }
            <section id='Ficha1' className='w-1/3 inline-block bg-center h-full bg-no-repeat'  >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Multimedia products"
                    txt_tres="Atractive designs for your brand"
                    txt_btn="Enviar"
                    
                />
                
            </section>   

            {/* Ficha numero 2*/ }

            <section id='Ficha2' className='w-1/3 inline-block bg-center h-full bg-no-repeat'  >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Multimedia products"
                    txt_tres="Atractive designs for your brand"
                    txt_btn="Enviar"
                />
            </section>   

            {/* Ficha numero 3*/ }

            <section id='Ficha3' className='w-1/3 inline-block bg-center h-full bg-no-repeat' >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Multimedia products"
                    txt_tres="Atractive designs for your brand"
                    txt_btn="Enviar"
                />
            </section>   
            
            
                

                        
        </section>

    )
    
}

  
  export default (Pedir);
  
