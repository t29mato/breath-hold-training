import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import DeepBreathTraining from './components/DeepBreathTraining'
import BreathHoldTraining from './components/BreathHoldTraining'
import Tutorial from './components/Tutorial'
import News from './components/News'
import ReleaseNote from './components/ReleaseNote'
import Header from './components/Header'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Container>
          <Header/>
          <Route exact path='/' component={Home} />
          <Route path='/deep-breath' component={DeepBreathTraining} />
          <Route path='/breath-hold' component={BreathHoldTraining} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/news' component={News} />
          <Route path='/release-note' component={ReleaseNote} />
        </Container>
      </BrowserRouter>
    )
  }
}
export default App