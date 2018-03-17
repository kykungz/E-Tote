import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import RouterView from './router'
import Navbar from './components/Navbar'
import Bottombar from './components/Bottombar'

import DemoRouterLink from './demo/DemoRouterLink'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <RouterView />
          {/* <Bottombar /> */}
        </div>
      </Router>
    )
  }
}

export default App
