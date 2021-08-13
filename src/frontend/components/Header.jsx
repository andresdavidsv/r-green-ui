import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import icon_logo from '../assets/static/icon_black.svg';
import logo from '../assets/static/R-Green_2.svg';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    document.cookie = "email="
    document.cookie = "first_name=";
    document.cookie = "last_name=";
    document.cookie = "user_name=";
    document.cookie = "id=";
    document.cookie = "token=";
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <header className="header">
      <Link to='/'>
        <img className='header__img' src={logo} alt='R Green' />
      </Link>
      <div className='header__menu'>

        {hasUser ? (
          <li className='header_options'>
            <Link to='/profile' style={{ marginRight: '1em' }}>Perfil</Link>
            <Link to='/order' style={{ marginRight: '1em' }}>Pedir</Link>
            <Link to='/request' style={{ marginRight: '1em' }}>Pedidos</Link>

          </li>
        ) : null}

        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={icon_logo} alt='User icon' />
          )}

          <ul>
            {hasUser ? (
              <li className='name_user'>
                <Link to='/'>{user.name}</Link>


              </li>
            ) : null}

            {hasUser ? (

              <li>
                <Link to='/' onClick={handleLogout}> Cerrar Sesión </Link>
              </li>
            ) : (
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
