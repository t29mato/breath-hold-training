import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import DeepBreathTraining from './components/DeepBreathTraining'
import BreathHoldTraining from './components/BreathHoldTraining'
import Tutorial from './components/Tutorial'
import News from './components/News'
import Header from './components/Header'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Container>
          <Header/>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route path={`${process.env.PUBLIC_URL}/deep-breath`} component={DeepBreathTraining} />
          <Route path={process.env.PUBLIC_URL + '/breath-hold'} component={BreathHoldTraining} />
          <Route path={process.env.PUBLIC_URL + '/tutorial'} component={Tutorial} />
          <Route path={process.env.PUBLIC_URL + '/news'} component={News} />
        </Container>
      </BrowserRouter>
    )
  }
}
export default App