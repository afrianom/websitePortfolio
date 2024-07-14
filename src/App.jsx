import React from 'react'
import './App.css'
import logoAfriano from './assets/logosolo.svg';
import Scroll from './modules/scroll/Scroll';

function App() {
  

  return (
    <div className='app-main'>
      <img src={logoAfriano} className='logo-app'></img>
      <h2 className="subtitle">Portfolio of websites</h2>
      <Scroll/>
    </div>
  )
}

export default App
