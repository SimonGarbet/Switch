import React from 'react';


import switchLogo from '../../assets/switch-logo.png';
import arrowLoopB from "../../assets/arrowloopB.png";
import arrowLoopW from "../../assets/arrowloopW.png"


import '../../scss/style.scss';


function DayLocation({DayNightToggle, locationTarget, dayMode}) {

  return (
    <div className={dayMode ? "globalDayLocation" : "globalNightLocation" }>
      <img className='backgroundPicture' src={dayMode ? `${locationTarget?.dayURL}` : `${locationTarget?.nightURL}`} alt='Photographie en arrière plan représentant la ville'/>

      <section className='datasLocation'>
        <div className='scrollDatas'>
          <img className='arrowLoopLocation' src={dayMode ? `${arrowLoopB}` : `${arrowLoopW}` } alt="Flèche montrant l'interrupteur" />
          <p>Scrolle</p>
        </div>
        <div className='distanceDatas'>
        <h3>{locationTarget?.distance}</h3>
        <p>Depuis Paris</p>
        </div>
      </section>

      <section className='descriptionLocation'>
      <h1>{locationTarget?.town}</h1>
      <h2>{locationTarget?.country}</h2>
      <p>{locationTarget?.description}</p>
        <div>
        <img  className='switchLogoLocation' onClick={DayNightToggle} style={{transform: dayMode? "rotate(0)" : "rotate(180deg)", cursor: "pointer"}} src={switchLogo} alt='Interrupteur à cliquer' />
        <img className='arrowLoopLocation' src={dayMode ? `${arrowLoopB}` : `${arrowLoopW}` } alt="Flèche montrant l'interrupteur" />
        <p>Voyage encore !</p>
        </div>
      </section>

    </div>
  );
}

export default DayLocation;
