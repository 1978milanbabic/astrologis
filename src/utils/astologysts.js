import React from 'react'

// import images
import astro1 from '../../public/assets/astrolog1-100.jpg'
import astro2 from '../../public/assets/astrolog2-100.jpg'
// import astro3 from '../../public/assets/astrolog3-100.jpg'
import astro4 from '../../public/assets/astrolog4.jpg'

const astrologs = [
  {
    imgSrc: astro1,
    name: 'Marija',
    code: '84',
    available: true,
    about: '***',
    techniques: 'tarot i numerologija',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro4,
    name: 'Kristina',
    code: '59',
    available: true,
    about: 'Kombinacija astrologije i tarota daje odgovore na sva pitanja. Rešenja svih dilema i problema na ljubavom, poslovnom i zdravstvenom planu.',
    techniques: 'tarot i numerologija',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro2,
    name: 'Anita',
    code: '73',
    available: false,
    about: '***',
    techniques: '***',
    phone: '0901-900-907',
    price: 150
  },
]

export default astrologs
