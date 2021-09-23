import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useSpring, animated } from "react-spring"

// styles
import './assets/Home.scss'

// components
import CallInfo from './components/CallInfo'
import Stat from './components/Stat'
import Planets from './components/Planets'
import Amulet from './components/Amulet'

// images
import logo from '../../../../public/assets/logo.png'
import astrology from '../../../../public/assets/icons/astrology.svg'
import moon from '../../../../public/assets/icons/astrology-moon.svg'
import star from '../../../../public/assets/icons/star.svg'
import Astrologists from './components/Astrologists'


const Home = () => {
  // states
  const [screenSize, setScreenSize] = useState()
  const [keyTopSlider1, setKeyTopSlider1] = useState(1)
  const [keyTopSlider2, setKeyTopSlider2] = useState(400)

  // top slider
  const scrolling1 = useSpring({
    from: { transform: "translate(80%,0)" },
    to: { transform: "translate(-80%,0)" },
    config: { duration: 20000 },
    reset: true,
    onRest: () => {
      setKeyTopSlider1(keyTopSlider1 + 1)
    }
  })
  const scrolling2 = useSpring({
    from: { transform: "translate(80%,0)", opacity: 1 },
    to: { transform: "translate(-80%,0)", opacity: 1 },
    config: { duration: 20000 },
    reset: true,
    delay: 10000,
    onRest: () => {
      setKeyTopSlider2(keyTopSlider2 + 1)
    }
  })

  // switch screen sizes
  useEffect(() => {
    const media = csstojsID('css-connector')

    media.size(1, () => {
      setScreenSize('desktop')
      // show second animated text for desktop
      setTimeout(() => {
        let secText = document.getElementsByClassName('second-anim')[0]
        if (secText) secText.classList.remove('second-anim')
      }, 10020)
    })

    media.size(2, () => {
      setScreenSize('mobile')
      // remove slider
      let navDet = document.getElementsByClassName('nav-details')[0]
      let divs = navDet.getElementsByTagName('div')
      if (divs.length > 1) {
        let wanted = divs[divs.length - 1]
        navDet.innerHTML(wanted)
      }
    })

    media.init()
  }, [])

  const history = useHistory()

  const handleTopButtonClick = () => {
    history.push('/astrolozi')
  }

  return (
    <div id='home'>
      <div className='header'>
        <nav>
          <div className='nav-inner'>
            <img src={logo} alt='Logo' />
            <button
              onClick={handleTopButtonClick}
              type='button'
            >
              Astrolozi
            </button>
          </div>
        </nav>
        <div className='nav-details'>
          {screenSize === 'desktop' && (
            <>
              <div key={keyTopSlider1}>
                <animated.div style={scrolling1}>
                  <CallInfo device='desktop' />
                </animated.div>
              </div>
              <div key={keyTopSlider2} className='second-anim'>
                <animated.div style={scrolling2}>
                  <CallInfo device='desktop' />
                </animated.div>
              </div>
            </>
          )}
          {screenSize === 'mobile' && (<CallInfo device='mobile' />)}
        </div>
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

      </main>
    </div>
  )
}

export default Home
