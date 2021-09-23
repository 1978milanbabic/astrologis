import React from 'react'

// import images
import textPic from '../../../../../public/assets/tekst.png'
import amuPic from '../../../../../public/assets/token.png'

const Amulet = props => {
  return (
    <section className='amulet'>
      <div className='left'>
        {props && props.device && props.device === 'desktop' && (
          <img alt='' src={textPic} />
        )}
        {props && props.device && props.device === 'mobile' && (
          <p>SVAKI POZIV DOBIJA GRATIS AMULET ZA NOVAC, SREĆU I ZDRAVLJE.</p>
        )}
      </div>
      <div className='right'>
        <img alt='' src={amuPic} />
      </div>
    </section>
  )
}

export default Amulet
