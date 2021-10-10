import React from 'react'

// import images
import astro1 from '../../public/assets/marija.png'
import astro2 from '../../public/assets/anika.png'
import astro4 from '../../public/assets/astrolog4.jpg'

const astrologs = [
  {
    imgSrc: astro1,
    name: 'Marija',
    code: '11',
    available: true,
    about: 'Otvaram tarot. Koristim Rajder Vajtov špil. Numerologija, psihološki razgovori..',
    techniques: 'Tarot i Numerologija',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro4,
    name: 'Kristina',
    code: '22',
    available: true,
    about: 'Kombinacija astrologije i tarota daje odgovore na sva pitanja. Rešenja svih dilema i problema na ljubavom, poslovnom i zdravstvenom planu.',
    techniques: 'Tarot i Numerologija',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro2,
    name: 'Anika',
    code: '33',
    available: false,
    about: 'Neko je rekao da je Astrologija ČITAC BOZIJEG RUKOPISA a ona je način mog života vec 40 godina! Specijalnost mi je Natalna Astrologija i ona je osnov svega! Takodje radim Progresivnu Astrologiju a lično volim Lunarni Horoskop! Astro Tarot je takodje nešto što mi predstavlja izazov ali kao dopunu Astrologiji! Ja Vam probleme neću resiti ,ali ću Vas usmeriti na najbolji mogući put!',
    techniques: 'Astrologija',
    phone: '0901-900-907',
    price: 150
  },
]

export default astrologs
