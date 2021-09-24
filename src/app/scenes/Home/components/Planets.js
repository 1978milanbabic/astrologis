import React from 'react'

// import images
import signs from '../../../../../public/assets/horoskop.png'

const Planets = props => {
  return (
    <section className='planets'>
      <div className='planets-inner'>
          <div className='left'>
            <img alt='' src={signs} className='rotate' />
          </div>
          <div className='right'>
            <p>Kao izuzetno popularna metoda, astrologija ne nudi samo uvid u dalju perspektivu,
              već obuhvatan pristup koji olakšava samospoznaju i razumevanje svih aspekata
              koji se odnose na sentimentalno područje, poslovne mogućnosti, finansijski prosperitet,
              zdravlje i sve ono što ima važan uticaj na svakodnevni život.</p>
            <p>Uz pravi pristup ovoj najsveobuhvatnijom divinacijskoj metodi, astro centar
              pruža vam mogućnost da se svakodnevno konsultujete sa vrhunskim astrolozima
              i dođete do jasnih i praktičnih odgovora</p>
          </div>
      </div>
    </section>
  )
}

export default Planets
