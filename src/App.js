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
    this.path = (process.env.NODE_ENV === 'production') ? '/breath-hold-training' : '';
    console.log(process.env.NODE_ENV);
    console.log(__dirname);
    return(
      <BrowserRouter>
        <Container>
          <Header/>
          <Route exact path={this.path + '/'} component={Home} />
          <Route path={this.path + '/deep-breath'} component={DeepBreathTraining} />
          <Route path={this.path + '/breath-hold'} component={BreathHoldTraining} />
          <Route path={this.path + '/tutorial'} component={Tutorial} />
          <Route path={this.path + '/news'} component={News} />
          <Route path={this.path + '/'} component={Home} />
        </Container>
      </BrowserRouter>
    )
  }
}
export default App