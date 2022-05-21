import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Pages/Shared/Nav/Nav.jsx'
import Home from './Pages/HomeSection/Home/Home';
import About from './Pages/HomeSection/About/About';
import Appointment from './Pages/HomeSection/Appointment/Appointment';
import Reviews from './Pages/HomeSection/Review/Reviews';
import Contact from './Pages/HomeSection/Contact/Contact';
import Login from './Pages/HomeSection/Login/Login';
import SignUp from './Pages/HomeSection/Login/SignUp';
import RequireAuth from './Pages/HomeSection/Login/RequireAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyApointment from './Pages/MyAppiontment/MyApointment';
import MyReview from './Pages/MyReview/MyReview';
import MyHistory from './Pages/MyHistory/MyHistory.jsx';
import Users from './Pages/Users/Users';
import RequireAdmin from './RequireAdmin/RequireAdmin';
import AddDoctor from './Pages/AddDoctor/AddDoctor';
import ManageDoctors from './Pages/ManageDoctors/ManageDoctors';




function App() {
  return (
    <div className="">
      <Nav/>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/home' element={ <Home/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/appointment' element={ <RequireAuth>
          <Appointment/>
        </RequireAuth> }></Route>

        <Route path='/dashboard' element={ <RequireAuth><DashBoard/></RequireAuth> }>
            <Route index element={ <MyApointment/> } />
            <Route path='myReview' element={ <MyReview/> } />
            <Route path='myHistory' element={ <MyHistory/> } />

            <Route path='allUsers' element={ <RequireAdmin>
              <Users/>
            </RequireAdmin> } />

            <Route path='addDoctor' element={ <RequireAdmin>
              <AddDoctor/>
            </RequireAdmin> } />

            <Route path='manageDoctors' element={ <RequireAdmin>
              <ManageDoctors/>
            </RequireAdmin> } />
          </Route>
        
        <Route path='/reviews' element={ <Reviews/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/signup' element={ <SignUp/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
