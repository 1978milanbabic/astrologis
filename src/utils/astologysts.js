import React from 'react'

// import images
import astro1 from '../../public/assets/astrolog1-100.jpg'
import astro2 from '../../public/assets/astrolog2-100.jpg'
import astro3 from '../../public/assets/astrolog3-100.jpg'
import astro4 from '../../public/assets/astrolog4.jpg'

const astrologs = [
  {
    imgSrc: astro1,
    name: 'Eleonora',
    code: '84',
    available: true,
    about: 'Moje godine rada sa tarot kartama pokazale su mi da se uz pomoć alternativnih tehnika svaka životna situacija može promeniti, biranjem boljeg i srećnijeg puta',
    techniques: 'tarot, numerologija, duhovna rešavanja, ljubavna predviđanja, bioenergija, psihološki razgovori.',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro3,
    name: 'Konstantin',
    code: '34',
    available: true,
    about: 'Pomažem Vam u pogledu na Vašu sadašnjost, a uz pomoć tarota videćemo gde i kako krenuti u budućnost.',
    techniques: 'tarot, sudbinske karte, numerologija, sudbinske karte, psihološki razgovori, bioenergija.',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro4,
    name: 'Bogdana',
    code: '59',
    available: true,
    about: 'Za sve Vaše probleme obratite mi se sa poverenjem jer moje dugogodišnje iskustvo u pomaganju kroz ezoteriju može Vam samo pomoći.',
    techniques: 'tumačenje snova, sudbinske karte, tarot, vidovidost, skidanje uroka, energija na daljinu.',
    phone: '0901-900-907',
    price: 150
  },
  {
    imgSrc: astro2,
    name: 'Sofija',
    code: '73',
    available: false,
    about: 'Stručnjak za tarot i numerologiju. Bavim se pomaganjem ljudima na polju ljubavi, finansija, porodičnih problema i raznih psihičkih stanja energijom na daljinu.',
    techniques: 'energija na daljinu, ljubav, finansije, energetsko čišćenje, numerologija, tarot, slanje pozitivne energije.',
    phone: '0901-900-907',
    price: 150
  },
]

export default astrologs
