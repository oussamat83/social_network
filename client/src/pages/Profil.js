import React from 'react';
import Log from '../components/Log';
                                                  // changer le logo ligne 10 
const Profil = () => {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log  signin={false} signup={true} />
        <div className="img-container">
          <img src="./img/logof5.svg" alt="img-log" />   
        </div>
      </div>
    </div>
  );
};

export default Profil;