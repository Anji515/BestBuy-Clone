import React from 'react'
import { Routes,Route } from 'react-router-dom';
import EatWellProducts from '../Pages/EatWell/EatWellProducts';
import Electronics from '../Pages/Electronics';
import { HomePage } from '../Pages/Homepage/Homepage';
import HwHome from './../Pages/Health&Wellness/H&W_Home';
import HwPrdoucts from './../Pages/Health&Wellness/H&W_Prdoucts';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/hwhome' element={<HwHome/>}/>
           <Route path='/HwPrdoucts' element={<HwPrdoucts/>}/>
           <Route path='/electronics' element={<HwPrdoucts/>}/>
           <Route path='/EwPrdoucts' element={<HwPrdoucts/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes