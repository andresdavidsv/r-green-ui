import React from 'react';
import Ficha from '../components/Order/Ficha';

const Order = ()=> {

    return(
        
        <section id="orderConteiner" className="bg-blue-500 bg-opacity-75">
          
            {/* Ficha numero 1*/ }
            <section id='Ficha1' className='w-1/3 inline-block bg-center h-full bg-no-repeat '  >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Residuos Aprovechables"
                    txt_tres="Con esta opción puedes pedir que recojan tu Plástico, Cartón, Vidrio, Papel y Metales."
                    txt_btn="Enviar"
                    
                />
                
            </section>   

            {/* Ficha numero 2*/ }

            <section id='Ficha2' className='w-1/3 inline-block bg-center h-full bg-no-repeat'  >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Residuos Organicos"
                    txt_tres="Restos de comida, Productos producidos por los seres humanos y Desechos agrícolas."
                    txt_btn="Enviar"
                />
            </section>   

            {/* Ficha numero 3*/ }

            <section id='Ficha3' className='w-1/3 inline-block bg-center h-full bg-no-repeat' >
                <Ficha 
                    txt_uno="Servicio"
                    txt_dos="Residuos NO Aprovechables"
                    txt_tres="Papel higiénico, Servilletas, Papeles y Cartones contaminados, Papeles metalizados."
                    txt_btn="Enviar"
                />
            </section>   
            
            
                

                        
        </section>

    )
    
}

  
  export default (Order);
  
