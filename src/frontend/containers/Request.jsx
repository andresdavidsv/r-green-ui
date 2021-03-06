import React from 'react';
import Pagination from '../components/Pagination';

const Request = () => {
    return (
        <section id='background_request' >
            <div className='flex flex-col items-center justify-between md:flex-row'>
                <div className='flex justify-between w-full pt-6 pl-6'>
                    <p className='ml-3 font-bold text-2xl'>Peticiones</p>
                </div>
                <div className='w-full flex justify-end pl-2 pr-10 mt-2'>
                    <div className='w-full sm:w-64 inline-block relative '>
                        <input type='' name='' className='leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg' placeholder='Search' />
                        <div className='pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300'>
                            <i className='fas fa-search'></i>
                        </div>
                    </div>
                </div>
            </div>
            <table className='rounded-t-lg m-5 w-5/6 mx-auto bg-green-500 text-gray-800'>
                <thead className='text-left border-b-2 border-yellow-200'>
                    <tr>
                        <th scope="col" className='px-4 py-3'>Radicado</th>
                        <th scope="col" className='px-4 py-3'>Empresa</th>
                        <th scope="col" className='px-4 py-3'>Dirección</th>
                        <th scope="col" className='px-4 py-3'>Tipo de Residuo</th>
                        <th scope="col" className='px-4 py-3'>Estado</th>
                    </tr>
                </thead>
                <thead className='hover:bg-green-50 bg-green-100 border-b border-yellow-200'>
                    <tr>
                        <td className='px-4 py-3'>121</td>
                        <td className='px-4 py-3'>Extito</td>
                        <td className='px-4 py-3'>Calle 121</td>
                        <td className='px-4 py-3'>Orgánico</td>
                        <td>
                            <select className='leading-snug border border-gray-300 block w-auto bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg'>
                                <option className='bg-green-100 '>Aprobado</option>
                                <option className='bg-red-100'>Negado</option>
                                <option className='bg-blue-100'>En Proceso</option>
                            </select>
                        </td>
                    </tr>
                </thead>
            </table>
            <Pagination/>
        </section>
    )
};

export default (Request);
