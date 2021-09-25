import React, { useState } from 'react'

// styles
import './assets/Home.scss'

// components
import Header from '../components/Header'
import Stat from './components/Stat'
import Planets from './components/Planets'
import Amulet from './components/Amulet'
import Witch from './components/Witch'
import Clients from './components/Clients'

// images
import astrology from '../../../../public/assets/icons/astrology.svg'
import moon from '../../../../public/assets/icons/astrology-moon.svg'
import star from '../../../../public/assets/icons/star.svg'
import Astrologists from './components/Astrologists'


const Home = () => {
  // state
  let [screenSize, setScreenSize] = useState()

  const handleScreeSize = ss => {
    if (ss) setScreenSize(ss)
  }

  return (
    <div id='home'>
      <div className='header'>
        <p>test</p>
        <Header getScreenSize={handleScreeSize} link='astrolozi' linkName='Astrolozi' />
        <header>
          <div className='header-cont'>
            <h1>VAŠU PUTANJU OSVETLJAVA MAPA ZVEZDA</h1>
          </div>
          <div className='sub-header-cont'>
            <p>Često se kaže da svaka prediktivna disciplina ima svoje posebne prednosti,
              ali kada je u pitanju astrologija,
              nijedna metoda ne može pružiti tako praktičan pristup i razumevanje
              o tajnama životnog puta.</p>
          </div>
        </header>
        <div className='stats'>
          <Stat
            image={astrology}
            number='12'
            text='RAZLIČITIH TEHNIKA'
          />
          <Stat
            image={moon}
            number='18'
            text='RAZLIČITIH ASTROLOGA'
          />
          <Stat
            image={star}
            number='600+'
            text='ZADOVOLJNIH KLIJENATA'
          />
        </div>
      </div>
      <main>
        <Planets />
        <Amulet device={screenSize} />
        <Astrologists device={screenSize} />
        <Witch />
        <Clients device={screenSize} />
      </main>
    </div>
  )
}

export default Home
