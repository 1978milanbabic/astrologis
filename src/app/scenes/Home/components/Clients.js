import React from 'react'

// components
import Footer from '../../components/Footer'

// import clients info
import clients from '../../../../utils/clients'

const Clients = props => {
  let clLength = clients.length
  let half = clLength / 2
  let lesserHalf = parseInt(half)
  let firstHalfLength = lesserHalf
  if (half % 1) {
    firstHalfLength += 1
  }
  let firstHalf = clients.filter((cl, i) => {
    if (i < firstHalfLength) return cl
  })
  let secondHalf = clients.filter((cl, i) => {
    if (i >= firstHalfLength) return cl
  })

  return (
    <section className='clients'>
      <h2>NAŠI ZADOVOLJNI KLIJENTI</h2>

      <div className='client-table'>
        <div className='client-table-left'>
          {firstHalf && firstHalf.map((cli, i) => (
            <div key={i} className='client-cont'>
              <div className='client-pic-holder'>
                <img alt='' src={cli.imageSrc} />
              </div>
              <h3>{cli.name} {cli.years} god. {cli.location}</h3>
              <p>{cli.comment}</p>
            </div>
          ))}
        </div>
        <div className='client-table-right'>
          {secondHalf && secondHalf.map((cli, i) => (
            <div key={i + 100} className='client-cont'>
              <div className='client-pic-holder'>
                <img alt='' src={cli.imageSrc} />
              </div>
              <h3>{cli.name} {cli.years} god. {cli.location}</h3>
              <p>{cli.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Clients
