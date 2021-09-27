import React from 'react'
import { useHistory } from 'react-router'

const Footer = props => {
  // links
  const history = useHistory()

  const goToTermsPage = e => {
    e.preventDefault()
    history.push('/terms')
  }

  const goToPrivacyPage = e => {
    e.preventDefault()
    history.push('/privacy')
  }

  return (
    <footer>
      <p>
        &copy; 2021. Astrologis. Sva prava zadržana. <span><a href='/terms' onClick={goToTermsPage}>Uslovi korišćenja</a> | <a href='/privacy' onClick={goToPrivacyPage}>Politika privatnosti</a></span>
      </p>
    </footer>
  )
}

export default Footer
