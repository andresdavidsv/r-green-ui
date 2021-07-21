import React from "react";
import { connect } from "react-redux";

const Home = () => {
  return (
    <div>
    <section className="section-home">
    <div className="presentacion">
        <h1>¿Quienes son R-Green?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="contenerdorLogin">
        <label for="nombre">Nombre de usuario</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre Convencional"
          required
        />
        <label for="contrasena">Contraseña</label>
        <input
          type="text"
          id="contraseña"
          name="contraseña"
          placeholder="**"
          required
        />
        <input type="submit" value="Enviar" class="botonEnvio" />
        <br />
        <a href="">¿Olvidasete tu contraseña?</a>
        <a href="">¿Nuevo usuario?</a>
        <button>Registrarse</button>
      </div>
    </section>
    <section className="topics">
        <div className="temas">
          <img src="" alt="icono1" /> <h2>Eco System</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            accusantium quo delectus earum,{" "}
          </p>
        </div>
        <div className="temas">
          <img src="" alt="icono2" />
          <h2>Biology</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            accusantium quo delectus earum,{" "}
          </p>
        </div>
        <div className="temas">
          <img src="" alt="icono3" />
          <h2>Organic</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            accusantium quo delectus earum,{" "}
          </p>
        </div>
      </section>
    </div>
  );
};
export default Home;
/*
const Home = ({myList,trends,originals}) => (
  <>
  <div className='h-screen'>
    {originals.map((item)=>(
      <p key={item.id}>
        {item.id}
      </p>
      
    ))}
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
    <p>11</p>
  </div>
  </>
  
);
const mapStateToProps = state =>{
  return{
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}

 */
