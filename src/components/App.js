// import './App.css';
// import Login from './Login';
// import Signup from './Signup';
// import Cards from './Cards'
// import Home from './Home';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import {UserAuthContext} from '../context/UserAuthContext'

// function App() {
//   const [user,setUser]=useContext(UserAuthContext)
//   return (
//     <div className="App" id="container">
//         "hello"

//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             {/* <Route path="/register" element={ <Signup />} />
//             <Route path="/card" element={!user?<Navigate to="/"/>:<Cards />} />
//             <Route path="/success" element={!user?<Navigate to="/"/>:<Success />} />
//             <Route path="/welcome" element={!user?<Navigate to="/"/>:<Welcome />} />
//             <Route path="/bhostel" element={!user?<Navigate to="/"/>:<Bhostel />} />
//             <Route path="/ghostel" element={!user?<Navigate to="/"/>:<Ghostel />} />
//             <Route path="/room" element={<Room />} /> */}
//           </Routes>
//         </Router>

//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import "./App.css";
import Login from "./Login";
import Signup from "./Signup";
import Cards from "./Cards";
import Success from "./Success";
import Welcome from "./Welcome";
import Ghostel from "./Ghostel";

import Room from "./Room";
// import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/card" element={<Cards />} />
        <Route path="/success" element={<Success />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/ghostel" element={<Ghostel />} />

        <Route path="/room" element={<Room />} />
        {/* <Route path="/" element={<Login />} />

         <Route path="/register" element={ <Signup />} />
          <Route path="/card" element={<Cards />} />  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
