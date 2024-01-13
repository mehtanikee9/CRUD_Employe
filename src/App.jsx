import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer  , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


import "./global.css"
import Emplist from './Emplist';
import Employe from './Employe'
import Update from './Update';
import Edit from './Edit'
import View from './View'

const App = () => {
  return (
    <div>
      <ToastContainer/>
       <Router>
          <Nav/>
          <Routes>
              <Route path='/' element={<Emplist/>} />
              <Route path="/employe" element={<Employe/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
              {/* <Route path='/view/:id' element={<View/>}/> */}
          </Routes>
       </Router>
    </div>
  )
}

export default App