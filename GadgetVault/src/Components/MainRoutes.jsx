import React from 'react'
import { Routes,Route } from 'react-router-dom';
import HwHome from './../Pages/Health&Wellness/H&W_Home';
import HwPrdoucts from './../Pages/Health&Wellness/H&W_Prdoucts';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
           {/* <Route path='/' element={} /> */}
           <Route path='/hwhome' element={<HwHome/>}/>
           <Route path='/HwPrdoucts' element={<HwPrdoucts/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes