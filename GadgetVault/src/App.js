import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainRoutes from './Components/MainRoutes';
import Electronics from './Pages/Electronics';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MainRoutes/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
