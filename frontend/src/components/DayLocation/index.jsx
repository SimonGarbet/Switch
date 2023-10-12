import React from 'react';


import switchLogo from '../../assets/switch-logo.png';


import '../../scss/style.scss';


function DayLocation({DayNightToggle}) {
  return (
    <div>
      <h1>DAYLOCATION</h1>
      <img onClick={DayNightToggle} src={switchLogo} alt='Interrupteur à cliquer' />
    </div>
  );
}

export default DayLocation;
