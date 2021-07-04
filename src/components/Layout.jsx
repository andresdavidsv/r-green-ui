import React from 'react';
import Header from './Header';
import Footer from './Footer_home';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
<<<<<<< Updated upstream
    <Footer /> 
=======
    {<Footer />}
>>>>>>> Stashed changes
  </div>
);
export default Layout;
