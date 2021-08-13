import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import google_icon from "../assets/static/google_icon.png"
import twitter_icon from "../assets/static/twitter_icon.png"

const Login = props => {
  const[form,setValues] = useState({
    email:'',
  });

  const handleInput = event =>{
    setValues({
      ...form,
      [event.target.name] : event.target.value
    })
  }
  const handleSubmit = event =>{
    event.preventDefault()
    props.loginRequest(form)
    props.history.push('/')
  }
  return(
    
  <section className='login'>
  
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form' onSubmit={handleSubmit}>
        <input
        name='email'
        className='input'
        type='text'
        placeholder='Correo'
        onChange={handleInput}
        />
        <input
        name='password'
        className='input'
        type='password'
        placeholder='Contraseña'
        onChange={handleInput}
        />
        <button className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label>
            <input
            type='checkbox'
            id='cbox1'
            value='first_checkbox'
            />
            <a> </a>Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={google_icon} /> <a href="">Inicia sesión con
          Google</a>
        </div>
        <div>
          <img src={twitter_icon} /> <a href="">Inicia sesión con
          Twitter</a> 
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta <a> </a>
        <Link to='/register'>Regístrate</Link>
        <br></br>
        
      </p>
    </section>
  </section>
)};

const mapDispatchToProps ={
  loginRequest,
}

export default connect(null,mapDispatchToProps)(Login)
