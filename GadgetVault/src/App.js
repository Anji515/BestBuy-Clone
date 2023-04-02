import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './Components/NavBar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { useContext, useState } from 'react';
// import { AdminSide } from './Context Api/AdminProvider';
// import { AdminRouting } from './Components/AdminRouting';
import Sidebar from './Components/AdminDashboard/Sidebar';
import MainRoutes from './Routing/MainRoutes';
import { AdminRouting } from './Routing/AdminRouting';
import { AdminSide } from './ContextAPi/AdminProvider';
import NavbarFinal from './Components/NavBar/NavbarFinal';

function App() {
  const { admin } = useContext(AdminSide)
  return (
    <BrowserRouter>
      {!admin ? <div className="App">
        {/* <NavBar /> */}
        <NavbarFinal/>
        <MainRoutes />
        <Footer />
      </div> : <div className="App">
        {/* <Sidebar /> */}
        <AdminRouting />
      </div>}
    </BrowserRouter>
  );
}

export default App;
