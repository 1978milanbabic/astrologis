import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router'

// import Callinfo
import CallInfo from "./CallInfo"

// images
import logo from '../../../../public/assets/logo.png'

const Header = props => {
  // states
  const [screenSize, setScreenSize] = useState()

  // switch screen sizes
  useEffect(() => {
    const media = csstojsID('css-connector')

    media.size(1, () => {
      setScreenSize('desktop')
    })

    media.size(2, () => {
      setScreenSize('mobile')
    })

    media.init()

    // cleanup on unload
    return () => {
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
        <CallInfo device={screenSize} />
      </div>
    </>
  )
}

export default Header
