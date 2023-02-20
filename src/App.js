import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main';
import "./App.css"
import "./Main.css"
import Header from './Header';

const App = () => {
  return (
    <div className='mainpage'>
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default App
