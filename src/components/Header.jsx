import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };

return (
  <header className='header'>
    <Link to='/'>
      <img className='header__img' src='' alt='R Green' />
    </Link>
    <div className='header__menu'>
      <ul>
      <li className='header__menu--profile'>
        <p>
          <Link to='/peticiones'>
            Perfil
          </Link> 
        </p>
      </li>
        {hasUser ? (
          <li>
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
