import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import myStore from './redux/store/myStore'
import { Provider } from 'react-redux'

ReactDOM.render(

  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
  
)

reportWebVitals()
