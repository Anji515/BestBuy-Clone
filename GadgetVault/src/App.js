import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainRoutes from './Components/MainRoutes';

import Electronics from './Pages/Electronics';
import { NavBar } from './Components/NavBar/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <MainRoutes/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
