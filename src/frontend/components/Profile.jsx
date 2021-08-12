import React from 'react';
import facebook from '../assets/img/Profile/facebook.png';
import instagram from '../assets/img/Profile/instagram.png';
import linkedin from '../assets/img/Profile/linkedin.png';
import twitter from '../assets/img/Profile/twitter.png';


const Profile = () => (
  <section className="perfil">
    <section className="w-auto relative m-15 shadow-2xl rounded-3xl  overflow-hidden">

      <div id="section1"
        className="col-span-12 md:border-solid md:border-l md:border-white md:border-opacity-25 h-full pb-12  md:col-span-10 pr-10 pl-3">
        <div className="px-4 pt-4">
          <form className="flex flex-col space-y-8">

            <div className="titulo">
              <h3 >Inicio</h3>
            </div>

            <div className="form-item">
              <label className="text-xl ">Nombre completo</label>
              <input type="text" value="R-green organitation" className="w-full appearance-none text-white text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                disabled />
            </div>

            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

              <div className="form-item w-full">
                <label className="text-xl ">Username</label>
                <input type="text" value="R-green"
                  className="w-full appearance-none text-white text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled />
              </div>

              <div className="form-item w-full">
                <label className="text-xl ">Email</label>
                <input type="text" value="r_green@gmail.com" className="w-full appearance-none text-white text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                  disabled />
              </div>
            </div>

            <div className="titulo">
              <h3>Más información</h3>
            </div>

            <div className="form-item w-full">
              <label className="text-xl ">Sobre nosotros</label>
              <textarea cols="30" rows="4" className="w-full appearance-none text-white text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                value="Somos una organización que actua como intermediaria entre empresas, organizaciones o entidades que estan interesadas en recolectar residuos generados por otras entidades que buscan, a su vez, cuidar el medio ambiente y cumplir con las normativas establecidas por el gobierno."
                disabled />
            </div>

            <div className="titulo">
              <h3>Nuestras redes sociales</h3>
            </div>

            <div className="grid grid-rows-4  pr-10 font-serif">

              <div className="grid grid-cols-12 row-span-1">
                <div className="col-span-1">
                  <img src={linkedin} className='w-16' />
                </div>
                <div className="col-span-11">
                  <div className="form-item h-20">
                    <label className="text-xl ">Linkedin</label>
                    <input type="text" value="https://linkedin.com/"
                      className="w-full pt-2 appearance-none text-white text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25"
                      disabled />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 row-span-1">
                <div className="col-span-1">
                  <img src={instagram} className='w-16' />

                </div>
                <div className="col-span-11">
                  <div className="form-item">
                    <label className="text-xl ">Instagram</label>
                    <input type="text" value="https://instagram.com/"
                      className="w-full appearance-none text-white text-opacity-50 rounded shadow focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25"
                      disabled />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 row-span-1">
                <div className="col-span-1">
                  <img src={facebook} className='w-16' />
                </div>
                <div className="col-span-11">
                  <div className="form-item">
                    <label className="text-xl ">Facebook</label>
                    <input type="text" value="https://facebook.com/"
                      className="w-full appearance-none text-white text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25"
                      disabled />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 row-span-1">
                <div className="col-span-1">
                  <img src={twitter} className='w-16' />
                </div>
                <div className="col-span-11">
                  <div className="form-item">
                    <label className="text-xl ">Twitter</label>
                    <input type="text" value="https://twitter.com/"
                      className="w-full appearance-none text-white text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 "
                      disabled />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </section>
);

export default Profile;