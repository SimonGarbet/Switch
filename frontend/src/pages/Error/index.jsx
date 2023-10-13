import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/style.scss';


function Error() {
  return (
    <div className='globalError'>
      <h1>ERROR 404</h1>
      <Link to={'/'}>Revenir à l'accueil</Link>
    </div>
  );
}

export default Error;
