import React, { useState } from "react";
import { connect } from 'react-redux';
import {registerRequest} from '../actions'
import { Link } from "react-router-dom";

const ForgetPassword = () => {
return (
    <section className="forgetPassword">
    <section className="forgetPassword__container">
        <h2>Regístrate</h2>
        <form className="forgetPassword__container--form" onSubmit={handleSubmit}>
        <input
            name="email"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={halndleInput}
        />
        <input
            name="newPassword"
            className="input"
            type="newPassword"
            placeholder="Nueva Contraseña"
            onChange={halndleInput}
        />
        <button className="button">Cambiar contraseña</button>
        </form>
        <Link to="/login">Iniciar sesión</Link>
    </section>
    </section>
    );
};

export default connect(null, )(ForgetPassword);
