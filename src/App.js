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
    console.log(process.env.PUBLIC_URL); // debug
    return(
      // <BrowserRouter basename={'/'}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Container>
          <Header/>
          <Route exact path='/breath-hold-training' component={Home} />
          <Route path='/breath-hold-training/deep-breath' component={DeepBreathTraining} />
          <Route path='/breath-hold' component={BreathHoldTraining} />
          <Route path={process.env.PUBLIC_URL + '/tutorial'} component={Tutorial} />
          <Route path={process.env.PUBLIC_URL + '/news'} component={News} />
        </Container>
      </BrowserRouter>
    )
  }
}
export default App