import React from 'react'
import AdminDashboard from '../Pages/Admin/AdminDashboard';
import HwHome from './../Pages/Health&Wellness/H&W_Home';
import HwPrdoucts from './../Pages/Health&Wellness/H&W_Prdoucts';
import About from '../Pages/Admin/About';
import Add from '../Pages/Admin/Add';
import Analytics from '../Pages/Admin/Analytics';
import Sidebar from './AdminDashboardComponents/Sidebar';

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/hwhome' element={<HwHome />} />
        <Route path='/HwPrdoucts' element={<HwPrdoucts />} />
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