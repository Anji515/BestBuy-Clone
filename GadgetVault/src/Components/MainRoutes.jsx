import React from 'react'
import { Routes,Route } from 'react-router-dom';
import { About } from '../Pages/Admin/About';
import Add from '../Pages/Admin/Add';
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import Analytics from '../Pages/Admin/Analytics';
import Electronics from '../Pages/Electronics';
import { HomePage } from '../Pages/Homepage/Homepage';

import HwHome from './../Pages/Health&Wellness/H&W_Home';
import HwPrdoucts from './../Pages/Health&Wellness/H&W_Prdoucts';
import Sidebar from './AdminDashboard/Sidebar';


const MainRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/hwhome' element={<HwHome/>}/>
           <Route path='/HwPrdoucts' element={<HwPrdoucts/>}/>
           <Route path='/electronics' element={<Electronics/>}/>
         </Routes>
      <Sidebar>
        <Routes>
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Add />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>
      </Sidebar>
    </div>
  )
}

export default MainRoutes