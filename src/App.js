import './App.css';
import Projectpage from "./pages/Projectpage";
import Home from './pages/Home';

import { Toaster } from 'react-hot-toast';
import {  Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import Signinpage from './pages/Signinpage';
import ProjectDetails from './pages/ProjectDetails';
import Profile from './pages/Profile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SignupPage />} />
        <Route path='/login' element={<Signinpage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/projectpage' element={<Projectpage />} />
        <Route path='/projectpage' element={<Projectpage />} />
        <Route path='/projectdetails/:projectStatement' element={<ProjectDetails />} />
        <Route path='/Profile' element={<Profile />} />
        

        
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
