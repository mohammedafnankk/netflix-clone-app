import React,{useEffect,useContext} from "react";
// import NavBarsign from "./Pages/Signup/Navbar/Navbarsign";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from "./Components/Home";
import Signupp from "./Pages/Signup/Signupp";
import Signuplogin from "./Pages/Login/Signuplogin"
// import { FirebaseContext } from "./Pages/Login/store/Context";
// import Headersign from "./Pages/Signup/Header/Headersign"
// import LogNavbar from "./Pages/Login/Navbar/LogNavbar";
// import Login from "./Pages/Login/Login/Login";

import Newlogin from "./Pages/NewLogin/Newlogin";
import "./App.css";
// import { AuthContext } from "./Pages/Login/store/Context";
function App() {
// const {user,setUser}=useContext(AuthContext)
// const {firebase }=useContext(FirebaseContext)
//   useEffect(()=>{
//     firebase.auth().onAuthStateChanged((user)=>{
//       setUser (user)
//     })
// console.log(user);

//   })
  return (
    <div className="App">

        {/* <Home/> */}

     
     


      <Router>
      <Routes>
      <Route path='/home' exact element={<Home/>} />
      <Route path='/'  element={<Signupp/>} />
      <Route path='/signlogin'  element={<Signuplogin/>} />
      <Route path='/newlogin'  element={<Newlogin/>} />
      </Routes>
     </Router>


     {/* <NavBarsign/>
     <Headersign/> */}

     {/* <LogNavbar/>
     <Login/> */}
    </div>
  );
}

export default App;
