import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions'
import { Link } from 'react-router-dom';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: ''
  })
  const halndleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(form);
    props.registerUser(form, '/login')
  }
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name="name"
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={halndleInput}
          />
          <input
            name="email"
            className='input'
            type='text'
            placeholder='Correo'
            onChange={halndleInput}
          />
          <input
            name="password"
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={halndleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  )
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
