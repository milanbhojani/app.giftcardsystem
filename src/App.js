import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar2 from './components/Layout/Navbar2';
import Home2 from './components/pages/Home/Home2';
import Contact2 from './components/pages/Contact/Contact2'
import Login2 from './components/pages/Login/Login2'
import Addcoupon from './components/pages/Coupon/Addcoupon'
import Singlecoupon from './components/pages/Coupon/Singlecoupon'
//import Giftcard from './components/pages/Giftcard';
import Errorpage from './components/pages/ErrorPage/Errorpage';
import Chat from './components/Chat/Chat'

import{BrowserRouter as Router,Routes ,Route} from"react-router-dom";

function App() {

const isloggedIn=window.localStorage.getItem("loggedIn")

  return (
    <>
<Router>
<div className='App'>
   
       <Navbar2/>

       <Routes>
          <Route path="/" element={isloggedIn ? <Home2/>:<Login2/>} ></Route>      
          {/* <Route path="/" element={<Home2/>} ></Route>       */}
          <Route path="/contact2" element={<Contact2/>} ></Route>
          <Route path="/login2" element={<Login2/>} ></Route>
          <Route path="/addcoupon" element={<Addcoupon/>} ></Route>
          <Route path="/singlecoupon" element={<Singlecoupon/>} ></Route>
          <Route path="/chat" element={<Chat/>} ></Route>

          <Route path="*" element={<Errorpage/>}></Route>
          
          
       </Routes>
    
   
       </div> 
</Router>


   {/* <Router>
   
   <div className='App'>
   #title string ma hse jo number apaso to error avase
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
   </Router> */}
   
    
    </>
  )
}

export default App;