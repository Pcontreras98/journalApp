import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { JournalApp } from './JournalApp.jsx'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <HashRouter>
        <JournalApp />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
