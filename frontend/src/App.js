
import './App.css';
import './pages/Landing'
import './css/landing.css'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About'
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
