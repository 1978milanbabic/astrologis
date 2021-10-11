import React from 'react'

// images
import flag from '../../../../public/assets/zastava.png'

const CallInfo = props => {
  return (
    <div className='upper-info-slide'>
      <p>
        <img src={flag} alt='' />
        &emsp;
        0901-900-907
        &emsp;&emsp;
        150 RSD/min
        {props.device === 'mobile' ?
          (<br />)
          : (<>&emsp;&emsp;</>)
        }
        Svaki poziv dobija gratis amulet za novac, sreću i zdravlje!
        <br />
        <span className='last-line'>
          Radno Vreme  11:00 - 23:00 Pon-Pet
        </span>
      </p>
    </div>
  )
}

export default CallInfo
