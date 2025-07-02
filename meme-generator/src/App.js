import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
        <h1 className='text-center p-2'>Meme Generator</h1>
      
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes here as needed */}
            </Routes>
        
    </div>
  );
}

export default App;
