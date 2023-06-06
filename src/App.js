import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Navbar from './components/layout/Navbar';
import{BrowserRouter as Router,Routes ,Route} from"react-router-dom";
import About from './components/pages/About';
import Errorpage from './components/pages/Errorpage';
import EmpListing from './components/pages/Datadisplay'
import Empcreate from './components/pages/Empcreate';
import Empdetails from './components/pages/Empdetails';
import Empedit from './components/pages/Empedit';
import Login from './components/login/Login';



function App() {
  return (
    <>
   <Router>
   
   <div className='App'>
   {/* title string ma hse jo number apaso to error avase */}
       <Navbar title="~ CRUD SYSTEM :)" />

       <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>}/>            
            <Route path="/About" element={<About/>}/>           
            <Route path="*" element={<Errorpage/>}/>           
            <Route path="/EmpListing" element={<EmpListing/>}/>
            <Route path='EmpListing/employee/create' element={<Empcreate/>}/>
            <Route path='/employee/details/:empid' element={<Empdetails/>}/>
            <Route path='/employee/edit/:empid' element={<Empedit/>}/>
            <Route path='/login' element={<Login/>}/>
          
       </Routes>
    
   
       </div> 
   </Router>
   
    
    </>
  )
}

export default App;