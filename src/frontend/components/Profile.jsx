import React from 'react';

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
                <label className="text-xl ">Nombre de Ususario</label>
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
          </form>
        </div>
      </div>
    </section>
  </section>
);

export default Profile;