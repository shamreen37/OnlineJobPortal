
import './App.css';
import './pages/Landing'
import './css/landing.css'
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About'
import Jobs from './pages/Jobs';
import Sample from './pages/Profile';
import {Routes, Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import CompanyDashboard from './pages/CompanyDashboard';

function App() {
  
  return (
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Sample/>}/>
      <Route path="/jobs" element={<Jobs/>}/>

{/* company routes */}
<Route path="/companyDashboard" element={<CompanyDashboard/>}/>

     </Routes>
   </BrowserRouter>
  );
}

export default App;
