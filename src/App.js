import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Training from './components/Training'
import Result from './components/Result'
import Tutorial from './components/Tutorial'
import News from './components/News'
import Header from './components/Header'

class App extends Component {
  render() {
    return(
      <BrowserRouter>      
        <div>
          <Header/>
          <Route exact path='/' component={Training} />
          <Route path='/result' component={Result} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/news' component={News} />
        </div>        
      </BrowserRouter>  
    )
  }
}
export default App