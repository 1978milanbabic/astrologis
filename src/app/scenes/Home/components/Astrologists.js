import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

// import images
import callOk from '../../../../../public/assets/call-ok.png'
import callNok from '../../../../../public/assets/call-nok.png'

// import astros
import astrologs from '../../../../utils/astologysts'

const Astrologists = props => {
  const { device } = props

  const handleCallable = (e, av) => {
    if (!av) {
      e.preventDefault()
    }
  }

  return (
    <section className='astrologists'>
      <div className='astro-headline'>
        <h2>IZABERI SVOG ASTROLOGA</h2>
        <p>Pristupiti odgovorima koje nudi astrologija uvek je jedinstveno iskustvo
          kroz koje se dolazi do dublje samospoznaje i saznanja o putevima za sreću.
          Stavljajući na raspolaganje najbolje stručnjake iz oblasti astrologije
          sa višegodišnjim iskustvom,
          astro centar nudi vam profesionalne usluge astrološkog savetovanja.</p>
      </div>

      <div
        className='caro-cont'
        style={{
          width: '100%',
          maxWidth: '1500px',
          overflowX: 'hidden',
          margin: '0 auto',
          overflowY: 'auto',
          paddingBottom: '50px'
        }}
      >
        <div className='astro-slide-cont'>
          <Carousel
            infiniteLoop={true}
            centerMode
            centerSlidePercentage={(device && device === 'mobile') ? 100 : 50}
            showArrows={false}
            showStatus={false}
            showIndicators={true}
            showThumbs={false}
            autoPlay={true}
            stopOnHover={false}
            interval={4000}
          >
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
                  onClick={e => handleCallable(e, astro.available)}
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
          </Carousel>
        </div>
      </div>

    </section>
  )
}

export default Astrologists
