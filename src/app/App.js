import React, { useState } from 'react'

// semantic ui
import {
  Container,
  Segment,
  Header
} from 'semantic-ui-react'


// styles
import 'semantic-ui-css/semantic.min.css'
import './assets/App.css'

const App = () => {

  return (
    <Container>
      <Segment attached='top'>
        <Header>
          Edit index.html (public folder) to change title, logo, fonts...
        </Header>
      </Segment>
      <Segment attached='bottom'>
        Dont forget to edit all details in package.json
      </Segment>
    </Container>
  )
}

export default App
