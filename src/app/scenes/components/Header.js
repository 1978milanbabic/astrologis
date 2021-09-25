import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router'
import { useSpring, animated } from "react-spring"

// import Callinfo
import CallInfo from "./CallInfo"

// images
import logo from '../../../../public/assets/logo.png'

const Header = props => {
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

    let sliderTimeout

    media.size(1, () => {
      setScreenSize('desktop')
      // show second animated text for desktop
      sliderTimeout = setTimeout(() => {
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

    // cleanup on unload
    return () => {
      clearTimeout(sliderTimeout)
      window.removeEventListener('resize', () => {})
    }

  }, [])

  useEffect(() => {
    if (screenSize && props.getScreenSize) props.getScreenSize(screenSize)
  }, [screenSize])

  const history = useHistory()

  const handleTopButtonClick = () => {
    history.push(`/${props.link}`)
  }


  return (
    <>
      <nav>
        <div className='nav-inner'>
          <img src={logo} alt='Logo' />
          <button
            onClick={handleTopButtonClick}
            type='button'
          >
            {props && props.linkName}
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
    </>
  )
}

export default Header
