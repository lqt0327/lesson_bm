import React from 'react';
import { Provider } from 'mobx-react'
import articleStore from './store/articleStore';
import Home from './pages/home'
import logo from './logo.svg';
import './util/request.js';
import './App.css';

const store = {
  articleStore
}
function App() {
  return (
    <Provider {...store} >
      <Home />
    </Provider>
  );
}

export default App;
