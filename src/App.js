import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TrainingView from './views/TrainingView'
import ResultView from './views/ResultView'
import TutorialView from './views/TutorialView'
import NewsView from './views/NewsView'

class App extends Component {
  render() {
    return(
      <BrowserRouter>      
        <div>
          <Route exact path='/' component={TrainingView} />
          <Route path='/result' component={ResultView} />
          <Route path='/tutorial' component={TutorialView} />
          <Route path='/news' component={NewsView} />
        </div>        
      </BrowserRouter>  
    )
  }
}
export default App