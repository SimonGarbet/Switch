import React from 'react';
import {useEffect, useState} from "react";

import Error from '../Error';
import Location from '../../components/Location';

import switchLogo from '../../assets/switch-logo.png';
import arrowLoopB from "../../assets/arrowloopB.png";
import arrowLoopW from "../../assets/arrowloopW.png"

import '../../scss/style.scss';

function Home() {

  const [displayHome, setDisplayHome] = useState(true); // Détermine l'affichage de l'accueil
  const randomValueDN = Math.floor(Math.random() * 2); // Détermine de manière aléatoire le mode jour ou nuit de la page d'accueil
  const [dayMode, setDayMode] = useState((randomValueDN=== 0) ? true : false); // Détermine le mode jour ou nuit de la ville à afficher

  const [isDataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);
  const [locationList, setLocationList] = useState([]); // Valeur de récupération du JSON

  const [randomLocation, setRandomLocation] = useState(); // Détermine l'id de la ville à afficher
  const [viewedRandom, setViewedRandom] = useState([]);  // Récupère les id pour ne pas les proposer deux fois
  const [locationTarget, setLocationTarget] = useState({}); // Valeur de récupération de l'objet à afficher en fonction de l'id


  useEffect(() => {
    const filteredLocation = locationList.filter((object) => object.id === randomLocation)[0];
    setLocationTarget(filteredLocation); // Génération de l'objet désiré
  }, [randomLocation]);


    useEffect(() => {
    async function fetchLocations() {
      setDataLoading(true)
      try {
        const response = await fetch(`/datas/datas.json`)
        const locationList = await response.json()
        setLocationList(locationList)

      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
    } finally{
      setDataLoading(false)
    }
  }
  fetchLocations();
}, []);


  if (error) {
    return <Error />
  } 



  function DayNightToggle() {
    window.scrollTo(0, 0) // Reset en haut de la page
    setDisplayHome(false) // Display none la page d'accueil
    setDayMode(!dayMode) // Change le mode jour/nuit
    RerollRandom(viewedRandom);
  };



// Cette fonction a pour but de retirer l'id récupérée pour éviter de redonner une destination déjà vue.
  function RerollRandom (viewedRandom){  
    const randomLocation = (Math.floor(Math.random() * (locationList.length))+ 1) // Attribution d'un id random

    if (viewedRandom.includes(randomLocation)){
    RerollRandom(viewedRandom) // Relance nombre aléatoire
  }  else {
    viewedRandom.push(randomLocation); // Intégration de l'id choisi pour le mettre dans le tableau
    setViewedRandom(viewedRandom) // Actualisation de viewedRandom

    setRandomLocation(randomLocation); // Actualisation de randomLocation
  }

}




  


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
            <p style = {{color : (randomValueDN === 0) ? '#000' : '#FFF'}}>Appuie sur l'interrupteur pour démarrer</p>
          </div>

      </section>

      { isDataLoading ? (
        <div>
          Loading
        </div>
      ) : (
        <section style= {{display : displayHome ? "none" : "block"}}>
        <Location DayNightToggle={DayNightToggle} locationTarget={locationTarget} dayMode={dayMode}/>
        </section>
      )
      }

     


    </div>
  );
}

export default Home;
