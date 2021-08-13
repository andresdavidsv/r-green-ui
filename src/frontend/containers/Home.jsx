import React from "react";
import hoja from "../assets/img/hoja.svg";
import girasol from "../assets/img/girasol.svg"
import arbol from "../assets/img/arbol.svg"
import cd from "../assets/img/cd.jpg"

const Home = () => {
  return (
    <section className="main-home">
      <section className="section-home">
    <div className="presentacion">
        <h1>¿Que es R-Green?</h1>
        <p>Esta es una plataforma en la cual puedes organizar mejor tus desechos.</p>
      </div>
    </section>
    <section className="topics">
        <div className="temas">
          <img src={arbol} alt="icono1" /> <h2>Eco System</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            accusantium quo delectus earum,{" "}
          </p>
        </div>
        <div className="temas">
          <img src={hoja} alt="icono2" />
          <h2>Biology</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            accusantium quo delectus earum,{" "}
          </p>
        </div>
        <div className="temas">
          <img src={girasol} alt="icono3" />
          <h2>Organic</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            accusantium quo delectus earum,{" "}
          </p>
        </div>
      </section>
      <section className="mundo-mejor">
        <div>
          <img src={cd} alt="ImagenBB" />
        </div>
        <div className="lista-mejora-mundo">
          <h2>Green World For
            <br />
            Our Future Generation
          </h2>
          <ol>
            <li> Crecimiento superior al de la capacidad de generación de combustibles fósiles </li>
            <li> Reducción del 6,5% en el consumo de energía. </li>
            <li> Represas en tres sistemas fluviales en el oeste de Estados Unidos. </li>
            <li> Protegió 10,000 millas cuadradas de corredores de vida silvestre oceánica. </li>
            <li> 12% de reducción de las emisiones atmosféricas de CO2. </li>
            <li> Emitió 40 toneladas menos de CO2 a la atmósfera. </li> 
          </ol>
          <button>Aprende mas</button>
        </div>
      </section>
    </section>
  );
};
export default Home;
