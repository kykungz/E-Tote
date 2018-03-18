import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { injectGlobal } from 'styled-components'
import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'

injectGlobal`
  body {
    ${'' /* background: linear-gradient(to bottom, hsl(130, 39%, 29%), hsl(130, 39%, 24%)) !important; */}
    background: hsl(130, 39%, 29%) !important;
    ${'' /* background: #f5fffd !important; */}
    background: whitesmoke !important;
    ${'' /* background: rgb(190, 190, 190) !important; */}
    ${'' /* background: rgb(74,161,118) !important; */}
    background: hsl(0, 0%, 91%) !important;
  }

  .tesco-nav {
    background: white;
    transition: all 600ms;
  }

  .transparent {
    background: rgba(255,255,255,0.95) !important;
    transition: all 600ms;
  }
  .hide {
    display: none;
  }

  .show {
    animation: fadein 200ms;
  }

  @keyframes fadein {
    from {bottom: -20px}
    to {bottom: 0}
  }
`

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
