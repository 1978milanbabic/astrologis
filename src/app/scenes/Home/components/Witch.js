import React from 'react'

// images
import karteSrc from '../../../../../public/assets/karte2.png'
import astrologSrc from '../../../../../public/assets/astrolog-kugla.png'
import tarotSrc from  '../../../../../public/assets/tarot.png'

const Witch = props => {
  return (
    <section className='witch'>
      <div className='witch-top-inner'>
        <p>Mnogobrojne astrološke tehnike predviđanja koje koriste naši najbolji astrolozi
          u astro centru daju dragocen uvid o svim najvažnijim životnim ciklusima,
          pri čemu se dobija neposredan uvid za budućnost. Ako ste u potrazi za odgovorima ili
          želite saznati više o određenom području svog života, ljubav, zdravlje, novac, karijera,
          konsultujte se sa našim najpoznatijim stručnjacima iz oblasti astrologije</p>
      </div>
      <div className='witch-bottom-inner'>
        <div className='witch-table'>
          <div className='left'>
            <img alt='' src={tarotSrc} />
          </div>
          <div className='right'>
            <img alt='' src={astrologSrc} />
          </div>
        </div>
        <div className='back'>
          <img alt='' src={karteSrc} />
        </div>
      </div>
    </section>
  )
}

export default Witch
