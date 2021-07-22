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
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to='/'>
        <img className='header__img' src={logo} alt='R Green' />
      </Link>
      <div className='header__menu'>

        <div className='header__menu--profile'>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={icon_logo} alt='User icon' />
          )}
          <Link to='/porfile' style={{ marginRight: '1em' }}>Perfil</Link>
          <Link to='/order' style={{ marginRight: '1em' }}>Pedir</Link>
          <Link to='/request' style={{ marginRight: '1em' }}>Pedidos</Link>
          <ul>
            {hasUser ? (
              <li className='name_user'>
                <Link to='/'>{user.name}</Link>
              </li>
            ) : null}

            {hasUser ? (
              <li>
                <Link to='/' onClick={handleLogout}>
                  Cerrar Sesión
                </Link>
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
