import React, { useState } from 'react'

// import images
import callOk from '../../../../public/assets/call-ok.png'
import callNok from '../../../../public/assets/call-ok.png'

// import astros
import astrologs from '../../../utils/astologysts'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'

// styles
import './assets/Astrolozi.scss'

const Astrolozi = () => {
  // state
  const [screenSize, setScreenSize] = useState()

  const handleScreeSize = ss => {
    if (ss) setScreenSize(ss)
  }

  return (
    <div id='astrolozi'>
      <p>test</p>
      <Header getScreenSize={handleScreeSize} link='' linkName='Početna' />

      {/* astrologysts */}
      <div className='astro-table'>
        {astrologs && astrologs.length > 0 && astrologs.map(astro => (
          <div key={astro.code} className='slide-member-cont'>
            <div className='img-cont'>
              <div className='img-wrapper'>
                <img alt='' src={astro.imgSrc} />
              </div>
            </div>
            <div className='name-table'>
              <div className='left'>
                <p><span>{astro.name}</span> - Kod - {astro.code}</p>
              </div>
              <div className='right'>
                <p>
                  <img alt='' src={astro.available ? callOk : callNok} />
                  Tarot savetnik je {astro.available ? ('slobodan') : ('zauzet')}
                  </p>

              </div>
            </div>
            <div className='osavet'>
              <p><span>O SAVETNIKU</span>: {astro.about}</p>
            </div>
            <div className='tehn'>
              <p><span>TEHNIKE</span>: {astro.techniques}</p>
            </div>
            <a
              href={`tel: ${astro.phone}`}
              className={astro.available ? 'av' : 'non-av'}
            >
              <span className='left'>
                Broj telefona: {astro.phone}
              </span>
              <span className='right'>
                {astro.price} RSD/min
              </span>
            </a>
          </div>
        ))}
      </div>

      <div className='footer-container'>
        <Footer />
      </div>
    </div>
  )
}

export default Astrolozi
