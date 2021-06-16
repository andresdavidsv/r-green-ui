import React from 'react';

const Footer = () => (
  <div className='App'>
      <div className='footer'>
        <div className='container-icons'>
          {/* agregar el icono a utilizar  */}
          <a href=''>
            <FontAwesomeIcon icon={faFacebook} className={sizeB} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faInstagram} className={sizeB} />
          </a>
          <a href=''>
            <FontAwesomeIcon icon={faTwitter} className={sizeB} />
          </a>
        </div>
        <span className={sizeS}>
          Con R-Green cambiar el mundo esta a tu alcance
        </span>
      </div>
  </div>
);

export default Footer;
