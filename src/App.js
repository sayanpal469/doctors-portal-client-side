import logo from './logo.svg';
import './App.css';
import Nav from './Pages/Shared/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomeSection/Home/Home';
import About from './Pages/HomeSection/About/About';
import Appointment from './Pages/HomeSection/Appointment/Appointment';
import Reviews from './Pages/HomeSection/Review/Reviews';
import Contact from './Pages/HomeSection/Contact/Contact';
import Login from './Pages/HomeSection/Login/Login';


function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/appointment' element={ <Appointment/> }></Route>
        <Route path='/reviews' element={ <Reviews/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
