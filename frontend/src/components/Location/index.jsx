import React from 'react';


import switchLogo from '../../assets/switch-logo.png';
import arrowLoopB from "../../assets/arrowloopB.png";
import arrowLoopW from "../../assets/arrowloopW.png"


import '../../scss/style.scss';


function DayLocation({DayNightToggle, locationTarget, dayMode}) {

  console.log(locationTarget)

  return (
    <div className={dayMode ? "globalDayLocation" : "globalNightLocation" }>
      <img className='backgroundPicture' src={dayMode ? `${locationTarget?.dayURL}` : `${locationTarget?.nightURL}`} alt='Photographie en arrière plan représentant la ville'/>

      <section className='datasLocation'>
        <div>
          <img className='arrowLoopLocation' src={dayMode ? `${arrowLoopB}` : `${arrowLoopW}` } alt="Flèche montrant l'interrupteur" />
          <p>Scrolle</p>
        </div>
        <h3>{locationTarget?.distance}</h3>
      </section>

      <section className='descriptionLocation'>
      <h1>{locationTarget?.town}</h1>
      <h2>{locationTarget?.country}</h2>
      <p>{locationTarget?.description}</p>
        <div>
        <img onClick={DayNightToggle} src={switchLogo} alt='Interrupteur à cliquer' />
        <img className='arrowLoopLocation' src={dayMode ? `${arrowLoopB}` : `${arrowLoopW}` } alt="Flèche montrant l'interrupteur" />
        <p>Voyage encore !</p>
        </div>
      </section>

    </div>
  );
}

export default DayLocation;
