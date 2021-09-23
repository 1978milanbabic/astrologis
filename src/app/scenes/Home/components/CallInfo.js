import React from 'react'

// images
import flag from '../../../../../public/assets/zastava.png'

const CallInfo = props => {
  return (
    <div className='upper-info-slide'>
      <p>
        <img src={flag} alt='' />
        &emsp;
        0900-000-000
        &emsp;&emsp;
        150 RSD/min
        {props.device === 'mobile' ?
          (<br />)
          : (<>&emsp;&emsp;</>)
        }
        Svaki poziv dobija gratis amulet za novac, sreću i zdravlje!
      </p>
    </div>
  )
}

export default CallInfo
