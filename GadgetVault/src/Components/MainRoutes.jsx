import React from 'react'
import { Routes,Route } from 'react-router-dom';
import HW_Home from './H&W Products Components/H&W_Home';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
           {/* <Route path='/' element={} /> */}
           {<Route path='/hw_home' element={<HW_Home/>} />}
        </Routes>
    </div>
  )
}

export default MainRoutes