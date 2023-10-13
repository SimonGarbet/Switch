import React from 'react';
import {useEffect, useState} from "react";

import Error from '../Error';
import DayLocation from '../../components/DayLocation';
import NightLocation from '../../components/NightLocation';

import switchLogo from '../../assets/switch-logo.png';
import arrowLoopB from "../../assets/arrowloopB.png";
import arrowLoopW from "../../assets/arrowloopW.png"

import '../../scss/style.scss';

function Home() {

  const [displayHome, setDisplayHome] = useState(true); // Détermine l'affichage de l'accueil
  const randomValueDN = Math.floor(Math.random() * 2); // Détermine de manière aléatoire le mode jour ou nuit de la page d'accueil
  const [dayMode, setDayMode] = useState((randomValueDN=== 0) ? true : false); // Détermine le mode jour ou nuit de la ville à afficher

  const [error, setError] = useState(false);
  const [locationList, setLocationList] = useState([]); // Valeur de récupération du JSON

  const [randomLocation, setRandomLocation] = useState(); // Détermine l'id de la ville à afficher
  const [locationTarget, setLocationTarget] = useState({}); // Valeur de récupération de l'objet à afficher en fonction de l'id


  useEffect(() => {
    const filteredLocation = locationList.filter((object) => object.id === randomLocation)[0];
    setLocationTarget(filteredLocation); // Génération de l'objet désiré
    console.log(randomLocation);
    console.log(filteredLocation);
  }, [randomLocation]);


    useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await fetch(`/datas/datas.json`)
        const locationList = await response.json()
        setLocationList(locationList)

      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
    } 
  }
  fetchLocations();
}, []);


  if (error) {
    return <Error />
  } 



  function DayNightToggle() {
    setDisplayHome(false) // Display none la page d'accueil
    setDayMode(!dayMode) // Change le mode jour/nuit
    const randomLocation = (Math.floor(Math.random() * (locationList.length))+ 1)
    setRandomLocation(randomLocation) // Attribution d'un id random
  };




  


  return (
    <div>

      <section className='globalHome'
      style = {{ background : (randomValueDN === 0) ? '#ECE2D0' : '#01295F' , display : displayHome ? "flex" : "none"}}>

          <h1>TRAVEL<br/>SWITCH</h1>

          <div className='blockSwitch' onClick={DayNightToggle}>
            <img src={switchLogo} alt='Interrupteur à cliquer'
            style = {{transform : (randomValueDN === 0) ? 'rotate(0)' : 'rotate(180deg)'}}/>
            <img src = {arrowLoopW} className='arrowLoopHome' style = {{display : (randomValueDN === 0) ? 'none' : 'block'}}  alt = "Flèche indiquant l'interrupteur"></img>
            <img src = {arrowLoopB} className='arrowLoopHome'  style = {{display : (randomValueDN === 0) ? 'block' : 'none'}} alt = "Flèche indiquant l'interrupteur"></img>
            <p style = {{color : (randomValueDN === 0) ? '#000' : '#FFF'}}>Appuie sur l'interupteur pour démarrer</p>
          </div>

      </section>

      <section style= {{display : (dayMode === true && displayHome === false) ? "block" : "none"}}>
      <DayLocation DayNightToggle={DayNightToggle} locationTarget={locationTarget}/>
      </section>

      <section style= {{display : (dayMode === false && displayHome === false) ? "block" : "none"}}>
        <NightLocation DayNightToggle={DayNightToggle} locationTarget={locationTarget}/>
      </section>


    </div>
  );
}

export default Home;
