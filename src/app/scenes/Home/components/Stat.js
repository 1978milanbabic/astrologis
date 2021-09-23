import React from 'react'

const Stat = props => {
  return (
    <div className='astat-cont'>
      <div className='astat-cont-inner'>
        <div className='img-cont'>
          <img alt='' src={props.image} />
        </div>
        <div className='text-cont'>
          <p className='nmb'>{props.number}</p>
          <p className='text'>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Stat
