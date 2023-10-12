import React from 'react';
import {useEffect, useState} from "react";

import DayLocation from '../../components/DayLocation';
import NightLocation from '../../components/NightLocation';

import switchLogo from '../../assets/switch-logo.png';
import arrowLoopB from "../../assets/arrowloopB.png";
import arrowLoopW from "../../assets/arrowloopW.png"

import '../../scss/style.scss';

function Home() {

  const [displayHome, setDisplayHome] = useState(true);

  const randomValue = Math.floor(Math.random() * 2);

  const [dayMode, setDayMode] = useState((randomValue=== 0) ? true : false);

  function DayNightToggle() {
    setDisplayHome(false)
    setDayMode(!dayMode)
  }



  return (
    <div>

      <section className='globalHome'
      style = {{ background : (randomValue === 0) ? '#ECE2D0' : '#01295F' , display : displayHome ? "flex" : "none"}}>

          <h1>TRAVEL<br/>SWITCH</h1>

          <div className='blockSwitch' onClick={DayNightToggle}>
            <img src={switchLogo} alt='Interrupteur à cliquer'
            style = {{transform : (randomValue === 0) ? 'rotate(0)' : 'rotate(180deg)'}}/>
            <img src = {arrowLoopW} className='arrowLoopHome' style = {{display : (randomValue === 0) ? 'none' : 'block'}}  alt = "Flèche indiquant l'interrupteur"></img>
            <img src = {arrowLoopB} className='arrowLoopHome'  style = {{display : (randomValue === 0) ? 'block' : 'none'}} alt = "Flèche indiquant l'interrupteur"></img>
            <p style = {{color : (randomValue === 0) ? '#000' : '#FFF'}}>Appuie sur l'interupteur pour démarrer</p>
          </div>

      </section>

      <section style= {{display : (dayMode === true && displayHome === false) ? "block" : "none"}}>
      <DayLocation DayNightToggle={DayNightToggle}/>
      </section>

      <section style= {{display : (dayMode === false && displayHome === false) ? "block" : "none"}}>
        <NightLocation DayNightToggle={DayNightToggle}/>
        </section>


    </div>
  );
}

export default Home;
