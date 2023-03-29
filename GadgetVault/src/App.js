import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainRoutes from './Components/MainRoutes';

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
